 "use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: "Point Relais",
      description:
        "Réception et retrait de colis Chronopost, Mondial Relay et particuliers.",
      icon: "📦",
      details:
        "Vous pouvez commander vos colis sur Amazon, Vinted, Leboncoin ou n’importe quelle enseigne et mettre notre adresse comme point relais.",
    },

    {
      title: "Livraison à domicile",
      description:
        "Livraison rapide de vos colis directement chez vous.",
      icon: "🚚",
      details:
        "Nous pouvons livrer vos colis directement à domicile selon la distance.",
    },

    {
      title: "Courses & Pharmacie",
      description:
        "Récupération de drives, courses et médicaments.",
      icon: "🛒",
      details:
        "Nous récupérons vos courses, médicaments et achats puis nous vous les livrons.",
    },

    {
      title: "Service Leboncoin",
      description:
        "Nous récupérons vos achats à votre place.",
      icon: "🤝",
      details:
        "Nous pouvons récupérer vos achats Leboncoin et vous les livrer.",
    },

    {
      title: "Envoi Outre-mer",
      description:
        "Expédition vers les DOM-TOM.",
      icon: "✈️",
      details:
        "Nous réceptionnons puis réexpédions vos colis vers l’outre-mer.",
    },
  ];

  const tarifs = [
    {
      icon: "📦",
      title: "Point Relais",
      prices: [
        "Petit colis : 0,50€",
        "Grand colis : 1€",
        "Stockage sécurisé",
        "Retrait flexible",
      ],
    },

    {
      icon: "🚚",
      title: "Livraison",
      prices: [
        "Déplacement : 5€ à 10€",
        "Gros colis : +10€",
        "Livraison rapide",
        "Service local",
      ],
    },

    {
      icon: "🛒",
      title: "Courses",
      prices: [
        "Déplacement : 5€ à 10€",
        "Commande : +5€",
        "Livraison à domicile",
        "Gros volume possible",
      ],
    },

    {
      icon: "🤝",
      title: "Leboncoin",
      prices: [
        "Déplacement : 5€ à 15€",
        "Gros objet : +10€",
        "Livraison possible",
        "Service pratique",
      ],
    },

    {
      icon: "✈️",
      title: "Outre-mer",
      prices: [
        "Déplacement : 10€ à 15€",
        "Devis personnalisé",
        "Aide douane",
        "Frais La Poste selon poids",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              DK EXPRESS 26
            </h1>

            <p className="text-xl mb-6 text-blue-100">
              Votre point relais et service de livraison local rapide,
              fiable et pratique.
            </p>

            <div className="flex flex-wrap gap-4">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-2xl font-bold shadow-lg"
              >
                Commander une livraison
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Nous contacter
              </motion.button>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-3xl p-6 shadow-2xl"
          >

            <img
              src="/logo.png"
              alt="DK Express 26"
              className="rounded-2xl"
            />

          </motion.div>

        </div>

      </motion.section>

      {/* SERVICES */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto text-center mb-14">

          <h2 className="text-4xl font-black mb-4">
            Nos Services
          </h2>

        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {services.map((service, index) => (

            <motion.div
              key={index}
              onClick={() => setSelectedService(service)}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-3xl p-6 shadow hover:shadow-xl transition cursor-pointer"
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

            </motion.div>

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

      {/* RÉSERVATION RAPIDE */}
      <section className="bg-blue-700 py-20 px-6 text-white">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-black text-center mb-10">
            Réservation rapide
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
              className="w-full p-4 rounded-xl text-black"
              required
            />

            <input
              type="tel"
              name="Téléphone"
              placeholder="Votre téléphone"
              className="w-full p-4 rounded-xl text-black"
              required
            />

            <select
              name="Service"
              className="w-full p-4 rounded-xl text-black"
              required
            >
              <option value="">Choisissez un service</option>
              <option>Point Relais</option>
              <option>Livraison à domicile</option>
              <option>Courses & Pharmacie</option>
              <option>Service Leboncoin</option>
              <option>Envoi Outre-mer</option>
            </select>

            <input
              type="date"
              name="Date"
              className="w-full p-4 rounded-xl text-black"
              required
            />

            <textarea
              name="Message"
              placeholder="Précisions supplémentaires..."
              className="w-full p-4 rounded-xl text-black"
              rows={4}
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl font-bold text-lg"
            >
              Réserver maintenant
            </button>

          </form>

        </div>

      </section>

      {/* TARIFS */}
      <section className="py-20 bg-gray-50 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-black text-center text-blue-700 mb-14">
            Nos Tarifs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {tarifs.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >

                <div className="text-5xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-4 text-blue-700">
                  {item.title}
                </h3>

                <ul className="space-y-3 text-gray-700">

                  {item.prices.map((price, i) => (
                    <li key={i}>• {price}</li>
                  ))}

                </ul>

              </motion.div>

            ))}

          </div>

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

      {/* POPUP */}
      {selectedService && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-3xl max-w-2xl w-full relative shadow-2xl"
          >

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>

            <div className="text-6xl mb-4">
              {selectedService.icon}
            </div>

            <h2 className="text-3xl font-black mb-4 text-blue-700">
              {selectedService.title}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {selectedService.details}
            </p>

          </motion.div>

        </div>

      )}

      {/* AVIS CLIENTS */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center text-blue-700 mb-14">
            Avis Clients
          </h2>

          <div className="text-center">

            <a
              href="https://maps.app.goo.gl/zyrhRQWwGUW8icj68"
              target="_blank"
              className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition"
            >
              Laisser un avis Google
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-6 mt-10 border-t">

        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">

          <p className="mb-3">
            © 2026 DK EXPRESS 26 - Tous droits réservés
          </p>

          <a
            href="/legal"
            className="text-blue-700 font-semibold hover:underline"
          >
            Mentions légales • Conditions générales • Confidentialité
          </a>

        </div>

      </footer>

    </div>
  );
}