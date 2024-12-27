import './Carousel.scss';
// import btnClose from '../assets/icons/CarouselClose.svg';
// import btnPrev from '../assets/icons/CarouselPrev.svg';
// import btnNext from '../assets/icons/CarouselNext.svg';
import { useState } from 'react';

function Carousel({itemsName}) {

  function importImages(itemsName) {

    const context = require.context("../assets/images", false, /\.(webp|png|jpg)$/);
    const filteredPaths = context.keys().filter((key) => key.includes(`./${itemsName}`));
    const imagesWithIds = filteredPaths.map((key) => {
      const match = key.match(/\d+/);
      const id = match ? parseInt(match[0], 10) : null ;
      return {
        path: context(key),
        id: id ,
      }
    });
    console.log("images id", imagesWithIds);
    return imagesWithIds
  }

  const images = importImages(itemsName)


  //
  // const [currentId, setcurrentId] = useState(1);
  // let currentImage = images.find(item => item.id === currentId);

//   function handlePrev() {
//     setcurrentId(currentId === 1 ? images.length : currentId - 1);
//   }

//   function handleNext() {
//     setcurrentId(currentId === images.length ? 1 : currentId + 1);
//   }


  return (
    <>
    {/* {images.map((image, index) => (
      <img key={index} src={image} alt={`Belle ${index}`}/>
    ))} */}
    </>

    //     <div className='carousel'>
//       <div className="content card">
//         <div className="content-name">{currentComment.name}</div>
//         <div className="content-comment">{currentComment.comment}</div>
//         <img src={btnPrev} className="carousel-btn--prev" onClick={handlePrev} alt="Commentaire précédent" />
//         <img src={btnNext} className="carousel-btn--next" onClick={handleNext} alt="Commentaire suivant" />
//         <img src={btnClose} className="carousel-btn--close" onClick={closeCarousel} alt="Fermer les commentaires" />
//       </div>
//     </div>

  )
}

export default Carousel ;



//   return (

//   );
// }

// export { Carousel, openCarousel };
// export default Carousel;

 // toutes les images qui commencent par "mosaic" (png|jpe?g|webp)
//  const images = require.context('../assets/images', false, /mosaic.*\.(webp)$/);
 // le chemin des images
