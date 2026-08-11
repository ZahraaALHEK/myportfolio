import discussionRoomImg from "../assets/Captxure.PNG";
import apiImg from "../assets/Captfure.png";
const projects = [
  {
    id: 1,
    name: "DiscussionRooms",
    description: "Built complete website using Node.js, Express, MongoDB, Mongoose and React for Real-time discussions with authentication, authorization, and real-time updates using Socket.io .",
    skills: [ "Node.js", "Express","MongoDb","Mongoose","REST APIs","React","Socket.io","JWT","bcrypt"],
    images: [discussionRoomImg], 
    link: "https://discussion-room-ten.vercel.app",
  },
  {
    id: 2,
    name: "RESTful API Development",
    description: "Built complete APIs using Node.js, Express, MongoDB, and Mongoose for CRUD operations with authentication and upload files and verification email.",
    skills: [ "Node.js", "Express","MongoDb","Mongoose","REST APIs"],
    images: [apiImg], 
    link: "https://github.com/ZahraaALHEK/blog-RESTful-APIs.git",
  },{
    id: 3,
    name:"Pharmacy API",
    description:"Backend service that allows searching for the nearest pharmacies by medicine name. Built with Laravel and PostgreSQL, using geolocation queries to return nearby results efficiently",
    skills: [ "Laravel", "PostgreSQL","REST APIs"],
    images: ["/path/to/image.png"], 
    link: "https://github.com/ZahraaALHEK/pharmacyDiscoveryBackend.git",
  },{
    id: 4,
    name:"Rock, Paper, Scissors game" ,
    description:"A simple and interactive Rock, Paper, Scissors game built with React. The player chooses between Rock, Paper, or Scissors, and the computer randomly selects its move. The game then compares both choices and displays the winner instantly.",
    skills: [ "React", "JavaScript"],
    images: ["/path/to/image.png"], 
    link: " https://zahraaalhek.github.io/game1/",
  },
    {
    id: 5,
    name: "Dynamic Website (PHP + MySQL)",
    description: "Developed a full-featured website using PHP and MySQL, including user authentication and database interaction.",
    skills: [ "PHP", "MySQL"],
    images: ["/path/to/image.png"], 
    link: "https://github.com/ZahraaALHEK/boutique.git",
  },
    {
    id: 6,
    name: "school-system",
    description: "java project with design patterns",
    skills: [ "Java", "Design Patterns","singleton pattern","builder pattern","factory pattern"],
    images: ["/path/to/image.png"], 
    link: "https://github.com/ZahraaALHEK/school-system.git",
  },
];

export default projects;
