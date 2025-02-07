import React from 'react'
import './LoremIpsumSection.css'

const LoremIpsumSection = ({ onOpenForm }) => {
  return (
    <div className="lorem-section-main">
      <div className="heading-section">
        <h1>
          <span>LOREM IPSUM,</span>
          <br></br> <span>LOREM IPSUM LOREM IPSUM</span>
        </h1>
      </div>
      <div className="main-text-section">
        <p>
          Lorem Ipsum компании разработано с учётом анализа передовых
          технологий, использованием лучших решений и их качественной
          модернизации под потребности конкретного заказчика. Успешная
          реализация проектов на ведущих предприятиях горно-обогатительной
          промышленности базируется на многолетнем опыте и высоких компетенциях
          наших сотрудников.
        </p>
      </div>

      <div className="full-screen-section">
        <div className="bigger-sub-section sub-section">
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
        <div className="smaller-sub-section sub-section special">
          <div className="sub-section-inner-text">
            <h2>Lorem Ipsum</h2>
            <p>
              Есть много вариантов Lorem Ipsum, но большинство из них имеет не
              всегда приемлемые модификации, например, юмористические вставки
              или слова, которые даже отдалённо не напоминают латынь. Если вам
              нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
              какой-нибудь шутки, скрытой в середине абзаца. Также все другие
              известные генераторы Lorem Ipsum используют один и тот же текст,
              который они просто повторяют, пока не достигнут нужный объём. Это
              делает предлагаемый здесь генератор единственным настоящим Lorem
              Ipsum генератором. Он использует словарь из более чем 200
              латинских слов, а также набор моделей предложений. В результате
              сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет
              повторяющихся абзацей или "невозможных" слов.
            </p>
          </div>
        </div>
      </div>
      <div className="full-screen-section">
        <div className="smaller-sub-section sub-section">
          <div className="sub-section-inner-text">
            <h2>Lorem Ipsum</h2>
            <p>
              Есть много вариантов Lorem Ipsum, но большинство из них имеет не
              всегда приемлемые модификации, например, юмористические вставки
              или слова, которые даже отдалённо не напоминают латынь. Если вам
              нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
              какой-нибудь шутки, скрытой в середине абзаца. Также все другие
              известные генераторы Lorem Ipsum используют один и тот же текст,
              который они просто повторяют, пока не достигнут нужный объём. Это
              делает предлагаемый здесь генератор единственным настоящим Lorem
              Ipsum генератором. Он использует словарь из более чем 200
              латинских слов, а также набор моделей предложений. В результате
              сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет
              повторяющихся абзацей или "невозможных" слов.
            </p>
          </div>
        </div>
        <div className="bigger-sub-section sub-section">
          {' '}
          <div className="contact-block contact-block-special">
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
    </div>
  )
}

export default LoremIpsumSection
