"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Point Relais",
      description:
        "Réception et retrait de colis Chronopost, Mondial Relay et particuliers.",
      icon: "📦",
      details:
        "Vous pouvez commander tout ce que vous souhaitez sur Amazon, Vinted, Leboncoin ou n’importe quelle autre enseigne et mettre notre adresse comme point relais. Vos colis sont directement livrés chez nous puis conservés en sécurité jusqu’à votre récupération.",
    },

    {
      title: "Livraison à domicile",
      description:
        "Livraison rapide de vos colis directement chez vous.",
      icon: "🚚",
      details:
        "Nous pouvons également livrer directement à domicile les colis réceptionnés dans notre point relais si vous n’avez pas la possibilité de vous déplacer.",
    },

    {
      title: "Courses & Pharmacie",
      description:
        "Récupération de drives, courses et médicaments.",
      icon: "🛒",
      details:
        "Nous récupérons vos courses, médicaments, fleurs et achats en magasin puis nous les livrons directement à domicile.",
    },

    {
      title: "Service Leboncoin",
      description:
        "Nous récupérons vos achats à votre place.",
      icon: "🤝",
      details:
        "Nous pouvons récupérer vos achats Leboncoin ou Marketplace puis vous les livrer directement.",
    },

    {
      title: "Envoi Outre-mer",
      description:
        "Expédition vers les DOM-TOM.",
      icon: "✈️",
      details:
        "Nous réceptionnons vos colis puis préparons leur réexpédition vers les DOM-TOM avec aide douanière.",
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

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0B1E5B] flex flex-col items-center justify-center text-white z-[9999]">

        <div className="animate-pulse">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider">
            DK EXPRESS 26
          </h1>
        </div>

        <div className="mt-8 flex gap-3">
          <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-300"></div>
        </div>

        <p className="mt-6 text-blue-100 text-lg">
          Chargement...
        </p>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-black text-blue-700">
            DK EXPRESS 26
          </h1>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-700">

            <a href="#accueil" className="hover:text-blue-700 transition">
              Accueil
            </a>

            <a href="#services" className="hover:text-blue-700 transition">
              Services
            </a>

            <a href="#tarifs" className="hover:text-blue-700 transition">
              Tarifs
            </a>

            <a href="#reservation" className="hover:text-blue-700 transition">
              Réservation
            </a>

            <a href="#avis" className="hover:text-blue-700 transition">
              Avis
            </a>

            <a href="#contact" className="hover:text-blue-700 transition">
              Contact
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <motion.section
        id="accueil"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white pt-36 pb-20 px-6"
      >

        {/* LIGHT EFFECTS */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">

          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400/30 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

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
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 25px rgba(249,115,22,0.8)",
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  relative overflow-hidden
                  bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400
                  px-8 py-4
                  rounded-2xl
                  font-black
                  text-white
                "
              >
                Commander une livraison
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 25px rgba(255,255,255,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  border border-white/30
                  bg-white/10 backdrop-blur-xl
                  px-8 py-4
                  rounded-2xl
                  font-bold
                  text-white
                "
              >
                Nous contacter
              </motion.button>

            </div>

            {/* IMAGE FRANCE */}
            <div className="mt-10">

              <img
                src="/france-outremer.png"
                alt="Livraison France et Outre-mer"
                className="w-full max-w-xl rounded-3xl shadow-2xl border border-white/20"
              />

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
    </div>
  );
}