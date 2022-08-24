import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='back'>
        <div className='cursor'></div>
        <span className='txt-ab'>DISCLAIMER-RYTP</span>
        <div className='dv-txt'>
            <p className='an-txt'>Hello, my name is DISCLAIMER-RYTP, but you can call me DISCLAIMER. I created this site for bust my existing and learn new skills. 
                On this site you can meet image with copyright, but Im not going to using this site in massive target. If you find elements what violate copyright, 
                send for me claim to this E-main: andriy2003mat@gmail.com or mutant.andoid@gmail.com. Or fax: 19986... its a joke) i havent fax, Im a not the old fart. 
                Good luck with your project
            </p>
        </div>
    </div>
  )
}

document.addEventListener('readystatechange', event => { 

if (event.target.readyState === "complete") {
  const cursor = document.querySelector('.cursor');

  setTimeout(document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 200)+"px; left: "+(e.pageX - 200)+"px;")
}), 100);
}

});