import {useState} from "react";
import "./Carousel.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const Carousel = ({ data }) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide( slide === data.length - 1 ? 0 : slide + 1)
    };
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    };


    if (!data || !Array.isArray(data)) {
      return <p>Loading...</p>; // Or display a loading indicator
    }
  
    return (
      <div className="Carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {data.map((item, idx) => (
          <img className={slide === idx? "slide" : "slide slide-hidden"} src={item.src} alt={item.alt} key={idx} />
        ))}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className="indicators">
            {data.map((_, idx) => {
                return <button className={slide === idx ? "indicator": "indicator-inactive indicator"} key={idx} onClick={() => {
                    setSlide(idx)
                }} ></button>

            })}
        </span>
      </div>
    );
  };
  

export default Carousel;