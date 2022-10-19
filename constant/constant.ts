export interface IData {
  data: {
    title: string;
    hero: {
      heading1: string;
      heading2: string;
      description: string;
      image: {
        src: string;
        alt: string;
      };
    };
    Serviceprovide: {
      title: string;
      description: string;
      image: {
        src: string;
        alt: string;
      };
      banner: string;
    }[];
    ourProcess: {
      number: string;
      title: string;
      description: string;
      image: {
        src: string;
        alt: string;
      };
    }[];
    trends: {
      title: string;
      image: {
        src: string;
        alt: string;
      };
      name: string;
    }[];
    ourWork: {
      image: {
        src: string;
        alt: string;
      };
      logo: {
        src: string;
        alt: string;
      };
      logoName: string;
      download: string;
    }[];
    caseStudy: {
      image: {
        src: string;
        alt: string;
      };
      name: string;
    }[];
  };
}
