import React from "react";
import Hero from "../Hero";
import Carousel from "../Carousel";
import { MailingList } from "../MailingList";
export const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <MailingList />
    </div>
  );
};
