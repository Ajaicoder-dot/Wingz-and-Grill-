const menuItems = [
  {
    name: "Classic Buffalo Wings",
    description:
      "Crispy wings tossed in our signature buffalo sauce, served with blue cheese dip",
    price: "$14.99",
  },
  {
    name: "Smoky BBQ Ribs",
    description:
      "Slow-cooked baby back ribs glazed with our house-made smoky BBQ sauce",
    price: "$24.99",
  },
  {
    name: "Grilled Chicken Platter",
    description:
      "Herb-marinated chicken breast grilled to perfection with seasonal vegetables",
    price: "$18.99",
  },
  {
    name: "The Wingz Burger",
    description:
      "Double smash patty with caramelized onions, cheddar, pickles, and our secret sauce",
    price: "$16.99",
  },
];

const secondRowItems = [
  {
    name: "Loaded Nachos",
    description:
      "Mountain of tortilla chips topped with melted cheese, jalapeños, guac, sour cream & salsa",
    price: "$12.99",
  },
  {
    name: "Grilled Salmon",
    description:
      "Atlantic salmon fillet with lemon herb butter, served on a bed of wild rice",
    price: "$26.99",
  },
];

function MenuCard({ name, description, price }) {
  return (
    <div className="bg-dark rounded-2xl overflow-hidden">
      <div className="h-56 bg-dark-light flex items-center justify-center">
        <span className="text-muted">{name}</span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-muted-light text-sm mt-2">{description}</p>
          </div>
          <span className="text-lime font-bold text-xl">{price}</span>
        </div>
      </div>
    </div>
  );
}

export default function MenuHighlights() {
  return (
    <section id="menu" className="bg-cream py-20 px-6 text-dark">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-lime inline-block" />
              <span className="uppercase tracking-wider text-sm">
                Our Menu
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark">
              Signature Dishes
            </h2>
          </div>
          <a
            href="#"
            className="text-dark font-medium hover:text-lime-dark transition-colors"
          >
            View Full Menu →
          </a>
        </div>

        {/* Main grid - 4 items */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <MenuCard key={item.name} {...item} />
          ))}
        </div>

        {/* Second row - 2 wider items */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondRowItems.map((item) => (
            <MenuCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
