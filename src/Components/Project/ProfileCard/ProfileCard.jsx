import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AnimButton from "./Button/AnimButton";

const cards = [
  {
    image:
      "https://github.com/athar-ansari/EASY-GRADE/assets/118714083/a713b073-82b7-4d6a-bb6c-12c1f4470f5d ",
    title: "EasyGrade",
    description: "This website simplifies semester exam percentage.",
    link: "https://easygrade.vercel.app/",
  },
  {
    image:
      "https://github.com/athar-ansari/Animated-Toggle/assets/118714083/6b3fda68-0bd8-4808-bb30-24dbcfeffe10",
    title: "TO-DO-LIST",
    description: "Colorful, responsive To-do list to manage tasks.",
    link: "https://todolistwebap.netlify.app/",
  },
  {
    image:
      "https://github.com/athar-ansari/Simple-Animated-Website/assets/118714083/a29e9c54-7cdd-4185-9e27-af347f2332d2",
    title: "Animated Website",
    description: "Dynamic website with custom cursor & animations.",
    link: "https://simple-animated-website.netlify.app/",
  },
  {
    image:
      "https://github.com/athar-ansari/Amazon-Clone/assets/118714083/9a269be9-1d40-4042-a1f8-c2b145320053",
    title: "Amazon Clone",
    description: "Learn webDevelopment by recreating Amazon's design.",
    link: "https://athar-ansari.github.io/Amazon-Clone/",
  },
  {
    image:
      "https://github.com/athar-ansari/EASY-GRADE/assets/118714083/1dd9a683-e84d-403a-91ff-d556a93a04fb",
    title: "Calculator",
    description: "Calculator button click sound & auto theme switching.",
    link: "https://simple-calculator0a.netlify.app/",
  },
  {
    image:
      "https://github.com/athar-ansari/Animated-Toggle/assets/118714083/c3b921e9-3996-408e-b860-2cce701064ae",
    title: "Animated-Toggle",
    description: "Toggle between light and dark Theme.",
    link: "https://athar-ansari.github.io/Animated-Toggle/",
  },
  {
    image:
      "https://github.com/athar-ansari/Animated-Toggle/assets/118714083/08cebb2e-0106-496b-848b-892696f4afef",
    title: "Connection Box",
    description: "Social media box with elegant hover animations.",
    link: "https://athar-ansari.github.io/Animated-CurveConnection-Box/",
  },
  {
    image:
      "https://github.com/athar-ansari/Animated-Toggle/assets/118714083/3028b3ec-cf23-46cf-8dfb-da94442c406f",
    title: "Sharing Button",
    description: "Effortless sharing: one click, multiple social media links.",
    link: "https://athar-ansari.github.io/Sharing-Button/",
  },
  {
    image:
      "https://github.com/athar-ansari/Animated-Toggle/assets/118714083/6dbd806b-1300-4179-b594-a94de19ca856",
    title: "Social Media Icon",
    description: "Social media icons with captivating hover effects.",
    link: "https://athar-ansari.github.io/Social-Media-Icon-Popup/",
  },
  // Add more card objects here...
];

const CardGroup = ({ cards, cardsPerSlide }) => (
  <div
    className={`flex p-5 text-black font-serif my-20 gap-14   lg:p-2 lg:my-44  xs:my-20 xs:p-1 ${
      cardsPerSlide === 1 ? "flex-col" : "flex-row"
    }`}
  >
    {cards.map((card, index) => (
      <div
        key={index}
        className={`card w-72 bg-white shadow-xl ${
          cardsPerSlide === 1 ? "mb-8" : ""
        }`}
      >
        <figure className="px-2 pt-2">
          <img src={card.image} alt={card.title} className="rounded-2xl h-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{card.title}</h2>
          <p className="text-base xs:text-sm">{card.description}</p>
          <div className="card-actions">
            <AnimButton onClick={() => window.open(card.link, "_blank")} />
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
    } bg-[royalblue] hover:opacity-90 rounded-full p-2 absolute top-96 -right-20 m-52 z-[100] lg:right-80 lg:top-[28rem] xs:-mx-40 xs:top-80`}
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
    }  bg-[royalblue] hover:opacity-90 rounded-full p-2 absolute top-96 -right-36 m-52  z-[100]  lg:-right-20 lg:top-[28rem] xs:top-80  xs:mx-40`}
    onClick={onClickHandler}
    title={label}
  >
    <IoMdArrowRoundForward size={26} className="text-black" />
  </button>
);

const ProfileCard = () => {
  const groupedCards = [];
  const responsiveBreakpoints = {
    "2xl": 4,
    xl: 4,
    lg: 3,
    md: 2,
    sm: 1,
  };

  const currentScreenWidth = window.innerWidth;
  const cardsPerSlide =
    responsiveBreakpoints[
      currentScreenWidth >= 1535
        ? "2xl"
        : currentScreenWidth >= 1280
        ? "xl"
        : currentScreenWidth >= 1023
        ? "lg"
        : currentScreenWidth >= 767
        ? "md"
        : "sm"
    ];

  for (let i = 0; i < cards.length; i += cardsPerSlide) {
    groupedCards.push(cards.slice(i, i + cardsPerSlide));
  }

  return (
    <>
      <div className="profile m-6  p-4 lg:p-14  xs:p-1 xs:m-7 xs:-mt-4 xs:overflow-hidden">
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
          className="custom-carouse "
        >
          {groupedCards.map((group, index) => (
            <CardGroup
              key={index}
              cards={group}
              cardsPerSlide={cardsPerSlide}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProfileCard;
