import React, { useState } from 'react'
import './Header.css'

const Header = ({ onOpenForm }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="wrapper-of-header">
        <div className="header-left-side-content">
          <div className="logo-section"></div>
          <nav
            className={`navigation ${
              isMobileMenuOpen ? 'mobile-menu-open' : ''
            }`}
          >
            {/* Элемент "Товары" с dropdown-меню */}
            <a
              href="#"
              className="nav-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Товары
            </a>
            {/* Dropdown-меню */}
            {isDropdownOpen && (
              <div
                className="dropdown-menu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ul>
                  <li>
                    <a href="#">Флотомашины и чаны</a>
                  </li>
                  <li>
                    <a href="#">Автоматизация</a>
                  </li>
                  <li>
                    <a href="#">SN</a>
                  </li>
                </ul>
              </div>
            )}

            <a href="#" className="nav-item">
              Услуги
            </a>
            <a href="#" className="nav-item">
              Компания
            </a>
          </nav>
        </div>
        <div className="header-right-side-content">
          {/* Кнопка "Оставить заявку" */}
          <button className="request-button-header" onClick={onOpenForm}>
            Оставить заявку
          </button>

          {/* "Контакты" */}
          <a href="#" className="contacts-link">
            Контакты
          </a>

          {/* Поиск */}
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Выбор языка */}
          <select className="language-select" defaultValue="EN">
            <option value="EN">EN</option>
            <option value="RU">RU</option>
          </select>

          {/* Иконка бургер-меню */}
          <div className="burger-menu" onClick={toggleMobileMenu}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
