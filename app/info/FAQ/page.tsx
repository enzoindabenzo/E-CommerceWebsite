"use client";
import React, { useState } from 'react';
import { FaQuestionCircle, FaShoppingCart, FaTruck, FaExchangeAlt, FaCreditCard, FaUser, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const categories = [
    { id: 'general', name: 'Pyetje të Përgjithshme', icon: <FaQuestionCircle /> },
    { id: 'orders', name: 'Porositë & Blerjet', icon: <FaShoppingCart /> },
    { id: 'shipping', name: 'Transporti & Dorëzimi', icon: <FaTruck /> },
    { id: 'returns', name: 'Kthimet & Rimbursimet', icon: <FaExchangeAlt /> },
    { id: 'payments', name: 'Pagesat', icon: <FaCreditCard /> },
    { id: 'account', name: 'Llogaria', icon: <FaUser /> }
  ];

  const questions = {
    general: [
      {
        question: "Cilat janë oraret e Agro BLM?",
        answer: "Dyqani ynë fizik është i hapur nga e hëna deri të premten nga ora 08:00 - 18:00 dhe të shtunën nga ora 09:00 - 14:00. Platforma online është e hapur 24/7."
      },
      {
        question: "Ku ndodhet Agro BLM?",
        answer: "Qendra jonë kryesore ndodhet në Rruga e Bujqësisë, Nr. 15, Tirana. Kemi edhe pika shpërndarje në qytete të tjera."
      },
      {
        question: "A ofroni udhëzime për përdorimin e produkteve?",
        answer: "Po, për shumicën e produkteve tona ofrojmë udhëzime të hollësishme. Mund t'i gjeni në faqen e produktit ose të na kontaktoni për udhëzime shtesë."
      }
    ],
    orders: [
      {
        question: "Si mund të gjurmoj porosinë time?",
        answer: "Pas përfundimit të porosisë, do të merrni një email me numrin e gjurmimit. Mund të përdorni këtë numër në faqen e shërbimit tonë të transportit për të ndjekur porosinë tuaj."
      },
      {
        question: "A mund të ndryshoj një porosi pasi e kam bërë?",
        answer: "Porosit mund të ndryshohen brenda 1 ore pasi janë bërë. Për ndryshime më të vona, ju lutemi na kontaktoni menjëherë në info@agroblm.com ose në +355 4 222 3333."
      },
      {
        question: "Sa kohë mbahen produktet në shportë?",
        answer: "Produktet në shportën tuaj mbahen për 60 minuta. Pas kësaj kohe, shporta mund të bëhet bosh nëse nuk kryeni pagesën."
      }
    ],
    shipping: [
      {
        question: "Cilat janë opsionet e transportit?",
        answer: "Ofrojmë transport standard (2-3 ditë pune), transport të shpejtë (1 ditë pune për Tiranë) dhe mundësi marrjeje në vend."
      },
      {
        question: "A dërgojni jashtë Shqipërisë?",
        answer: "Aktualisht ofrojmë vetëm transport brenda Shqipërisë. Për porosi ndërkombëtare, ju lutemi na kontaktoni direkt."
      },
      {
        question: "Sa kushton transporti?",
        answer: "Transporti standard kushton 500 Lekë, ndërsa transporti i shpejtë 800 Lekë. Për porosi mbi 5000 Lekë, transporti është falas."
      }
    ],
    returns: [
      {
        question: "Sa kohë kam për të kthyer një produkt?",
        answer: "Ju keni 14 ditë nga data e marrjes së porosisë për të kërkuar kthim të produkteve."
      },
      {
        question: "Si funksionon procesi i kthimit?",
        answer: "Ju lutemi na kontaktoni në info@agroblm.com me numrin e porosisë dhe arsyen e kthimit. Do t'ju udhëzojmë për hapat e mëtejshëm."
      },
      {
        question: "A paguaj për transportin e kthimit?",
        answer: "Nëse kthimi është për shkak të një gabimi të Agro BLM, ne mbulojmë të gjitha kostot. Për kthime për arsye të tjera, kostot mbulohen nga blerësi."
      }
    ],
    payments: [
      {
        question: "Cilat metoda pagese pranoni?",
        answer: "Pranojmë kartë krediti/debiti, transferta bankare, PayPal dhe pagesë në dorëzim."
      },
      {
        question: "A është e sigurt të paguaj online?",
        answer: "Po, të gjitha transaksionet tona online janë të sigurta dhe të enkriptuara duke përdorur teknologjinë më të re të sigurisë."
      },
      {
        question: "A mund të paguaj me para në dorë?",
        answer: "Po, mund të zgjidhni pagesë në dorëzim ose të bëni pagesën në dyqanin tonë fizik."
      }
    ],
    account: [
      {
        question: "Si mund të krijoj një llogari?",
        answer: "Klikoni në 'Regjistrohu' në krye të faqes dhe plotësoni formularin me të dhënat tuaja. Do të merrni një email verifikimi për të aktivizuar llogarinë."
      },
      {
        question: "Kam harruar fjalëkalimin, çfarë duhet të bëj?",
        answer: "Klikoni 'Kam harruar fjalëkalimin' në faqen e hyrjes dhe ndiqni udhëzimet për të rivendosur fjalëkalimin tuaj."
      },
      {
        question: "Si mund të ndryshoj të dhënat e llogarisë time?",
        answer: "Pasi të keni hyrë në llogarinë tuaj, shkoni te 'Cilësimet e Llogarisë' ku mund të përditësoni të dhënat tuaja personale."
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Pyetje të Bëra Shpesh (FAQ)</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Gjeni përgjigjet për pyetjet më të shpeshta rreth Agro BLM
        </p>
      </div>

      {/* Categories */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category.id ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
        {questions[activeCategory as keyof typeof questions].map((item, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
              <svg
                className={`w-5 h-5 text-green-600 transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openQuestion === index && (
              <div className="px-6 pb-6 text-gray-600">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="bg-green-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuk e gjetët përgjigjen?</h2>
        <p className="text-gray-600 mb-6">Ekipi ynë i shërbimit ndaj klientit është gati te ju ndihmojë</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+35542223333"
            className="bg-green-700 text-white font-bold py-3 px-6 rounded hover:bg-green-800 transition duration-300 flex items-center justify-center"
          >
            <FaPhoneAlt className="mr-2" />
            +355 4 222 3333
          </a>
          <a
            href="mailto:support@agroblm.com"
            className="bg-white text-green-700 font-bold py-3 px-6 rounded border border-green-700 hover:bg-green-50 transition duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" />
            support@agroblm.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;