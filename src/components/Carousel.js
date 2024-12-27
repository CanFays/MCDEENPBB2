// import './Carousel.css';
// import btnClose from '../assets/icons/CarouselClose.svg';
// import btnPrev from '../assets/icons/CarouselPrev.svg';
// import btnNext from '../assets/icons/CarouselNext.svg';
// import { useState } from 'react';

function Carousel({itemsName}) {
  console.log("itemsname", typeof itemsName);

  function importImages(itemsName) {

    const context = require.context("../assets/images", false, /\.(webp|png|jpg)$/);
    const images = context.keys().filter((key) => key.includes(`./${itemsName}`));
    console.log("dans carousel");
    console.log("context", context.keys());
    console.log("images ", images);

  context.keys().forEach(key => {
    console.log('clé:', key, 'contient itemname?', key.includes(`./${itemsName}`))
  });

    return images.map(context)    // chemins relatifs to URLs accessibles via Webpack
  }

  //   const [currentId, setcurrentId] = useState(1);
//   let currentComment = comments.find(item => item.id === currentId);

//   function handlePrev() {
//     setcurrentId(currentId === 1 ? comments.length : currentId - 1);
//   }

//   function handleNext() {
//     setcurrentId(currentId === comments.length ? 1 : currentId + 1);
//   }

  const images = importImages(itemsName)

  return (
    <>
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Belle ${index}`}/>
    ))}
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
