
import Button from "./Button";

export default function footer() {

    return (

        <footer className=" p-5 bg-gray-700 dark:bg-stone-950 text-gray-300 dark:text-gray-300 w-full h-auto flex flex-col justify-between items-center gap-y-8">
            <h3 className="font-gopher text-lg flex flex-col md:flex-row md:gap-x-3 lg:gap-x-4 lg:flex-row justify-evenly items-center">
                Let's build something together.
                <a href="/contact">
                    <img className="w-10" src="/icons/arrow-right-white-solid.svg" alt="arrow" />
               </a>
            </h3>

            {/* <Button classStyles=""  content="Contact Me" url="/contact" /> */}

            {/* <h2 className="font-gopher text-3xl flex flex-col p-2 justify-evenly items-center gap-y-2"><span>Hillary</span><span> Onyechekwa</span></h2> */}
            <nav className="w-full flex flex-col md:flex-row lg:flex-row lg:gap-x-4 md:gap-x-3 justify-around items-center">
                <p className="font-gopher">&copy; {new Date().getFullYear()} Hill Onyechekwa</p>
                <ul className=" flex flex-col md:flex-row lg:flex-row  lg:gap-x-4 md:gap-x-3 gap-y-3 justify-between items-center font-gotham text-sm">
                    <li> <a href="https://twitter.com/arqeytekt">Twitter </a></li>
                    <li> <a href="https://linkined.com/hillonyechekwa">Linkedin </a> </li>
                    <li> <a href="https://github.com/hillonyechekwa"> Github </a> </li>
                    <li> <a href="https://vesbuildsthings.hashnode.dev"> Hashnode </a> </li>
                    {/* <li>Nigeria</li> */}
                </ul>
            </nav>
        </footer>
    )

}