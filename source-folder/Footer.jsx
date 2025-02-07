import React from 'react'
import './Footer.css'

const Footer = ({ onOpenForm }) => {
  return (
    <footer className="footer">
      {/* Левый блок */}
      <div className="left-block">
        {/* Колонка "Товары" */}
        <div className="column">
          <h3>Товары</h3>
          <div className="section">
            <h4>Флотомашины и чаны</h4>
            <ul>
              <li>МП</li>
              <li>ЧП</li>
              <li>ЧКЭ</li>
              <li>Нестандартное Lorem Ipsum</li>
            </ul>
          </div>
          <div className="section">
            <h4>Автоматизация</h4>
            <div className="subsection">
              <h5>Локальные АСУ</h5>
              <ul>
                <li>РУВ</li>
                <li>SD</li>
                <li>SC</li>
                <li>SK</li>
                <li>SP</li>
              </ul>
            </div>
            <div className="subsection">
              <h5>АСУТП</h5>
            </div>
            <div className="subsection">
              <h5>Интеллектуальные системы</h5>
              <ul>
                <li>SN</li>
                <li>SV</li>
                <li>SP</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Колонка "Услуги" */}
        <div className="column">
          <h3>Услуги</h3>
          <div className="section">
            <ul>
              <li>Технологические исследования и аудит</li>
              <li>Проектирование</li>
              <li>Строительно-монтажные работы</li>
            </ul>
          </div>
          <div className="section">
            <h4>Сервисное сопровождение</h4>
            <ul>
              <li>Сервис</li>
              <li>Технологическая поддержка</li>
            </ul>
          </div>
        </div>

        {/* Колонка "Компания" */}
        <div className="column">
          <h3>Компания</h3>
          <div className="section">
            <ul className="section-special">
              <li>Новости и события</li>
              <li>Проекты</li>
              <li>Карьера</li>
              <li>Отзывы заказчиков</li>
              <li>Документы</li>
            </ul>
          </div>
          <div className="section">
            <h4>Контакты</h4>
          </div>
        </div>
      </div>

      {/* Правый блок */}
      <div className="right-block">
        {/* Карта */}
        <div className="map">
          <iframe
            title="Yandex Map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="contact-info">
          {/* Телефон */}
          <div className="phone">+7 (---) 5-5-05-11</div>

          {/* Email */}
          <div className="email">info@info.ru</div>
        </div>
        {/* Кнопка "Оставить заявку" */}
        <button className="request-button" onClick={onOpenForm}>
          Оставить заявку
        </button>
      </div>
    </footer>
  )
}

export default Footer
