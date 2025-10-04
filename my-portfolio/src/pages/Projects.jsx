export default function Projects() {
const projects = [
{ title: "E-commerce Website", desc: "A full-stack shopping site.", link: "#" },
{ title: "Chat App", desc: "Realtime chat with socket.io.", link: "#" },
{ title: "Portfolio Generator", desc: "Auto generates portfolio websites.", link: "#" },
];


return (
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
{projects.map((p, i) => (
<div key={i} className="shadow-lg p-4 rounded-lg">
<h3 className="text-xl font-bold">{p.title}</h3>
<p className="mb-2">{p.desc}</p>
<a href={p.link} className="text-blue-500 hover:underline">View Project</a>
</div>
))}
</div>
);
}