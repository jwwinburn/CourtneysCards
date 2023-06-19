import React from "react";
import Hero from "../Hero";
import Carousel from "../Carousel";
import { MailingList } from "../MailingList";
import Footer from "../Footer/Footer";
import CelebrateYourGrad from "../CelebrateYourGrad/CelebrateYourGrad";


export const Home = () => {
  return (
    <div>
      <CelebrateYourGrad />
      <Hero />
      <Carousel />
      <MailingList />
    </div>
  );
};
