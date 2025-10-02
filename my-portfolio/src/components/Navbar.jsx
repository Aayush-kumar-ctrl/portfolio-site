import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="flex justify-between p-4 bg-black text-white shadow-lg neon-text">
<h1 className="text-xl font-bold neon-text">My Portfolio</h1>
<div className="space-x-4">
<Link to="/" className="hover:underline hover:text-blue-400 transition">Home</Link>
<Link to="/projects" className="hover:underline hover:text-blue-400 transition">Projects</Link>
<Link to="/about" className="hover:underline hover:text-blue-400 transition">About Me</Link>
<Link to="/webpages" className="hover:underline hover:text-blue-400 transition">Webpages</Link>
</div>
</nav>
);
}