"use client";

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

      {/* HERO */}
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

      {/* SERVICES */}
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
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

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

      {/* FORMULAIRE */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
            Formulaire de commande
          </h2>

          <form
            action="https://formsubmit.co/dkexpress2607@gmail.com"
            method="POST"
            className="space-y-4"
          >

            <input
              type="text"
              name="Nom"
              placeholder="Votre nom"
              className="w-full p-3 rounded-lg border text-black"
              required
            />

            <input
              type="text"
              name="Adresse"
              placeholder="Votre adresse"
              className="w-full p-3 rounded-lg border text-black"
              required
            />

            <input
              type="tel"
              name="Téléphone"
              placeholder="Votre téléphone"
              className="w-full p-3 rounded-lg border text-black"
              required
            />

            <textarea
              name="Commande"
              placeholder="Expliquez votre demande..."
              className="w-full p-3 rounded-lg border text-black"
              rows={4}
              required
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Envoyer la demande
            </button>

          </form>

        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="py-20 bg-white text-black">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8 text-center">
            Notre localisation
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.828889993852!2d4.788405699999996!3d44.66184750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b54138c9012adf%3A0xce1f2b89eb19e8fa!2s6%20chemin%20therese%20caillet%2C%2026740%20Les%20Tourrettes!5e0!3m2!1sfr!2sfr!4v1779866110753!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>

    </div>
  );
}