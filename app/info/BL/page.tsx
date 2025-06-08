import React from 'react';
import { FaShoppingCart, FaCreditCard, FaTruck, FaHeadset, FaStore, FaMobileAlt } from 'react-icons/fa';

const SiTeBlejme = () => {
  const steps = [
    {
      icon: <FaShoppingCart className="text-4xl" />,
      title: "1. Zgjidhni Produktet",
      description: "Shfletoni katalogun tonë online ose vizitoni dyqanin fizik për të zgjedhur produktet e dëshiruara"
    },
    {
      icon: <FaCreditCard className="text-4xl" />,
      title: "2. Vendosni Porosinë",
      description: "Shtoni produktet në shportë dhe plotësoni formularin e porosisë me të dhënat tuaja"
    },
    {
      icon: <FaTruck className="text-4xl" />,
      title: "3. Zgjidhni Mënyrën e Dorëzimit",
      description: "Zgjidhni midis marrjes në vend, dërgesës në shtëpi ose pikës së grumbullimit"
    },
    {
      icon: <FaHeadset className="text-4xl" />,
      title: "4. Konfirmimi i Porosisë",
      description: "Do të merrni një email/SMS konfirmimi me detajet e porosisë suaj"
    }
  ];

  const paymentMethods = [
    {
      name: "Kartë Krediti/Debiti",
      description: "Pranojmë të gjitha llojet e kartave të kreditit dhe debitit",
      icon: <FaCreditCard className="text-3xl" />
    },
    {
      name: "Bank Transfer",
      description: "Transferim bankar direkt në llogarinë tonë",
      icon: <FaStore className="text-3xl" />
    },
    {
      name: "Para në Dorë",
      description: "Pagesë cash kur merrni porosinë ose në dyqan",
      icon: <FaMobileAlt className="text-3xl" />
    }
  ];

  const deliveryOptions = [
    {
      type: "Dërgesë Standard",
      time: "2-3 ditë pune",
      cost: "500 Lekë",
      description: "Dorëzim në adresën tuaj brenda 2-3 ditëve pune"
    },
    {
      type: "Dërgesë e Shpejtë",
      time: "1 ditë pune",
      cost: "800 Lekë",
      description: "Dorëzim brenda 24 orëve në Tiranë"
    },
    {
      type: "Marrje në Vend",
      time: "I menjëhershëm",
      cost: "Falas",
      description: "Merrni porosinë direkt nga dyqani ynë fizik"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Si të Blejmë në Agro BLM</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Udhëzuesi hap pas hapi për të bërë blerje të lehta dhe të sigurta në platformën tonë
        </p>
      </div>

      {/* Buying Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Procesi i Blerjes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-600 mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-green-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Metodat e Pagesës</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="text-green-600 mr-4">{method.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{method.name}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Options */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Opsionet e Dorëzimit</h2>
        <div className="space-y-6">
          {deliveryOptions.map((option, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800">{option.type}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-medium">Kohëzgjatja: {option.time}</p>
                  <p className="text-green-600 font-bold">Kosto: {option.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pyetje të Bëra Shpesh</h2>
        <div className="space-y-6">
          <FAQItem 
            question="A mund të anuloj një porosi pasi është bërë?"
            answer="Po, porosit mund të anulohen brenda 1 ore pasi janë bërë. Për anulime më të vona, ju lutemi na kontaktoni menjëherë."
          />
          <FAQItem 
            question="Si mund të gjurmoj porosinë time?"
            answer="Do të merrni një email me numrin e gjurmimit dhe lidhjen për të ndjekur porosinë tuaj në website të shërbimit të dërgesave."
          />
          <FAQItem 
            question="A ofroni kthim produktesh?"
            answer="Po, pranojmë kthime brenda 14 ditësh nga data e blerjes për produktet e pakëputura dhe me problem."
          />
          <FAQItem 
            question="A mund të bëj një porosi me telefon?"
            answer="Po, mund të telefononi në +355 4 222 3333 për të bërë porosi me anë të operatorit tonë."
          />
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-green-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Keni nevojë për ndihmë?</h2>
        <p className="mb-6 text-lg">Ekipi ynë i shërbimit ndaj klientit është gati te ju ndihmojë</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:+35542223333" 
            className="bg-white text-green-700 font-bold py-3 px-6 rounded hover:bg-gray-100 transition duration-300"
          >
            Telefononi: +355 4 222 3333
          </a>
          <a 
            href="mailto:support@agroblm.com" 
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded hover:bg-white hover:text-green-700 transition duration-300"
          >
            Email: support@agroblm.com
          </a>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default SiTeBlejme;