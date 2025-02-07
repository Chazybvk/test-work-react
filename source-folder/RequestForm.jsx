import React, { useState, useEffect } from 'react'
import './RequestForm.css'

const RequestForm = ({ onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState([])
  const [emailError, setEmailError] = useState('')
  const [fileError, setFileError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Валидация email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // Обработчик изменения email
  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (!validateEmail(value)) {
      setEmailError('Некорректный email')
    } else {
      setEmailError('')
    }
  }

  // Обработчик загрузки файлов
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    if (selectedFiles.length > 3) {
      setFileError('Максимум 3 файла')
      return
    }

    const validFiles = selectedFiles.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        setFileError('Слишком большой объем файла (>5MB)')
        return false
      }
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setFileError('Неправильный формат файла')
        return false
      }
      return true
    })

    if (validFiles.length > 0) {
      setFiles(validFiles)
      setFileError('')
    }
  }

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email) && files.length <= 3) {
      console.log('Форма отправлена:', {
        name,
        email,
        phone,
        description,
        files,
      })
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
      }, 2000)
    } else {
      console.log('Ошибка валидации')
    }
  }

  // Закрытие формы при клике на затемненную область
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="request-form-overlay" onClick={handleOverlayClick}>
      <div className="request-form">
        {/* Крестик для закрытия формы (вне формы) */}
        <button className="close-button" onClick={onClose}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L11 11M11 1L1 11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {/* Сообщение об успешной отправке */}
        {isSubmitted ? (
          <div className="success-message">
            <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Параграф текста */}
            <p className="form-text">
              Успех начинается с правильных решений. Оставьте здесь свои
              контакты, и мы свяжемся с вами, чтобы предложить оптимальную
              технологию по увеличению процента извлекаемости полезного в
              конечный продукт на вашем предприятии.
            </p>

            {/* Input "Имя*" */}
            <input
              type="text"
              placeholder="Имя*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* Input "E-Mail*" */}
            <input
              type="email"
              placeholder="E-Mail*"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <span className="error-message">{emailError}</span>}

            {/* Input "Телефон*" */}
            <input
              type="tel"
              placeholder="Телефон*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            {/* Input "Описание проекта*" */}
            <textarea
              placeholder="Описание проекта*"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ height: '39px', minHeight: '39px' }}
            />

            {/* Input "Приложить файлы" */}
            <div className="file-input-container">
              <input
                type="file"
                id="file-input"
                onChange={handleFileChange}
                multiple
                accept=".jpg, .png"
                style={{ display: 'none' }}
              />
              <label htmlFor="file-input" className="file-input-label">
                {files.length > 0
                  ? `Загружено ${files.length} файл(ов)`
                  : 'Приложить файлы (До Трех Файлов)'}
                <span className="paperclip-icon">📎</span>
              </label>
              {fileError && <span className="error-message">{fileError}</span>}
            </div>

            {/* Текст политики конфиденциальности */}
            <p className="privacy-policy">
              Отправляя эту форму, я принимаю{' '}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                политику конфиденциальности
              </a>{' '}
              этого сайта.
            </p>

            {/* Кнопка "Отправить" */}
            <button
              type="submit"
              className="submit-button"
              disabled={!validateEmail(email) || files.length > 3}
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default RequestForm
