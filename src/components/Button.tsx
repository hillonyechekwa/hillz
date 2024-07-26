

const Button  = ({ content, url, classStyles }) => {


    return(
        <a
            role="button"
            href={url}
            className={`bg-red w-40 p-3 md:w-52 lg:w-64 rounded-full shadow-lg shadow-stone-800 hover:shadow-none font-gopher grid place-items-center transition-shadow ease-out duration-100 ${classStyles}`}>
            {content}
        </a>
    )
}

export default Button