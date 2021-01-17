import React from 'react'

const Button = props => {
    return (
        <div>
            <button className="button" onClick={props.sendImagesToConsole}>Отправить</button>
        </div>
    )
}

export default Button
