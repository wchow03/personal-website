export const navItems = [
    {name: "Home", link: "#"},
    {name: "Work", link: "#work"},
    {name: "Projects", link: "#projects"},
    {name: "Contact", link: "#contact"}
];

export const workExperience = [
    {
        title: "UBC CPSC 313 Teaching Assistant: Computer Hardware and Operating Systems", 
        desc: "Helped students understand computer architecture, CPU performance, memory hieararchy, virtual memory, file systems, and system calls through labs, office-hours, and one-on-one support.", 
        thumbnail: "#", id: 313
    },
    {
        title: "UBC CPSC 317 Teaching Assistant: Introduction to Computer Networking", 
        desc: "Helped students understand core computer networking concepts, including HTTP, DNS, TCP/UDP, IP, routing, reliable data transfer, congestion control, and network security through labs, office hours, and one-on-one support.", 
        thumbnail: "#", id: 317
    }
];

export const languages = [
    "/languages/C.svg",
    "/languages/C++.svg",
    "/languages/Cs.svg",
    "/languages/CSS3.svg",
    "/languages/Go.svg",
    "/languages/HTML5.svg",
    "/languages/Java.svg",
    "/languages/JavaScript.svg",
    "/languages/LaTeX.svg",
    "/languages/MySQL.svg",
    "/languages/Python.svg",
    "/languages/R.svg",
    "/languages/TypeScript.svg",
];

export const technologies = [
    "/technologies/D3.js.svg",
    "/technologies/Git.svg",
    "/technologies/MATLAB.svg",
    "/technologies/Next.js.svg",
    "/technologies/Node.js.svg",
    "/technologies/NPM.svg",
    "/technologies/OpenGL.svg",
    "/technologies/Postman.svg",
    "/technologies/React.svg",
    "/technologies/scikit-learn.svg",
    "/technologies/TailwindCSS.svg",
    "/technologies/Three.js.svg",
    "/technologies/Unity.svg",
];

export const projects = [
    {
        id: 1,
        title: "Bad Chilli Peppers",
        desc: "Worked in a team of five to create a 2D game with unique mechanics, enemies, and levels.",
        img: "/projects/bad-chilli-peppers.png",
        iconLists: ["/languages/C++.svg", "/technologies/OpenGL.svg"],
        // UPDATE BAD CHILLI PEPPERS LATER
        link: "https://www.youtube.com/watch?v=vJQI6arMnWI"
    },
    {
        id: 2,
        title: "Steam Games Database",
        desc: "Worked in a team of four to create a visualization where users are able to explore top owned games on steam.",
        img: "/projects/steamdb.png",
        iconLists: ["/languages/TypeScript.svg", "/technologies/D3.js.svg"],
        link: "https://steamgamesdb.netlify.app/"
    },
    {
        id: 3,
        title: "Streaming Service Application",
        desc: "Worked with a partner to create an application where users can view content offered from various streaming services.",
        img: "/projects/streaming-service.png",
        iconLists: ["/languages/TypeScript.svg", "/technologies/React.svg", "/technologies/TailwindCSS.svg", "/languages/MySQL.svg"],
        link: "https://www.youtube.com/watch?v=bYjsFGQ3XeY"
    },
    {
        id: 4,
        title: "MineSweeper clone",
        desc: "Developed a Minesweeper clone after mastering the game.",
        img: "/projects/minesweeper.png",
        iconLists: ["/languages/HTML5.svg", "/languages/CSS3.svg", "/languages/JavaScript.svg"],
        link: "https://wchow03-minesweeper.netlify.app/"
    }
];

export const socials = [
    {
        id: 1,
        img: "/socials/github.png",
        link: "https://github.com/wchow03"
    },
    {
        id: 2,
        img: "/socials/linkedin.png",
        link: "https://www.linkedin.com/in/williamchow03"
    }
];