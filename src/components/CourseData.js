// courseData.js

// Helper function to get relevant course images from assets
const getCourseImage = (category, number) => {
  // Handle different file extensions based on category
  try {
    if (category === 'seg') {
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
    } else if (category === 'vtct') {
      if (number === 10 || number === 13 || number === 20 || number === 22) {
        return require(`../Assests/${category}${number}.jpg`);
      } else {
        return require(`../Assests/${category}${number}.avif`);
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


    // PERSONS - English & Math Courses
    {
      id: 31,
      title: "Level 2 Maths",
      desc: "The Level 2 Maths course provides students with an in-depth exploration of advanced mathematical concepts and methods designed to challenge and develop sophisticated problem-solving skills. This comprehensive program covers algebraic manipulation, geometric principles, statistical analysis, and mathematical reasoning. Students will work with complex equations, graphical representations, probability calculations, and data interpretation. The course is designed to bridge the gap between basic mathematical understanding and higher-level mathematical applications required in professional and academic contexts. Emphasis is placed on developing analytical thinking, logical reasoning, and the ability to apply mathematical concepts to real-world situations. Upon completion, students will have the mathematical competency equivalent to a GCSE grade 4-9, opening pathways to further education, apprenticeships, and career opportunities in fields requiring strong numerical skills.",
      img: getCourseImage('persons', 2),
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
      img: getCourseImage('proqual', 2),
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

    // VTCT - ITEC ESOL Certificate Courses
    {
      id: 15,
      title: "ITEC ESOL CERTIFICATE FOR YOUNG LEARNERS INTERNATIONAL",
      desc: "ENTRY 1 A1 - This foundational ITEC ESOL Certificate for Young Learners International provides essential English language skills for young students beginning their English learning journey. The course focuses on basic vocabulary, simple sentence structures, and fundamental communication skills appropriate for Entry Level 1 A1 standards. Students will develop confidence in speaking, listening, reading, and writing through engaging, age-appropriate activities and interactive learning methods. The program emphasizes practical English skills for everyday situations, building a solid foundation for further language development and academic success.",
      img: getCourseImage('vtct', 1),
    },
    {
      id: 16,
      title: "ITEC ESOL CERTIFICATE FOR YOUNG LEARNERS INTERNATIONAL",
      desc: "ENTRY 2 A2 - This intermediate ITEC ESOL Certificate for Young Learners International builds upon foundational English skills, developing more complex language abilities at Entry Level 2 A2 standards. Students will expand their vocabulary, improve sentence construction, and enhance their communication skills across all four language areas. The course includes interactive exercises, group activities, and practical applications that help young learners gain confidence in using English in various contexts. This qualification prepares students for progression to higher levels of English language study.",
      img: getCourseImage('vtct', 2),
    },
    {
      id: 17,
      title: "ITEC ESOL CERTIFICATE FOR YOUNG LEARNERS INTERNATIONAL",
      desc: "ENTRY 3 B1 - This advanced ITEC ESOL Certificate for Young Learners International develops sophisticated English language skills at Entry Level 3 B1 standards. Students will master complex grammar structures, extensive vocabulary, and advanced communication techniques across speaking, listening, reading, and writing. The course emphasizes critical thinking, analytical skills, and the ability to express complex ideas clearly and confidently. This qualification provides young learners with the English proficiency needed for academic success and future career opportunities.",
      img: getCourseImage('vtct', 3),
    },
    {
      id: 18,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "ENTRY 1 A1 - This comprehensive ITEC ESOL Certificate International provides fundamental English language training for international students at Entry Level 1 A1 standards. The course covers essential vocabulary, basic grammar structures, and core communication skills necessary for everyday English usage. Students will develop proficiency in all four language skills through structured learning activities, practical exercises, and interactive sessions. This qualification serves as an excellent starting point for international students seeking to improve their English language abilities for personal, academic, or professional purposes.",
      img: getCourseImage('vtct', 4),
    },
    {
      id: 19,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "ENTRY 2 A2 - This intermediate ITEC ESOL Certificate International builds upon basic English foundations, developing enhanced language competencies at Entry Level 2 A2 standards. Students will expand their vocabulary range, improve grammatical accuracy, and develop greater confidence in all four language skills. The course includes practical communication scenarios, structured writing exercises, and interactive speaking activities that prepare students for real-world English usage. This qualification provides the language foundation necessary for academic progression and professional development.",
      img: getCourseImage('vtct', 5),
    },
    {
      id: 20,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "ENTRY 3 B1 - This advanced ITEC ESOL Certificate International develops comprehensive English language proficiency at Entry Level 3 B1 standards. Students will master complex linguistic structures, extensive vocabulary, and sophisticated communication strategies across all language areas. The course emphasizes critical analysis, advanced writing techniques, and confident oral communication. This qualification prepares students for higher education, professional advancement, and effective participation in English-speaking environments.",
      img: getCourseImage('vtct', 6),
    },
    {
      id: 21,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "LEVEL 1 - This comprehensive ITEC ESOL Certificate International at Level 1 provides intermediate English language training for students seeking to advance their communication skills. The course covers intermediate grammar structures, expanded vocabulary development, and enhanced communication abilities across speaking, listening, reading, and writing. Students will engage with various text types, practice formal and informal communication styles, and develop the language competencies needed for further education and employment opportunities.",
      img: getCourseImage('vtct', 7),
    },
    {
      id: 22,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "LEVEL 2 - This advanced ITEC ESOL Certificate International at Level 2 provides sophisticated English language training for students seeking high-level communication proficiency. The course covers complex grammatical structures, extensive vocabulary expansion, and advanced communication techniques. Students will develop critical thinking skills, analytical writing abilities, and confident presentation skills. This qualification prepares students for academic success, professional excellence, and leadership roles in English-speaking environments.",
      img: getCourseImage('vtct', 8),
    },
    {
      id: 23,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "LEVEL 3 - This expert-level ITEC ESOL Certificate International at Level 3 provides the highest standard of English language training for students seeking professional and academic excellence. The course covers sophisticated linguistic analysis, advanced academic writing, and expert-level communication skills. Students will master complex language concepts, develop research and presentation capabilities, and achieve the language proficiency required for university study, professional leadership, and international career opportunities.",
      img: getCourseImage('vtct', 9),
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


  PERSONS: [
    {
      id: 1,
      title: "Level 2 Maths",
      desc: "The Level 2 Maths course provides students with an in-depth exploration of advanced mathematical concepts and methods designed to challenge and develop sophisticated problem-solving skills. This comprehensive program covers algebraic manipulation, geometric principles, statistical analysis, and mathematical reasoning. Students will work with complex equations, graphical representations, probability calculations, and data interpretation. The course is designed to bridge the gap between basic mathematical understanding and higher-level mathematical applications required in professional and academic contexts. Emphasis is placed on developing analytical thinking, logical reasoning, and the ability to apply mathematical concepts to real-world situations. Upon completion, students will have the mathematical competency equivalent to a GCSE grade 4-9, opening pathways to further education, apprenticeships, and career opportunities in fields requiring strong numerical skills.",
      img: getCourseImage('persons', 2),
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
      img: getCourseImage('proqual', 2),
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

  VTCT: [
    {
      id: 1,
      title: "ITEC ESOL CERTIFICATE FOR YOUNG LEARNERS INTERNATIONAL",
      desc: "ENTRY 1 A1 - This foundational ITEC ESOL Certificate for Young Learners International provides essential English language skills for young students beginning their English learning journey. The course focuses on basic vocabulary, simple sentence structures, and fundamental communication skills appropriate for Entry Level 1 A1 standards. Students will develop confidence in speaking, listening, reading, and writing through engaging, age-appropriate activities and interactive learning methods. The program emphasizes practical English skills for everyday situations, building a solid foundation for further language development and academic success.",
      img: getCourseImage('vtct', 9),
    },
    {
      id: 2,
      title: "ITEC ESOL CERTIFICATE FOR YOUNG LEARNERS INTERNATIONAL",
      desc: "ENTRY 2 A2 - This intermediate ITEC ESOL Certificate for Young Learners International builds upon foundational English skills, developing more complex language abilities at Entry Level 2 A2 standards. Students will expand their vocabulary, improve sentence construction, and enhance their communication skills across all four language areas. The course includes interactive exercises, group activities, and practical applications that help young learners gain confidence in using English in various contexts. This qualification prepares students for progression to higher levels of English language study.",
      img: getCourseImage('vtct', 2),
    },
    {
      id: 3,
      title: "ITEC ESOL CERTIFICATE FOR YOUNG LEARNERS INTERNATIONAL",
      desc: "ENTRY 3 B1 - This advanced ITEC ESOL Certificate for Young Learners International develops sophisticated English language skills at Entry Level 3 B1 standards. Students will master complex grammar structures, extensive vocabulary, and advanced communication techniques across speaking, listening, reading, and writing. The course emphasizes critical thinking, analytical skills, and the ability to express complex ideas clearly and confidently. This qualification provides young learners with the English proficiency needed for academic success and future career opportunities.",
      img: getCourseImage('vtct', 3),
    },
    {
      id: 4,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "ENTRY 1 A1 - This comprehensive ITEC ESOL Certificate International provides fundamental English language training for international students at Entry Level 1 A1 standards. The course covers essential vocabulary, basic grammar structures, and core communication skills necessary for everyday English usage. Students will develop proficiency in all four language skills through structured learning activities, practical exercises, and interactive sessions. This qualification serves as an excellent starting point for international students seeking to improve their English language abilities for personal, academic, or professional purposes.",
      img: getCourseImage('vtct', 4),
    },
    {
      id: 5,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "ENTRY 2 A2 - This intermediate ITEC ESOL Certificate International builds upon basic English foundations, developing enhanced language competencies at Entry Level 2 A2 standards. Students will expand their vocabulary range, improve grammatical accuracy, and develop greater confidence in all four language skills. The course includes practical communication scenarios, structured writing exercises, and interactive speaking activities that prepare students for real-world English usage. This qualification provides the language foundation necessary for academic progression and professional development.",
      img: getCourseImage('vtct', 5),
    },
    {
      id: 6,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "ENTRY 3 B1 - This advanced ITEC ESOL Certificate International develops comprehensive English language proficiency at Entry Level 3 B1 standards. Students will master complex linguistic structures, extensive vocabulary, and sophisticated communication strategies across all language areas. The course emphasizes critical analysis, advanced writing techniques, and confident oral communication. This qualification prepares students for higher education, professional advancement, and effective participation in English-speaking environments.",
      img: getCourseImage('vtct', 6),
    },
    {
      id: 7,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "LEVEL 1 - This comprehensive ITEC ESOL Certificate International at Level 1 provides intermediate English language training for students seeking to advance their communication skills. The course covers intermediate grammar structures, expanded vocabulary development, and enhanced communication abilities across speaking, listening, reading, and writing. Students will engage with various text types, practice formal and informal communication styles, and develop the language competencies needed for further education and employment opportunities.",
      img: getCourseImage('vtct', 7),
    },
    {
      id: 8,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "LEVEL 2 - This advanced ITEC ESOL Certificate International at Level 2 provides sophisticated English language training for students seeking high-level communication proficiency. The course covers complex grammatical structures, extensive vocabulary expansion, and advanced communication techniques. Students will develop critical thinking skills, analytical writing abilities, and confident presentation skills. This qualification prepares students for academic success, professional excellence, and leadership roles in English-speaking environments.",
      img: getCourseImage('vtct', 8),
    },
    {
      id: 9,
      title: "ITEC ESOL CERTIFICATE INTERNATIONAL",
      desc: "LEVEL 3 - This expert-level ITEC ESOL Certificate International at Level 3 provides the highest standard of English language training for students seeking professional and academic excellence. The course covers sophisticated linguistic analysis, advanced academic writing, and expert-level communication skills. Students will master complex language concepts, develop research and presentation capabilities, and achieve the language proficiency required for university study, professional leadership, and international career opportunities.",
      img: getCourseImage('vtct', 10),
    },
  ],
};

export default courseData;