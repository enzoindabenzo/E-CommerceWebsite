import React from 'react';
import { FaHandshake, FaUserTie, FaChartLine, FaLightbulb, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const BashkepunoMeNe = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-4 mb-6">
          <FaHandshake className="text-green-600 text-4xl" />
        </div>
        <h1 className="text-4xl font-bold text-green-800 mb-4">Bashkëpunoni me Ne</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Zgjerojmë partneritetet tona me biznese dhe organizata që ndajnë vlerat tona
        </p>
      </div>

      {/* Why Partner Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pse të Bashkëpunoni me Agro BLM?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<FaUserTie className="text-3xl" />}
            title="Rrjet i Gjerë"
            description="Qasje në një rrjet të gjerë të furnitorëve dhe klientëve në industri"
          />
          <BenefitCard 
            icon={<FaChartLine className="text-3xl" />}
            title="Rritje e Biznesit"
            description="Mundësi për të zgjeruar biznesin tuaj në tregjet e reja"
          />
          <BenefitCard 
            icon={<FaLightbulb className="text-3xl" />}
            title="Inovacion"
            description="Bashkëpunim në projekte inovative dhe zhvillime të reja"
          />
        </div>
      </div>

      {/* Partnership Types */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Llojet e Bashkëpunimeve</h2>
        <div className="space-y-6">
          <PartnershipType 
            title="Bashkëpunim me Furnitorë"
            description="Nëse jeni prodhues ose shpërndarës i produkteve bujqësore, ne ofrojmë qasje në tregun tonë"
          />
          <PartnershipType 
            title="Partneritet Shpërndarës"
            description="Për biznese të interesuara për shpërndarjen e produkteve tona"
          />
          <PartnershipType 
            title="Bashkëpunim Teknologjik"
            description="Për kompanitë me zgjidhje teknologjike për bujqësinë e avancuar"
          />
          <PartnershipType 
            title="Projekte të Përbashkëta"
            description="Për organizata që duan të zhvillojnë projekte të përbashkëta bujqësore"
          />
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-green-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Procesi i Aplikimit</h2>
        <ol className="space-y-4 list-decimal list-inside">
          <li className="text-gray-700">Dërgoni kërkesën tuaj për bashkëpunim</li>
          <li className="text-gray-700">Takim fillestar për të diskutuar mundësitë</li>
          <li className="text-gray-700">Analizë e propozimit tuaj nga ekipi ynë</li>
          <li className="text-gray-700">Nënshkrimi i marrëveshjes dhe fillimi i bashkëpunimit</li>
        </ol>
      </div>

      {/* Contact Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Kontaktoni Për Bashkëpunim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-green-600 mr-3" />
              <span className="text-gray-700">+355 69 994 7448</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-green-600 mr-3" />
              <span className="text-gray-700">partner@agroblm.com</span>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Emri i Kompanisë" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea 
                placeholder="Përshkruani interesin tuaj për bashkëpunim" 
                rows={4}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
              <button 
                type="submit" 
                className="bg-green-700 text-white font-bold py-3 px-6 rounded hover:bg-green-800 transition duration-300"
              >
                Dërgo Kërkesën
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
      <div className="text-green-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const PartnershipType = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BashkepunoMeNe;