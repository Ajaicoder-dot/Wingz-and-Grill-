export default function Reviews() {
  const reviews = [
    {
      text: "The buffalo wings here are absolutely unreal. Crispy, juicy, and the sauce has the perfect kick. This is my go-to spot every weekend.",
      name: "Marcus J.",
      subtitle: "Regular Since 2019",
    },
    {
      text: "Best ribs in the city, hands down. The smoky BBQ glaze is addictive. The atmosphere is great too — rustic but modern.",
      name: "Sarah L.",
      subtitle: "Food Blogger",
    },
    {
      text: "Brought my whole family for the Sunday grill special and everyone loved it. The kids can't stop talking about the loaded nachos!",
      name: "David R.",
      subtitle: "Family Regular",
    },
  ];

  const stats = [
    { number: "4.9", label: "Google Rating" },
    { number: "12K+", label: "Happy Guests" },
    { number: "6+", label: "Years of Flavor" },
  ];

  return (
    <section id="reviews" className="bg-cream py-20 px-6 text-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-lime inline-block"></span>
            <span className="uppercase text-sm font-semibold tracking-widest">
              Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Guests Say
          </h2>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <span className="text-5xl font-serif text-lime leading-none">
                &ldquo;
              </span>
              <p className="text-dark text-base leading-relaxed mt-2">
                {review.text}
              </p>
              <div className="mt-6">
                <p className="font-semibold text-dark">{review.name}</p>
                <p className="text-muted text-sm">{review.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 text-center">
          <div className="flex justify-center gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-dark">{stat.number}</p>
                <p className="text-muted text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
