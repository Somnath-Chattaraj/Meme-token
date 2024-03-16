import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import meme1 from "./assets/meme1.png"
import meme2 from "./assets/meme2.png"
import meme3 from "./assets/meme3.png"
import meme4 from "./assets/meme4.png"
import meme5 from "./assets/meme5.png"
import meme6 from "./assets/meme6.png"
import meme7 from "./assets/meme7.png"
import meme8 from "./assets/meme8.png"
import uranus_token from "./assets/29231.png"

function UranusCarousel() {
  const images = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Increase the animation speed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out', // Use ease-in-out animation
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <>
      <div className="dark:bg-black text-gray-300 px-4 md:px-96 pt-20">
      <div className="max-w-4xl mx-auto">
      <img src={uranus_token} alt="" className='pb-5'/>
        <h1 className="text-4xl font-bold pb-8">  $URANUS</h1>
        <p className="pb-8">
      Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on Saturday, January 27, then retrogrades again on Sunday, September 1. This suggests ongoing evolution in your home life and personal growth.
    </p>
    <p className="pb-8">
      Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.
    </p>
    <p className="pb-8">
      In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So, we are slowly moving into a new age, from Pisces to Aquarius.
    </p>
    <p className="pb-8">
      Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events. Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional nature of these visionary air signs.
    </p>
    <ul className="list-disc list-inside pb-8">
      <li>Everyone Loves to Pump Uranus more than they like when Uranus Dumps.</li>
      <li>The liquidity injections just keep coming into Uranus.</li>
      <li>Don't pass gas (it's gonna be giant)</li>
      <li>Hold onto Uranus!</li>
      <li className="no-bullet">Disclaimer: This is all in good fun - a blend of memes, astrology, and crypto. We will not go to the moon, we're going to Uranus.</li>
    </ul>
    <p className="pt-3 pb-8">In Crypto We Trust, But In Uranus, We Believe!</p>
    <p className="pb-8">
      <strong>The Memeifesto</strong><br/>
      Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn't just your daily horoscope.
    </p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} className="image" />
            </div>
          ))}
        </Slider>
        <div className="footer py-8">
    </div>
      </div>
    </div>
    </>
  );
}

export default UranusCarousel;

