export const links = [
    { text: "About Space", path: "/about" },
    { text: "Projects Space", path: "/projects" },
    { text: "Certificate Space", path: "/certificate" },
    { text: "Skills Space", path: "/skills" },
    { text: "Experience Space", path: "/experience" },
];

export const mobileLinks = [
    { text: "Home Space", path: "/"},
    { text: "About Space", path: "/about" },
    { text: "Projects Space", path: "/projects" },
    { text: "Certificate Space", path: "/certificate" },
    { text: "Skills Space", path: "/skills" },
    { text: "Experience Space", path: "/experience" },
];

interface project {
    id: number;
    title: string;
    desc: string;
    techStack: string;
    url: string;
    githubUrl?: string;
}

export const projectsList: project[] = [
    {
        id: 1,
        title: "Edu Green Indonesia - English Course Registration",
        desc: "Embark on a language-learning journey with Edu Green Indonesia! Our website serves as your gateway to mastering the English language. Dive into a platform that not only provides comprehensive information about our English courses but also offers a seamless registration process. Join us in enhancing your language skills and unlocking new opportunities! 🌐📚",
        techStack: "Laravel, MySQL, Bootstrap, jQuery, HTML, CSS",
        url: "https://edugreenindonesia.com/",
        githubUrl: ""
    },
    {
        id: 2,
        title: "Informatics Festival 11 Experience",
        desc: "Immerse yourself in the excitement of Informatics Festival 11! Our interactive website not only provides details about the thrilling events but also offers a seamless registration process. Be part of the tech extravaganza and unleash your passion for innovation! 🚀",
        techStack: "Laravel, MySQL, Bootstrap, Tailwind, jQuery, HTML, CSS",
        url: "https://github.com/ApocalCrk/ifest11"
    },
    {
        id: 3,
        title: "Informatics Festival 10 Experience",
        desc: "Immerse yourself in the excitement of Informatics Festival 10! Our interactive website not only provides details about the thrilling events but also offers a seamless registration process. Be part of the tech extravaganza and unleash your passion for innovation! 🚀",
        techStack: "Laravel, MySQL, Bootstrap, Tailwind, jQuery, HTML, CSS",
        url: "https://github.com/ApocalCrk/dash_ifest"
    },
    {
        id: 4,
        title: "HIMAFORKA Mobile App",
        desc: "A mobile application that contains information about HIMAFORKA UAJY and its activities. This application also provides a platform for HIMAFORKA members to access their academic data. 📱",
        techStack: "Flutter, Firebase, Dart",
        url: "https://github.com/ApocalCrk/himaforka",
        githubUrl: ""
    },
    {
        id: 5,
        title: "SIATMA Mobile (Unofficial) - Your Academic Companion",
        desc: "Navigate through your academic journey with ease! SIATMA Mobile is your unofficial companion for accessing and managing your student's academic data at UAJY. Stay organized, stay ahead, and embrace the power of knowledge! 📚",
        techStack: "Flutter, Firebase, Dart, Node.js, Express.js, MySQL",
        url: "https://github.com/ApocalCrk/siatma-release",
        githubUrl: ""
    },
    {
        id: 6,
        title: "Gimme Mobile App - Your Fitness Pal",
        desc: "Embark on a fitness journey like never before! Gimme is not just an app; it's your personal fitness companion. Discover nearby gyms, engage in invigorating exercises, and take charge of your well-being. Your path to a healthier lifestyle starts here! 💪",
        techStack: "Flutter, Laravel, MySQL, Dart, PHP",
        url: "https://github.com/ApocalCrk/gimme",
        githubUrl: ""
    },
    {
        id: 7,
        title: "E Perlib - Explore the World of Books",
        desc: "Experience the magic of e-perlib! This website opens the door to a world of knowledge. Borrow books effortlessly by scanning QR codes at the library in UAJY. Dive into the realms of literature and embark on endless adventures. 📖",
        techStack: "Laravel, MySQL, Bootstrap, jQuery, HTML, CSS",
        url: "https://thrush-crucial-frog.ngrok-free.app/",
        githubUrl: ""
    },
    {
        id: 8,
        title: "Competency Test for Public Complaint Service",
        desc: "Navigate the world of public service with confidence! Our competency test website is designed to streamline the public complaint service process. Elevate your skills, contribute to community welfare, and make a difference! 🌐",
        techStack: "Laravel, MySQL, Bootstrap, jQuery, HTML, CSS",
        url: "https://github.com/ApocalCrk/ukk_complaint_service",
        githubUrl: ""
    }
];

interface SkillCategory {
    name: string;
    level: string;
    icon: string;
}

interface SkillsList {
    [key: string]: SkillCategory[];
}

export const skillsList: SkillsList = {
    "Programming": [
        {
            "name": "PHP",
            "level": "Advanced",
            "icon": "https://www.php.net/favicon.ico?v=2"
        },
        {
            "name": "HTML",
            "level": "Advanced",
            "icon": "https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
        },
        {
            "name": "CSS",
            "level": "Advanced",
            "icon": "https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png"
        },
        {
            "name": "JavaScript",
            "level": "Advanced",
            "icon": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        },
        {
            "name": "Dart",
            "level": "Advanced",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dart_programming_language_logo_icon.svg/2048px-Dart_programming_language_logo_icon.svg.png"
        },
        {
            "name": "Java",
            "level": "Intermediate",
            "icon": "https://cdn-icons-png.flaticon.com/512/226/226777.png"
        },
        {
            "name": "Python",
            "level": "Intermediate",
            "icon": "https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
        },
        {
            "name": "C++",
            "level": "Intermediate",
            "icon": "https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
        },
        {
            "name": "C",
            "level": "Intermediate",
            "icon": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-program-icon.png"
        }
    ],
    "Framework": [
        {
            "name": "Laravel",
            "level": "Advanced",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png"
        },
        {
            "name": "CodeIgniter",
            "level": "Advanced",
            "icon": "https://cdn-peanutsquare.b-cdn.net/wp-content/uploads/2022/11/codeigniter-logo.png"
        },
        {
            "name": "Flutter",
            "level": "Advanced",
            "icon": "https://static-00.iconduck.com/assets.00/flutter-icon-1651x2048-ojswpayr.png"
        },
        {
            "name": "Bootstrap",
            "level": "Advanced",
            "icon": "https://icons.getbootstrap.com/assets/img/favicons/favicon-32x32.png"
        },
        {
            "name": "jQuery",
            "level": "Advanced",
            "icon": "https://static-00.iconduck.com/assets.00/jquery-icon-icon-512x507-kvrw1iok.png"
        },
        {
            "name": "Tailwind",
            "level": "Intermediate",
            "icon": "https://tailwindcss.com/favicons/favicon.ico?v=3"
        },
        {
            "name": "Express.js",
            "level": "Intermediate",
            "icon": "https://steppingstone.in/images/logos/express.png"
        },
        {
            "name": "Node.js",
            "level": "Intermediate",
            "icon": "https://nodejs.org/static/images/favicons/favicon.png"
        },
        {
            "name": "React.js",
            "level": "Intermediate",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        },
        {
            "name": "Django",
            "level": "Beginner",
            "icon": "https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png"
        },
        {
            "name": "TensorFlow",
            "level": "Beginner",
            "icon": "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png"
        }
    ],
    "Database": [
        {
            "name": "MySQL",
            "level": "Intermediate",
            "icon": "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png"
        },
        {
            "name": "Firebase",
            "level": "Intermediate",
            "icon": "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
        },
        {
            "name": "MongoDB",
            "level": "Intermediate",
            "icon": "https://www.svgrepo.com/show/331488/mongodb.svg"
        },
        {
            "name": "SQLite",
            "level": "Intermediate",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1200px-Sqlite-square-icon.svg.png"
        },
        {
            "name": "PostgreSQL",
            "level": "Intermediate",
            "icon": "https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
        }
    ],
    "Tools": [
        {
            "name": "Git",
            "level": "Intermediate",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCXNMIrOWWl3o6ZdX59KcpIZQbCd3jRDFmI7aTNod9g&s"
        },
        {
            "name": "GitHub",
            "level": "Intermediate",
            "icon": "https://github.githubassets.com/favicons/favicon-dark.png"
        },
        {
            "name": "VS Code",
            "level": "Intermediate",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"
        },
        {
            "name": "Postman",
            "level": "Intermediate",
            "icon": "https://cdn.worldvectorlogo.com/logos/postman.svg"
        },
        {
            "name": "Linux",
            "level": "Intermediate",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/1200px-Icons8_flat_linux.svg.png"
        },
        {
            "name": "Windows",
            "level": "Advanced",
            "icon": "https://i.redd.it/ne6ukkej06t71.png"
        },
        {
            "name": "MacOS",
            "level": "Intermediate",
            "icon": "https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-512.png"
        },
        {
            "name": "Figma",
            "level": "Advanced",
            "icon": "https://cdn.icon-icons.com/icons2/2699/PNG/512/figma_logo_icon_170157.png"
        }
    ]
};

interface Certificate {
    id: number;
    title: string;
    desc: string;
    date: string;
    organization: string;
    img: string;
    imgUrl: string;
}

export const certificatesList: Certificate[] = [
    {
        id: 1,
        title: "Problem Solving (Intermediate)",
        desc: "This certification validates me proficiency in Problem Solving (Intermediate).",
        date: "April 2021",
        organization: "HackerRank",
        img: "src/assets/certificate/pb inter.png",
        imgUrl: "https://www.hackerrank.com/certificates/35df65426eeb"
    },
    {
        id: 2,
        title: "Certificate of Competency",
        desc: "This certification validates me proficiency in Laravel, MySQL, Bootstrap, jQuery, HTML, and CSS.",
        date: "March 2021",
        organization: "PT. Garuda Cyber Indonesia",
        img: "src/assets/certificate/cc.png",
        imgUrl: "https://drive.google.com/file/d/1JG4leKbd_SU8M3xd4n2mSQTCdo2hP9Ds/view?usp=sharing"
    },
    {
        id: 3,
        title: "Problem Solving (Basic)",
        desc: "This certification validates me proficiency in Problem Solving (Basic).",
        date: "February 2021",
        organization: "HackerRank",
        img: "src/assets/certificate/pb basic.png",
        imgUrl: "https://www.hackerrank.com/certificates/63aefc7cb724"
    },
    {
        id: 4,
        title: "Python (Basic)",
        desc: "This certification validates me proficiency in Python (Basic).",
        date: "October 2020",
        organization: "HackerRank",
        img: "src/assets/certificate/py basic.png",
        imgUrl: "https://www.hackerrank.com/certificates/a08a3ccd8e7c"
    },
    {
        id: 5,
        title: "Bakti Backend (Python)",
        desc: "This certification validates me proficiency in Python.",
        date: "September 2020",
        organization: "ASIOTI, Kominfo, & Kemenperin RI",
        img: "src/assets/certificate/bakti.png",
        imgUrl: "https://drive.google.com/file/d/1q5735DXJ5G8kE3E2WnF2zuAQcOnsf70I/view?usp=sharing"
    }
];

interface Experience {
    id: number;
    title: string;
    desc: string;
    date: string;
    organization: string;
    type: string;
    img: string;
    imgUrl: string;
}

export const experienceList: Experience[] = [
    {
        id: 1,
        title: "Web Developer",
        desc: "Develop a website for Asosiasi Pengusaha Indonesia (APINDO) Riau. The website is used for sharing information about APINDO Riau and its activities. The website also has a Content Management System (CMS) to manage the website content.",
        date: "January 2020 - May 2020",
        organization: "Mattcom Indonesia",
        type: "Internship",
        img: "src/assets/experience/mattcom.jpeg",
        imgUrl: "https://www.linkedin.com/in/ferdy-firmansyah-126518204/overlay/1635535737684/single-media-viewer/?profileId=ACoAADQLw64Baatz68FwtAScFLpOF3F_U5H-zes"
    },
    {
        id: 2,
        title: "Assistant Lecturer",
        desc: "Assist lecturers in teaching and grading students in the course of C Programming Language.",
        date: "February 2023 - July 2023",
        organization: "Universitas Atma Jaya Yogyakarta",
        type: "Part-time Job",
        img: "src/assets/experience/uajy.png",
        imgUrl: "https://www.linkedin.com/in/ferdy-firmansyah-126518204/overlay/1635535738654/single-media-viewer/?profileId=ACoAADQLw64Baatz68FwtAScFLpOF3F_U5H-zes"
    },
    {
        id: 3,
        title: "Web Developer",
        desc: "Developed a website for Edu Green Indonesia. The website is used for English course registration.",
        date: "Mei 2021 - June 2021",
        organization: "Edu Green Indonesia",
        type: "Freelance",
        img: "src/assets/experience/edugreen.png",
        imgUrl: "https://edugreenindonesia.com/"
    },
    {
        id: 4,
        title: "Web Developer",
        desc: "Developed a website for Informatics Festival 11. The website is used for registration and information about the event.",
        date: "December 2022 - January 2023",
        organization: "HIMAFORKA UAJY",
        type: "Freelance",
        img: "src/assets/experience/ifest11.png",
        imgUrl: "https://github.com/ApocalCrk/ifest11"
    },
    {
        id: 5,
        title: "Web Developer",
        desc: "Developed a website for Informatics Festival 10. The website is used for registration and information about the event.",
        date: "October 2021 - Nov 2021",
        organization: "HIMAFORKA UAJY",
        type: "Freelance",
        img: "src/assets/experience/ifest10.png",
        imgUrl: "https://github.com/ApocalCrk/dash_ifest"
    }
];