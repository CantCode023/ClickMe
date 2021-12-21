function Button({onclick, text}) {
    return (
        <button onClick={onclick}>{text}</button>
    )
}

export default Button