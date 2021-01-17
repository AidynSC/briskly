import React, {useState} from 'react'
import Preview from './Preview'
import Upload from './Upload'
import Button from './Button'
import '../App.css';

function App() {
  const [drag, setDrag] = useState(false)
  const [droppedFiles, setDroppedFiles] = useState([])
  const [preview, setPreview] = useState([])

  function dragStartHandler(e) {
    e.preventDefault()
    setDrag(true)
  }

  function dragLeaveHandler(e) {
    e.preventDefault()
    setDrag(false)
  }

  function checkDroppedFiles(files) {
    for (const key in files) {
      if (files.hasOwnProperty(key)) {
          const element = files[key];
          let alreadyDropped = droppedFiles.some(file => {
            return file.lastModified === element.lastModified && file.size === element.size
          })

          if (!alreadyDropped) {
            checkFileType(element)
            setDroppedFiles([...droppedFiles, element])
          }
      }
    }
  }

  function checkFileType(file) {
    if (file.type.includes('image')) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setPreview([...preview, { name: file.name, image: reader.result }])
      }
    } else {
      setPreview([...preview, { name: file.name }])
    }
  }

  function onDropHandler(e) {
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    checkDroppedFiles(files)
    setDrag(false)
  }

  function sendImagesToConsole() {
    preview.filter(previewAnyElement => previewAnyElement.image).forEach(previewImageElement => {
      console.log(previewImageElement.name, ' - ', previewImageElement.image);
    })
  }
  
  return (
    <div className="app">
      <Upload
        drag={drag}
        dragStartHandler={dragStartHandler}
        dragLeaveHandler={dragLeaveHandler}
        onDropHandler={onDropHandler}
      />
      <Button sendImagesToConsole={sendImagesToConsole}/>
      <Preview preview={preview}/>
    </div>
  );
}

export default App;
