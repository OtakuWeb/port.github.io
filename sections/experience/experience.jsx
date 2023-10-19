import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"


const experince = () => {
  return (
    <section id="experience"> 
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>javaScript</h4>
                <small className="text-light">Intermediate</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>SASS</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Other Skills</h3>
          <div className="experience__content">
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Wix</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>WordPress</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Video Editing</h4>
                <small className="text-light">Intermediate</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Content Creation</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>PowerPoint</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Graphic Design</h4>
                <small className="text-light">Experienced</small>
                </div>
             </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experince
