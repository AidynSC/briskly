import React from 'react'

const Preview = props => {
    return (
        <div id="gallery">
        {props.preview.map((previewValue, i) => {
          if (previewValue.image) {
            return (
              <div key={i} className="preview-item">
                <img src={previewValue.image} alt="Preview" />
              </div>
            )
          } else {
            return (
              <div key={i} className="preview-item">
                {previewValue.name}
              </div>
            )
          }
        })}
      </div>
    )
}

export default Preview
