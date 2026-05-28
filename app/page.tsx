"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: "Point Relais",
      description: "Réception et retrait de colis.",
      icon: "📦",
      details:
        "Commandez vos colis Amazon, Vinted, Leboncoin et faites-les livrer chez nous.",
    },

    {
      title: "Livraison",
      description: "Livraison rapide à domicile.",
      icon: "🚚",
      details:
        "Livraison locale rapide selon la distance et le volume.",
    },

    {
      title: "Courses",
      description: "Drives, pharmacie et magasins.",
      icon: "🛒",
      details:
        "Nous récupérons vos courses et médicaments.",
    },

    {
      title: "Leboncoin",
      description: "Récupération de vos achats.",
      icon: "🤝",
      details:
        "Nous récupérons vos achats à votre place.",
    },

    {
      title: "Outre-mer",
      description: "Expédition DOM-TOM.",
      icon: "✈️",
      details:
        "Réexpédition de colis vers l’outre-mer.",
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
      ],
    },

    {
      icon: "🚚",
      title: "Livraison",
      prices: [
        "Déplacement : 5€ à 10€",
        "Gros colis : +10€",
        "Livraison rapide",
      ],
    },

    {
      icon: "🛒",
      title: "Courses",
      prices: [
        "Déplacement : 5€ à 10€",
        "Commande : +5€",
        "Livraison à domicile",
      ],
    },

    {
      icon: "🤝",
      title: "Leboncoin",
      prices: [
        "Déplacement : 5€ à 15€",
        "Gros objet : +10€",
        "Livraison possible",
      ],
    },

    {
      icon: "✈️",
      title: "Outre-mer",
      prices: [
        "Déplacement : 10€ à 15€",
        "Aide douane",
        "Devis personnalisé",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-black text-2xl text-blue-700">
            DK EXPRESS 26
          </h1>

          <nav className="hidden md:flex gap-6 font-semibold">

            <a href="#services" className="hover:text-blue-700">
              Services
            </a>

            <a href="#tarifs" className="hover:text-blue-700">
              Tarifs
            </a>

            <a href="#reservation" className="hover:text-blue-700">
              Réservation
            </a>

            <a href="#avis" className="hover:text-blue-700">
              Avis
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-500 text-white pt-40 pb-28 px-6">

        <div className="absolute w-96 h-96 bg-blue-300/20 rounded-full blur-3xl top-0 left-0"></div>

        <div className="absolute w-96 h-96 bg-orange-300/20 rounded-full blur-3xl bottom-0 right-0"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-6xl font-black leading-tight mb-6">
              Livraison rapide & point relais local
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              DK EXPRESS 26 simplifie vos livraisons, courses et expéditions.
            </p>

            <div className="flex flex-wrap gap-4">

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#reservation"
                className="bg-orange-500 px-8 py-4 rounded-2xl font-bold shadow-2xl"
              >
                Réserver maintenant
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#services"
                className="border border-white px-8 py-4 rounded-2xl font-bold"
              >
                Découvrir
              </motion.a>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl rounded-[40px] p-8 border border-white/20 shadow-2xl"
          >

            <img
              src="/logo.png"
              alt="logo"
              className="rounded-3xl"
            />

          </motion.div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          {[
            ["500+", "Colis livrés"],
            ["100+", "Clients satisfaits"],
            ["24h", "Livraison rapide"],
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl p-10 text-center shadow-lg"
            >

              <h3 className="text-5xl font-black text-blue-700 mb-3">
                {item[0]}
              </h3>

              <p className="text-gray-600 text-lg">
                {item[1]}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto text-center mb-16">

          <h2 className="text-5xl font-black text-blue-700 mb-4">
            Nos Services
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-3xl p-8 shadow-xl cursor-pointer"
            >

              <div className="text-6xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-black mb-3 text-blue-700">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* POURQUOI NOUS */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-black text-center text-blue-700 mb-16">
            Pourquoi nous choisir ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Livraison rapide",
              "Service local",
              "Tarifs accessibles",
              "Support personnalisé",
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 rounded-3xl shadow-lg text-center"
              >

                <div className="text-4xl mb-4">✅</div>

                <p className="font-bold text-lg">
                  {item}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-24 bg-gray-50 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center text-blue-700 mb-16">
            Nos Tarifs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            {tarifs.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >

                <div className="text-5xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-5 text-blue-700">
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

      {/* RESERVATION */}
      <section
        id="reservation"
        className="py-24 px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white"
      >

        <div className="max-w-3xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-12">
            Réservation rapide
          </h2>

          <form
            action="https://formsubmit.co/dkexpress2607@gmail.com"
            method="POST"
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-4 rounded-2xl text-black"
              required
            />

            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full p-4 rounded-2xl text-black"
              required
            />

            <textarea
              placeholder="Votre demande..."
              rows={5}
              className="w-full p-4 rounded-2xl text-black"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 py-4 rounded-2xl font-black text-lg hover:bg-orange-600 transition"
            >
              Envoyer la demande
            </button>

          </form>

        </div>

      </section>

      {/* AVIS */}
      <section id="avis" className="py-24 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-black text-center text-blue-700 mb-16">
            Avis Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Service rapide et sérieux ⭐⭐⭐⭐⭐",
              "Livraison parfaite ⭐⭐⭐⭐⭐",
              "Très pratique au quotidien ⭐⭐⭐⭐⭐",
            ].map((avis, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-3xl shadow-lg"
              >

                <p className="text-gray-700 text-lg">
                  {avis}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* HORAIRES */}
      <section className="py-20 bg-gray-50 text-center px-6">

        <h2 className="text-5xl font-black text-blue-700 mb-10">
          Horaires
        </h2>

        <p className="text-xl text-gray-700">
          Lundi - Samedi : 8h00 - 20h00
        </p>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-3xl font-black mb-4">
            DK EXPRESS 26
          </h3>

          <p className="text-gray-400 mb-4">
            Livraison • Point relais • Courses • Outre-mer
          </p>

          <p className="text-gray-500 text-sm">
            © 2026 DK EXPRESS 26 - Tous droits réservés
          </p>

        </div>

      </footer>

      {/* POPUP */}
      {selectedService && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full relative shadow-2xl"
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

            <h2 className="text-4xl font-black text-blue-700 mb-5">
              {selectedService.title}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              {selectedService.details}
            </p>

          </motion.div>

        </div>

      )}

    </div>
  );
}