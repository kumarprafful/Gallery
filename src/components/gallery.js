import React, {useState} from 'react';
import './gallery.css';

const Gallery = ({data}) => {
  console.log(data.data.allUnSplashImages.nodes);
  const imageData = data.data.allUnSplashImages.nodes;
  console.log(imageData);
  const [allImages, setAllImages] = useState(imageData);
  const [selectedImg, setSelectedImg] = useState(allImages[0].urls.regular);

  const renderFullImage = (url) => {
      setSelectedImg(url);
      console.log(selectedImg);
    }

  const renderImages = () => {
    if (allImages) {
      return allImages.map(img => {
        // console.log(img);
        return (
          <span key={img.id} className="imageParent">
              <img alt={img.urls.thumb} src={img.urls.thumb} className="theimage" onClick={()=>{renderFullImage(img.urls.regular)}} />
          </span>
        );
      })
    }
    else {
      return(
      <h1>Loading...</h1>
    );
    }
  }


  return (
    <>
      <div className="max_size" style={{textAlign:'center'}}>
        <div className="imageParent">
          <img alt={selectedImg} src={selectedImg} style={{height:'27em'}} />
        </div>
        <div className="thumbnails">

          {renderImages()}
          this
        </div>
      </div>
    </>
  );
  }

export default Gallery;
