export type Language = 'en' | 'om';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    skills: string;
    education: string;
    projects: string;
    contact: string;
    testimonials: string;
    downloadCV: string;
    downloadZip: string;
    printView: string;
    themeToggleLight: string;
    themeToggleDark: string;
    themeWhite: string;
    themeBlack: string;
    themeMonochrome: string;
    langToggle: string;
    langName: string;
  };
  // Hero
  hero: {
    greeting: string;
    role: string;
    location: string;
    statusBadge: string;
    availableBadge: string;
    intro: string;
    viewProjects: string;
    contactMe: string;
    downloadCV: string;
    connect: string;
    stats: {
      expLabel: string;
      expValue: string;
      projectsLabel: string;
      projectsValue: string;
      techLabel: string;
      techValue: string;
      locationLabel: string;
      locationValue: string;
      educationLabel: string;
      educationValue: string;
    };
  };
  // About
  about: {
    sectionTag: string;
    heading: string;
    subheading: string;
    whoIAm: string;
    bio: string;
    coreDrive: string;
    coreDriveTitle: string;
    coreDriveDesc: string;
    mindset: string;
    mindsetTitle: string;
    mindsetDesc: string;
    careerObjectiveTitle: string;
    careerObjectiveDesc: string;
    personalInfoTitle: string;
    fullNameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    languagesLabel: string;
    availabilityLabel: string;
    copyTooltip: string;
    copiedTooltip: string;
    openEmailClient: string;
    callDirectly: string;
  };
  // Skills
  skills: {
    sectionTag: string;
    heading: string;
    subheading: string;
    categories: {
      all: string;
      frontend: string;
      backend: string;
      tools: string;
    };
    proficiencyLabel: string;
    readyForBackend: string;
    readyForBackendDesc: string;
  };
  // Education
  education: {
    sectionTag: string;
    heading: string;
    subheading: string;
    degreeTitle: string;
    degreeInstitution: string;
    degreeLocation: string;
    degreeTimeline: string;
    degreeSummary: string;
    courseworkLabel: string;
    collegeTitle: string;
    collegeInstitution: string;
    collegeTimeline: string;
    collegeSummary: string;
    schoolTitle: string;
    schoolInstitution: string;
    schoolTimeline: string;
    schoolSummary: string;
  };
  // Projects
  projects: {
    sectionTag: string;
    heading: string;
    subheading: string;
    filters: {
      all: string;
      web: string;
      mobile: string;
      api: string;
    };
    showing: string;
    inCategory: string;
    resetFilter: string;
    viewDetails: string;
    liveDemo: string;
    sourceCode: string;
    keyFeatures: string;
    agroDesc: string;
    calcDesc: string;
    schoolDesc: string;
  };
  // Contact
  contact: {
    sectionTag: string;
    heading: string;
    subheading: string;
    directChannels: string;
    emailTitle: string;
    phoneTitle: string;
    locationTitle: string;
    sendMessageTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    successSubtext: string;
    openInEmailClient: string;
    requiredError: string;
    invalidEmailError: string;
  };
  // Testimonials
  testimonials: {
    sectionTag: string;
    heading: string;
    subheading: string;
    verifiedReview: string;
    filterAll: string;
    filterClients: string;
    filterMentors: string;
    filterPeers: string;
    leaveFeedback: string;
    leaveFeedbackDesc: string;
    modalTitle: string;
    formName: string;
    formRole: string;
    formRelationship: string;
    formFeedback: string;
    formSubmit: string;
    formSuccess: string;
    cancel: string;
    rating: string;
    close: string;
  };
  // Footer
  footer: {
    rights: string;
    backToTop: string;
    designedWith: string;
    builtFor: string;
    quickLinks: string;
    contactInfo: string;
  };
  // CV Modal
  cvModal: {
    title: string;
    subtitle: string;
    printButton: string;
    downloadButton: string;
    close: string;
    cvReadyNotice: string;
  };
  // Common & Navigation Actions
  common: {
    scrollToTop: string;
    downloadVSCodeZip: string;
    vsCodeZipNotice: string;
  };
  // Print & Recruiter Document View
  printView: {
    toggleBtn: string;
    exitBtn: string;
    savePdfBtn: string;
    toolbarTitle: string;
    toolbarSubtitle: string;
    printHint: string;
    compactMode: string;
    fullMode: string;
    executiveSummary: string;
    technicalExpertise: string;
    keyDeliverables: string;
    endorsements: string;
    educationHistory: string;
    contactDetails: string;
    verifiedDocument: string;
    recruiterNote: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      education: 'Education',
      projects: 'Projects',
      testimonials: 'Endorsements',
      contact: 'Contact',
      downloadCV: 'Download CV',
      downloadZip: 'Download ZIP',
      printView: 'Print View',
      themeToggleLight: 'Switch to light mode',
      themeToggleDark: 'Switch to dark mode',
      themeWhite: 'White',
      themeBlack: 'Black',
      themeMonochrome: 'Black & White',
      langToggle: 'Afaan Oromoo',
      langName: 'English',
    },
    hero: {
      greeting: 'Hello, I am',
      role: 'Full-Stack Developer & Software Engineer',
      location: 'Dembi, Oromia, Ethiopia',
      statusBadge: 'Seeking Web Development Job',
      availableBadge: 'Available for Hire',
      intro: 'Passionate software engineer building responsive, high-performance web applications. Proficient in modern React, JavaScript (ES6+), and ready for robust backend integration with PHP & MySQL. Focused on clean architecture, accessible user experiences, and delivering tangible business value.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
      connect: 'Connect:',
      stats: {
        expLabel: 'Experience',
        expValue: 'Full-Stack',
        projectsLabel: 'Key Projects',
        projectsValue: '3 Major',
        techLabel: 'Core Stack',
        techValue: 'React & PHP',
        locationLabel: 'Base Location',
        locationValue: 'Dembi, Oromia',
        educationLabel: 'Degree',
        educationValue: 'B.Sc. Software Eng.',
      },
    },
    about: {
      sectionTag: 'About Me & Background',
      heading: 'Engineering Web Solutions with Purpose & Precision',
      subheading: 'Get to know my engineering journey, my career objective, and the technical background driving my work.',
      whoIAm: 'Who I Am',
      bio: 'I am a motivated Software Engineer based in Dembi, Ethiopia, with solid technical foundations across frontend engineering, backend integrations, and relational database systems. I specialize in building user-focused web applications with React, JavaScript (ES6+), modern CSS, Node.js, and developing secure backend APIs using PHP and MySQL. Driven by disciplined problem solving and continuous self-improvement, I aim to create robust software solutions that solve real community and business challenges.',
      coreDrive: 'Core Engineering Drive',
      coreDriveTitle: 'Full-Stack Web Development',
      coreDriveDesc: 'Transforming ideas into interactive, stable web applications.',
      mindset: 'Development Philosophy',
      mindsetTitle: 'Clean Architecture & Speed',
      mindsetDesc: 'Writing maintainable, well-structured, accessible, and fast code.',
      careerObjectiveTitle: 'Career Objective',
      careerObjectiveDesc: 'Passionate Full-Stack Developer and Software Engineer seeking a high-impact web development job. Dedicated to crafting fast, responsive, and maintainable web applications using modern React, JavaScript, PHP, and MySQL architectures. Ready to join a forward-looking team and deliver immediate product value.',
      personalInfoTitle: 'Personal Information',
      fullNameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      locationLabel: 'Location',
      languagesLabel: 'Languages',
      availabilityLabel: 'Availability',
      copyTooltip: 'Copy to clipboard',
      copiedTooltip: 'Copied!',
      openEmailClient: 'Send Email',
      callDirectly: 'Call Now',
    },
    skills: {
      sectionTag: 'Technical Capabilities',
      heading: 'Skills & Engineering Stack',
      subheading: 'A comprehensive view of technologies, frameworks, and methodologies I leverage to build modern web solutions.',
      categories: {
        all: 'All Skills',
        frontend: 'Frontend Engineering',
        backend: 'Backend & Database',
        tools: 'Core & Problem Solving',
      },
      proficiencyLabel: 'Proficiency',
      readyForBackend: 'Backend & Database Integration Ready',
      readyForBackendDesc: 'Solid understanding of PHP backend routing, relational MySQL schema design, SQL queries, and secure RESTful endpoints.',
    },
    education: {
      sectionTag: 'Academic Background',
      heading: 'Education & Qualifications',
      subheading: 'My structured academic pathway that established rigorous software engineering principles, algorithms, and practical technical competence.',
      degreeTitle: 'B.Sc. in Software Engineering',
      degreeInstitution: 'University / Institute of Technology',
      degreeLocation: 'Ethiopia',
      degreeTimeline: 'Graduated',
      degreeSummary: 'Comprehensive academic study encompassing software architecture, data structures & algorithms, web engineering, relational database management systems (RDBMS), object-oriented programming, and operating systems.',
      courseworkLabel: 'Key Coursework & Competencies:',
      collegeTitle: 'College Education & Technical Preparatory',
      collegeInstitution: 'College / Technical Preparatory',
      collegeTimeline: 'Completed',
      collegeSummary: 'Advanced foundation in computing fundamentals, mathematical logic, procedural programming, and foundational computer sciences.',
      schoolTitle: 'Preparatory & Secondary School Certificate',
      schoolInstitution: 'High School & Preparatory',
      schoolTimeline: 'Completed',
      schoolSummary: 'Completed rigorous secondary education with emphasis on natural sciences, mathematics, and English communication skills.',
    },
    projects: {
      sectionTag: 'Featured Works & Solutions',
      heading: 'Selected Engineering Projects',
      subheading: 'Real-world applications built with React, modern JavaScript, and ready for full-stack integration with PHP and MySQL.',
      filters: {
        all: 'All Projects',
        web: 'Web Applications',
        mobile: 'Mobile & Responsive',
        api: 'APIs & Backend',
      },
      showing: 'Showing',
      inCategory: 'in',
      resetFilter: 'Reset to All',
      viewDetails: 'View Case Study & Live Demo',
      liveDemo: 'Interactive Demo',
      sourceCode: 'Source Code',
      keyFeatures: 'Key Features:',
      agroDesc: 'An agricultural management platform built for Ethiopian farmers and agricultural merchants. Features real-time crop market pricing, quintal harvest trackers, weather forecasts, and farmer-to-buyer trade matchmaking.',
      calcDesc: 'A high-precision scientific and financial web calculator featuring an OLED-inspired dark interface, memory operations, full calculation history log, and responsive layout across all viewport sizes.',
      schoolDesc: 'A full-scale educational management dashboard designed for schools in Ethiopia. Features student admissions, class schedules, exam grade tracking, attendance records, and teacher-parent communication modules.',
    },
    contact: {
      sectionTag: 'Direct Communication',
      heading: "Let's Connect & Work Together",
      subheading: 'Whether you have a job opening, a freelance project, or wish to discuss software engineering opportunities, I would love to hear from you.',
      directChannels: 'Direct Contact Details',
      emailTitle: 'Email Address',
      phoneTitle: 'Phone & Telegram',
      locationTitle: 'Primary Location',
      sendMessageTitle: 'Send a Message',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. Abebe Bikila or John Doe',
      emailLabel: 'Your Email Address',
      emailPlaceholder: 'you@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Job Opportunity / Project Inquiry',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Hi Ifa, I would like to discuss a web development opportunity...',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! Your message has been sent successfully.',
      successSubtext: 'I will review your message and reply promptly to your email address.',
      openInEmailClient: 'Open in Email Client',
      requiredError: 'This field is required',
      invalidEmailError: 'Please enter a valid email address',
    },
    testimonials: {
      sectionTag: 'Endorsements & Recommendations',
      heading: 'What Mentors & Collaborators Say',
      subheading: 'Authentic feedback from academic mentors, engineering peers, and community stakeholders on full-stack web delivery, problem-solving, and reliability.',
      verifiedReview: 'Verified Endorsement',
      filterAll: 'All Endorsements',
      filterClients: 'Clients & Stakeholders',
      filterMentors: 'Faculty & Mentors',
      filterPeers: 'Engineering Peers',
      leaveFeedback: 'Endorse / Leave Feedback',
      leaveFeedbackDesc: 'Have you worked with Ifa on a project or course? Submit an endorsement to be featured.',
      modalTitle: 'Submit Professional Endorsement',
      formName: 'Your Full Name',
      formRole: 'Your Role / Title & Company',
      formRelationship: 'Relationship to Ifa (e.g. Mentor, Client, Peer)',
      formFeedback: 'Your Recommendation / Testimonial',
      formSubmit: 'Submit Endorsement',
      formSuccess: 'Thank you! Your endorsement has been submitted and previewed locally.',
      cancel: 'Cancel',
      rating: 'Rating',
      close: 'Close',
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to Top',
      designedWith: 'Designed & developed with modern React and Tailwind CSS.',
      builtFor: 'Portfolio of IFA SANBATO · Full-Stack Developer & Software Engineer.',
      quickLinks: 'Navigation Links',
      contactInfo: 'Contact Information',
    },
    cvModal: {
      title: 'Curriculum Vitae',
      subtitle: 'IFA SANBATO — Full-Stack Developer & Software Engineer',
      printButton: 'Print / Save as PDF',
      downloadButton: 'Download CV File',
      close: 'Close',
      cvReadyNotice: 'Clean, printable layout optimized for recruiters and engineering hiring managers.',
    },
    common: {
      scrollToTop: 'Scroll to top',
      downloadVSCodeZip: 'Download VS Code ZIP',
      vsCodeZipNotice: 'Complete production source code ready to open in VS Code.',
    },
    printView: {
      toggleBtn: 'Print View',
      exitBtn: 'Exit Print View',
      savePdfBtn: 'Print / Save as PDF',
      toolbarTitle: 'Recruiter Document View',
      toolbarSubtitle: 'A4 & Letter document-ready layout optimized for hiring managers and PDF archiving',
      printHint: 'Tip: In browser print dialog, select "Save as PDF" and enable "Background graphics" for full styling.',
      compactMode: 'Compact (2-Page)',
      fullMode: 'Comprehensive',
      executiveSummary: 'Executive Summary',
      technicalExpertise: 'Technical Competencies & Stack',
      keyDeliverables: 'Featured Software Systems & Deliverables',
      endorsements: 'Professional Endorsements & References',
      educationHistory: 'Education & Academic Background',
      contactDetails: 'Direct Contact & Verification',
      verifiedDocument: 'Verified Digital Portfolio Document',
      recruiterNote: 'Candidate is actively available for Full-Stack, Frontend (React), and Software Engineering roles.',
    },
  },
  om: {
    nav: {
      home: 'Mana',
      about: "Waa'ee Kiyya",
      skills: 'Dandeettii',
      education: 'Barnoota',
      projects: 'Pirojektoota',
      testimonials: 'Ragaalee',
      contact: 'Qunnamtii',
      downloadCV: 'CV Buufadhaa',
      downloadZip: 'ZIP Buufadhaa',
      printView: 'Maxxansi (PDF)',
      themeToggleLight: 'Ifatti jijjiiri',
      themeToggleDark: 'Dukkanaatti jijjiiri',
      themeWhite: 'Adii (Ifaa)',
      themeBlack: 'Gurraacha (Dukkana)',
      themeMonochrome: 'Adii fi Gurraacha',
      langToggle: 'English',
      langName: 'Afaan Oromoo',
    },
    hero: {
      greeting: 'Akkam, Ani',
      role: 'Misoomsaa Weebii Guutuu fi Injinara Sooftiweerii',
      location: 'Dembii, Oromiyaa, Itoophiyaa',
      statusBadge: 'Hojii Misoonsa Weebii Barbaada',
      availableBadge: 'Hojiif Qophii',
      intro: 'Injinara sooftiweerii fi misoomsaa weebii kutannoo qabu. Weebsaayitootaa fi appilikeeshinoota ammayyaa, saffisaa fi si\'aawaa ta\'an React, JavaScript (ES6+), PHP fi MySQL dhaan nan ijaara. Qulqullina koodii, muuxannoo fayyadamaa mijataa fi rakkoolee qabatamaa furuuf qophiidha.',
      viewProjects: 'Pirojektoota Ilaalaa',
      contactMe: 'Na Qunnamaa',
      downloadCV: 'CV Buufadhaa',
      connect: 'Na Qunnamuuf:',
      stats: {
        expLabel: 'Muuxannoo',
        expValue: 'Weebii Guutuu',
        projectsLabel: 'Pirojektoota Ijoo',
        projectsValue: '3 Gurguddoo',
        techLabel: 'Teknooloojii',
        techValue: 'React & PHP',
        locationLabel: 'Bakka Teessumaa',
        locationValue: 'Dembii, Oromiyaa',
        educationLabel: 'Waraqaa Ragaa',
        educationValue: 'B.Sc. Sooftiweerii',
      },
    },
    about: {
      sectionTag: "Waa'ee Kiyya & Seenaa",
      heading: 'Furmaata Weebii Kaayyoo fi Qulqullinaan Ijaaruu',
      subheading: 'Seenaa koo ogummaa, kaayyoo hojii fi bu\'uura teeknooloojii koo bal\'inaan hubadhaa.',
      whoIAm: 'Ani Eenyu?',
      bio: 'Ani Injinara Sooftiweerii magaalaa Dembii, Itoophiyaa jiraatudha. Fuuldura weebii (Frontend), duuba weebii (Backend) fi kuusaa deetaa (Databases) irratti dandeettii cimaa qaba. Keessumaa React, JavaScript (ES6+), CSS ammayyaa, Node.js, akkasumas PHP fi MySQL dhaan appilikeeshinii nageenya qabuu fi saffisaa ijaaruun dandeettii kooti. Rakkoo furuuf kutannoo qabaachuu fi of fooyyessuudhaan hawaasa fi dhaabbilee tajaajiluuf qophiidha.',
      coreDrive: 'Kaayyoo Ijoo Ogummaa',
      coreDriveTitle: 'Misoomsa Weebii Guutuu (Full-Stack)',
      coreDriveDesc: 'Yaada haaraa gara appilikeeshinii weebii qabatamaa fi si\'aawaatti jijjiiruu.',
      mindset: 'Ilaalcha Hojii',
      mindsetTitle: 'Qulqullina Koodii & Saffisa',
      mindsetDesc: 'Koodii qulqulluu, salphaatti qajeelfamu, mijataa fi saffisaa barreessuu.',
      careerObjectiveTitle: 'Kaayyoo Hojii',
      careerObjectiveDesc: 'Injinara Sooftiweerii fi Misoomsaa Weebii gahumsa qabu ta\'ee dhaabbata ykn garee cimatti makamuudhaan hojii misooma weebii bu\'a qabeessa hojjechuu. React, JavaScript, PHP fi MySQL dhaan tajaajila addaa kennuuf qophiidha.',
      personalInfoTitle: 'Oodeeffannoo Dhuunfaa',
      fullNameLabel: 'Maqaa Guutuu',
      emailLabel: 'Teessoo Imeelii',
      phoneLabel: 'Lakkoofsa Bilbilaa',
      locationLabel: 'Bakka Teessumaa',
      languagesLabel: 'Afaanota',
      availabilityLabel: 'Qophii Hojii',
      copyTooltip: 'Waraabi (Copy)',
      copiedTooltip: 'Waraabameera!',
      openEmailClient: 'Imeelii Ergi',
      callDirectly: 'Bilbili',
    },
    skills: {
      sectionTag: 'Dandeettiiwwan Teeknikaa',
      heading: 'Dandeettii & Teknooloojiiwwan',
      subheading: 'Teknooloojiiwwan, firiimwoorkoota fi meeshaalee ani weebsaayitiilee ammayyaa ijaaruuf itti fayyadamu.',
      categories: {
        all: 'Dandeettiwwan Hunda',
        frontend: 'Fuuldura (Frontend)',
        backend: 'Duubaa fi Kuusaa Deetaa',
        tools: 'Ijoo & Rakkoo Furuu',
      },
      proficiencyLabel: 'Gahumsa',
      readyForBackend: 'Duubaa (Backend) fi Kuusaa Deetaaf Qophii',
      readyForBackendDesc: 'PHP dhaan sirna API ijaaruu, kuusaa deetaa MySQL bocuu, fi daataa nageenyaan wal-jijjiiruu danda\'uu.',
    },
    education: {
      sectionTag: 'Seenaa Barnootaa',
      heading: 'Barnoota fi Sadarkaa Ogummaa',
      subheading: 'Adeemsa barnoota koofi bu\'uura jabaa saayinsii kompiitaraa fi injinaringii sooftiweerii na barsiise.',
      degreeTitle: 'Digrii Jalqabaa (B.Sc.) Saayinsii Sooftiweeriin',
      degreeInstitution: 'Yuunivarsiitii / Dhaabbata Teeknooloojii',
      degreeLocation: 'Itoophiyaa',
      degreeTimeline: 'Xumurame',
      degreeSummary: 'Bocama sooftiweerii, koodii fi algoorizimii (Algorithms), misooma weebii, sirna kuusaa deetaa (RDBMS), saganteessuu OOP, fi sirna hojii kompiitaraa (OS) irratti xiyyeeffachuun baradhe.',
      courseworkLabel: 'Gosa Barnootaa fi Dandeettii Ijoo:',
      collegeTitle: 'Barnoota Koolleejjii & Teeknikaa',
      collegeInstitution: 'Koolleejjii Qophaa\'ina Teeknikaa',
      collegeTimeline: 'Xumurame',
      collegeSummary: 'Bu\'uura saayinsii kompiitaraa, yaada herregaa fi saganteessuu qajeelfamaa baradhe.',
      schoolTitle: 'Waraqaa Ragaa Qophaa\'inaa & Sadarkaa 2ffaa',
      schoolInstitution: 'Manni Barumsaa Sadarkaa 2ffaa & Qophaa\'inaa',
      schoolTimeline: 'Xumurame',
      schoolSummary: 'Barnoota saayinsii uumamaa, herregaa fi afaan Ingiliffaa irratti xiyyeeffachuun xumure.',
    },
    projects: {
      sectionTag: 'Hojiiwwan Filataman',
      heading: 'Pirojektoota Sooftiweerii Filataman',
      subheading: 'Pirojektoota qabatamaa React, JavaScript ammayyaa, akkasumas PHP fi MySQL dhaan ijaaraman.',
      filters: {
        all: 'Pirojektoota Hunda',
        web: 'Appilikeeshinii Weebii',
        mobile: 'Moobaayila fi Si\'aawaa',
        api: 'API fi Duubaa',
      },
      showing: 'Agarsiisaa jira',
      inCategory: 'keessatti',
      resetFilter: 'Gara Hundatti Deebi\'i',
      viewDetails: 'Bal\'inaan Ilaali & Yaali',
      liveDemo: 'Yaalii Kallattii',
      sourceCode: 'Koodii (GitHub)',
      keyFeatures: 'Amaloota Ijoo:',
      agroDesc: 'Appilikeeshinii qonnaan bultootaa fi daldaltoota Itoophiyaaf qophaa\'e. Gatii midhaanii yeroo ammaa (Xaafii, Buna, Qamadii, Boqqoolloo), shallaggii kuntaalaa, odeeffannoo qilleensaa fi wal-qunnamtii gabaa of keessaa qaba.',
      calcDesc: 'Shallagduu saayinsawaa fi faayinaansii ammayyaa. Iskiriinii OLED dukkanaawaa, seenaa shallaggii guutuu, fi iskiriinii bilbilaa fi kompiitara hunda irratti bifa si\'aawaan kan hojjetu.',
      schoolDesc: 'Sirna bulchiinsa manneen barnootaa Itoophiyaa. Galmee barattootaa, sagantaa daree, qabxii qormaataa, hordoffii argamaa fi qunnamtii barsiisaa fi maatii of keessatti hammata.',
    },
    contact: {
      sectionTag: 'Qunnamtii Kallattii',
      heading: 'Kottaa Waliin Haa Hojjennu',
      subheading: 'Hojii dhaabbataa, pirojektii dhuunfaa (freelance), ykn yaada misooma weebii irratti na haasofsiisuu yoo barbaaddan, yeroo hunda qophiidha.',
      directChannels: 'Karaalee Qunnamtii Kallattii',
      emailTitle: 'Teessoo Imeelii',
      phoneTitle: 'Bilbila & Telegiraama',
      locationTitle: 'Bakka Teessumaa',
      sendMessageTitle: 'Ergaa Ergaa',
      nameLabel: 'Maqaa Keessan Guutuu',
      namePlaceholder: 'Fkn: Caalaa ykn Aster',
      emailLabel: 'Teessoo Imeelii Keessan',
      emailPlaceholder: 'keessan@example.com',
      subjectLabel: 'Dhimma Ergaa',
      subjectPlaceholder: 'Carraa Hojii / Pirojektii Haaraa',
      messageLabel: 'Ergaa Keessan',
      messagePlaceholder: 'Akkam Ifaa, carraa hojii misooma weebii irratti si haasofsiisuun barbaada...',
      sendButton: 'Ergaa Ergi',
      sending: 'Ergamaa jira...',
      successMessage: 'Galatoomaa! Ergaan keessan milkaa\'inaan darbeera.',
      successSubtext: 'Ergaa keessan ilaalee saffisaan imeelii keessaniin deebii isiniif kenna.',
      openInEmailClient: 'Appilikeeshinii Imeeliitiin Bani',
      requiredError: 'Iddoon kun guutamuu qaba',
      invalidEmailError: 'Maaloo imeelii sirrii galchaa',
    },
    testimonials: {
      sectionTag: 'Ragaa fi Dhugaa-Bahuu',
      heading: 'Wanta Gorsitootaa fi Hojjataa-waliin Jedhan',
      subheading: 'Yaada dhugaa gorsitoota barnootaa, hiriyoota teeknikaa fi qooda-fudhattoota hawaasaa irraa dandeettii ijaarsa weebii, rakkoo furuu fi amanamummaa Ifaa irratti kenname.',
      verifiedReview: 'Ragaa Mirkanaa\'e',
      filterAll: 'Ragaalee Hunda',
      filterClients: 'Maamiltoota & Qooda-fudhattoota',
      filterMentors: 'Barsiisota & Gorsitoota',
      filterPeers: 'Hiriyoota Hojii',
      leaveFeedback: 'Yaada / Ragaa Kenni',
      leaveFeedbackDesc: 'Ifaa wajjin hojjetteettaa ykn barnoota irratti wal-beektuu? Yaada ykn ragaa kee asitti dhiyeessi.',
      modalTitle: 'Yaada / Ragaa Ogummaa Galchi',
      formName: 'Maqaa Keessan Guutuu',
      formRole: 'Gahee Hojii fi Dhaabbata Keessan',
      formRelationship: 'Hariiroo Ifaa wajjin Qabdan (fkn: Gorsaa, Maamila, Hiriyaa Hojii)',
      formFeedback: 'Yaada / Ragaa Isin Kennitan',
      formSubmit: 'Yaada Ergi',
      formSuccess: 'Galatoomaa! Yaanni fi ragaan keessan milkaa\'inaan dabalameera.',
      cancel: 'Dhiisi',
      rating: 'Sadarkaa',
      close: 'Cufi',
    },
    footer: {
      rights: 'Mirgi hundi seeraan eegamaadha.',
      backToTop: 'Gara Oliitti',
      designedWith: 'React ammayyaa fi Tailwind CSS dhaan kan ijaarame.',
      builtFor: 'Porotofooliyoo IFA SANBATO · Misoomsaa Weebii Guutuu & Injinara Sooftiweerii.',
      quickLinks: 'Liinkiiwwan Saffisaa',
      contactInfo: 'Odeeffannoo Qunnamtii',
    },
    cvModal: {
      title: 'Seenaa Hojii (Curriculum Vitae)',
      subtitle: 'IFA SANBATO — Misoomsaa Weebii Guutuu & Injinara Sooftiweerii',
      printButton: 'Maxxansi / PDF Tiin Olkaa\'i',
      downloadButton: 'Faayila CV Buufadhaa',
      close: 'Cufi',
      cvReadyNotice: 'Qophaa\'ina qulqulluu hojjechiistotaa fi garee teeknikaatiif mijatu.',
    },
    common: {
      scrollToTop: 'Gara oliitti deebi\'i',
      downloadVSCodeZip: 'ZIP VS Code Buufadhaa',
      vsCodeZipNotice: 'Koodii guutuu VS Code keessatti banuuf qophaa\'e.',
    },
    printView: {
      toggleBtn: 'Maxxansi (PDF)',
      exitBtn: 'Gara Porotofooliyootti Deebi\'i',
      savePdfBtn: 'Maxxansi / PDF Tiin Olkaa\'i',
      toolbarTitle: 'Mul\'ata Sanada Qacartootaa',
      toolbarSubtitle: 'Boca A4 fi Waraqaatti mijatu, qacartootaa fi kuusaa PDF tiif kan qophaa\'e',
      printHint: 'Gorsa: Yeroo waraqaa maxxansitan filannoo "Save as PDF" jedhu fayyadamaa, "Background graphics" eeyyamaa.',
      compactMode: 'Gabaabduu (Fuula 2)',
      fullMode: 'Bal\'aa Guutuu',
      executiveSummary: 'Gabaasa Gabaabaa Hojii',
      technicalExpertise: 'Dandeettiiwwan Teeknikaa & Meeshaalee',
      keyDeliverables: 'Pirojektoota Ijoo & Bu\'aawwan Hojii',
      endorsements: 'Ragaa fi Dhugaa-Bahuu Gorsitootaa',
      educationHistory: 'Seenaa Barnootaa & Sadarkaa',
      contactDetails: 'Odeeffannoo Qunnamtii Kallattii',
      verifiedDocument: 'Sanada Porotofooliyoo Mirkanaa\'e',
      recruiterNote: 'Iffaan yeroo ammaa hojii Full-Stack, Frontend (React) fi Injinariingii Sooftiweeriitiif banaadha.',
    },
  },
};
