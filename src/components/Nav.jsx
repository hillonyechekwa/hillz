import moon from "./moon.svg";
import sun from "./sun.svg";
import LigthOn from "/light-on.mp3"
import LigthOff from "/light-off.mp3"
import { useState, useRef, useEffect } from 'react';
import useMediaQuery from "@util/useMediaQuery";




const Nav = () => {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false)
    const matches = useMediaQuery("(min-width: 600px)")

    const switchOn = useRef();
    const switchOff = useRef();

   
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


     const handleToggle = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark':'light')
    }

    if (!mounted) return null;
    return (
        <nav className="bg-blue/50 dark:bg-gray-900 w-full p-4 flex flex-row justify-between items-center">
            <a href="/" className="w-16 p-2">
                <img src="/illustrations/satedmaskedhill.svg" alt="hill-logo" />
            </a>

            <ul className="flex flex-row w-3/4 justify-between items-center font-gopher text-gray-800 dark:text-gray-300">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                    <button className="w-12 p-3" onClick={handleToggle} role="switch" aria-label="light/dark mode">
                        {
                            theme === "light"
                                ?
                                <img src={sun.src} alt="sun icon" />
                                :
                                <img className="" src={moon.src} alt="moon icon" />

                        }
                    </button>
                </li>
            </ul>
        </nav>
    )
}


export default Nav;