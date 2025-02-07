import React from 'react'
import './Realization.css'

const Realization = ({ onOpenForm }) => {
  return (
    <div className="wrapper-realization">
      <div className="main-realization-banner">
        <div className="realization-inner-content">
          <h2>
            Мы реализуем под ключ<br></br> проекты любой сложности
          </h2>

          <button onClick={onOpenForm}>Оставить заявку</button>
        </div>
      </div>
    </div>
  )
}

export default Realization
