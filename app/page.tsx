"use client";

import { useState } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: "Point Relais",
      description:
        "Réception et retrait de colis Chronopost, Mondial Relay et particuliers.",
      icon: "📦",
      details:
        "Vous pouvez commander vos colis sur Amazon, Vinted, Leboncoin ou n’importe quelle enseigne et mettre notre adresse comme point relais. Vos colis seront directement réceptionnés chez nous puis conservés jusqu’à votre récupération. Nous acceptons les colis Chronopost, Mondial Relay ainsi que les envois entre particuliers. Des frais de garde de 0,50€ à 1€ peuvent être appliqués selon la taille du colis lors du retrait.",
    },

    {
      title: "Livraison à domicile",
      description:
        "Livraison rapide de vos colis directement chez vous.",
      icon: "🚚",
      details:
        "Nous pouvons livrer vos colis directement à domicile si vous ne pouvez pas vous déplacer jusqu’au point relais. Les frais de déplacement varient entre 5€ et 10€ selon la distance. Un supplément de 10€ peut être demandé pour les colis très lourds ou encombrants comme l’électroménager ou les réfrigérateurs.",
    },

    {
      title: "Courses & Pharmacie",
      description:
        "Récupération de drives, courses et médicaments.",
      icon: "🛒",
      details:
        "Nous récupérons vos courses en drive, vos médicaments en pharmacie, vos fleurs ou tout autre achat en magasin. Il suffit de nous transmettre les informations nécessaires ainsi qu’une autorisation de retrait si besoin. Nous récupérons ensuite vos commandes et les livrons directement chez vous. Les frais varient de 5€ à 10€ selon les kilomètres et le volume des courses. Un supplément peut être ajouté si nous devons effectuer les achats à votre place.",
    },

    {
      title: "Service Leboncoin",
      description:
        "Nous récupérons vos achats à votre place et vous les livrons.",
      icon: "🤝",
      details:
        "Vous avez acheté un article sur Leboncoin mais vous ne pouvez pas vous déplacer ? Nous pouvons nous rendre sur place à votre place, récupérer votre achat puis vous le livrer directement. Ce service fonctionne également pour les personnes timides ou indisponibles. Les frais varient entre 5€ et 15€ selon la distance avec un supplément possible pour les objets lourds ou encombrants.",
    },

    {
      title: "Envoi Outre-mer",
      description:
        "Réception et expédition de colis vers les DOM-TOM.",
      icon: "✈️",
      details:
        "Nous réceptionnons vos colis Amazon, Vinted ou autres directement à notre point relais puis nous les réexpédions vers les DOM-TOM et l’outre-mer. Nous pouvons également vous aider à effectuer les déclarations de douane et vous fournir un devis avant l’envoi. Les frais d’expédition de La Poste restent à la charge du client selon le poids du colis. Nous appliquons uniquement des frais de déplacement entre 10€ et 15€ selon le nombre de colis ou leur volume. Si l’envoi coûte moins cher que prévu, nous remboursons la différence afin de garantir un service honnête et transparent.",
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

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="bg-gray-50 rounded-3xl p-6 shadow hover:shadow-xl transition cursor-pointer hover:scale-105"
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

      {/* POPUP */}
      {selectedService && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white p-8 rounded-3xl max-w-2xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">

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

          </div>

        </div>

      )}
      {/* AVIS CLIENTS */}
<section className="py-20 bg-gray-50">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl font-black text-center text-blue-700 mb-14">
      Avis Clients
    </h2>

    <div

    <div className="text-center mt-12">

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