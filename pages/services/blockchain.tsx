import React from "react";
import ServiceHero from "components/ServiceHero";
import ServicesProvide from "components/ServicesProvide";
import ServicesOurProcess from "components/ServiceOurProcess";
import ServiceOurWork from "components/ServiceOurWork";
import ServiceCaseStudy from "components/ServiceCaseStudy";
import ServiceTrends from "components/ServiceTrends";

const Blockchain = () => {
  return (
    <div>
      <ServiceHero />
      <ServicesProvide />
      <ServicesOurProcess />
      <ServiceTrends />
      <ServiceOurWork />
      <ServiceCaseStudy />
    </div>
  );
};

export default Blockchain;
