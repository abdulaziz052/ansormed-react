import React from 'react'
import imgOne from '../img/image 1.png'
import imgTwo from '../img/image 2.png'
import imgThree from '../img/image 3.png'
import imgFour from '../img/image 4.png'

function Services() {
  return (
    <>
      <section className="services" id="xizmatlar">
        <h2 className="services__title">
            Xizmatlar
        </h2>
        <div className="container services__container">
            <div className="services__card" id="dorilar">
                <img src={imgOne} alt="banner"/>
                <div className="services__card-info">
                    <h3 className="services__card__title">Hijoma</h3>
                    <p className="services__card__text">Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).</p>
                </div>
            </div>
            <div className="services__card">
                <img src={imgTwo} alt="banner"/>
                <div className="services__card-info">
                    <h3 className="services__card__title">Manual terapiya</h3>
                    <p className="services__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit.</p>
                </div>
            </div>
            <div className="services__card">
                <img src={imgThree} alt="banner"/>
                <div className="services__card-info">
                    <h3 className="services__card__title">Zuluk bilan davolash</h3>
                    <p className="services__card__text">Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία — «davolash») — ma’lum kasalliklarni dorivor zuluklar (Hirudo medicinalis) yordamida davolash usuli. Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar ushbu kichik sinf chuvchalchanglariga oid yagona tur hisoblanadi, qolganlari shifobaxsh ta’sir ko’rsatmaydi.</p>
                </div>
            </div>
            <div className="services__card" id="asal">
                <img src={imgFour} alt="banner"/>    
                <div className="services__card-info">
                    <h3 className="services__card__title">Tabiiy dori vositalari</h3>
                    <p className="services__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit.</p>
                </div>
            </div>

             <div className="services__btn">
                <button className="btn">Qabulga yozilish</button>
             </div>   

        </div>
     </section>
    </>
  )
}

export default Services