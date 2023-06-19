import React from "react";
import Hero from "../Hero";
import Carousel from "../Carousel";
import { MailingList } from "../MailingList";
import CelebrateYourGrad from "../CelebrateYourGrad/CelebrateYourGrad";

export const Home = () => {
  return (
    <div>
      <CelebrateYourGrad />
      <Carousel />
      <Hero />
      <MailingList />
    </div>
  );
};
