import ProjectCard from "../components/ProjectCard"



const projects = [
    {
        id: 1,
        name: "Dundeons & Dragons Game",
        link: "https://github.com/J5imonson/dnd-rpg"
    },
    {
        id: 2,
        name: "Apartment Mainence Applicatiion",
        link: "https://github.com/4Bollard/apartment-maintenance-app"
    },
    {
        id: 3,
        name: "E-Commerce Backend",
        link: "https://github.com/4Bollard/e-commerce-be"
    },
    {
        id: 4,
        name: "Social Media Mongo",
        link: "https://github.com/4Bollard/social-media-mongo"
    },
    {
        id: 5,
        name: "Weather Tracker",
        link: "https://4bollard.github.io/5dayweather/"
    },
    {
        id: 6,
        name: "Portfolio",
        link: "https://github.com/4Bollard/note-taker"
    }
];



export default function Portfolio() {


    return (
        
        <main className="w-75 px-5">
            <h3>Portfolio</h3>
            


        <ProjectCard projectCard={projects} />



        </main>





    )
}

