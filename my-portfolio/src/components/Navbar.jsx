import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="flex justify-between p-4 bg-gray-900 text-white">
<h1 className="text-xl font-bold">My Portfolio</h1>
<div className="space-x-4">
<Link to="/">Home</Link>
<Link to="/projects">Projects</Link>
<Link to="/about">About Me</Link>
<Link to="/webpages">Webpages</Link>
</div>
</nav>
);
}