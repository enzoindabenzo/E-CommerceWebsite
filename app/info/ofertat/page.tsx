import React from "react";

export default function Ofertat() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-5 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Ofertat e Fundit</h1>
      <p className="text-lg text-gray-600 mb-6">
        Zbritje dhe oferta speciale çdo javë! Shikoni ofertat më të fundit dhe përfitoni nga çmimet më të mira për produktet tuaja të preferuara.
      </p>
      <p className="mt-4 text-gray-500 mb-10">
        Vizitoni shpesh këtë faqe për të mos humbur asnjë ofertë të re.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ofertat e Limituara</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Zbritje për Blerje Online</h3>
          <p className="text-gray-600">
            Bëni një blerje online dhe përfitoni një zbritje prej 5% për çdo produkt.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Zbritje për Blerje në Sasi të Madhe</h3>
          <p className="text-gray-600">
            Blerje në sasi të mëdha? Përfitoni një zbritje prej 10% kur blini më shumë se 10 produkte.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Zbritje për Klientët e Rregullt</h3>
          <p className="text-gray-600">
            Jeni klient i rregullt? Përfitoni një zbritje prej 8% për çdo blerje të ardhshme pas blerjes së parë.
          </p>
        </div>
      </div>
    </div>
  );
}
