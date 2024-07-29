

const Button  = ({ content, url, classStyles }) => {


    return(
        <a
            role="button"
            href={url}
            className={`bg-red  py-2 px-3 md:py-3 md:px-5 lg:py-4 lg:px-6 rounded-full hover:shadow-lg hover:shadow-stone-800 font-gopher grid place-items-center transition-shadow ease-out duration-100 ${classStyles}`}>
            {content}
        </a>
    )
}

export default Button