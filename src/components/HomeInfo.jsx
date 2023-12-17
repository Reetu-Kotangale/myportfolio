import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-3 h-3 object-contain" />
    </Link>
  </div>
);

// #1b4965
const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center card-box
    py-4 px-8 text-white mx-5 rounded-lg"
    >
      Hi, I am <span className="font-semibold">Reetu</span>👋
      <br />A Frontend Developer & 3D Artist
    </h1>
  ),
  2: (
    <InfoBox
      text="Join me on a journey where pixels meet polygons, exploring the fusion of code and artistry in the digital universe."
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox
      text="Explore my canvas of creations where pixels dance and code brings visions to life."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Thank you for visiting my portfolio! I'm excited to hear from you."
      link="/contact"
      btnText="Contact me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
