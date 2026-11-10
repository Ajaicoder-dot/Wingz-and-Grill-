export default function Specials() {
  const specials = [
    {
      name: "Wing Wednesday",
      description: "Half-price wings every Wednesday after 5 PM",
    },
    {
      name: "Smoky Saturday",
      description: "Buy one rack, get one half off on all ribs",
    },
    {
      name: "Sunday Family Feast",
      description: "Family platter for 4 at $49.99",
    },
  ];

  return (
    <section className="bg-cream py-20 px-6 text-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-lime inline-block"></span>
              <span className="uppercase text-sm font-semibold tracking-widest">
                Weekly Specials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              This Week&apos;s Flame Picks
            </h2>
            <p className="text-muted mt-4">
              Every week we bring something special to the table. Check out our
              hottest deals and make sure you don&apos;t miss out.
            </p>

            {/* Specials List */}
            <div className="mt-6 space-y-4">
              {specials.map((special, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-lime mt-1.5 shrink-0"></span>
                  <div>
                    <p className="font-semibold">{special.name}</p>
                    <p className="text-muted text-sm">{special.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block mt-6 text-lime-dark font-semibold hover:underline"
            >
              See All Specials →
            </a>
          </div>

          {/* Right Column */}
          <div className="bg-dark-light rounded-2xl h-80 flex items-center justify-center">
            <span className="text-muted">Specials Board</span>
          </div>
        </div>
      </div>
    </section>
  );
}
