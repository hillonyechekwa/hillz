import Style from "./button.module.css"


function Button ({btnType, content, url}){
    return(
        <>
            {btnType === "primary" && (
                <button className={Style.primaryCta}
                 >
                <a href={url}>{content}</a>
             </button>
            )}

            {btnType === "accent" && (
                <button className={Style.accentCta}>
                    <a href={url}>{content}</a>
                </button>
            )}
        </>
    )
}

export default Button