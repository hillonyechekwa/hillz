
import LightOn from "/light-on.mp3";
import LightOff from "/light-off.mp3";
import moon from "./moon.svg"
import sun from "./sun.svg"
import "./nav.css"
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@util/useMediaQuery";
import {gsap} from 'gsap';
import { useGSAP } from "@gsap/react"


export default function Nav() {
    const [toggled, setToggled] = useState(false);
    const [theme, setTheme] = useState(null);
    const matches = useMediaQuery("(min-width: 600px)");

    const hamburger = useRef();
    const topBar = useRef();
    const bottomBar = useRef();

    const switchOn = useRef();
    const switchOff = useRef();

    const { contextSafe } = useGSAP({ dependencies: [toggled] });


    const handleHamburger = contextSafe(() => {
        setToggled((prevToggle) => !prevToggle);

        const tl = gsap.timeline();

        toggled
            ?
            tl.to(topBar.current, {
                y: 0,
                rotation: 0,
                // ease: "power2.inOut"
            }).to(bottomBar.current, {
                y: 5,
                rotation: 0,
                // ease: "power2.inOut"
            })
            :
            tl.to(topBar.current, {
                y: 5,
                rotation: 45,
                transformOrigin: "center",
                // ease: "power2.inOut"
            }).to(bottomBar.current, {
                y: -5,
                rotation: -45,
                transformOrigin: "center",
                // ease: "power2.inOut"
            })

    })


    const navVariants = {
        hidden: {
            x: 1000,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                x: { ease: "easeIn" },
                opacity: { ease: "easeIn" },
                ease: "easeInOut",
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    }
    const navChildVariants = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    }


    useEffect(() => {

        const themeBtn = document.querySelector(".theme-switch")
            
        const getCurrentTheme = () => {
            let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark": "light";
            localStorage.getItem("hills.theme") ? theme = localStorage.getItem("hills.theme") : null;
            return theme;
        }


        const handleThemeClick = () => {
            let theme = getCurrentTheme();
            let audio;

            if(theme === "dark"){
                audio = document.querySelector(".switch-on");
                theme = "light";
            }else {
                audio = document.querySelector(".switch-off");
                theme = "dark";
            }

            audio.currentTime = 0;
            audio.play();
            localStorage.setItem("hills.theme", `${theme}`);
            loadTheme(theme);
        }


        const loadTheme = (theme) => {
            const root = document.querySelector(":root");

            
            if(theme === "dark"){
                setTheme("light")
            }else{
                setTheme("dark")
            }

            root.setAttribute('color-scheme', `${theme}`);
        }


        window.addEventListener("DOMContentLoaded", () => {
            loadTheme(getCurrentTheme());
        })

        themeBtn.addEventListener("click", handleThemeClick)

        return () => {
            themeBtn.removeEventListener("click", handleThemeClick)
        }
}, [theme])



    return (
        <nav className="navigation">
            <a href="/" id="logo-wrapper">
                <img className="logo" src="/illustrations/satedmaskedhill.svg" alt="hilllogo" />
            </a>
            {matches && (

                <ul className="nav-container-flex">
                    <li>
                        <a href="/">home</a>

                    </li>
                    <li>
                        <a href="/about">about</a>

                    </li>
                    <li>
                        <a href="/projects">projects</a>

                    </li>
                    <li>
                        <a href="/blog">blog</a>

                    </li>
                    <li>
                        <a href="/skills">skills</a>

                    </li>
                    <li>
                        <a href="/contact">contact</a>

                    </li>
                </ul>
            )}



            <button role="switch" aria-label="light/dark mode" className="theme-switch">
                {
                    theme === "dark"
                    ?
                    <img src={moon.src} alt="moon icon" />
                    :
                    <img src={sun.src} alt="sun icon" />
                }
            </button>
            <audio className="switch-on">
                <source ref={switchOn} src={LightOn} />
            </audio>
            <audio className="switch-off">
                <source ref={switchOff} src={LightOff} />
            </audio>

            {!matches && (
                <button
                    onClick={() => handleHamburger()}
                    className="hamburger menu-toggle"
                    ref={hamburger}
                >
                    <div className="top-bar bars" ref={topBar}></div>
                    <div className="bottom-bar bars" ref={bottomBar}></div>
                </button>
            )}

            {/* {toggled && !matches && (
                <motion.ul
                    className="nav-mobile-container-flex mobile-nav"
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.li variants={navChildVariants} className="mobile-nav-item">
                        <a href="/">home</a>
                    </motion.li>
                    <motion.li variants={navChildVariants} className="mobile-nav-item">
                        <a href="/about">about</a>
                    </motion.li>
                    <motion.li variants={navChildVariants} className="mobile-nav-item">
                        <a href="/projects">projects</a>
                    </motion.li>
                    <motion.li variants={navChildVariants} className="mobile-nav-item">
                        <a href="/blog">blog</a>
                    </motion.li>
                    <motion.li variants={navChildVariants} className="mobile-nav-item">
                        <a href="/skills">skills</a>
                    </motion.li>
                    <motion.li variants={navChildVariants} className="mobile-nav-item">
                        <a href="/contact">contact</a>
                    </motion.li>
                </motion.ul>
            )} */}

        </nav>

    )
}