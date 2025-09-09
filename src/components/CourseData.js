// courseData.js

// Helper function to get relevant course images from assets
const getCourseImage = (category, number) => {
  // Handle different file extensions based on category
  try {
    if (category === 'vtct') {
      if ([10, 13, 20, 22].includes(number)) {
        return require(`../Assests/${category}${number}.jpg`);
      } else {
        return require(`../Assests/${category}${number}.avif`);
      }
    } else if (category === 'seg') {
      if (number === 3) {
        return require(`../Assests/${category}${number}.avif`);
      } else {
        return require(`../Assests/${category}${number}.jpg`);
      }
    } else if (category === 'persons') {
      return require(`../Assests/${category}${number}.avif`);
    } else if (category === 'proqual') {
      return require(`../Assests/${category}${number}.jpg`);
    } else if (category === 'sqa') {
      return require(`../Assests/${category}${number}.jpg`);
    } else if (category === 'icq') {
      if (number === 4) {
        return require(`../Assests/${category}${number}.webp`);
      } else {
        return require(`../Assests/${category}${number}.jpg`);
      }
    }
  } catch (error) {
    console.warn(`Image not found: ${category}${number}`, error);
    return require('../Assests/logo00.png'); // Fallback to logo
  }
  return require('../Assests/logo00.png'); // Default fallback
};

const courseData = {
  ALL: [
    // ICQ - Education & Training Courses
    {
      id: 1,
      title: "BTEC Level 2 Certificate: Taxi & Private Hire Driver",
      desc: "This comprehensive BTEC Level 2 Certificate provides aspiring taxi and private hire drivers with all the essential knowledge required to excel in the transport industry. The course covers critical topics including road safety protocols, traffic regulations, customer service excellence, and professional conduct standards. Students will learn about legal requirements, licensing procedures, vehicle safety checks, and effective communication with passengers. Upon completion, graduates will be equipped with the confidence and expertise needed to operate safely and professionally in the competitive taxi and private hire sector, meeting all regulatory requirements while delivering exceptional customer experiences.",
      img: getCourseImage('sqa', 1),
    },
    {
      id: 2,
      title: "Level 3 Award in Education & Training",
      desc: "This Level 3 Award in Education & Training is designed for individuals who want to enter the teaching profession or enhance their existing training capabilities. The course provides comprehensive coverage of fundamental teaching principles, including understanding learner needs, planning effective sessions, and delivering engaging educational content. Participants will explore diverse teaching methodologies, assessment techniques, and classroom management strategies. The program emphasizes the importance of inclusive education, professional ethics, and continuous professional development. Graduates will gain the skills necessary to design, deliver, and evaluate training sessions across various educational settings, from corporate training environments to adult education centers.",
      img: getCourseImage('icq', 2),
    },
    {
      id: 3,
      title: "Level 3 Certificate in Assessing Vocational Achievement",
      desc: "The Level 3 Certificate in Assessing Vocational Achievement is a comprehensive qualification that prepares individuals to become competent vocational assessors across diverse industry sectors. This course covers the complete assessment cycle, from initial planning and preparation through to final evaluation and feedback delivery. Students will master various assessment methods including observation, questioning, professional discussions, and portfolio reviews. The program emphasizes fair, valid, and reliable assessment practices while ensuring compliance with awarding body requirements. Participants will develop expertise in supporting learners through their qualification journey, maintaining accurate records, and contributing to quality assurance processes within their organizations.",
      img: getCourseImage('icq', 3),
    },
    {
      id: 4,
      title: "Level 3 Award in Assessing Competence at Work",
      desc: "This Level 3 Award in Assessing Competence at Work focuses specifically on developing the skills required to assess occupational competence in real workplace environments. The course provides in-depth training on competency-based assessment principles, enabling participants to evaluate whether workers can perform their job roles to the required standards. Students will learn to design assessment plans, conduct workplace observations, gather evidence of competence, and provide constructive feedback to support professional development. The program covers legal and ethical considerations, health and safety requirements, and the importance of maintaining professional relationships with candidates throughout the assessment process.",
      img: getCourseImage('icq', 4),
    },

    // SEG - Automotive & MOT Courses
    {
      id: 5,
      title: "Level 3 MOT Management",
      desc: "The Level 3 MOT Management course at Sky Education is a comprehensive program designed for automotive professionals seeking to advance into management roles within MOT testing centers. This qualification provides detailed knowledge of MOT testing procedures, quality management systems, staff supervision, and regulatory compliance requirements. Students will learn about business operations, customer service management, equipment maintenance, and the implementation of effective quality control measures. The course covers legal responsibilities, health and safety protocols, and the management of testing documentation and records. Graduates will be prepared to lead MOT testing facilities, ensuring high standards of service delivery while maintaining strict adherence to DVSA regulations and industry best practices.",
      img: getCourseImage('seg', 1),
    },
    {
      id: 6,
      title: "MOT Class 1 & 2",
      desc: "The MOT Class 1 & 2 course at Sky Education provides comprehensive training for individuals seeking to become certified MOT testers for motorcycles and smaller vehicles. This intensive program covers all aspects of MOT testing procedures, including pre-test preparations, systematic vehicle inspections, and accurate fault identification. Students will gain hands-on experience with testing equipment, learn to interpret DVSA guidelines, and understand the legal framework governing MOT testing. The course emphasizes practical skills development, safety protocols, and the importance of maintaining testing integrity. Upon successful completion, participants will be qualified to conduct official MOT tests on Class 1 (motorcycles) and Class 2 (vehicles up to 3,000kg) vehicles, opening opportunities for employment in garages, testing stations, and automotive service centers.",
      img: getCourseImage('seg', 2),
    },
    {
      id: 7,
      title: "Level 3 Technician",
      desc: "The Level 3 Technician course at Sky Education is an advanced qualification that prepares students for senior technical positions in the automotive industry. This comprehensive program combines theoretical knowledge with extensive practical training, covering modern vehicle systems, diagnostic techniques, and repair methodologies. Students will master electronic systems, engine management, transmission systems, and emerging automotive technologies including hybrid and electric vehicles. The course emphasizes problem-solving skills, critical thinking, and the ability to work independently on complex technical challenges. Participants will develop expertise in using sophisticated diagnostic equipment, interpreting technical data, and implementing effective repair solutions. This qualification provides a solid foundation for career advancement in automotive engineering, specialist repair services, and technical consultancy roles.",
      img: getCourseImage('seg', 3),
    },
    {
      id: 8,
      title: "MOT Class 4 & 7",
      desc: "The MOT Class 4 & 7 course at Sky Education provides specialized training for automotive professionals seeking certification to test standard passenger vehicles and commercial vehicles up to 3,500kg. This comprehensive program covers the complete MOT testing process, from initial vehicle reception through to final documentation completion. Students will learn detailed inspection procedures for engines, braking systems, steering, suspension, lighting, and emissions testing. The course includes extensive practical training with real vehicles, enabling participants to develop confidence in identifying defects and making accurate pass/fail decisions. Emphasis is placed on understanding DVSA requirements, maintaining testing standards, and ensuring customer safety. Graduates will be qualified to work in MOT testing stations, garages, and automotive service centers, contributing to road safety through thorough and professional vehicle inspections.",
      img: getCourseImage('seg', 4),
    },

    // VTCT - Beauty & Aesthetics Courses (Complete List)
    {
      id: 9,
      title: "(ITEC) Level 5 Certificate in Laser Tattoo Removal",
      desc: "This advanced Level 5 Certificate in Laser Tattoo Removal represents the pinnacle of professional training in tattoo removal procedures. The course provides comprehensive theoretical knowledge and practical skills in laser technology, skin assessment, treatment protocols, and client consultation techniques. Students will learn about different laser systems, wavelengths, and their applications for various tattoo types and skin conditions. The program covers essential topics including skin anatomy, color theory, safety protocols, and post-treatment care procedures. Participants will develop expertise in conducting thorough client consultations, creating customized treatment plans, and managing client expectations throughout the removal process. This qualification is ideal for aesthetic practitioners seeking to expand their services and offer specialized tattoo removal treatments in professional clinical settings.",
      img: getCourseImage('vtct', 1),
    },
    {
      id: 10,
      title: "(ITEC) Level 5 Micropigmentation for Camouflage & Restoration",
      desc: "The Level 5 Micropigmentation for Camouflage & Restoration course is a specialized qualification designed for experienced beauty professionals seeking to provide life-changing treatments for clients with medical conditions, scars, or pigmentation disorders. This advanced program covers sophisticated micropigmentation techniques used to camouflage scars, restore areolas following mastectomy, address vitiligo, and correct various skin imperfections. Students will learn about color theory, skin assessment, needle selection, and specialized application techniques. The course emphasizes the psychological aspects of working with clients who may be dealing with trauma or medical conditions, requiring sensitivity, empathy, and professional excellence. Graduates will be equipped to provide transformative treatments that significantly improve clients' quality of life and self-confidence.",
      img: getCourseImage('vtct', 2),
    },
    {
      id: 11,
      title: "Level 4 Certificate in Micropigmentation",
      desc: "The Level 4 Certificate in Micropigmentation provides advanced training for beauty professionals seeking to master permanent makeup techniques and cosmetic tattooing procedures. This comprehensive program covers eyebrow micropigmentation, lip enhancement, eyeliner application, and corrective procedures. Students will learn about color theory, skin types, needle configurations, and machine operations while developing practical skills in consultation, design, and application techniques. The course emphasizes health and safety protocols, infection control, and professional standards required in the micropigmentation industry. Participants will gain expertise in creating natural-looking enhancements that boost client confidence and provide long-lasting results. This qualification opens opportunities in beauty salons, aesthetic clinics, and independent practice.",
      img: getCourseImage('vtct', 3),
    },
    {
      id: 12,
      title: "Level 4 Certificate in Microblading for Eyebrows",
      desc: "The Level 4 Certificate in Microblading for Eyebrows is a specialized course designed to enhance beauty professionals' expertise in semi-permanent eyebrow enhancement techniques. This intensive program covers the art and science of microblading, including blade selection, stroke techniques, color matching, and eyebrow design principles. Students will learn to assess facial structure, create symmetrical brow shapes, and execute precise hair-stroke patterns that create natural-looking results. The course includes comprehensive training in health and safety protocols, client consultation processes, aftercare procedures, and business considerations. Participants will develop the skills necessary to provide professional microblading services that enhance clients' natural beauty while maintaining the highest standards of safety and hygiene.",
      img: getCourseImage('vtct', 4),
    },
    {
      id: 13,
      title: "Level 4 Award in Skin Blemish Removal",
      desc: "The Level 4 Award in Skin Blemish Removal is a specialized qualification focusing on advanced techniques for treating various skin imperfections and blemishes. This comprehensive program covers the treatment of skin tags, age spots, thread veins, milia, warts, and other common skin conditions using advanced aesthetic techniques. Students will learn about skin anatomy, assessment procedures, treatment planning, and the safe application of various removal methods including electrolysis, laser therapy, and chemical treatments. The course emphasizes client safety, proper sterilization procedures, and post-treatment care protocols. Participants will develop the expertise necessary to provide professional blemish removal services in aesthetic clinics, beauty salons, or independent practice settings.",
      img: getCourseImage('vtct', 5),
    },
    {
      id: 14,
      title: "(ITEC) Level 4 Scalp Micropigmentation",
      desc: "The Level 4 Scalp Micropigmentation course provides specialized training for practitioners seeking to offer innovative hair loss solutions through scalp tattooing techniques. This advanced program covers the theory and practice of scalp micropigmentation, including hairline design, density creation, scar camouflage, and treatment planning for various types of hair loss. Students will learn about scalp anatomy, pigment selection, needle techniques, and machine operations while developing skills in client consultation and expectation management. The course emphasizes the psychological aspects of hair loss, requiring practitioners to demonstrate sensitivity and professionalism when working with clients experiencing confidence issues. Graduates will be equipped to provide life-changing treatments that restore the appearance of hair density and improve client self-esteem.",
      img: getCourseImage('vtct', 6),
    },
    {
      id: 15,
      title: "Level 3 NVQ Diploma in Beauty Therapy General",
      desc: "The Level 3 NVQ Diploma in Beauty Therapy General is a comprehensive qualification designed to advance skills across all aspects of professional beauty therapy. This extensive program covers advanced facial treatments, body therapies, massage techniques, nail services, and hair removal methods. Students will develop expertise in skin analysis, treatment planning, product knowledge, and specialized beauty equipment operation. The course includes practical training in salon management, client consultation, retail sales, and professional development. Emphasis is placed on maintaining high standards of hygiene, health and safety protocols, and excellent customer service. This qualification prepares graduates for senior positions in beauty salons, spas, cruise ships, or to establish their own successful beauty therapy businesses.",
      img: getCourseImage('vtct', 7),
    },
    {
      id: 16,
      title: "Level 3 Certificate in Epilation",
      desc: "The Level 3 Certificate in Epilation provides specialized training in advanced hair removal techniques using electrical epilation methods. This comprehensive program covers the theory and practice of electrolysis, thermolysis, and blend techniques for permanent hair removal. Students will learn about hair growth cycles, follicle structure, skin types, and the selection of appropriate treatment methods for different areas of the body. The course emphasizes health and safety protocols, sterilization procedures, client assessment, and treatment planning. Practical training includes hands-on experience with professional epilation equipment, probe selection, and technique refinement. Graduates will be qualified to provide permanent hair removal services in beauty salons, aesthetic clinics, or as independent practitioners.",
      img: getCourseImage('vtct', 8),
    },
    {
      id: 17,
      title: "Level 3 Award in Anatomy & Physiology",
      desc: "The Level 3 Award in Anatomy & Physiology provides comprehensive knowledge of anatomical and physiological systems essential for beauty therapy and aesthetic treatments. This detailed program covers all major body systems including skeletal, muscular, circulatory, respiratory, nervous, digestive, and reproductive systems. Students will learn about tissue types, organ functions, homeostasis, and the physiological processes that affect skin health and appearance. The course emphasizes understanding how various treatments and products interact with body systems and the importance of contraindications and precautions. This qualification is essential for beauty professionals seeking to advance to higher levels of training or those working with advanced treatment modalities requiring detailed anatomical knowledge.",
      img: getCourseImage('vtct', 9),
    },
    {
      id: 18,
      title: "Level 2 NVQ Diploma in Beauty Therapy General",
      desc: "The Level 2 NVQ Diploma in Beauty Therapy General is a foundational qualification for aspiring beauty professionals entering the industry. This comprehensive program covers essential beauty treatments including basic facials, manicures, pedicures, eyebrow shaping, eyelash tinting, and basic hair removal techniques. Students will learn fundamental skills in client consultation, skin analysis, product application, and treatment planning. The course emphasizes health and safety protocols, hygiene standards, professional presentation, and customer service excellence. Practical training is combined with theoretical knowledge to ensure graduates are workplace-ready. This qualification provides the foundation for entry-level positions in beauty salons, spas, or retail environments, and serves as a stepping stone to advanced beauty therapy qualifications.",
      img: getCourseImage('vtct', 10),
    },
    {
      id: 19,
      title: "Level 2 Award in Facial Care",
      desc: "The Level 2 Award in Facial Care is an introductory course perfect for those starting their journey in facial treatments and skincare. This foundational program covers basic skin types, facial cleansing techniques, mask applications, and simple facial massage methods. Students will learn to identify different skin conditions, select appropriate products, and perform relaxing facial treatments that improve skin health and appearance. The course includes training in consultation techniques, health and safety procedures, and professional standards required in the beauty industry. Emphasis is placed on developing confidence in treatment delivery and understanding client needs. This qualification opens opportunities for employment in beauty salons, spas, or provides a solid foundation for further specialized training in advanced facial treatments.",
      img: getCourseImage('vtct', 11),
    },
    {
      id: 20,
      title: "Level 2 Award in Facial Massage & Skincare",
      desc: "The Level 2 Award in Facial Massage & Skincare provides entry-level training in facial massage techniques and skincare practices essential for beauty therapy. This comprehensive program covers various massage techniques including effleurage, petrissage, and lymphatic drainage methods specifically designed for facial treatments. Students will learn about facial anatomy, muscle structure, and the benefits of massage for skin health and relaxation. The course includes training in product selection, skin analysis, treatment planning, and professional application techniques. Emphasis is placed on developing confidence in touch therapy, understanding contraindications, and maintaining high standards of hygiene and safety. Graduates will be equipped to provide relaxing and therapeutic facial treatments in professional beauty therapy settings.",
      img: getCourseImage('vtct', 12),
    },
    {
      id: 21,
      title: "(ITEC) Core of Knowledge",
      desc: "The ITEC Core of Knowledge course provides essential foundation training in laser and light device safety, theory, and practical knowledge required for advanced aesthetic treatments. This fundamental program covers the physics of light and laser technology, skin interaction with various wavelengths, safety protocols, and regulatory requirements for operating laser and IPL equipment. Students will learn about different laser types, their applications, treatment protocols, and potential complications. The course emphasizes risk assessment, client selection, contraindications, and emergency procedures. This qualification is mandatory for practitioners seeking to work with laser and light-based treatments and serves as a prerequisite for advanced laser therapy courses. It ensures practitioners have the necessary theoretical foundation to operate sophisticated aesthetic equipment safely and effectively.",
      img: getCourseImage('vtct', 13),
    },
    {
      id: 22,
      title: "Level 4 Diploma in Permanent Hair Removal & Skin Rejuvenation",
      desc: "The Level 4 Diploma in Permanent Hair Removal & Skin Rejuvenation is an advanced vocational qualification combining comprehensive training in laser hair removal and skin rejuvenation treatments. This extensive program covers multiple laser and IPL systems, treatment protocols for different skin types, and advanced techniques for achieving optimal results. Students will master client assessment, treatment planning, parameter selection, and post-treatment care for both hair removal and skin rejuvenation procedures. The course includes training in treating various skin conditions, anti-aging treatments, and corrective procedures. Emphasis is placed on safety protocols, complication management, and building a successful aesthetic practice. Graduates will be qualified to work in medical aesthetic clinics, beauty clinics, or establish independent laser therapy practices.",
      img: getCourseImage('vtct', 14),
    },
    {
      id: 23,
      title: "Level 4 Diploma in Hair Reduction & Skin Rejuvenation (Laser & IPL)",
      desc: "The Level 4 Diploma in Hair Reduction & Skin Rejuvenation (Laser & IPL) provides specialized training in advanced aesthetic treatments using both laser and intense pulsed light technologies. This comprehensive program covers the theory and practice of hair reduction treatments, skin rejuvenation procedures, and combination therapies for optimal client results. Students will learn to operate various laser and IPL systems, understand the physics of different wavelengths, and master treatment protocols for diverse skin types and conditions. The course emphasizes practical skills development, safety procedures, client consultation, and treatment planning. Advanced topics include treating ethnic skin types, managing complications, and business development in the aesthetic industry. Graduates will be qualified to provide professional laser and IPL treatments in clinical settings.",
      img: getCourseImage('vtct', 15),
    },
    {
      id: 24,
      title: "Level 4 Certificate in Laser & IPL Treatments",
      desc: "The Level 4 Certificate in Laser & IPL Treatments is a professional qualification designed for beauty and aesthetic practitioners seeking expertise in light-based therapies. This comprehensive program covers the operation of laser and intense pulsed light systems for hair removal, skin rejuvenation, pigmentation treatment, and vascular lesion therapy. Students will learn about photobiology, skin-light interactions, treatment parameters, and safety protocols. The course includes extensive practical training with various laser and IPL devices, client assessment techniques, and treatment planning methodologies. Emphasis is placed on achieving optimal results while maintaining client safety and comfort. Graduates will be qualified to work in aesthetic clinics, medical spas, or beauty clinics offering advanced light-based treatments.",
      img: getCourseImage('vtct', 16),
    },
    {
      id: 25,
      title: "(ITEC) Level 4 Certificate in Hair Reduction & Skin Rejuvenation (Laser)",
      desc: "The ITEC Level 4 Certificate in Hair Reduction & Skin Rejuvenation (Laser) provides advanced qualification specifically focused on laser-based treatments for hair removal and skin improvement. This specialized program covers various laser technologies including Alexandrite, Diode, and Nd:YAG lasers, their specific applications, and optimal treatment protocols. Students will develop expertise in laser physics, skin assessment, treatment planning, and advanced techniques for achieving superior results. The course emphasizes safety protocols, complication management, and professional practice standards. Practical training includes hands-on experience with professional laser equipment and real client treatments. This qualification prepares practitioners for specialized roles in laser therapy clinics and medical aesthetic facilities where precision and expertise in laser treatments are essential.",
      img: getCourseImage('vtct', 17),
    },
    {
      id: 26,
      title: "(ITEC) Level 4 Certificate in Hair Reduction & Skin Rejuvenation (IPL)",
      desc: "The ITEC Level 4 Certificate in Hair Reduction & Skin Rejuvenation (IPL) focuses specifically on intense pulsed light technology for aesthetic treatments. This comprehensive program provides in-depth training in IPL systems, their applications for hair removal, skin rejuvenation, pigmentation treatment, and vascular therapies. Students will learn about broad-spectrum light technology, filter selection, treatment parameters, and protocols for different skin types and conditions. The course covers client consultation, skin analysis, treatment planning, and post-treatment care specific to IPL procedures. Emphasis is placed on understanding the versatility of IPL technology and maximizing treatment outcomes while ensuring client safety. Graduates will be qualified to provide professional IPL treatments in beauty clinics, aesthetic centers, and spa environments.",
      img: getCourseImage('vtct', 18),
    },
    {
      id: 27,
      title: "(ITEC) Level 4 Award in Skin Rejuvenation (Laser)",
      desc: "The ITEC Level 4 Award in Skin Rejuvenation (Laser) is a specialist qualification focused on using laser technology for anti-aging and skin improvement treatments. This advanced program covers fractional lasers, ablative and non-ablative treatments, and specialized protocols for addressing aging skin, acne scarring, and texture irregularities. Students will learn about laser-tissue interactions, treatment selection, protocol development, and combination therapy approaches. The course emphasizes understanding different laser wavelengths, their specific applications, and techniques for achieving optimal rejuvenation results. Training includes client assessment, treatment planning, pre and post-treatment care, and managing client expectations. This qualification is ideal for practitioners seeking to specialize in laser-based anti-aging treatments in medical aesthetic or advanced beauty therapy settings.",
      img: getCourseImage('vtct', 19),
    },
    {
      id: 28,
      title: "(ITEC) Level 4 Award in Skin Rejuvenation (IPL)",
      desc: "The ITEC Level 4 Award in Skin Rejuvenation (IPL) specializes in using intense pulsed light technology for comprehensive skin improvement and anti-aging treatments. This focused program covers IPL applications for photorejuvenation, sun damage treatment, age spot removal, and overall skin texture enhancement. Students will learn about optimal wavelength selection, treatment protocols for different skin types, and combination approaches for maximum rejuvenation benefits. The course includes training in client assessment, skin analysis, treatment planning, and post-treatment care specific to IPL rejuvenation procedures. Emphasis is placed on understanding the science behind photorejuvenation and developing skills to achieve natural-looking, age-defying results. Graduates will be qualified to provide professional IPL skin rejuvenation treatments in aesthetic and beauty therapy environments.",
      img: getCourseImage('vtct', 20),
    },
    {
      id: 29,
      title: "(ITEC) Level 4 Award in Hair Reduction (Laser)",
      desc: "The ITEC Level 4 Award in Hair Reduction (Laser) is a professional course specializing in laser hair removal treatments using advanced laser technologies. This comprehensive program covers different laser types including Alexandrite, Diode, and Nd:YAG lasers, their specific applications for hair removal on various skin types and hair colors. Students will learn about hair growth cycles, laser-hair interactions, treatment protocols, and techniques for achieving permanent hair reduction. The course emphasizes parameter selection, safety protocols, client consultation, and treatment planning for optimal results. Practical training includes hands-on experience with professional laser equipment and various hair removal scenarios. This qualification prepares practitioners for specialized roles in laser hair removal clinics and aesthetic centers where expertise in permanent hair reduction is required.",
      img: getCourseImage('vtct', 21),
    },
    {
      id: 30,
      title: "(ITEC) Level 4 Award in Hair Reduction (IPL)",
      desc: "The ITEC Level 4 Award in Hair Reduction (IPL) focuses specifically on using intense pulsed light technology for professional hair removal treatments. This specialized program covers IPL systems, their applications for hair reduction on different skin types, and optimal treatment protocols for achieving long-lasting hair removal results. Students will learn about broad-spectrum light technology, filter selection for hair removal, treatment parameters, and protocols for various body areas. The course includes training in client consultation, skin and hair assessment, treatment planning, and post-treatment care specific to IPL hair removal. Emphasis is placed on understanding IPL technology's effectiveness for hair reduction and developing skills to provide safe, comfortable treatments. Graduates will be qualified to provide professional IPL hair removal services in beauty salons, aesthetic clinics, and spa environments.",
      img: getCourseImage('vtct', 22),
    },

    // PERSONS - English & Math Courses
    {
      id: 31,
      title: "Level 2 Maths",
      desc: "The Level 2 Maths course provides students with an in-depth exploration of advanced mathematical concepts and methods designed to challenge and develop sophisticated problem-solving skills. This comprehensive program covers algebraic manipulation, geometric principles, statistical analysis, and mathematical reasoning. Students will work with complex equations, graphical representations, probability calculations, and data interpretation. The course is designed to bridge the gap between basic mathematical understanding and higher-level mathematical applications required in professional and academic contexts. Emphasis is placed on developing analytical thinking, logical reasoning, and the ability to apply mathematical concepts to real-world situations. Upon completion, students will have the mathematical competency equivalent to a GCSE grade 4-9, opening pathways to further education, apprenticeships, and career opportunities in fields requiring strong numerical skills.",
      img: getCourseImage('persons', 1),
    },
    {
      id: 32,
      title: "Level 1 Maths",
      desc: "The Level 1 Maths course provides students with a thorough understanding of fundamental mathematical principles, focusing on basic algebra, proportions, statistics, and practical mathematical applications. This intermediate-level program builds upon entry-level mathematics, introducing more complex concepts while maintaining accessibility for learners developing their mathematical confidence. Students will work with fractions, decimals, percentages, basic algebraic expressions, and introductory statistical concepts. The course emphasizes practical applications of mathematics in everyday situations, workplace contexts, and preparation for further mathematical study. Learning activities include problem-solving exercises, data handling projects, and real-world mathematical scenarios that demonstrate the relevance and importance of mathematical skills in personal and professional life.",
      img: getCourseImage('persons', 2),
    },
    {
      id: 33,
      title: "Entry Level 3 Maths",
      desc: "The Entry Level 3 Maths course is designed to develop students' ability to handle mathematical information and concepts independently, with a strong focus on practical applications in everyday life and work situations. This course bridges the gap between basic numeracy and more advanced mathematical study, providing learners with the confidence and skills needed to tackle mathematical challenges. Students will work with number operations, basic geometry, data handling, and measurement concepts through engaging, real-world contexts. The program emphasizes building mathematical confidence, developing logical thinking skills, and understanding how mathematics applies to daily activities such as budgeting, shopping, cooking, and workplace tasks. Assessment methods are designed to be supportive and encouraging, helping students recognize their mathematical achievements and progress.",
      img: getCourseImage('persons', 3),
    },
    {
      id: 34,
      title: "Entry Level 2 Maths",
      desc: "The Entry Level 2 Maths course builds upon foundational mathematical concepts, introducing new topics including fractions, basic measurements, and elementary problem-solving techniques for everyday applications. This supportive learning environment helps students develop mathematical confidence while working with practical scenarios that demonstrate the relevance of mathematics in daily life. Students will explore number relationships, simple calculations, basic shapes and space concepts, and introductory data handling through hands-on activities and real-world examples. The course focuses on developing mathematical vocabulary, understanding numerical relationships, and building the foundation skills necessary for progression to higher levels of mathematical study. Teaching methods emphasize practical application, visual learning aids, and collaborative problem-solving to ensure all students can achieve success.",
      img: getCourseImage('persons', 4),
    },
    {
      id: 35,
      title: "Entry Level 1 Maths",
      desc: "The Entry Level 1 Maths course provides a supportive introduction to basic mathematical concepts and practical skills essential for daily life activities, designed specifically for learners who are beginning their mathematical journey or returning to education after a break. This foundational course covers fundamental number work, basic counting, simple calculations, recognition of shapes, and introductory measurement concepts through engaging, practical activities. Students will work with money calculations, time concepts, basic data collection, and simple problem-solving in familiar contexts. The learning environment is designed to be encouraging and non-threatening, with emphasis placed on building confidence, developing mathematical language, and recognizing mathematical concepts in everyday situations. Individual support and differentiated learning approaches ensure that every student can achieve personal success and progress.",
      img: getCourseImage('persons', 5),
    },
    {
      id: 36,
      title: "Level 2 English",
      desc: "The Level 2 English course is designed to develop fluent communication skills suitable for diverse personal, educational, and professional contexts, significantly enhancing both spoken and written English capabilities. This comprehensive program covers advanced grammar structures, vocabulary expansion, critical reading skills, and sophisticated writing techniques. Students will engage with various text types including literature, reports, articles, and creative writing, developing analytical and interpretative skills. The course emphasizes effective communication in different contexts, presentation skills, and the ability to adapt language and style to suit specific audiences and purposes. Practical activities include essay writing, oral presentations, group discussions, and creative projects that build confidence and competency in English language use at an advanced level.",
      img: getCourseImage('persons', 6),
    },
    {
      id: 37,
      title: "Level 1 English",
      desc: "The Level 1 English course helps students refine their command of English, developing independent communication skills suitable for both professional and personal contexts. This intermediate-level program focuses on improving written and spoken English through structured learning activities, grammar development, and vocabulary expansion. Students will work with different text types, practice formal and informal writing styles, and develop confidence in speaking and listening skills. The course covers essential communication skills including letter writing, report preparation, reading comprehension, and verbal communication techniques. Emphasis is placed on developing critical thinking skills, understanding different writing purposes, and building the language competencies needed for further education, employment opportunities, and effective participation in community life.",
      img: getCourseImage('persons', 7),
    },
    {
      id: 38,
      title: "Entry Level 3 English",
      desc: "The Entry Level 3 English course prepares students for practical usage of English, focusing on developing skills to engage effectively in real-world communication tasks and social interactions. This course builds upon basic English skills, introducing more complex language structures, extended vocabulary, and varied communication scenarios. Students will practice reading different types of texts, writing for various purposes, speaking in different situations, and listening for specific information. The program emphasizes functional English skills that are directly applicable to everyday life, including completing forms, understanding instructions, participating in discussions, and expressing opinions clearly. Learning activities are designed to be engaging and relevant, helping students develop confidence in using English in community, workplace, and educational settings.",
      img: getCourseImage('persons', 8),
    },
    {
      id: 39,
      title: "Entry Level 2 English",
      desc: "The Entry Level 2 English course focuses on enhancing basic communication skills through improved vocabulary development and structured sentence formation, building upon foundational English knowledge. Students will work on expanding their word knowledge, understanding basic grammar rules, and developing more complex communication abilities. The course covers reading simple texts, writing basic sentences and paragraphs, speaking clearly in familiar situations, and listening to understand key information. Learning activities include vocabulary building exercises, guided writing tasks, structured conversation practice, and reading comprehension activities using accessible texts. The supportive learning environment encourages students to practice their English skills confidently, with emphasis on practical communication that can be immediately applied in daily life situations.",
      img: getCourseImage('persons', 9),
    },
    {
      id: 40,
      title: "Entry Level 1 English",
      desc: "The Entry Level 1 English course lays the foundation for effective communication by introducing essential English speaking and writing skills in a supportive, encouraging learning environment. This beginner-level course is designed for learners who are new to English or returning to formal education after an extended break. Students will learn basic vocabulary, simple sentence structures, fundamental grammar concepts, and essential communication skills for everyday situations. The course covers basic reading skills, simple writing tasks, clear speaking practice, and listening for familiar information. Learning activities are practical and engaging, focusing on immediate communication needs such as introductions, basic conversations, simple instructions, and everyday vocabulary. Individual support and differentiated teaching methods ensure that every student can progress at their own pace while building confidence in English communication.",
      img: getCourseImage('persons', 10),
    },

    // PRO QUAL - Security & Safety Courses
    {
      id: 41,
      title: "Level 2 Award in Site Security",
      desc: "The Level 2 Award in Site Security provides students with a comprehensive foundation in modern security principles, risk assessment methodologies, and workplace safety protocols essential for professional security operations. This course covers fundamental security concepts including threat identification, access control systems, surveillance techniques, and emergency response procedures. Students will learn about legal frameworks governing security work, professional conduct standards, and the importance of maintaining confidentiality and integrity. The program includes practical training in security equipment usage, report writing, communication skills, and conflict resolution techniques. Emphasis is placed on understanding security risks in different environments, developing situational awareness, and implementing appropriate security measures to protect people, property, and assets.",
      img: getCourseImage('proqual', 1),
    },
    {
      id: 42,
      title: "Level 2 First Aid",
      desc: "The Level 2 First Aid course provides comprehensive training in essential life-saving skills, equipping participants with the knowledge and confidence to respond effectively to medical emergencies and accident situations. This intensive program covers CPR techniques, wound management, shock treatment, and the management of various medical conditions including heart attacks, strokes, and breathing difficulties. Students will learn to assess emergency situations, prioritize treatment, and provide appropriate care while awaiting professional medical assistance. The course includes hands-on practical training with mannequins, role-playing scenarios, and the use of first aid equipment. Participants will develop skills in patient assessment, communication with emergency services, and maintaining accurate records of treatment provided. This qualification is essential for workplace first aiders and anyone seeking to develop potentially life-saving skills.",
      img: getCourseImage('proqual', 2),
    },
    {
      id: 43,
      title: "Level 1 Health & Safety in Construction",
      desc: "The Level 1 Health & Safety in Construction course provides a comprehensive introduction to essential health and safety practices, regulations, and responsibilities within the construction sector. This foundational program covers key topics including hazard identification, risk assessment procedures, personal protective equipment usage, and safe working practices on construction sites. Students will learn about legal requirements, accident prevention strategies, emergency procedures, and the importance of maintaining a safety-first culture in construction environments. The course includes practical elements such as site safety inspections, safety equipment demonstrations, and case study analyses of construction accidents. Emphasis is placed on developing safety awareness, understanding regulatory compliance requirements, and building the knowledge foundation necessary for safe participation in construction activities.",
      img: getCourseImage('proqual', 3),
    },

    // SQA - Taxi & Private Hire Courses
    {
      id: 44,
      title: "Level 2 SQA iCQ: Professional Taxi & Private Hire Driver",
      desc: "The Level 2 SQA iCQ Professional Taxi & Private Hire Driver course introduces aspiring drivers to the comprehensive professional standards required in the passenger transport industry, with particular focus on safety protocols, regulatory compliance, and customer service excellence. This specialized program covers essential topics including local area knowledge, route planning, passenger safety procedures, and professional conduct standards. Students will learn about licensing requirements, vehicle maintenance responsibilities, fare calculation methods, and effective communication with diverse passengers. The course emphasizes the importance of providing exceptional customer service, managing difficult situations professionally, and maintaining high standards of personal and vehicle presentation. Practical elements include navigation skills, customer interaction scenarios, and understanding of accessibility requirements for passengers with special needs.",
      img: getCourseImage('sqa', 1),
    },
    {
      id: 45,
      title: "Level 5 SQA: Professional Taxi & Private Hire Driver Role",
      desc: "The Level 5 SQA Professional Taxi & Private Hire Driver Role course provides advanced comprehensive knowledge for experienced drivers seeking to excel in the passenger transport sector, covering sophisticated customer care strategies, advanced safety protocols, and detailed industry regulations. This higher-level qualification explores complex aspects of professional driving including advanced route optimization, customer relationship management, business development principles, and leadership skills for those aspiring to supervisory or training roles. Students will develop expertise in handling challenging situations, providing specialized services for different passenger groups, and understanding the commercial aspects of the taxi and private hire industry. The course includes advanced communication techniques, conflict resolution strategies, and the development of professional networks within the transport industry.",
      img: getCourseImage('sqa', 2),
    },
  ],

  SEG: [
    {
      id: 1,
      title: "Level 3 MOT Management",
      desc: "The Level 3 MOT Management course at Sky Education is a comprehensive program designed for automotive professionals seeking to advance into management roles within MOT testing centers. This qualification provides detailed knowledge of MOT testing procedures, quality management systems, staff supervision, and regulatory compliance requirements. Students will learn about business operations, customer service management, equipment maintenance, and the implementation of effective quality control measures. The course covers legal responsibilities, health and safety protocols, and the management of testing documentation and records. Graduates will be prepared to lead MOT testing facilities, ensuring high standards of service delivery while maintaining strict adherence to DVSA regulations and industry best practices.",
      img: getCourseImage('seg', 1),
    },
    {
      id: 2,
      title: "MOT Class 1 & 2",
      desc: "The MOT Class 1 & 2 course at Sky Education provides comprehensive training for individuals seeking to become certified MOT testers for motorcycles and smaller vehicles. This intensive program covers all aspects of MOT testing procedures, including pre-test preparations, systematic vehicle inspections, and accurate fault identification. Students will gain hands-on experience with testing equipment, learn to interpret DVSA guidelines, and understand the legal framework governing MOT testing. The course emphasizes practical skills development, safety protocols, and the importance of maintaining testing integrity. Upon successful completion, participants will be qualified to conduct official MOT tests on Class 1 (motorcycles) and Class 2 (vehicles up to 3,000kg) vehicles, opening opportunities for employment in garages, testing stations, and automotive service centers.",
      img: getCourseImage('seg', 2),
    },
    {
      id: 3,
      title: "Level 3 Technician",
      desc: "The Level 3 Technician course at Sky Education is an advanced qualification that prepares students for senior technical positions in the automotive industry. This comprehensive program combines theoretical knowledge with extensive practical training, covering modern vehicle systems, diagnostic techniques, and repair methodologies. Students will master electronic systems, engine management, transmission systems, and emerging automotive technologies including hybrid and electric vehicles. The course emphasizes problem-solving skills, critical thinking, and the ability to work independently on complex technical challenges. Participants will develop expertise in using sophisticated diagnostic equipment, interpreting technical data, and implementing effective repair solutions. This qualification provides a solid foundation for career advancement in automotive engineering, specialist repair services, and technical consultancy roles.",
      img: getCourseImage('seg', 3),
    },
    {
      id: 4,
      title: "MOT Class 4 & 7",
      desc: "The MOT Class 4 & 7 course at Sky Education provides specialized training for automotive professionals seeking certification to test standard passenger vehicles and commercial vehicles up to 3,500kg. This comprehensive program covers the complete MOT testing process, from initial vehicle reception through to final documentation completion. Students will learn detailed inspection procedures for engines, braking systems, steering, suspension, lighting, and emissions testing. The course includes extensive practical training with real vehicles, enabling participants to develop confidence in identifying defects and making accurate pass/fail decisions. Emphasis is placed on understanding DVSA requirements, maintaining testing standards, and ensuring customer safety. Graduates will be qualified to work in MOT testing stations, garages, and automotive service centers, contributing to road safety through thorough and professional vehicle inspections.",
      img: getCourseImage('seg', 4),
    },
  ],

  VTCT: [
    {
      id: 1,
      title: "(ITEC) Level 5 Certificate in Laser Tattoo Removal",
      desc: "This advanced Level 5 Certificate in Laser Tattoo Removal represents the pinnacle of professional training in tattoo removal procedures. The course provides comprehensive theoretical knowledge and practical skills in laser technology, skin assessment, treatment protocols, and client consultation techniques. Students will learn about different laser systems, wavelengths, and their applications for various tattoo types and skin conditions. The program covers essential topics including skin anatomy, color theory, safety protocols, and post-treatment care procedures. Participants will develop expertise in conducting thorough client consultations, creating customized treatment plans, and managing client expectations throughout the removal process. This qualification is ideal for aesthetic practitioners seeking to expand their services and offer specialized tattoo removal treatments in professional clinical settings.",
      img: getCourseImage('vtct', 1),
    },
    {
      id: 2,
      title: "(ITEC) Level 5 Micropigmentation for Camouflage & Restoration",
      desc: "The Level 5 Micropigmentation for Camouflage & Restoration course is a specialized qualification designed for experienced beauty professionals seeking to provide life-changing treatments for clients with medical conditions, scars, or pigmentation disorders. This advanced program covers sophisticated micropigmentation techniques used to camouflage scars, restore areolas following mastectomy, address vitiligo, and correct various skin imperfections. Students will learn about color theory, skin assessment, needle selection, and specialized application techniques. The course emphasizes the psychological aspects of working with clients who may be dealing with trauma or medical conditions, requiring sensitivity, empathy, and professional excellence. Graduates will be equipped to provide transformative treatments that significantly improve clients' quality of life and self-confidence.",
      img: getCourseImage('vtct', 2),
    },
    {
      id: 3,
      title: "Level 4 Certificate in Micropigmentation",
      desc: "The Level 4 Certificate in Micropigmentation provides advanced training for beauty professionals seeking to master permanent makeup techniques and cosmetic tattooing procedures. This comprehensive program covers eyebrow micropigmentation, lip enhancement, eyeliner application, and corrective procedures. Students will learn about color theory, skin types, needle configurations, and machine operations while developing practical skills in consultation, design, and application techniques. The course emphasizes health and safety protocols, infection control, and professional standards required in the micropigmentation industry. Participants will gain expertise in creating natural-looking enhancements that boost client confidence and provide long-lasting results. This qualification opens opportunities in beauty salons, aesthetic clinics, and independent practice.",
      img: getCourseImage('vtct', 3),
    },
    {
      id: 4,
      title: "Level 4 Certificate in Microblading for Eyebrows",
      desc: "The Level 4 Certificate in Microblading for Eyebrows is a specialized course designed to enhance beauty professionals' expertise in semi-permanent eyebrow enhancement techniques. This intensive program covers the art and science of microblading, including blade selection, stroke techniques, color matching, and eyebrow design principles. Students will learn to assess facial structure, create symmetrical brow shapes, and execute precise hair-stroke patterns that create natural-looking results. The course includes comprehensive training in health and safety protocols, client consultation processes, aftercare procedures, and business considerations. Participants will develop the skills necessary to provide professional microblading services that enhance clients' natural beauty while maintaining the highest standards of safety and hygiene.",
      img: getCourseImage('vtct', 4),
    },
    {
      id: 5,
      title: "Level 4 Award in Skin Blemish Removal",
      desc: "The Level 4 Award in Skin Blemish Removal is a specialized qualification focusing on advanced techniques for treating various skin imperfections and blemishes. This comprehensive program covers the treatment of skin tags, age spots, thread veins, milia, warts, and other common skin conditions using advanced aesthetic techniques. Students will learn about skin anatomy, assessment procedures, treatment planning, and the safe application of various removal methods including electrolysis, laser therapy, and chemical treatments. The course emphasizes client safety, proper sterilization procedures, and post-treatment care protocols. Participants will develop the expertise necessary to provide professional blemish removal services in aesthetic clinics, beauty salons, or independent practice settings.",
      img: getCourseImage('vtct', 5),
    },
    {
      id: 6,
      title: "(ITEC) Level 4 Scalp Micropigmentation",
      desc: "The Level 4 Scalp Micropigmentation course provides specialized training for practitioners seeking to offer innovative hair loss solutions through scalp tattooing techniques. This advanced program covers the theory and practice of scalp micropigmentation, including hairline design, density creation, scar camouflage, and treatment planning for various types of hair loss. Students will learn about scalp anatomy, pigment selection, needle techniques, and machine operations while developing skills in client consultation and expectation management. The course emphasizes the psychological aspects of hair loss, requiring practitioners to demonstrate sensitivity and professionalism when working with clients experiencing confidence issues. Graduates will be equipped to provide life-changing treatments that restore the appearance of hair density and improve client self-esteem.",
      img: getCourseImage('vtct', 6),
    },
    {
      id: 7,
      title: "Level 3 NVQ Diploma in Beauty Therapy General",
      desc: "The Level 3 NVQ Diploma in Beauty Therapy General is a comprehensive qualification designed to advance skills across all aspects of professional beauty therapy. This extensive program covers advanced facial treatments, body therapies, massage techniques, nail services, and hair removal methods. Students will develop expertise in skin analysis, treatment planning, product knowledge, and specialized beauty equipment operation. The course includes practical training in salon management, client consultation, retail sales, and professional development. Emphasis is placed on maintaining high standards of hygiene, health and safety protocols, and excellent customer service. This qualification prepares graduates for senior positions in beauty salons, spas, cruise ships, or to establish their own successful beauty therapy businesses.",
      img: getCourseImage('vtct', 7),
    },
    {
      id: 8,
      title: "Level 3 Certificate in Epilation",
      desc: "The Level 3 Certificate in Epilation provides specialized training in advanced hair removal techniques using electrical epilation methods. This comprehensive program covers the theory and practice of electrolysis, thermolysis, and blend techniques for permanent hair removal. Students will learn about hair growth cycles, follicle structure, skin types, and the selection of appropriate treatment methods for different areas of the body. The course emphasizes health and safety protocols, sterilization procedures, client assessment, and treatment planning. Practical training includes hands-on experience with professional epilation equipment, probe selection, and technique refinement. Graduates will be qualified to provide permanent hair removal services in beauty salons, aesthetic clinics, or as independent practitioners.",
      img: getCourseImage('vtct', 8),
    },
    {
      id: 9,
      title: "Level 3 Award in Anatomy & Physiology",
      desc: "The Level 3 Award in Anatomy & Physiology provides comprehensive knowledge of anatomical and physiological systems essential for beauty therapy and aesthetic treatments. This detailed program covers all major body systems including skeletal, muscular, circulatory, respiratory, nervous, digestive, and reproductive systems. Students will learn about tissue types, organ functions, homeostasis, and the physiological processes that affect skin health and appearance. The course emphasizes understanding how various treatments and products interact with body systems and the importance of contraindications and precautions. This qualification is essential for beauty professionals seeking to advance to higher levels of training or those working with advanced treatment modalities requiring detailed anatomical knowledge.",
      img: getCourseImage('vtct', 9),
    },
    {
      id: 10,
      title: "Level 2 NVQ Diploma in Beauty Therapy General",
      desc: "The Level 2 NVQ Diploma in Beauty Therapy General is a foundational qualification for aspiring beauty professionals entering the industry. This comprehensive program covers essential beauty treatments including basic facials, manicures, pedicures, eyebrow shaping, eyelash tinting, and basic hair removal techniques. Students will learn fundamental skills in client consultation, skin analysis, product application, and treatment planning. The course emphasizes health and safety protocols, hygiene standards, professional presentation, and customer service excellence. Practical training is combined with theoretical knowledge to ensure graduates are workplace-ready. This qualification provides the foundation for entry-level positions in beauty salons, spas, or retail environments, and serves as a stepping stone to advanced beauty therapy qualifications.",
      img: getCourseImage('vtct', 10),
    },
    {
      id: 11,
      title: "Level 2 Award in Facial Care",
      desc: "The Level 2 Award in Facial Care is an introductory course perfect for those starting their journey in facial treatments and skincare. This foundational program covers basic skin types, facial cleansing techniques, mask applications, and simple facial massage methods. Students will learn to identify different skin conditions, select appropriate products, and perform relaxing facial treatments that improve skin health and appearance. The course includes training in consultation techniques, health and safety procedures, and professional standards required in the beauty industry. Emphasis is placed on developing confidence in treatment delivery and understanding client needs. This qualification opens opportunities for employment in beauty salons, spas, or provides a solid foundation for further specialized training in advanced facial treatments.",
      img: getCourseImage('vtct', 11),
    },
    {
      id: 12,
      title: "Level 2 Award in Facial Massage & Skincare",
      desc: "The Level 2 Award in Facial Massage & Skincare provides entry-level training in facial massage techniques and skincare practices essential for beauty therapy. This comprehensive program covers various massage techniques including effleurage, petrissage, and lymphatic drainage methods specifically designed for facial treatments. Students will learn about facial anatomy, muscle structure, and the benefits of massage for skin health and relaxation. The course includes training in product selection, skin analysis, treatment planning, and professional application techniques. Emphasis is placed on developing confidence in touch therapy, understanding contraindications, and maintaining high standards of hygiene and safety. Graduates will be equipped to provide relaxing and therapeutic facial treatments in professional beauty therapy settings.",
      img: getCourseImage('vtct', 12),
    },
    {
      id: 13,
      title: "(ITEC) Core of Knowledge",
      desc: "The ITEC Core of Knowledge course provides essential foundation training in laser and light device safety, theory, and practical knowledge required for advanced aesthetic treatments. This fundamental program covers the physics of light and laser technology, skin interaction with various wavelengths, safety protocols, and regulatory requirements for operating laser and IPL equipment. Students will learn about different laser types, their applications, treatment protocols, and potential complications. The course emphasizes risk assessment, client selection, contraindications, and emergency procedures. This qualification is mandatory for practitioners seeking to work with laser and light-based treatments and serves as a prerequisite for advanced laser therapy courses. It ensures practitioners have the necessary theoretical foundation to operate sophisticated aesthetic equipment safely and effectively.",
      img: getCourseImage('vtct', 13),
    },
    {
      id: 14,
      title: "Level 4 Diploma in Permanent Hair Removal & Skin Rejuvenation",
      desc: "The Level 4 Diploma in Permanent Hair Removal & Skin Rejuvenation is an advanced vocational qualification combining comprehensive training in laser hair removal and skin rejuvenation treatments. This extensive program covers multiple laser and IPL systems, treatment protocols for different skin types, and advanced techniques for achieving optimal results. Students will master client assessment, treatment planning, parameter selection, and post-treatment care for both hair removal and skin rejuvenation procedures. The course includes training in treating various skin conditions, anti-aging treatments, and corrective procedures. Emphasis is placed on safety protocols, complication management, and building a successful aesthetic practice. Graduates will be qualified to work in medical aesthetic clinics, beauty clinics, or establish independent laser therapy practices.",
      img: getCourseImage('vtct', 14),
    },
    {
      id: 15,
      title: "Level 4 Diploma in Hair Reduction & Skin Rejuvenation (Laser & IPL)",
      desc: "The Level 4 Diploma in Hair Reduction & Skin Rejuvenation (Laser & IPL) provides specialized training in advanced aesthetic treatments using both laser and intense pulsed light technologies. This comprehensive program covers the theory and practice of hair reduction treatments, skin rejuvenation procedures, and combination therapies for optimal client results. Students will learn to operate various laser and IPL systems, understand the physics of different wavelengths, and master treatment protocols for diverse skin types and conditions. The course emphasizes practical skills development, safety procedures, client consultation, and treatment planning. Advanced topics include treating ethnic skin types, managing complications, and business development in the aesthetic industry. Graduates will be qualified to provide professional laser and IPL treatments in clinical settings.",
      img: getCourseImage('vtct', 15),
    },
    {
      id: 16,
      title: "Level 4 Certificate in Laser & IPL Treatments",
      desc: "The Level 4 Certificate in Laser & IPL Treatments is a professional qualification designed for beauty and aesthetic practitioners seeking expertise in light-based therapies. This comprehensive program covers the operation of laser and intense pulsed light systems for hair removal, skin rejuvenation, pigmentation treatment, and vascular lesion therapy. Students will learn about photobiology, skin-light interactions, treatment parameters, and safety protocols. The course includes extensive practical training with various laser and IPL devices, client assessment techniques, and treatment planning methodologies. Emphasis is placed on achieving optimal results while maintaining client safety and comfort. Graduates will be qualified to work in aesthetic clinics, medical spas, or beauty clinics offering advanced light-based treatments.",
      img: getCourseImage('vtct', 16),
    },
    {
      id: 17,
      title: "(ITEC) Level 4 Certificate in Hair Reduction & Skin Rejuvenation (Laser)",
      desc: "The ITEC Level 4 Certificate in Hair Reduction & Skin Rejuvenation (Laser) provides advanced qualification specifically focused on laser-based treatments for hair removal and skin improvement. This specialized program covers various laser technologies including Alexandrite, Diode, and Nd:YAG lasers, their specific applications, and optimal treatment protocols. Students will develop expertise in laser physics, skin assessment, treatment planning, and advanced techniques for achieving superior results. The course emphasizes safety protocols, complication management, and professional practice standards. Practical training includes hands-on experience with professional laser equipment and real client treatments. This qualification prepares practitioners for specialized roles in laser therapy clinics and medical aesthetic facilities where precision and expertise in laser treatments are essential.",
      img: getCourseImage('vtct', 17),
    },
    {
      id: 18,
      title: "(ITEC) Level 4 Certificate in Hair Reduction & Skin Rejuvenation (IPL)",
      desc: "The ITEC Level 4 Certificate in Hair Reduction & Skin Rejuvenation (IPL) focuses specifically on intense pulsed light technology for aesthetic treatments. This comprehensive program provides in-depth training in IPL systems, their applications for hair removal, skin rejuvenation, pigmentation treatment, and vascular therapies. Students will learn about broad-spectrum light technology, filter selection, treatment parameters, and protocols for different skin types and conditions. The course covers client consultation, skin analysis, treatment planning, and post-treatment care specific to IPL procedures. Emphasis is placed on understanding the versatility of IPL technology and maximizing treatment outcomes while ensuring client safety. Graduates will be qualified to provide professional IPL treatments in beauty clinics, aesthetic centers, and spa environments.",
      img: getCourseImage('vtct', 18),
    },
    {
      id: 19,
      title: "(ITEC) Level 4 Award in Skin Rejuvenation (Laser)",
      desc: "The ITEC Level 4 Award in Skin Rejuvenation (Laser) is a specialist qualification focused on using laser technology for anti-aging and skin improvement treatments. This advanced program covers fractional lasers, ablative and non-ablative treatments, and specialized protocols for addressing aging skin, acne scarring, and texture irregularities. Students will learn about laser-tissue interactions, treatment selection, protocol development, and combination therapy approaches. The course emphasizes understanding different laser wavelengths, their specific applications, and techniques for achieving optimal rejuvenation results. Training includes client assessment, treatment planning, pre and post-treatment care, and managing client expectations. This qualification is ideal for practitioners seeking to specialize in laser-based anti-aging treatments in medical aesthetic or advanced beauty therapy settings.",
      img: getCourseImage('vtct', 19),
    },
    {
      id: 20,
      title: "(ITEC) Level 4 Award in Skin Rejuvenation (IPL)",
      desc: "The ITEC Level 4 Award in Skin Rejuvenation (IPL) specializes in using intense pulsed light technology for comprehensive skin improvement and anti-aging treatments. This focused program covers IPL applications for photorejuvenation, sun damage treatment, age spot removal, and overall skin texture enhancement. Students will learn about optimal wavelength selection, treatment protocols for different skin types, and combination approaches for maximum rejuvenation benefits. The course includes training in client assessment, skin analysis, treatment planning, and post-treatment care specific to IPL rejuvenation procedures. Emphasis is placed on understanding the science behind photorejuvenation and developing skills to achieve natural-looking, age-defying results. Graduates will be qualified to provide professional IPL skin rejuvenation treatments in aesthetic and beauty therapy environments.",
      img: getCourseImage('vtct', 20),
    },
    {
      id: 21,
      title: "(ITEC) Level 4 Award in Hair Reduction (Laser)",
      desc: "The ITEC Level 4 Award in Hair Reduction (Laser) is a professional course specializing in laser hair removal treatments using advanced laser technologies. This comprehensive program covers different laser types including Alexandrite, Diode, and Nd:YAG lasers, their specific applications for hair removal on various skin types and hair colors. Students will learn about hair growth cycles, laser-hair interactions, treatment protocols, and techniques for achieving permanent hair reduction. The course emphasizes parameter selection, safety protocols, client consultation, and treatment planning for optimal results. Practical training includes hands-on experience with professional laser equipment and various hair removal scenarios. This qualification prepares practitioners for specialized roles in laser hair removal clinics and aesthetic centers where expertise in permanent hair reduction is required.",
      img: getCourseImage('vtct', 21),
    },
    {
      id: 22,
      title: "(ITEC) Level 4 Award in Hair Reduction (IPL)",
      desc: "The ITEC Level 4 Award in Hair Reduction (IPL) focuses specifically on using intense pulsed light technology for professional hair removal treatments. This specialized program covers IPL systems, their applications for hair reduction on different skin types, and optimal treatment protocols for achieving long-lasting hair removal results. Students will learn about broad-spectrum light technology, filter selection for hair removal, treatment parameters, and protocols for various body areas. The course includes training in client consultation, skin and hair assessment, treatment planning, and post-treatment care specific to IPL hair removal. Emphasis is placed on understanding IPL technology's effectiveness for hair reduction and developing skills to provide safe, comfortable treatments. Graduates will be qualified to provide professional IPL hair removal services in beauty salons, aesthetic clinics, and spa environments.",
      img: getCourseImage('vtct', 22),
    },
  ],

  PERSONS: [
    {
      id: 1,
      title: "Level 2 Maths",
      desc: "The Level 2 Maths course provides students with an in-depth exploration of advanced mathematical concepts and methods designed to challenge and develop sophisticated problem-solving skills. This comprehensive program covers algebraic manipulation, geometric principles, statistical analysis, and mathematical reasoning. Students will work with complex equations, graphical representations, probability calculations, and data interpretation. The course is designed to bridge the gap between basic mathematical understanding and higher-level mathematical applications required in professional and academic contexts. Emphasis is placed on developing analytical thinking, logical reasoning, and the ability to apply mathematical concepts to real-world situations. Upon completion, students will have the mathematical competency equivalent to a GCSE grade 4-9, opening pathways to further education, apprenticeships, and career opportunities in fields requiring strong numerical skills.",
      img: getCourseImage('persons', 1),
    },
    {
      id: 2,
      title: "Level 1 Maths",
      desc: "The Level 1 Maths course provides students with a thorough understanding of fundamental mathematical principles, focusing on basic algebra, proportions, statistics, and practical mathematical applications. This intermediate-level program builds upon entry-level mathematics, introducing more complex concepts while maintaining accessibility for learners developing their mathematical confidence. Students will work with fractions, decimals, percentages, basic algebraic expressions, and introductory statistical concepts. The course emphasizes practical applications of mathematics in everyday situations, workplace contexts, and preparation for further mathematical study. Learning activities include problem-solving exercises, data handling projects, and real-world mathematical scenarios that demonstrate the relevance and importance of mathematical skills in personal and professional life.",
      img: getCourseImage('persons', 2),
    },
    {
      id: 3,
      title: "Entry Level 3 Maths",
      desc: "The Entry Level 3 Maths course is designed to develop students' ability to handle mathematical information and concepts independently, with a strong focus on practical applications in everyday life and work situations. This course bridges the gap between basic numeracy and more advanced mathematical study, providing learners with the confidence and skills needed to tackle mathematical challenges. Students will work with number operations, basic geometry, data handling, and measurement concepts through engaging, real-world contexts. The program emphasizes building mathematical confidence, developing logical thinking skills, and understanding how mathematics applies to daily activities such as budgeting, shopping, cooking, and workplace tasks. Assessment methods are designed to be supportive and encouraging, helping students recognize their mathematical achievements and progress.",
      img: getCourseImage('persons', 3),
    },
    {
      id: 4,
      title: "Entry Level 2 Maths",
      desc: "The Entry Level 2 Maths course builds upon foundational mathematical concepts, introducing new topics including fractions, basic measurements, and elementary problem-solving techniques for everyday applications. This supportive learning environment helps students develop mathematical confidence while working with practical scenarios that demonstrate the relevance of mathematics in daily life. Students will explore number relationships, simple calculations, basic shapes and space concepts, and introductory data handling through hands-on activities and real-world examples. The course focuses on developing mathematical vocabulary, understanding numerical relationships, and building the foundation skills necessary for progression to higher levels of mathematical study. Teaching methods emphasize practical application, visual learning aids, and collaborative problem-solving to ensure all students can achieve success.",
      img: getCourseImage('persons', 4),
    },
    {
      id: 5,
      title: "Entry Level 1 Maths",
      desc: "The Entry Level 1 Maths course provides a supportive introduction to basic mathematical concepts and practical skills essential for daily life activities, designed specifically for learners who are beginning their mathematical journey or returning to education after a break. This foundational course covers fundamental number work, basic counting, simple calculations, recognition of shapes, and introductory measurement concepts through engaging, practical activities. Students will work with money calculations, time concepts, basic data collection, and simple problem-solving in familiar contexts. The learning environment is designed to be encouraging and non-threatening, with emphasis placed on building confidence, developing mathematical language, and recognizing mathematical concepts in everyday situations. Individual support and differentiated learning approaches ensure that every student can achieve personal success and progress.",
      img: getCourseImage('persons', 5),
    },
    {
      id: 6,
      title: "Level 2 English",
      desc: "The Level 2 English course is designed to develop fluent communication skills suitable for diverse personal, educational, and professional contexts, significantly enhancing both spoken and written English capabilities. This comprehensive program covers advanced grammar structures, vocabulary expansion, critical reading skills, and sophisticated writing techniques. Students will engage with various text types including literature, reports, articles, and creative writing, developing analytical and interpretative skills. The course emphasizes effective communication in different contexts, presentation skills, and the ability to adapt language and style to suit specific audiences and purposes. Practical activities include essay writing, oral presentations, group discussions, and creative projects that build confidence and competency in English language use at an advanced level.",
      img: getCourseImage('persons', 6),
    },
    {
      id: 7,
      title: "Level 1 English",
      desc: "The Level 1 English course helps students refine their command of English, developing independent communication skills suitable for both professional and personal contexts. This intermediate-level program focuses on improving written and spoken English through structured learning activities, grammar development, and vocabulary expansion. Students will work with different text types, practice formal and informal writing styles, and develop confidence in speaking and listening skills. The course covers essential communication skills including letter writing, report preparation, reading comprehension, and verbal communication techniques. Emphasis is placed on developing critical thinking skills, understanding different writing purposes, and building the language competencies needed for further education, employment opportunities, and effective participation in community life.",
      img: getCourseImage('persons', 7),
    },
    {
      id: 8,
      title: "Entry Level 3 English",
      desc: "The Entry Level 3 English course prepares students for practical usage of English, focusing on developing skills to engage effectively in real-world communication tasks and social interactions. This course builds upon basic English skills, introducing more complex language structures, extended vocabulary, and varied communication scenarios. Students will practice reading different types of texts, writing for various purposes, speaking in different situations, and listening for specific information. The program emphasizes functional English skills that are directly applicable to everyday life, including completing forms, understanding instructions, participating in discussions, and expressing opinions clearly. Learning activities are designed to be engaging and relevant, helping students develop confidence in using English in community, workplace, and educational settings.",
      img: getCourseImage('persons', 8),
    },
    {
      id: 9,
      title: "Entry Level 2 English",
      desc: "The Entry Level 2 English course focuses on enhancing basic communication skills through improved vocabulary development and structured sentence formation, building upon foundational English knowledge. Students will work on expanding their word knowledge, understanding basic grammar rules, and developing more complex communication abilities. The course covers reading simple texts, writing basic sentences and paragraphs, speaking clearly in familiar situations, and listening to understand key information. Learning activities include vocabulary building exercises, guided writing tasks, structured conversation practice, and reading comprehension activities using accessible texts. The supportive learning environment encourages students to practice their English skills confidently, with emphasis on practical communication that can be immediately applied in daily life situations.",
      img: getCourseImage('persons', 9),
    },
    {
      id: 10,
      title: "Entry Level 1 English",
      desc: "The Entry Level 1 English course lays the foundation for effective communication by introducing essential English speaking and writing skills in a supportive, encouraging learning environment. This beginner-level course is designed for learners who are new to English or returning to formal education after an extended break. Students will learn basic vocabulary, simple sentence structures, fundamental grammar concepts, and essential communication skills for everyday situations. The course covers basic reading skills, simple writing tasks, clear speaking practice, and listening for familiar information. Learning activities are practical and engaging, focusing on immediate communication needs such as introductions, basic conversations, simple instructions, and everyday vocabulary. Individual support and differentiated teaching methods ensure that every student can progress at their own pace while building confidence in English communication.",
      img: getCourseImage('persons', 10),
    },
  ],

  "PRO QUAL": [
    {
      id: 1,
      title: "Level 2 Award in Site Security",
      desc: "The Level 2 Award in Site Security provides students with a comprehensive foundation in modern security principles, risk assessment methodologies, and workplace safety protocols essential for professional security operations. This course covers fundamental security concepts including threat identification, access control systems, surveillance techniques, and emergency response procedures. Students will learn about legal frameworks governing security work, professional conduct standards, and the importance of maintaining confidentiality and integrity. The program includes practical training in security equipment usage, report writing, communication skills, and conflict resolution techniques. Emphasis is placed on understanding security risks in different environments, developing situational awareness, and implementing appropriate security measures to protect people, property, and assets.",
      img: getCourseImage('proqual', 1),
    },
    {
      id: 2,
      title: "Level 2 First Aid",
      desc: "The Level 2 First Aid course provides comprehensive training in essential life-saving skills, equipping participants with the knowledge and confidence to respond effectively to medical emergencies and accident situations. This intensive program covers CPR techniques, wound management, shock treatment, and the management of various medical conditions including heart attacks, strokes, and breathing difficulties. Students will learn to assess emergency situations, prioritize treatment, and provide appropriate care while awaiting professional medical assistance. The course includes hands-on practical training with mannequins, role-playing scenarios, and the use of first aid equipment. Participants will develop skills in patient assessment, communication with emergency services, and maintaining accurate records of treatment provided. This qualification is essential for workplace first aiders and anyone seeking to develop potentially life-saving skills.",
      img: getCourseImage('proqual', 2),
    },
    {
      id: 3,
      title: "Level 1 Health & Safety in Construction",
      desc: "The Level 1 Health & Safety in Construction course provides a comprehensive introduction to essential health and safety practices, regulations, and responsibilities within the construction sector. This foundational program covers key topics including hazard identification, risk assessment procedures, personal protective equipment usage, and safe working practices on construction sites. Students will learn about legal requirements, accident prevention strategies, emergency procedures, and the importance of maintaining a safety-first culture in construction environments. The course includes practical elements such as site safety inspections, safety equipment demonstrations, and case study analyses of construction accidents. Emphasis is placed on developing safety awareness, understanding regulatory compliance requirements, and building the knowledge foundation necessary for safe participation in construction activities.",
      img: getCourseImage('proqual', 3),
    },
  ],

  SQA: [
    {
      id: 1,
      title: "Level 2 SQA iCQ: Professional Taxi & Private Hire Driver",
      desc: "The Level 2 SQA iCQ Professional Taxi & Private Hire Driver course introduces aspiring drivers to the comprehensive professional standards required in the passenger transport industry, with particular focus on safety protocols, regulatory compliance, and customer service excellence. This specialized program covers essential topics including local area knowledge, route planning, passenger safety procedures, and professional conduct standards. Students will learn about licensing requirements, vehicle maintenance responsibilities, fare calculation methods, and effective communication with diverse passengers. The course emphasizes the importance of providing exceptional customer service, managing difficult situations professionally, and maintaining high standards of personal and vehicle presentation. Practical elements include navigation skills, customer interaction scenarios, and understanding of accessibility requirements for passengers with special needs.",
      img: getCourseImage('sqa', 1),
    },
    {
      id: 2,
      title: "Level 5 SQA: Professional Taxi & Private Hire Driver Role",
      desc: "The Level 5 SQA Professional Taxi & Private Hire Driver Role course provides advanced comprehensive knowledge for experienced drivers seeking to excel in the passenger transport sector, covering sophisticated customer care strategies, advanced safety protocols, and detailed industry regulations. This higher-level qualification explores complex aspects of professional driving including advanced route optimization, customer relationship management, business development principles, and leadership skills for those aspiring to supervisory or training roles. Students will develop expertise in handling challenging situations, providing specialized services for different passenger groups, and understanding the commercial aspects of the taxi and private hire industry. The course includes advanced communication techniques, conflict resolution strategies, and the development of professional networks within the transport industry.",
      img: getCourseImage('sqa', 2),
    },
  ],

  ICQ: [
    {
      id: 1,
      title: "BTEC Level 2 Certificate: Taxi & Private Hire Driver",
      desc: "This comprehensive BTEC Level 2 Certificate provides aspiring taxi and private hire drivers with all the essential knowledge required to excel in the transport industry. The course covers critical topics including road safety protocols, traffic regulations, customer service excellence, and professional conduct standards. Students will learn about legal requirements, licensing procedures, vehicle safety checks, and effective communication with passengers. Upon completion, graduates will be equipped with the confidence and expertise needed to operate safely and professionally in the competitive taxi and private hire sector, meeting all regulatory requirements while delivering exceptional customer experiences.",
      img: getCourseImage('sqa', 1),
    },
    {
      id: 2,
      title: "Level 3 Award in Education & Training",
      desc: "This Level 3 Award in Education & Training is designed for individuals who want to enter the teaching profession or enhance their existing training capabilities. The course provides comprehensive coverage of fundamental teaching principles, including understanding learner needs, planning effective sessions, and delivering engaging educational content. Participants will explore diverse teaching methodologies, assessment techniques, and classroom management strategies. The program emphasizes the importance of inclusive education, professional ethics, and continuous professional development. Graduates will gain the skills necessary to design, deliver, and evaluate training sessions across various educational settings, from corporate training environments to adult education centers.",
      img: getCourseImage('icq', 2),
    },
    {
      id: 3,
      title: "Level 3 Certificate in Assessing Vocational Achievement",
      desc: "The Level 3 Certificate in Assessing Vocational Achievement is a comprehensive qualification that prepares individuals to become competent vocational assessors across diverse industry sectors. This course covers the complete assessment cycle, from initial planning and preparation through to final evaluation and feedback delivery. Students will master various assessment methods including observation, questioning, professional discussions, and portfolio reviews. The program emphasizes fair, valid, and reliable assessment practices while ensuring compliance with awarding body requirements. Participants will develop expertise in supporting learners through their qualification journey, maintaining accurate records, and contributing to quality assurance processes within their organizations.",
      img: getCourseImage('icq', 3),
    },
    {
      id: 4,
      title: "Level 3 Award in Assessing Competence at Work",
      desc: "This Level 3 Award in Assessing Competence at Work focuses specifically on developing the skills required to assess occupational competence in real workplace environments. The course provides in-depth training on competency-based assessment principles, enabling participants to evaluate whether workers can perform their job roles to the required standards. Students will learn to design assessment plans, conduct workplace observations, gather evidence of competence, and provide constructive feedback to support professional development. The program covers legal and ethical considerations, health and safety requirements, and the importance of maintaining professional relationships with candidates throughout the assessment process.",
      img: getCourseImage('icq', 4),
    },
  ],
};

export default courseData;