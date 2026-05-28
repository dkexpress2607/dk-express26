"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Service = {
  title: string;
  description: string;
  icon: string;
  details: string;
};

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const services: Service[] = [
    {
      title: "Point Relais",
      description: "Réception et retrait de colis.",
      icon: "📦",
      details: "Service de réception sécurisé.",
    },

    {
      title: "Livraison",
      description: "Livraison rapide à domicile.",
      icon: "🚚",
      details: "Livraison locale rapide.",
    },

    {
      title: "Courses",
      description: "Courses et pharmacie.",
      icon: "🛒",
      details: "Récupération et livraison.",
    },

    {
      title: "Leboncoin",
      description: "Récupération d’achats.",
      icon: "🤝",
      details: "Nous récupérons vos achats.",
    },

    {
      title: "Outre-mer",
      description: "Expédition DOM-TOM.",
      icon: "✈️",
      details: "Envoi sécurisé vers les DOM-TOM.",
    },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0B1E5B] flex items-center justify-center z-50">
        <h1 className="text-white text-5xl font-black animate-pulse">
          DK EXPRESS 26
        </h1>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#f4f7fb]">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 className="text-2xl font-black text-blue-700">
            DK EXPRESS 26
          </h1>

          <nav className="hidden md:flex gap-8 font-semibold">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <h2 className="text-5xl font-black mb-6">
              Livraison rapide & point relais
            </h2>

            <p className="text-blue-100 text-xl mb-8">
              Service local fiable et rapide.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">

              <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-bold">
                Commander
              </button>

              <button className="border border-white px-8 py-4 rounded-2xl font-bold">
                Contact
              </button>

            </div>

            <img
              src="/france-outremer.png"
              alt="France Outre Mer"
              className="w-full rounded-3xl shadow-2xl"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-3xl shadow-2xl"
          >

            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-auto object-contain"
            />

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 px-6 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center text-blue-700 mb-14">
            Nos Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                onClick={() => setSelectedService(service)}
                className="bg-white p-6 rounded-3xl shadow-lg cursor-pointer"
              >

                <div className="text-5xl mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black text-blue-700 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* POPUP */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-3xl p-8 max-w-xl w-full relative">

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>

            <div className="text-6xl mb-4">
              {selectedService.icon}
            </div>

            <h2 className="text-3xl font-black text-blue-700 mb-4">
              {selectedService.title}
            </h2>

            <p className="text-gray-700">
              {selectedService.details}
            </p>

          </div>

        </div>
      )}

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-white border-t py-10"
      >

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-3xl font-black text-blue-700 mb-4">
            DK EXPRESS 26
          </h3>

          <p className="text-gray-600 mb-4">
            Service local • Livraison • Point relais
          </p>

          <p className="text-gray-500 text-sm">
            © 2026 DK EXPRESS 26
          </p>

        </div>

      </footer>

    </main>
  );
}