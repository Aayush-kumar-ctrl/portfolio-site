export default function Webpages() {
const pages = [
{ title: "Weather App", link: "#" },
{ title: "Todo App", link: "#" },
{ title: "Blog Platform", link: "#" },
];


return (
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-black min-h-screen">
{pages.map((page, i) => (
<div key={i} className="neon-card p-4 rounded-lg slide-in">
<h3 className="text-xl font-bold neon-text">{page.title}</h3>
<a href={page.link} className="btn-neon">Visit</a>
</div>
))}
</div>
);
}