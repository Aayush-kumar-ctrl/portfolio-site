export default function Webpages() {
  const pages = [
    { title: "Weather App", link: "#" },
    { title: "Todo App", link: "#" },
    { title: "Blog Platform", link: "#" },
  ];

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {pages.map((page, i) => (
        <div key={i} className="shadow-lg p-4 rounded-lg hover:shadow-xl">
          <h3 className="text-xl font-bold">{page.title}</h3>
          <a href={page.link} className="text-blue-600 hover:underline">Visit</a>
        </div>
      ))}
    </div>
  );
}
