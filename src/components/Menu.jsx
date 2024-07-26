import moon from "./moon.svg";
import sun from "./sun.svg";
import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import useMediaQuery from '@/util/useMediaQuery';


const Menu = ({menuRef, themeToggle}) => {
    const {contextSafe} = useGSAP({})

    const matches = useMediaQuery("(min-width: 600px)")


  return (
      <aside className="invisible opacity-0 w-full fixed top-0 p-3 left-0 z-10 h-full bg-blue dark:bg-gray-700 flex justify-center items-center" ref={menuRef}>
          <ul className="flex flex-col gap-y-10 w-full justify-around items-center font-gopher text-gray-300">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li>
                  <button className="w-12 p-3" onClick={themeToggle} role="switch" aria-label="light/dark mode">
                      {
                          theme === "light"
                              ?
                              <img className="" src={moon.src} alt="moon icon" />
                              :
                              <img src={sun.src} alt="sun icon" />

                      }
                  </button>
              </li>
          </ul>
      </aside>
  )
}

export default Menu