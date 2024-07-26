import moon from "./moon.svg";
import sun from "./sun.svg";
import LigthOn from "/light-on.mp3"
import LigthOff from "/light-off.mp3"
import { useState, useRef, useEffect } from 'react';
import useMediaQuery from "@util/useMediaQuery";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import Menu from "./Menu"



const Nav = () => {
    const [toggled, setToggled] = useState(false);
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false)
    const matches = useMediaQuery("(min-width: 600px)")

    const switchOn = useRef();
    const switchOff = useRef();
    const menu = useRef()
    const topBar = useRef();
    const bottomBar = useRef();
    const { contextSafe } = useGSAP({dependencies: [toggled]})

    const handleMenuToggle = contextSafe(() => {
        const tl = gsap.timeline();

        !matches && toggled
            ?
            tl.to(topBar.current, {
                y: 5,
                rotation: 45,
                transformOrigin: "center",
                ease: "none",
                duration: .1
            })
            :
            tl.to(topBar.current, {
                y: 0,
                rotation: 0,
                duration: .1
            })
           
        
        !matches && toggled
            ?     
            tl.to(bottomBar.current, {
                y: -10,
                rotation: -45,
                transformOrigin: "center",
                ease: "none",
                duration: .1
            })
            :
            tl.to(bottomBar.current, {
                y: 0,
                rotation: 0,
                duration: .1
            })
            
        !matches && toggled
            ?
            tl.to(menu.current, {
                opacity: 1,
                visibility: 'visible',
                onStart: () => {
                    gsap.set(menu.current, {opacity: 0})
                }
            })
            :
            tl.to(menu.current, {
                opacity: 0,
                onComplete: () => {
                    gsap.set(menu.current, {visibility: 'hidden'})
                }
            })
        
        setToggled(!toggled);
    })

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme') || 'light'
        setTheme(storedTheme)
    }, [])

    useEffect(() => {
        if (mounted) {
            // let audio;

            if (theme === 'dark') {
                document.documentElement.classList.add('dark')
                // audio = document.querySelector(".switch-off")
            } else {
                document.documentElement.classList.remove('dark')
                // audio = document.querySelector("switch-on")
            }
            localStorage.setItem('theme', theme)
            // audio.currentTime = 0;
            // audio.play();
        }
    }, [theme, mounted])


    const handleThemeToggle = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    if (!mounted) return null;
    return (
        <nav className="bg-blue/50 dark:bg-gray-900 w-full p-4 flex flex-row justify-between items-center">
            <section className="w-full p-4 flex flex-row justify-between items-center relative">
            <a href="/" className="w-16 p-2 z-20">
                <img src="/illustrations/satedmaskedhill.svg" alt="hill-logo" />
            </a>
            {
                matches && (
                    <ul className="flex flex-row w-3/4 justify-between items-center font-gopher text-gray-800 dark:text-gray-300">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li>
                            <button className="w-12 p-3" onClick={handleThemeToggle} role="switch" aria-label="light/dark mode">
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
                )
            }
            {
                !matches &&  (
                    <button
                        role=""
                        onClick={() => handleMenuToggle()}
                        className="w-20 h-auto p-3 flex flex-col gap-y-2 z-20"
                    >
                        <div ref={topBar} className="w-full h-2 bg-gray-700 dark:bg-gray-300 border border-gray-700 dark:border-gray-300"></div>
                        <div ref={bottomBar} className="w-full h-2 bg-gray-700 dark:bg-gray-300 border border-gray-700 dark:border-gray-300"></div>
                    </button>
                )
            }

            </section>

            <Menu
                menuRef={menu}
                toggled={toggled}
                themeToggle={handleThemeToggle}
            />
        </nav>
    )
}


export default Nav;