import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AnimButton from "./Button/AnimButton";

const cards = [
  {
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    link: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Card 2gyftyydtrh",
    description: "This is the description for card 2.",
    link: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Card 45543",
    description: "This is the description for card 3.",
    link: "https://www.google.com",
  },
  {
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Card 657n",
    description: "This is the description for card 3.",
    link: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Card 2gyftyydtrh",
    description: "This is the description for card 2.",
    link: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Card 45543",
    description: "This is the description for card 3.",
    link: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Card 657n",
    description: "This is the description for card 3.",
    link: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  // Add more card objects here...
];

const CardGroup = ({ cards, cardsPerSlide }) => (
  <div className={`flex p-10  my-20 gap-14   lg:p-2 lg:my-44  xs:my-16 ${cardsPerSlide === 1 ? 'flex-col' : 'flex-row'}`}>
    {cards.map((card, index) => (
      <div key={index} className={`card w-72 bg-white shadow-xl ${cardsPerSlide === 1 ? 'mb-8' : ''}`}>
        <figure className="px-2 pt-2">
          <img src={card.image} alt={card.title} className="rounded-2xl h-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{card.title}</h2>
          <p>{card.description}</p>
          <div className="card-actions">
          <AnimButton
        onClick={() => window.open(card.link, "_blank")}
      />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const CustomPrevArrow = ({ onClickHandler, hasPrev, label }) => (
  <button
    className={`custom-arrow custom-arrow-left ${
      hasPrev ? "" : "opacity-45  cursor-not-allowed"
    } bg-slate-50 hover:bg-green-700 rounded-full p-2 absolute top-96 -right-20 m-52 z-[100] lg:mx-[40rem] lg:top-[28rem] xs:-mx-40 xs:top-80`}
    onClick={onClickHandler}
    title={label}
  >
    <IoMdArrowRoundBack size={26} className="text-black" />
  </button>
);

const CustomNextArrow = ({ onClickHandler, hasNext, label }) => (
  <button
    className={`custom-arrow custom-arrow-right ${
      hasNext ? "" : "opacity-45 cursor-not-allowed"
    }  bg-slate-50 hover:bg-green-700 rounded-full p-2 absolute top-96 -right-36 m-52  z-[100]  lg:mx-72 lg:top-[28rem] xs:top-80  xs:mx-40`}
    onClick={onClickHandler}
    title={label}
  >
    <IoMdArrowRoundForward size={26} className="text-black" />
  </button>
);

const ProfileCard = () => {
  const groupedCards = [];
  const responsiveBreakpoints = {
    '2xl': 4,
    xl: 4,
    lg: 3,
    md: 2,
    sm: 1,
  };

  const currentScreenWidth = window.innerWidth;
  const cardsPerSlide = responsiveBreakpoints[currentScreenWidth >= 1535 ? '2xl' : 
                       currentScreenWidth >= 1280 ? 'xl' : 
                       currentScreenWidth >= 1023 ? 'lg' : 
                       currentScreenWidth >= 767 ? 'md' : 'sm'];

  for (let i = 0; i < cards.length; i += cardsPerSlide) {
    groupedCards.push(cards.slice(i, i + cardsPerSlide));
  }

  return (
    <>
      <div className="profile -mt-24  p-6 lg:p-14  xs:p-4 xs:-mt-[7.5rem]">
        <Carousel
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <CustomPrevArrow
              onClickHandler={onClickHandler}
              hasPrev={hasPrev}
              label={label}
            />
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <CustomNextArrow
              onClickHandler={onClickHandler}
              hasNext={hasNext}
              label={label}
            />
          )}
          className="custom-carousel"
        >
          {groupedCards.map((group, index) => (
            <CardGroup key={index} cards={group} cardsPerSlide={cardsPerSlide} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProfileCard;