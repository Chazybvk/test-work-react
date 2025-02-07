import React, { useState, useEffect } from 'react'
import './Banner.css'

const Banner = ({ mediaSrc, isVideo, altText, onOpenForm }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [videoSource, setVideoSource] = useState(mediaSrc)
  const [paragraphText, setParagraphText] = useState(
    'Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса'
  ) // Заглушка для текста

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    // Меняем источник видео на другой, если ширина экрана меньше 530px
    if (screenWidth <= 530 && isVideo) {
      setVideoSource('./stock-video-new.mp4') // Тут заглушка, позже замените на актуальный источник
    } else if (screenWidth > 530 && isVideo) {
      setVideoSource(mediaSrc)
    }

    // Меняем текст параграфа в зависимости от ширины экрана
    if (screenWidth <= 530) {
      setParagraphText(
        'Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса'
      ) // Заглушка для текста на экране шириной 530px
    } else if (screenWidth <= 1024) {
      setParagraphText(
        'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. '
      ) // Заглушка для текста на экране шириной 1024px
    } else {
      setParagraphText(
        'Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых точках процесса'
      ) // Оригинальный текст
    }
  }, [screenWidth, isVideo, mediaSrc])

  return (
    <div className="wrapper-for-banner">
      <div className="video-banner">
        {/* Видео или изображение */}
        {isVideo ? (
          <video className="video" autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        ) : (
          <>
            <img className="video" src={mediaSrc} alt={altText} />
            <div className="image-caption">
              <h3>SN</h3>
              <p>{paragraphText}</p>
            </div>
          </>
        )}

        {/* Блок с кнопкой "Связаться с нами" */}
        <div className="contact-block">
          <div className="red-strip">
            <button className="contact-button" onClick={onOpenForm}>
              Связаться с нами{' '}
              <img
                className="contact-button-vector"
                src="./Vector.svg"
                alt=""
              />
            </button>
          </div>
          <div className="white-strip"></div>
        </div>
      </div>
    </div>
  )
}

export default Banner
