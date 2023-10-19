
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"



const contact = () => {


  return (

    <section id="contact">
        <h5>Get in touch</h5>
        <h2>Contact me</h2>

        <div className="container contact__container">
           <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>aw365598@gmail.com</h5>
              <a href="mailto:aw365598@gmail.com">Send A message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon"/>
              <h4>Messanger</h4>
              <h5>aw365598@gmail.com</h5>
              <a href="mailto:aw365598@gmail.com">Send A message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon"/>    
              <h4>WhatsApp</h4>
              <h5>+2348136880649</h5>
              <a href="https://api.whatsapp.com/send?phone=+2348136880649">Send A message</a>
            </article>
           </div>
           <form>
            <input type="text" name="name" placeholder="Your full name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
           </form>
        </div>
    </section>
  )
}

export default contact