
import moment from 'moment';
import { useState } from 'react';

export default function PassedEvent(props: any) {
  const {date, eventName, eventLocation, eventDescription, type, photos} = props
  const [photoIndex, setPhotoIndex] = useState(0)

  const increaseDate = () =>{
    if (photoIndex < photos.length - 1) {    
        setPhotoIndex(photoIndex + 1)}

    else{ 
        setPhotoIndex(0)
    }
}

const decreaseDate = () =>{
  if (photoIndex > 0) {    
    setPhotoIndex(photoIndex - 1)}

    else{ 
        setPhotoIndex(photos.length - 1)
    }
}
  return (
      <div className='passedEvent'>
        <div className="photoViewer"
        style={{
            backgroundImage: `url(${photos[photoIndex]})`
        }}
        >

        <div className="previousMonth zap" onClick={decreaseDate}>
        <div className="zapButton">
      <span className="material-icons">
      arrow_back_ios
      </span>
    </div>
  </div>



    
  <div className="nextMont zap" onClick={increaseDate}>
  <div className="zapButton">
      <span className="material-icons">
      arrow_forward_ios
      </span>
    </div>
  </div>

        </div>

        <div className="postInformation">

                <h1 className={`${type == 0 ? "secondaryC" : "secondaryDarkC"}`}>
                    {eventName}
                </h1>
                <p>
                à {eventLocation} <b>{moment(date).format('ddd DD-MM-YYYY')}</b>
                </p>
                <p className="pointInfos">
                {eventDescription}
                </p>

        </div>

      </div>
  )
}
