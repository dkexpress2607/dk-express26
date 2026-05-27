export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black mb-10 text-blue-700">
          Conditions générales & règlement
        </h1>

        <div className="space-y-10 text-lg leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold mb-3">
              1. Point relais
            </h2>

            <p>
              DK EXPRESS 26 réceptionne les colis pour le compte des clients.
              Le client doit fournir des informations exactes lors de ses commandes.
              Des frais de garde peuvent être appliqués selon la taille du colis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              2. Livraison à domicile
            </h2>

            <p>
              Les livraisons sont effectuées selon les disponibilités.
              Les frais varient selon la distance et le volume des colis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              3. Courses & pharmacie
            </h2>

            <p>
              Le client autorise DK EXPRESS 26 à récupérer ses commandes,
              médicaments ou achats en son nom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              4. Service Leboncoin
            </h2>

            <p>
              DK EXPRESS 26 agit uniquement comme intermédiaire de récupération
              et de transport des achats.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              5. Envoi Outre-mer
            </h2>

            <p>
              Les frais de transport La Poste restent à la charge du client.
              DK EXPRESS 26 peut assister dans les déclarations douanières
              sans être responsable des retards liés aux transporteurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              6. Protection des données
            </h2>

            <p>
              Les informations des clients restent confidentielles
              et ne sont jamais revendues.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}