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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full"></div>
      </div>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >

            <div className="inline-block bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-200 text-sm mb-6 backdrop-blur-xl">
              Livraison • Point Relais • Services locaux
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              DK EXPRESS 26
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Votre service local moderne pour la réception,
              la livraison et l’expédition de colis.
            </p>

            <div className="flex flex-wrap gap-4">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-2xl font-bold shadow-2xl"
              >
                Commander
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 bg-white/10 backdrop-blur-xl px-7 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
              >
                Nous contacter
              </motion.button>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >

            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

              <img
                src="/logo.png"
                alt="DK Express 26"
                className="rounded-3xl"
              />

            </div>

          </motion.div>

        </div>

      </motion.section>

      {/* SERVICES */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto text-center mb-16">

          <h2 className="text-5xl font-black mb-4">
            Nos Services
          </h2>

          <p className="text-slate-400 text-lg">
            Des solutions rapides et fiables pour tous vos besoins.
          </p>

        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {services.map((service, index) => (

            <motion.div
              key={index}
              onClick={() => setSelectedService(service)}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl cursor-pointer"
            >

              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-slate-300">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* TARIFS */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-14">
            Nos Tarifs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {tarifs.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
              >

                <div className="text-5xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-5 text-blue-300">
                  {item.title}
                </h3>

                <ul className="space-y-3 text-slate-300">

                  {item.prices.map((price, i) => (
                    <li key={i}>• {price}</li>
                  ))}

                </ul>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-12">
            Notre localisation
          </h2>

          <div className="rounded-[35px] overflow-hidden border border-white/10 shadow-2xl">

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

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-900 border border-white/10 p-8 rounded-[35px] max-w-2xl w-full relative shadow-2xl"
          >

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>

            <div className="text-6xl mb-5">
              {selectedService.icon}
            </div>

            <h2 className="text-3xl font-black mb-5 text-blue-300">
              {selectedService.title}
            </h2>

            <p className="text-slate-300 leading-relaxed">
              {selectedService.details}
            </p>

          </motion.div>

        </div>

      )}

      {/* AVIS */}
      <section className="py-20 px-6">

        <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-2xl shadow-2xl">

          <h2 className="text-5xl font-black mb-6">
            Avis Clients
          </h2>

          <p className="text-slate-300 mb-8 text-lg">
            Votre satisfaction est notre priorité.
          </p>

          <a
            href="https://maps.app.goo.gl/zyrhRQWwGUW8icj68"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-bold shadow-lg"
          >
            Laisser un avis Google
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">

        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">

          <p className="mb-3">
            © 2026 DK EXPRESS 26 - Tous droits réservés
          </p>

          <a
            href="/legal"
            className="text-blue-300 hover:text-white transition"
          >
            Mentions légales • Conditions générales • Confidentialité
          </a>

        </div>

      </footer>

    </div>
  );
}