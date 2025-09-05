// courseData.js
import courseImg from "../Assests/coursesimg00.png";
import aboutImg00 from "../Assests/aboutimg00.png";
import aboutImg01 from "../Assests/aboutimg01.png";
import aboutImg02 from "../Assests/aboutimg02.png";
import aboutImg03 from "../Assests/aboutimg03.png";
import seg1 from "../Assests/seg1.jpg";
import seg2 from "../Assests/seg2.jpg";
import seg3 from "../Assests/seg3.avif";
import seg4 from "../Assests/seg4.jpg";
import vtct1 from "../Assests/vtct1.avif";
import vtct2 from "../Assests/vtct2.avif";
import vtct3 from "../Assests/vtct3.avif";
import vtct4 from "../Assests/vtct4.avif";
import vtct5 from "../Assests/vtct5.avif";
import vtct6 from "../Assests/vtct6.avif";
import vtct7 from "../Assests/vtct7.avif";
import vtct8 from "../Assests/vtct8.avif";
import vtct9 from "../Assests/vtct9.avif";
import vtct10 from "../Assests/vtct10.jpg";
import vtct11 from "../Assests/vtct11.avif";
import vtct12 from "../Assests/vtct12.avif";
import vtct13 from "../Assests/vtct13.jpg";
import vtct14 from "../Assests/vtct14.avif";
import vtct15 from "../Assests/vtct15.avif";
import vtct16 from "../Assests/vtct16.avif";
import vtct17 from "../Assests/vtct17.avif";
import vtct18 from "../Assests/vtct18.avif";
import vtct19 from "../Assests/vtct19.avif";
import vtct20 from "../Assests/vtct20.jpg";
import vtct21 from "../Assests/vtct21.avif";
import vtct22 from "../Assests/vtct22.jpg";
import persons1 from "../Assests/persons1.avif";
import persons2 from "../Assests/persons2.avif";
import persons3 from "../Assests/persons3.avif";
import persons4 from "../Assests/persons4.avif";
import persons5 from "../Assests/persons5.avif";
import persons6 from "../Assests/persons6.avif";
import persons7 from "../Assests/persons7.avif";
import persons8 from "../Assests/persons8.avif";
import persons9 from "../Assests/persons9.avif";
import persons10 from "../Assests/persons10.avif";
import proqual1 from "../Assests/proqual1.jpg";
import proqual2 from "../Assests/proqual2.jpg";
import proqual3 from "../Assests/proqual3.jpg";

// Just cycle through images to make variety
const images = [courseImg, aboutImg00, aboutImg01, aboutImg02, aboutImg03];

const courseData = {
  ALL: [
    {
      id: 1,
      title: "Level 3 Diploma in Aesthetics",
      desc: "Comprehensive foundation in advanced skin care.",
      price: 380,
      oldPrice: 500,
      rating: 4.5,
      img: images[0],
    },
    {
      id: 2,
      title: "Certificate in Beauty Therapy",
      desc: "Hands-on training for salon professionals.",
      price: 250,
      oldPrice: 320,
      rating: 4.2,
      img: images[1],
    },
    {
      id: 3,
      title: "Level 5 Diploma in Education",
      desc: "Learn teaching strategies for adult learners.",
      price: 450,
      oldPrice: 600,
      rating: 4.7,
      img: images[2],
    },
    {
      id: 4,
      title: "Diploma in Digital Marketing",
      desc: "Practical skills for online campaigns & SEO.",
      price: 300,
      oldPrice: 400,
      rating: 4.3,
      img: images[3],
    },
     {
      id: 4,
      title: "Diploma in Digital Marketing",
      desc: "Practical skills for online campaigns & SEO.",
      price: 300,
      oldPrice: 400,
      rating: 4.3,
      img: images[3],
    },
    
  ],

  SEG: [
  {
    id: 1,
    title: "Level 3 MOT Management",
    desc: "The Level 3 MOT Test Center Management course at Sky Education is specifically designed for individuals aspiring to manage MOT.",
    price: 600,
    oldPrice: 750,
    rating: 4.8,
    img: seg1,
  },
  {
    id: 2,
    title: "MOT Class 1 & 2",
    desc: "Sky Education’s MOT Class 1 & 2 course is specifically designed for those looking to become accredited MOT testers.",
    price: 400,
    oldPrice: 550,
    rating: 4.4,
    img: seg2,
  },
  {
    id: 4,
    title: "Level 3 Technician",
    desc: "At Sky Education, the Level 3 Technician course prepares students for advanced roles in vehicle mechanics and electronics. This comprehensive program ensures career growth.",
    price: 500,
    oldPrice: 650,
    rating: 4.6,
    img: seg3,
  },
  {
    id: 5,
    title: "MOT Class 4 & 7",
    desc: "The MOT Class 4 & 7 course at Sky Education is designed for professionals aiming to become certified MOT testers.",
    price: 500,
    oldPrice: 650,
    rating: 4.6,
    img: seg4,
  }
],

VTCT: [
  {
    id: 1,
    title: "(ITEC) Level 5 Certificate in Laser Tattoo Removal",
    desc: "Advanced qualification for practitioners specializing in laser tattoo removal.",
    price: 500,
    oldPrice: 650,
    rating: 4.6,
    img: vtct1,
  },
  {
    id: 2,
    title: "(ITEC) Level 5 Micropigmentation for Camouflage & Restoration",
    desc: "Specialized course for professionals in restorative and camouflage micropigmentation.",
    price: 480,
    oldPrice: 620,
    rating: 4.5,
    img: vtct2,
  },
  {
    id: 3,
    title: "Level 4 Certificate in Micropigmentation",
    desc: "Advanced training for beauty professionals in micropigmentation techniques.",
    price: 350,
    oldPrice: 500,
    rating: 4.4,
    img: vtct3,
  },
  {
    id: 4,
    title: "Level 4 Certificate in Microblading for Eyebrows",
    desc: "Enhance your expertise with eyebrow microblading techniques.",
    price: 420,
    oldPrice: 550,
    rating: 4.5,
    img: vtct4,
  },
  {
    id: 5,
    title: "Level 4 Award in Skin Blemish Removal",
    desc: "Specialized qualification in advanced skin blemish removal treatments.",
    price: 460,
    oldPrice: 600,
    rating: 4.4,
    img: vtct5,
  },
  {
    id: 6,
    title: "(ITEC) Level 4 Scalp Micropigmentation",
    desc: "Specialized training for practitioners in scalp micropigmentation treatments.",
    price: 450,
    oldPrice: 600,
    rating: 4.2,
    img: vtct6,
  },
  {
    id: 7,
    title: "Level 3 NVQ Diploma in Beauty Therapy General",
    desc: "Comprehensive qualification to advance skills in beauty therapy.",
    price: 300,
    oldPrice: 420,
    rating: 4.3,
    img: vtct7,
  },
  {
    id: 8,
    title: "Level 3 Certificate in Epilation",
    desc: "Specialized qualification in epilation techniques.",
    price: 280,
    oldPrice: 400,
    rating: 4.2,
    img: vtct8,
  },
  {
    id: 9,
    title: "Level 3 Award in Anatomy & Physiology",
    desc: "Qualification covering anatomical and physiological knowledge of body systems.",
    price: 260,
    oldPrice: 380,
    rating: 4.3,
    img: vtct9,
  },
  {
    id: 10,
    title: "Level 2 NVQ Diploma in Beauty Therapy General",
    desc: "Foundational qualification for aspiring beauty professionals.",
    price: 200,
    oldPrice: 320,
    rating: 4.1,
    img: vtct10,
  },
  {
    id: 11,
    title: "Level 2 Award in Facial Care",
    desc: "Introductory course for those starting in facial treatments.",
    price: 180,
    oldPrice: 300,
    rating: 4.0,
    img: vtct11,
  },
  {
    id: 12,
    title: "Level 2 Award in Facial Massage & Skincare",
    desc: "Entry-level qualification in facial massage and skincare practices.",
    price: 190,
    oldPrice: 310,
    rating: 4.2,
    img: vtct12,
  },
  {
    id: 13,
    title: "(ITEC) Core of Knowledge",
    desc: "Essential foundation in laser and light device safety and knowledge.",
    price: 250,
    oldPrice: 350,
    rating: 4.3,
    img: vtct13,
  },
  {
    id: 14,
    title: "Level 4 Diploma in Permanent Hair Removal & Skin Rejuvenation",
    desc: "Advanced vocational training for laser hair removal and skin rejuvenation.",
    price: 480,
    oldPrice: 650,
    rating: 4.5,
    img: vtct14,
  },
  {
    id: 15,
    title: "Level 4 Diploma in Hair Reduction & Skin Rejuvenation (Laser & IPL)",
    desc: "Specialized training in hair reduction and rejuvenation using laser & IPL systems.",
    price: 500,
    oldPrice: 670,
    rating: 4.6,
    img: vtct15,
  },
  {
    id: 16,
    title: "Level 4 Certificate in Laser & IPL Treatments",
    desc: "Professional qualification for laser and intense pulsed light therapies.",
    price: 450,
    oldPrice: 600,
    rating: 4.4,
    img: vtct16,
  },
  {
    id: 17,
    title: "(ITEC) Level 4 Certificate in Hair Reduction & Skin Rejuvenation (Laser)",
    desc: "Advanced qualification for laser-based hair reduction and rejuvenation.",
    price: 470,
    oldPrice: 640,
    rating: 4.5,
    img: vtct17,
  },
  {
    id: 18,
    title: "(ITEC) Level 4 Certificate in Hair Reduction & Skin Rejuvenation (IPL)",
    desc: "Training in hair reduction and skin rejuvenation using IPL systems.",
    price: 460,
    oldPrice: 630,
    rating: 4.4,
    img: vtct18,
  },
  {
    id: 19,
    title: "(ITEC) Level 4 Award in Skin Rejuvenation (Laser)",
    desc: "Specialist qualification in skin rejuvenation using laser systems.",
    price: 400,
    oldPrice: 550,
    rating: 4.3,
    img: vtct19,
  },
  {
    id: 20,
    title: "(ITEC) Level 4 Award in Skin Rejuvenation (IPL)",
    desc: "Specialist qualification in skin rejuvenation using IPL technology.",
    price: 410,
    oldPrice: 560,
    rating: 4.3,
    img: vtct20,
  },
  {
    id: 21,
    title: "(ITEC) Level 4 Award in Hair Reduction (Laser)",
    desc: "Professional course in hair reduction treatments using laser systems.",
    price: 380,
    oldPrice: 520,
    rating: 4.2,
    img: vtct21,
  },
  {
    id: 22,
    title: "(ITEC) Level 4 Award in Hair Reduction (IPL)",
    desc: "Professional course in hair reduction using IPL technology.",
    price: 390,
    oldPrice: 530,
    rating: 4.2,
    img: vtct22,
  }
],

 PERSONS: [
  {
    id: 1,
    title: "Level 2 Maths",
    desc: "In-depth exploration of mathematical concepts and methods to challenge and develop advanced problem-solving skills.",
    price: 220,
    oldPrice: 300,
    rating: 4.5,
    img: persons1,
  },
  {
    id: 2,
    title: "Level 1 Maths",
    desc: "Thorough understanding of basic algebra, proportions, and statistics to strengthen mathematical foundations.",
    price: 200,
    oldPrice: 280,
    rating: 4.3,
    img: persons2,
  },
  {
    id: 3,
    title: "Entry Level 3 Maths",
    desc: "Develop the ability to handle mathematical information and concepts independently with practical applications.",
    price: 180,
    oldPrice: 250,
    rating: 4.2,
    img: persons3,
  },
  {
    id: 4,
    title: "Entry Level 2 Maths",
    desc: "Build upon basic concepts with new topics like fractions and measurements for everyday problem-solving.",
    price: 160,
    oldPrice: 230,
    rating: 4.1,
    img: persons4,
  },
  {
    id: 5,
    title: "Entry Level 1 Maths",
    desc: "Introduction to basic mathematical concepts and practical skills necessary for daily life activities.",
    price: 150,
    oldPrice: 220,
    rating: 4.0,
    img: persons5,
  },
  {
    id: 6,
    title: "Level 2 English",
    desc: "Fluent communication skills suitable for diverse contexts, enhancing both spoken and written English.",
    price: 220,
    oldPrice: 300,
    rating: 4.4,
    img: persons6,
  },
  {
    id: 7,
    title: "Level 1 English",
    desc: "Refine command of English with independent communication skills for professional and personal contexts.",
    price: 200,
    oldPrice: 280,
    rating: 4.3,
    img: persons7,
  },
  {
    id: 8,
    title: "Entry Level 3 English",
    desc: "Prepare for practical usage of English to engage effectively in real-world communication tasks.",
    price: 180,
    oldPrice: 260,
    rating: 4.2,
    img: persons8,
  },
  {
    id: 9,
    title: "Entry Level 2 English",
    desc: "Enhance basic communication skills with improved vocabulary and structured sentence formation.",
    price: 160,
    oldPrice: 240,
    rating: 4.1,
    img: persons9,
  },
  {
    id: 10,
    title: "Entry Level 1 English",
    desc: "Lay the foundation for effective communication by learning essential English speaking and writing skills.",
    price: 150,
    oldPrice: 220,
    rating: 4.0,
    img: persons10,
  }
],

"PRO QUAL": [
  {
    id: 1,
    title: "Level 2 Award in Site Security",
    desc: "Gain a strong foundation in modern site security principles, risk assessment, and workplace safety protocols.",
    price: 300,
    oldPrice: 380,
    rating: 4.6,
    img: proqual1,
  },
  {
    id: 2,
    title: "Level 2 First Aid",
    desc: "Develop essential life-saving skills, including CPR, wound management, and handling emergency situations effectively.",
    price: 250,
    oldPrice: 320,
    rating: 4.7,
    img: proqual2,
  },
  {
    id: 3,
    title: "Level 1 Health & Safety in Construction",
    desc: "Introduction to essential health and safety practices, regulations, and responsibilities within the construction sector.",
    price: 220,
    oldPrice: 280,
    rating: 4.5,
    img: proqual3,
  },
],


  SQA: [
    {
      id: 1,
      title: "SQA Diploma in Business Studies",
      desc: "Understand business fundamentals with real-life examples.",
      price: 350,
      oldPrice: 500,
      rating: 4.3,
      img: images[0],
    },
    {
      id: 2,
      title: "SQA Certificate in IT Systems",
      desc: "Basics of IT infrastructure, systems and networking.",
      price: 420,
      oldPrice: 550,
      rating: 4.5,
      img: images[1],
    },
    {
      id: 3,
      title: "SQA Award in Communication",
      desc: "Improve your professional and workplace communication.",
      price: 280,
      oldPrice: 350,
      rating: 4.2,
      img: images[2],
    },
    {
      id: 4,
      title: "SQA Certificate in Digital Applications",
      desc: "Introduction to office and business applications.",
      price: 300,
      oldPrice: 400,
      rating: 4.1,
      img: images[3],
    },
    {
      id: 5,
      title: "Qualifi Diploma in Human Resource Management",
      desc: "Manage recruitment, training and workplace performance.",
      price: 500,
      oldPrice: 650,
      rating: 4.6,
      img: images[1],
    },
    {
      id: 6,
      title: "Qualifi Certificate in Finance",
      desc: "Understand corporate finance and accounting basics.",
      price: 450,
      oldPrice: 600,
      rating: 4.2,
      img: images[2],
    },
  ],

  ICQ: [
    {
      id: 1,
      title: "ICQ Certificate in Health & Social Care",
      desc: "Prepare for a rewarding career in social services.",
      price: 280,
      oldPrice: 350,
      rating: 4.4,
      img: images[4],
    },
    {
      id: 2,
      title: "ICQ Diploma in Customer Service",
      desc: "Customer care principles for retail & hospitality.",
      price: 300,
      oldPrice: 420,
      rating: 4.3,
      img: images[0],
    },
    {
      id: 3,
      title: "ICQ Certificate in Team Leading",
      desc: "Develop team management and leadership skills.",
      price: 350,
      oldPrice: 500,
      rating: 4.5,
      img: images[1],
    },
    {
      id: 4,
      title: "ICQ Diploma in Marketing",
      desc: "Marketing fundamentals with practical case studies.",
      price: 400,
      oldPrice: 550,
      rating: 4.6,
      img: images[2],
    },
  ],
};

export default courseData;
