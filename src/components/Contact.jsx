import React from 'react'

function Contact() {
  return (
    <>
     <section className="contact" id="kontakt">
        <div className="container contact__container">
            <h2 className="contact__title">
                Qabulga ro'hatdan o'tish
            </h2>
            <div className="contact__buttons">
                <a href="tel:+998901234576" className="btn contact__btn">Qongiroq qilish</a>
                <a target="_blank" href="https://t.me/hijomagiyohtoshkent" className="btn contact__btn">Teegramdan yozish</a>
            </div>
        </div>
     </section>
    </>
  )
}

export default Contact