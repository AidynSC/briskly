import React from 'react'

const Upload = props => {
    return (
        <div className="uploadContainer">
            {props.drag
            ? <div
                className="drop-area"
                onDragStart={e => props.dragStartHandler(e)}
                onDragLeave={e => props.dragLeaveHandler(e)}
                onDragOver={e => props.dragStartHandler(e)}
                onDrop={e => props.onDropHandler(e)}
            >Отпустите файлы, чтобы загрузить их</div>
            : <div
                onDragStart={e => props.dragStartHandler(e)}
                onDragLeave={e => props.dragLeaveHandler(e)}
                onDragOver={e => props.dragStartHandler(e)}
            >Перетащите файлы, чтобы загрузить их</div>
            }
        </div>
    )
}

export default Upload
