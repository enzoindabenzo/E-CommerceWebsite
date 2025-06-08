import React from 'react';
import { FaHandshake, FaChartLine, FaTruck, FaLeaf, FaUsers } from 'react-icons/fa';

const Partneret = () => {
  const partners = [
    {
      id: 1,
      name: "AgroTech Shpk",
      logo: "/img/AG.jpg?v=2",
      unoptimized: true,
      type: "Teknologji Bujqësore",
      since: 2018
    },
    {
      id: 2,
      name: "GR Albania",
      logo: "/img/GR.jpg?v=2",
      unoptimized: true,
      type: "Konsulence dhe Shërbime Bujqësore",
      since: 2015
    },
    {
      id: 3,
      name: "BioFarm Albania",
      logo: "/img/BF.jpg?v=2",
      unoptimized: true,
      type: "Tregtia me shumice dhe pakice e kafsheve",
      since: 2020
    },
    {
      id: 4,
      name: "FreshLogistics",
      logo: "/img/FL.pNg?v=2",
      unoptimized: true,
      type: "Transport dhe Logjistikë",
      since: 2019
    },
    {
      id: 5,
      name: "AquaGrow",
      logo: "/img/AGR.jpg?v=2",
      unoptimized: true,
      type: "Sisteme Ujitjeje",
      since: 2017
    },
    {
      id: 6,
      name: "EcoPesticides",
      logo: "/img/EG.jpg?v=2",
      unoptimized: true,
      type: "Fara dhe bimë të tjera",
      since: 2021
    }
  ];

  const benefits = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Rritje e Biznesit",
      description: "Qasje në tregje të reja dhe zgjerim i mundësive të biznesit"
    },
    {
      icon: <FaTruck className="text-3xl" />,
      title: "Logjistikë e Përsosur",
      description: "Zgjidhje optimale të transportit dhe shpërndarjes"
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Produkte Cilësore",
      description: "Garancia e produkteve me cilësinë më të lartë"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Mbështetje e Plotë",
      description: "Ekipi ynë gjithmonë pranë për ndihmë dhe këshilla"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-4 mb-4">
          <FaHandshake className="text-green-600 text-4xl" />
        </div>
        <h1 className="text-4xl font-bold text-green-800 mb-4">Partnerët Tanë</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bashkëpunojmë me kompanitë më të mira në industri për të ofruar produktet dhe shërbimet më cilësore
        </p>
      </div>

      {/* Partners Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Kompanitë Partner</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map(partner => (
            <div key={partner.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="p-6 flex justify-center bg-gray-50">
                <img src={partner.logo} alt={partner.name} className="h-20 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{partner.name}</h3>
                <p className="text-green-600 mb-2">{partner.type}</p>
                <p className="text-gray-500 text-sm">Partner që nga {partner.since}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="bg-green-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Përfitimet e Partneritetit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-green-600 mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Become a Partner */}
      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="md:w-1/2 p-8 md:p-12 bg-green-700 text-white">
          <h2 className="text-2xl font-bold mb-4">Bëhuni Partner i Agro BLM</h2>
          <p className="mb-6">
            Nëse jeni një kompani me produkte ose shërbime cilësore për industrinë bujqësore, ne duam të dëgjojmë nga ju!
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Qasje në rrjetin tonë të shpërndarjes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Promovim në kanalet tona</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Mbështetje teknike dhe tregëtare</span>
            </li>
          </ul>
          <div className="space-y-2">
            <p><strong>Email:</strong> partner@agroblm.com</p>
            <p><strong>Telefon:</strong> +355 4 222 3333</p>
          </div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Dërgoni një mesazh</h3>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Emri i Kompanisë" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            />
            <input 
              type="tel" 
              placeholder="Numri i Telefonit" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            />
            <select 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              <option value="">Zgjidhni llojin e partneritetit</option>
              <option value="supplier">Furnizues</option>
              <option value="distributor">Shpërndarës</option>
              <option value="technology">Partner Teknologjik</option>
              <option value="other">Tjetër</option>
            </select>
            <textarea 
              placeholder="Përshkruani kompaninë tuaj dhe interesin për bashkëpunim" 
              rows={4}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            ></textarea>
            <button 
              type="submit" 
              className="bg-green-700 text-white font-bold py-3 px-6 rounded hover:bg-green-800 transition duration-300"
            >
              Dërgo Aplikimin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Partneret;