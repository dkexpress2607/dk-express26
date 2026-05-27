export default function Home() {
  const services = [
    {
      title: "Point Relais",
      description:
        "Réception et retrait de colis Chronopost, Mondial Relay et particuliers.",
      icon: "📦",
    },
    {
      title: "Livraison à domicile",
      description:
        "Livraison rapide de vos colis directement chez vous.",
      icon: "🚚",
    },
    {
      title: "Courses & Pharmacie",
      description:
        "Récupération de drives, courses et médicaments.",
      icon: "🛒",
    },
    {
      title: "Service Leboncoin",
      description:
        "Nous récupérons vos achats à votre place et vous les livrons.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              DK EXPRESS 26
            </h1>

            <p className="text-xl mb-6">
              Votre point relais et service de livraison local rapide,
              fiable et pratique.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-2xl font-bold shadow-lg">
                Commander une livraison
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition">
                Nous contacter
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-2xl">
            <img
              src="/logo.png"
              alt="DK Express 26"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-black mb-4">
            Nos Services
          </h2>

          <p className="text-gray-600 text-lg">
            Des solutions rapides et locales pour simplifier votre quotidien.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-6 shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}