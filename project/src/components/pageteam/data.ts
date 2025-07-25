import team2 from "../../asstes/page-images/sridhar-ceo.webp";
import team3 from "../../asstes/page-images/krishna-member.webp";
import { TeamMember } from "../../types";
import page1 from "../../asstes/page-images/page-solutions-limited.webp";
import page2 from "../../asstes/page-images/page-solutions-pvt-ltd.webp";
import page3 from "../../asstes/page-images/page-technologies-LLC-1.webp";
import page4 from "../../asstes/page-images/page-solutions-international-inc.webp";
import page5 from "../../asstes/page-images/page-asiatech.webp";
import page6 from "../../asstes/page-images/page-worldwide-inc.webp";
import info1 from "../../asstes/page-images/info-1.png";
import info2 from "../../asstes/page-images/info-2.png";
import info3 from "../../asstes/page-images/info-3.png";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mr. Sridhar Dasari",
    role: "Cheif Operating Officer & Founder",
    bio: "Technology architect specializing in cloud-native solutions and enterprise systems.",
    image: team2,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "2",
    name: "Mr. Krishna Dasari",
    role: "Board Member",
    bio: "Product strategist with expertise in AI/ML and user experience design.",
    image: team3,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export const locateus = [
  {
    id: 1,
    logo: page1,
    address:
      "Registered Office : No.424, Legacy Centre Hanworth Trading Estate Feltham, TW 13 6th London",
  },
  {
    id: 2,
    logo: page2,
    address:
      "Operational Head office : Plot No. 815, B.V.L Complex 4th Street, Sri Swamy Ayyappa Society Madhapur, Hyderabad – 500081",
  },

  {
    id: 3,
    logo: page3,
    address:
      "1505, 15th Floor, Barjuman Business Towers, Sheikh Zayed Street, Al Mankhool,Dubai,UAE",
  },

  {
    id: 4,
    logo: page4,
    address: "55 Chevron Crescent,Toronto M1K 3N6",
  },
  {
    id: 5,
    logo: page5,
    address: "Hengda Building, 137 Cecil Street, #10-07, Postal 069537",
  },
  {
    id: 6,
    logo: page6,
    address: "1300 N CUSTER RD APT # 6203 ALLEN TX 75013-3516",
  },
];

export const aboutus1 = [
  {
    logo: info1,
    description:
      "During these years we have worked with 110+ banks and financial institutions around the globe and have delivered value along their transformation journeys.",
  },
  {
    logo: info2,
    description:
      "Throughout our years of operation, we have held a Hyper-Focus on Banking Technology and Transformation both on Core Platforms and Ancillary Banking applications. Our approach to delivering efficient and effective Technology Enabled Banking Services is a unique blend of Digital adaptation and business transformation.",
  },
  {
    logo: info3,
    description:
      "We continuously strive to be an IT services company using the power of technology to build better banks & Financial Institutions, that focus on the future. Institutions that strive to exceed their customer’s expectations.",
  },
];
