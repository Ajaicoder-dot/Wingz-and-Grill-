export default function Gallery() {
  const items = [
    { label: "The Grill Station", className: "h-72" },
    { label: "Dining Area", className: "h-48" },
    { label: "Bar Lounge", className: "h-48" },
    { label: "Wing Platter", className: "h-72" },
    { label: "Our Team", className: "h-48" },
    { label: "Live Music Night", className: "h-72" },
    { label: "Private Dining", className: "h-48" },
    { label: "Restaurant Exterior", className: "md:col-span-2 h-64" },
  ];

  return (
    <section id="gallery" className="bg-cream py-20 px-6 text-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-lime inline-block" />
            <span className="text-sm uppercase tracking-wider text-dark font-medium">
              Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark">
            A Taste of the Experience
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden bg-dark-light flex items-center justify-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer ${item.className}`}
            >
              <span className="text-muted-light text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
