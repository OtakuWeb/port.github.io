import HeaderImage from "../../assets/header-img.jpg"
import "./header.css"
import data from "./data"


const header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className="header__profile">
         <img src={HeaderImage} alt="header-img"/>
        </div>
       <h3>Andrew <span className="green">Williams</span></h3>
       <p>Goodday my name is Andrew Williams and im a <span className="green">Front-End Developer</span> who would love to work with you</p>
       <div className="header__cta">
        <a href="#contact" className="btn primary"> Lets Talk</a>
        <a href="#portfolio" className="btn light"> My Work</a>
       </div>
       <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
       </div>
      </div>
    </header>
  )
}

export default header