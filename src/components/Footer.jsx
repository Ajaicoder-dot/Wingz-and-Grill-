export default function Footer() {
  const quickLinks = ["Menu", "About", "Gallery", "Reviews", "Careers"];
  const socials = [
    { label: "IG" },
    { label: "FB" },
    { label: "TW" },
    { label: "YT" },
  ];

  return (
    <footer id="contact" className="bg-dark border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 — Logo & tagline */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2">
              {/* Wing SVG icon */}
              <svg
                className="w-8 h-8 text-lime"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 44c4-16 16-28 32-32-2 8-6 16-14 22s-14 8-18 10z"
                  fill="currentColor"
                />
                <path
                  d="M8 48c2-6 6-14 14-20 0 0-4 10-6 16s-4 8-8 4z"
                  fill="currentColor"
                  opacity="0.6"
                />
              </svg>
              <span className="text-white font-bold text-lg">wingz & grill</span>
            </a>
            <p className="text-muted text-sm mt-3">
              Flame-grilled perfection since 2019
            </p>
          </div>

          {/* Column 2 — Visit Us */}
          <div>
            <h4 className="font-semibold text-white mb-4">Visit Us</h4>
            <div className="text-muted text-sm leading-relaxed">
              <p>123 Grill Street, Downtown</p>
              <p>Flavor City, FC 10001</p>
              <p className="mt-2">Open Daily: 11AM - 11PM</p>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted text-sm hover:text-lime transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Stay Connected */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-muted text-sm">
              Follow us for daily specials and behind-the-scenes content
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map(({ label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-lime transition text-white hover:text-dark text-sm font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center flex-wrap gap-4">
          <p className="text-muted text-sm">
            © 2024 Wingz &amp; Grill. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted text-sm hover:text-lime transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
