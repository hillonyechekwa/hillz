import Style from './footer.module.css';
import Button from "./Button";

export default function footer() {

    return (

        <footer>
            <h3>Let's build something together.</h3>

            <Button btnType="accent" content="Contact Me" url="./contact" />

            <h2><span>Hillary</span><span> Onyechekwa</span></h2>
            <nav>
                <p>&copy; {new Date().getFullYear()}</p>
                <ul>
                    <li> <a href="https://twitter.com/arqeytekt">Twitter </a></li>
                    <li> <a href="https://linkined.com/hillonyechekwa">Linkedin </a> </li>
                    <li> <a href="https://github.com/hillonyechekwa"> Github </a> </li>
                    <li> <a href="https://vesbuildsthings.hashnode.dev"> Hashnode </a> </li>
                    <li>Nigeria</li>
                </ul>
            </nav>
        </footer>
    )

}