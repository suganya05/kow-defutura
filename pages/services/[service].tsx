import React from "react";
import { GetServerSideProps, NextPage } from "next";
import ServiceHero from "components/ServiceHero";
import ServicesProvide from "components/ServicesProvide";
import ServicesOurProcess from "components/ServiceOurProcess";
import ServiceOurWork from "components/ServiceOurWork";
import ServiceCaseStudy from "components/ServiceCaseStudy";
import ServiceTrends from "components/ServiceTrends";
import { Services } from "data/Service";
import { IData } from "constant/constant";

const Blockchain: NextPage<IData> = ({ data }) => {
  return (
    <div>
      <ServiceHero hero={data.hero} />
      <ServicesProvide />
      <ServicesOurProcess />
      <ServiceTrends />
      <ServiceOurWork />
      <ServiceCaseStudy />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query);
  const currentService = query.service as string;
  const data = Services.find(
    (f) => f.title.toLowerCase() === currentService.toLowerCase()
  );
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};

export default Blockchain;
