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
      "Vous pouvez commander tout ce que vous souhaitez sur Amazon, Vinted, Leboncoin ou n’importe quelle autre enseigne et mettre notre adresse comme point relais. Vos colis sont directement livrés chez nous puis conservés en sécurité jusqu’à votre récupération. Nous acceptons les colis Chronopost, Mondial Relay ainsi que les remises de particuliers. Lors de votre commande, il vous suffit simplement de renseigner notre adresse ainsi que le nom du point relais afin que votre colis soit livré directement chez nous. Les frais de réception sont appliqués uniquement lors de la récupération du colis selon sa taille.",
  },

  {
    title: "Livraison à domicile",
    description:
      "Livraison rapide de vos colis directement chez vous.",
    icon: "🚚",
    details:
      "Nous pouvons également livrer directement à domicile les colis réceptionnés dans notre point relais si vous n’avez pas la possibilité de vous déplacer. La livraison s’effectue selon la distance et les kilomètres à parcourir. Nous pouvons également transporter des colis volumineux ou lourds comme de l’électroménager, des meubles ou des objets encombrants.",
  },

  {
    title: "Courses & Pharmacie",
    description:
      "Récupération de drives, courses et médicaments.",
    icon: "🛒",
    details:
      "Vous pouvez commander vos courses en drive et nous nous chargeons de les récupérer pour vous. Il suffit simplement de nous transmettre l’adresse, les informations du drive ainsi que les coordonnées nécessaires à la récupération. Nous pouvons ensuite livrer directement vos courses à domicile. Nous pouvons aussi récupérer des médicaments déjà préparés en pharmacie, des fleurs, des achats en magasin ou toute autre commande tant que vous fournissez une autorisation ou un justificatif d’achat. Nous proposons également une aide pour les personnes souhaitant être accompagnées dans la commande de leurs courses.",
  },

  {
    title: "Service Leboncoin",
    description:
      "Nous récupérons vos achats à votre place.",
    icon: "🤝",
    details:
      "Si vous ne pouvez pas vous déplacer pour récupérer un achat Leboncoin ou Marketplace, nous pouvons nous présenter directement à votre place afin de récupérer l’objet puis vous le livrer à domicile. Nous pouvons transporter aussi bien des petits objets que des équipements plus volumineux comme de l’électroménager ou du mobilier.",
  },

  {
    title: "Envoi Outre-mer",
    description:
      "Expédition vers les DOM-TOM.",
    icon: "✈️",
    details:
      "Nous pouvons réceptionner vos commandes Amazon, Vinted, pièces automobiles ou autres directement dans notre point relais puis préparer leur réexpédition vers les DOM-TOM. Nous pesons les colis, aidons à la déclaration douanière ou pouvons l’effectuer nous-mêmes, puis réalisons un devis avant l’envoi. Les frais d’expédition de La Poste restent à la charge du client selon le poids du colis. Nous garantissons transparence et honnêteté : si le coût réel est inférieur au devis prévu, la différence est remboursée au client.",
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
    <div className="min-h-screen bg-white text-gray-900">

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
        className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white pt-36 pb-20 px-6"
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
{/* IMAGE FRANCE + OUTRE-MER */}
<div className="mt-10">
  <img
    src="/france-outremer.png"
    alt="Livraison France et Outre-mer"
    className="w-full max-w-xl rounded-3xl shadow-2xl border border-white/20"
  />
</div>
              <motion.button
  whileHover={{
    scale: 1.08,
    boxShadow: "0px 0px 25px rgba(249,115,22,0.8)",
  }}
  whileTap={{ scale: 0.96 }}
  className="
    relative overflow-hidden
    bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400
    hover:from-orange-400 hover:to-yellow-300
    transition-all duration-300
    px-8 py-4
    rounded-2xl
    font-black
    text-white
    shadow-[0_0_25px_rgba(249,115,22,0.45)]
  "
>

  <span className="relative z-10">
    Commander une livraison
  </span>

  <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition"></div>

</motion.button>

              <motion.button
  whileHover={{
    scale: 1.08,
    boxShadow: "0px 0px 25px rgba(255,255,255,0.35)",
  }}
  whileTap={{ scale: 0.96 }}
  className="
    relative overflow-hidden
    border border-white/30
    bg-white/10 backdrop-blur-xl
    px-8 py-4
    rounded-2xl
    font-bold
    text-white
    transition-all duration-300
    hover:bg-white
    hover:text-blue-700
    shadow-xl
  "
>

  <span className="relative z-10">
    Nous contacter
  </span>

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
      <section id="services" className="py-20 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto text-center mb-14">

          <h2 className="text-4xl font-black mb-4 text-blue-700">
            Nos Services
          </h2>

          <p className="text-gray-600 text-lg">
            Cliquez sur un service pour voir les détails
          </p>

        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {services.map((service, index) => (

            <motion.div
              key={index}
              onClick={() => setSelectedService(service)}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition cursor-pointer border border-gray-100"
            >

              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-5 text-blue-700 font-semibold">
                Voir les détails →
              </div>

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
            className="space-y-4 bg-gray-50 p-8 rounded-3xl shadow-lg"
          >

            <input
              type="text"
              name="Nom"
              placeholder="Votre nom"
              className="w-full p-4 rounded-xl border text-black"
              required
            />

            <input
              type="text"
              name="Adresse"
              placeholder="Votre adresse"
              className="w-full p-4 rounded-xl border text-black"
              required
            />

            <input
              type="tel"
              name="Téléphone"
              placeholder="Votre téléphone"
              className="w-full p-4 rounded-xl border text-black"
              required
            />

            <textarea
              name="Commande"
              placeholder="Expliquez votre demande..."
              className="w-full p-4 rounded-xl border text-black"
              rows={4}
              required
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold w-full"
            >
              Envoyer la demande
            </button>

          </form>

        </div>

      </section>

      {/* RÉSERVATION */}
      <section
        id="reservation"
        className="bg-gradient-to-r from-blue-800 to-slate-900 py-20 px-6 text-white"
      >

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-black text-center mb-10">
            Réservation rapide
          </h2>

          <form
            action="https://formsubmit.co/dkexpress2607@gmail.com"
            method="POST"
            className="space-y-4 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20"
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
      <section id="tarifs" className="py-20 bg-gray-50 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-black text-center text-blue-700 mb-14">
            Nos Tarifs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {tarifs.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
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

      {/* MAP */}
      <section className="py-20 bg-white text-black">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8 text-center">
            Notre localisation
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

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

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

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

            <p className="text-gray-700 leading-relaxed text-lg">
              {selectedService.details}
            </p>

          </motion.div>

        </div>

      )}

      {/* AVIS */}
      <section id="avis" className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black text-blue-700 mb-10">
            Avis Clients
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            Votre satisfaction est notre priorité.
          </p>

          <a
            href="https://maps.app.goo.gl/zyrhRQWwGUW8icj68"
            target="_blank"
            className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition inline-block"
          >
            Laisser un avis Google
          </a>

        </div>

      </section>
      {/* POURQUOI NOUS CHOISIR */}
<section className="py-20 bg-gray-50 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-black text-center text-blue-700 mb-6">
      Pourquoi nous choisir ?
    </h2>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
      DK EXPRESS 26 vous propose un service fiable, rapide et humain
      pour simplifier vos livraisons et vos récupérations de colis.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

      {/* RAPIDE */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-2xl transition">

        <div className="text-5xl mb-4">
          ⚡
        </div>

        <h3 className="text-2xl font-black text-blue-700 mb-3">
          Rapide
        </h3>

        <p className="text-gray-600">
          Prise en charge rapide des colis, courses et livraisons.
        </p>

      </div>

      {/* LOCAL */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-2xl transition">

        <div className="text-5xl mb-4">
          📍
        </div>

        <h3 className="text-2xl font-black text-blue-700 mb-3">
          Local
        </h3>

        <p className="text-gray-600">
          Service de proximité dans la Drôme et alentours.
        </p>

      </div>

      {/* FLEXIBLE */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-2xl transition">

        <div className="text-5xl mb-4">
          🔄
        </div>

        <h3 className="text-2xl font-black text-blue-700 mb-3">
          Flexible
        </h3>

        <p className="text-gray-600">
          Adaptation selon vos besoins, horaires et demandes.
        </p>

      </div>

      {/* LIVRAISON */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-2xl transition">

        <div className="text-5xl mb-4">
          🚚
        </div>

        <h3 className="text-2xl font-black text-blue-700 mb-3">
          À domicile
        </h3>

        <p className="text-gray-600">
          Livraison possible directement chez vous.
        </p>

      </div>

      {/* ASSISTANCE */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-2xl transition">

        <div className="text-5xl mb-4">
          🤝
        </div>

        <h3 className="text-2xl font-black text-blue-700 mb-3">
          Assistance
        </h3>

        <p className="text-gray-600">
          Accompagnement personnalisé et service humain.
        </p>

      </div>

    </div>

  </div>

</section>
{/* HORAIRES */}
<section className="py-16 bg-white px-6">

  <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-3xl p-10 shadow-xl">

    <h2 className="text-4xl font-black text-center text-blue-700 mb-8">
      Horaires d'ouverture
    </h2>

    <div className="space-y-4 text-lg text-gray-700">

      <div className="flex justify-between border-b pb-3">
        <span>Lundi</span>
        <span className="font-semibold">08H00 - 19H00</span>
      </div>

      <div className="flex justify-between border-b pb-3">
        <span>Mardi</span>
        <span className="font-semibold">08H00 - 19H00</span>
      </div>

      <div className="flex justify-between border-b pb-3">
        <span>Mercredi</span>
        <span className="font-semibold">08H00 - 19H00</span>
      </div>

      <div className="flex justify-between border-b pb-3">
        <span>Jeudi</span>
        <span className="font-semibold">08H00 - 19H00</span>
      </div>

      <div className="flex justify-between border-b pb-3 text-red-600 font-bold">
        <span>Vendredi</span>
        <span>FERMÉ</span>
      </div>

      <div className="flex justify-between border-b pb-3">
        <span>Samedi</span>
        <span className="font-semibold">08H00 - 19H00</span>
      </div>

      <div className="flex justify-between">
        <span>Dimanche</span>
        <span className="font-semibold">08H00 - 19H00</span>
      </div>

    </div>

  </div>

</section>
     {/* FOOTER */}
<footer
  id="contact"
  className="bg-gray-100 py-10 mt-10 border-t border-gray-200"
>

  <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">

    <h3 className="text-2xl font-black text-blue-700 mb-3">
      DK EXPRESS 26
    </h3>

    <p className="mb-6">
      Service de livraison, point relais et transport local.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mb-6">

      <a
        href="#accueil"
        className="hover:text-blue-700 transition"
      >
        Accueil
      </a>

      <a
        href="#services"
        className="hover:text-blue-700 transition"
      >
        Services
      </a>

      <a
        href="#tarifs"
        className="hover:text-blue-700 transition"
      >
        Tarifs
      </a>

      <a
        href="#reservation"
        className="hover:text-blue-700 transition"
      >
        Réservation
      </a>

      <a
        href="#avis"
        className="hover:text-blue-700 transition"
      >
        Avis
      </a>

    </div>

    {/* LIENS LÉGAUX */}
    <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">

      <a
        href="/legal"
        className="text-blue-700 font-semibold hover:underline"
      >
        Mentions légales
      </a>

      <span>•</span>

      <a
        href="/legal"
        className="text-blue-700 font-semibold hover:underline"
      >
        Conditions générales
      </a>

      <span>•</span>

      <a
        href="/legal"
        className="text-blue-700 font-semibold hover:underline"
      >
        Politique de confidentialité
      </a>

    </div>

    <p className="text-sm text-gray-500">
      © 2026 DK EXPRESS 26 - Tous droits réservés
    </p>

  </div>

</footer>
    </div>
  );
}