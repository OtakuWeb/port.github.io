import React from 'react'
import "./portfolio.css";
import IMG1 from "../../assets/admin-portfolio.JPG"
import IMG2 from "../../assets/education-portfolio.JPG"
import IMG3 from "../../assets/food-portfolio.JPG"
import IMG4 from "../../assets/hospital-portfolio.JPG"
import IMG5 from "../../assets/ecom-portfolio.JPG"
const portfolio = () => {
  return (
    <section id="portfolio">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>

          <div className='container portfolio__container'>
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG1} alt="" />
              </div>
              <h3>Administrative DashBoard</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/OtakuWeb/Admin.github.io" className='btn'>Github</a>
              <a href="https://admin-github-io.pages.dev" className='btn primary' target="blank">Demo</a>
              </div>
            </article>
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG2} alt="" />
              </div>
              <h3>Education Site For Schools</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/OtakuWeb/otakuweb-hospital.github.io" className='btn'>Github</a>
              <a href="https://otakuweb-education-github-io.pages.dev" className='btn primary' target="blank">Demo</a>
              </div>
            </article>
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG3} alt="" />
              </div>
              <h3>Restaurant Site</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://otakuweb-resturant.pages.dev" className='btn primary' target="blank">Demo</a>
              </div>
            </article>
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG4} alt="" />
              </div>
              <h3>Hospital Site</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/OtakuWeb/medical.github.io" className='btn'>Github</a>
              <a href="https://medical-github-io.pages.dev" className='btn primary' target="blank">Demo</a>
              </div>
            </article>
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG5} alt="" />
              </div>
              <h3>Ecommerce Website</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/OtakuWeb/E-com.github.io" className='btn'>Github</a>
              <a href="https://e-com-github-io.pages.dev" className='btn primary' target="blank">Demo</a>
              </div>
            </article>
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG1} alt="" />
              </div>
              <h3>Art Gallery Site</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn primary' target="blank">Demo</a>
              </div>
            </article>
          </div>
    </section>
  )
}

export default portfolio