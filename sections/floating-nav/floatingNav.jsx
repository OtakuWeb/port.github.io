import React from 'react'
import "./floatingNav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"

const floatingNav = () => {
  return (
    <section id="floating-nav">
        <a href='#home' className='active'><AiOutlineHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#experience"><BiBook/></a>
        <a href="#services"><RiServiceLine/></a>
        <a href="#contact"><BiMessageSquareDetail/></a>
    </section>
  )
}

export default floatingNav