import React from 'react';
import { FaLeaf, FaHistory, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Rreth Nesh</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Historia dhe pasioni pas Agro BLM
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-green-50 rounded-xl p-8 mb-12">
        <div className="flex items-center mb-6">
          <FaLeaf className="text-green-600 text-3xl mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Misioni Jonë</h2>
        </div>
        <p className="text-gray-700 text-lg">
          Agro BLM u themelua me qëllimin që të revolucionarizojë industrinë bujqësore në rajon
          duke ofruar zgjidhje inovative dhe të qëndrueshme. Ne besojmë në një të ardhme ku
          bujqësia moderne dhe praktikat tradicionale bashkëpunojnë për të krijuar vlerë për
          konsumatorët dhe komunitetin.
        </p>
      </div>

      {/* History Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <div className="flex items-center mb-6">
            <FaHistory className="text-green-600 text-3xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">Historia Jonë</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Themeluar në vitin 2005 si një biznes familjar, Agro BLM filloi si një fermë e vogël
            me vetëm 5 hektarë tokë. Gjatë viteve, ne kemi rritur vazhdimisht operacionet tona
            duke u bërë një nga furnizuesit kryesorë në rajon.
          </p>
          <p className="text-gray-700">
            Sot, me një ekip prej më shumë se 50 punonjësish dhe infrastrukturë moderne,
            ne vazhdojmë të ndërtojmë mbi traditat tona duke përdorur teknologjinë më të fundit.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/img/farm.jpg" 
            alt="Farm history" 
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <FaUsers className="text-green-600 text-3xl mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Ekipi Jonë</h2>
        </div>
        <p className="text-gray-700 mb-6">
          Stafi ynë përbëhet nga ekspertë me vite përvojë në bujqësi, agronomi dhe menaxhimin e
          zinxhirit të furnizimit. Çdo anëtar i ekipit tonë është i përkushtuar në ofrimin e
          cilësisë më të lartë dhe shërbimit ndaj klientit.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TeamMember name="Lorenco Zeza" role="Themelues" />
          <TeamMember name="Luis Doko" role="Drejtor Operacionesh" />
          <TeamMember name="Mia Pollo" role="Ekonomiste" />
          <TeamMember name="Mario Mimini" role="Menaxher Shitjesh" />
          <TeamMember name="Bujana Emini" role="Administrator" />
          <TeamMember name="Enxhi Mance" role="Eksperte Marketingu"/>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <FaMapMarkerAlt className="text-green-600 text-3xl mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Ku Gjendemi</h2>
        </div>
        <p className="text-gray-700 mb-4">
          Operacionet tona kryesore ndodhen në qendër të rajonit bujqësor, duke na lejuar të
          ofrojmë produktet më të freskëta me efikasitet maksimal.
        </p>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          {/* Map placeholder - replace with actual map component */}
          <div className="w-full h-64 flex items-center justify-center text-gray-500">
            [Harta e lokacionit tonë]
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({ name, role }: { name: string; role: string }) => {
  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3 overflow-hidden">
        {/* Placeholder for team member photo */}
      </div>
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
};

export default AboutPage;