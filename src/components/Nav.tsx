import LightOn from "/light-on.mp3"
import LightOff from "/light-off.mp3"
import Style from './nav.module.css';
import {useState, useRef} from "react";
import useMediaQuery from "@util/useMediaQuery";
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"


export default function Nav() {
    const [toggled, setToggled] = useState(false)
    const matches = useMediaQuery("(min-width: 600px)")

    const hamburger = useRef()
    const navContainer = useRef()


    useGSAP(() => {
        
    }, [])

    return (
        <nav className={Style.navigation}>
            <div id={Style.logoWrapper}>
                <img className={Style.logo} src="/illustrations/satedmaskedhill.svg" alt="hilllogo" />
            </div>
            {matches && (

                <ul className={Style.navContainerFlex}>
                <li>
                    <a href="/">home</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li>
                    <a href="/about">about</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li>
                    <a href="/projects">projects</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li>
                    <a href="/blog">blog</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li>
                    <a href="/teaching">teaching</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li>
                    <a href="/contact">contact</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
            </ul>
            )}
    
            

            <button role="switch" aria-label="light/dark mode" className={Style.themeSwitch}>
            </button>
            <audio className={Style.switchOn}>
                <source src={LightOn} />
            </audio>
            <audio className={Style.switchOff}>
                <source src={LightOff} />
            </audio>

        {!matches && (
            <button 
             onClick={() => setToggled((prevToggle) => !prevToggle)} 
             className={Style.hamburger}
             ref={hamburger}
            >
                <div className={Style.topBar}></div>
                <div className={Style.bottomBar}></div>
            </button>
        )}
    
        {toggled && !matches && (
             <ul className={Style.navMobileContainerFlex} ref={navContainer}>
                <li className="Style.mobileNavItem">
                    <a href="/">home</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li className="Style.mobileNavItem">
                    <a href="/about">about</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li className="Style.mobileNavItem">
                    <a href="/projects">projects</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li className="Style.mobileNavItem">
                    <a href="/blog">blog</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li className="Style.mobileNavItem">
                    <a href="/teaching">teaching</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
                <li className="Style.mobileNavItem">
                    <a href="/contact">contact</a>
                    {/* <span className={Style.navDivider}></span> */}
                </li>
         </ul>
     )}
            
        </nav>

    )
}