import React from 'react';
import { FaIdCard, FaGift, FaStar, FaQrcode, FaShoppingCart, FaPercent } from 'react-icons/fa';

const KartaBesnikerise = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-4 mb-6">
          <FaIdCard className="text-green-600 text-4xl" />
        </div>
        <h1 className="text-4xl font-bold text-green-800 mb-4">Karta e Besnikërisë Agro BLM</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Përfitoni nga shpërblime ekskluzive me kartën tonë të besnikërisë
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Përfitimet e Kartës</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<FaPercent className="text-3xl" />}
            title="Zbritje Ekskluzive"
            description="Deri në 15% zbritje për të gjitha produktet në dyqanin tonë"
          />
          <BenefitCard 
            icon={<FaGift className="text-3xl" />}
            title="Dhurata Speciale"
            description="Dhurata për ditëlindje dhe festa të tjera"
          />
          <BenefitCard 
            icon={<FaStar className="text-3xl" />}
            title="Pikë Besnikërie"
            description="Fitoni pikë për çdo blerje dhe shkëmbeni me produkte falas"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-green-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Si Funksionon?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StepCard 
            step="1"
            icon={<FaIdCard />}
            title="Regjistrohuni"
            description="Plotësoni formularin e regjistrimit në dyqan ose online"
          />
          <StepCard 
            step="2"
            icon={<FaQrcode />}
            title="Merrni Kartën"
            description="Do të merrni kartën fizike ose dixhitale me QR code"
          />
          <StepCard 
            step="3"
            icon={<FaShoppingCart />}
            title="Bleni Produkte"
            description="Përdorni kartën tuaj për të grumbulluar pikë"
          />
          <StepCard 
            step="4"
            icon={<FaGift />}
            title="Shpërblimet"
            description="Shkëmbeni pikët për zbritje dhe dhurata"
          />
        </div>
      </div>

      {/* Loyalty Tiers */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nivelet e Besnikërisë</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TierCard 
            level="Bronze"
            points="0-500"
            benefits={["5% zbritje", "Akses në oferta speciale"]}
            color="bronze"
          />
          <TierCard 
            level="Argjend"
            points="501-1500"
            benefits={["10% zbritje", "Dhuratë për ditëlindje", "Akses i hershëm në produkte të reja"]}
            color="silver"
            featured
          />
          <TierCard 
            level="Ari"
            points="1501+"
            benefits={["15% zbritje", "Transport falas", "Produkte ekskluzive", "Evente VIP"]}
            color="gold"
          />
        </div>
      </div>

      {/* Card Preview */}
      <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-xl p-8 mb-12 gap-8">
        <div className="md:w-1/3 flex justify-center">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 w-64 h-40 shadow-lg text-white">
            <div className="flex justify-between items-start mb-8">
              <span className="font-bold">Agro BLM</span>
              <FaIdCard className="text-2xl" />
            </div>
            <div className="text-center mb-2">
              <FaQrcode className="text-5xl mx-auto" />
            </div>
            <div className="text-xs text-center">Karta e Besnikërisë</div>
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Karta Juaj e Besnikërisë</h2>
          <p className="text-gray-700 mb-6">
            Kartën tuaj mund ta përdorni në të gjitha dyqanet tona fizike dhe në platformën online. 
            Thjesht tregojeni në kasa ose vendosni kodin tuaj të anëtarësimit kur bëni blerje online.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-700 text-white font-bold py-3 px-6 rounded hover:bg-green-800 transition duration-300">
              Regjistrohu Tani
            </button>
            <button className="border border-green-700 text-green-700 font-bold py-3 px-6 rounded hover:bg-green-50 transition duration-300">
              Çkyçu Kartën
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pyetje të Bëra Shpesh</h2>
        <div className="space-y-4">
          <FAQItem 
            question="Si mund të regjistrohem për kartën e besnikërisë?"
            answer="Mund të regjistroheni në çdo dyqan fizik Agro BLM ose online përmes faqes sonë të internetit."
          />
          <FAQItem 
            question="Sa kohë janë të vlefshme pikët e mia?"
            answer="Pikët janë të vlefshme për 12 muaj nga data e blerjes së fundit."
          />
          <FAQItem 
            question="A mund të përdor kartën time në të gjitha dyqanet Agro BLM?"
            answer="Po, karta juaj e besnikërisë është e vlefshme në të gjitha dyqanet tona fizike dhe në platformën online."
          />
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

const StepCard = ({ step, icon, title, description }: { step: string, icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
        {step}
      </div>
      <div className="text-green-600 mb-3 flex justify-center">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const TierCard = ({ level, points, benefits, color, featured = false }: { level: string, points: string, benefits: string[], color: 'bronze' | 'silver' | 'gold', featured?: boolean }) => {
  const colorClasses = {
    bronze: 'from-amber-600 to-amber-800',
    silver: 'from-gray-400 to-gray-600',
    gold: 'from-yellow-500 to-yellow-700'
  };

  return (
    <div className={`relative ${featured ? 'scale-105 z-10 shadow-xl' : ''}`}>
      {featured && (
        <div className="absolute -top-3 -right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          MË E POPULLARIZUAR
        </div>
      )}
      <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-t-xl p-6 text-white text-center`}>
        <h3 className="text-2xl font-bold mb-1">{level}</h3>
        <p className="text-sm opacity-80">{points} pikë</p>
      </div>
      <div className="bg-white p-6 rounded-b-xl shadow-md border border-gray-100">
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="font-semibold text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default KartaBesnikerise;