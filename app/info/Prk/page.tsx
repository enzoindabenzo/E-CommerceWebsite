import React from 'react';
import { FaBuilding, FaHistory, FaUsers, FaChartLine, FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import { GiFarmer } from 'react-icons/gi';

const ProfilKompanise = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-4 mb-6">
          <FaBuilding className="text-green-600 text-4xl" />
        </div>
        <h1 className="text-4xl font-bold text-green-800 mb-4">Profili i Kompanisë</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Njohuni më mirë me Agro BLM - vlerat, historinë dhe arritjet tona
        </p>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-1/2">
          <img 
            src="/img/PRK.jpg" 
            alt="Kompania Agro BLM"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Përshkrim i Kompanisë</h2>
          <p className="text-gray-700 mb-4">
            Agro BLM është një nga liderët në industrinë bujqësore në Shqipëri, me një prani 20-vjeçare në treg. 
            Ne specializohemi në prodhimin dhe shpërndarjen e produkteve bujqësore me cilësi të lartë.
          </p>
          <p className="text-gray-700 mb-4">
            Me seli në Tiranë dhe objekte prodhimi në të gjithë vendin, ne kemi ndërtuar një rrjet të gjerë 
            partnerësh dhe klientësh të besuar.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <StatCard value="20+" label="Vite Përvojë" />
            <StatCard value="50+" label="Punonjës" />
            <StatCard value="100+" label="Partnerë" />
            <StatCard value="1000+" label="Klientë të Kënaqur" />
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-green-50 rounded-xl p-8 mb-16">
        <div className="flex items-center mb-6">
          <FaHistory className="text-green-600 text-3xl mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Historia Jonë</h2>
        </div>
        <div className="space-y-6">
          <HistoryItem 
            year="2005"
            title="Themelimi"
            description="Agro BLM u themelua si një biznes familjar me fokus në prodhimin lokal"
          />
          <HistoryItem 
            year="2010"
            title="Zgjerimi i Operacioneve"
            description="Hapja e departamentit të shpërndarjes dhe fillimi i eksportit"
          />
          <HistoryItem 
            year="2015"
            title="Certifikimi"
            description="Fitimi i certifikatës ISO 9001 për menaxhimin e cilësisë"
          />
          <HistoryItem 
            year="2022"
            title="Innovacion"
            description="Futja e teknologjive të reja në proceset tona prodhuese"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Vlerat Tona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<GiFarmer className="text-3xl" />}
            title="Cilësia"
            description="Produkte të shëndetshme dhe të sigurta për konsumatorët tanë"
          />
          <ValueCard 
            icon={<FaUsers className="text-3xl" />}
            title="Përkushtimi"
            description="Angazhim i plotë ndaj klientëve dhe partnerëve tanë"
          />
          <ValueCard 
            icon={<FaChartLine className="text-3xl" />}
            title="Innovacion"
            description="Vazhdimësi në përmirësimin e proceseve dhe produkteve"
          />
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <div className="flex items-center mb-6">
          <FaAward className="text-green-600 text-3xl mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Arritjet dhe Çmimet</h2>
        </div>
        <div className="space-y-4">
          <AchievementItem 
            title="Çmimi 'Bujqësia e Vitit 2020'"
            organization="Ministria e Bujqësisë"
          />
          <AchievementItem 
            title="Certifikata ISO 9001:2015"
            organization="TÜV Rheinland"
          />
          <AchievementItem 
            title="'Kompania Më Inovative' 2019"
            organization="Dhoma e Tregtisë dhe Industrisë"
          />
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <FaMapMarkerAlt className="text-green-600 text-3xl mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Prania Jonë</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LocationCard 
            city="Tirana"
            address="Rr. 'Bujqësia', Nr. 15"
            phone="+355 4 222 3333"
          />
          <LocationCard 
            city="Shkodër"
            address="Rr. 'Prodhuesit', Nr. 8"
            phone="+355 22 444 555"
          />
          <LocationCard 
            city="Korçë"
            address="Rr. 'Agrobiznesi', Nr. 22"
            phone="+355 82 666 777"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label }: { value: string, label: string }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
      <p className="text-2xl font-bold text-green-700 mb-1">{value}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const HistoryItem = ({ year, title, description }: { year: string, title: string, description: string }) => {
  return (
    <div className="pl-4 border-l-4 border-green-600">
      <div className="flex items-baseline">
        <span className="font-bold text-green-700 mr-2">{year}</span>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700 mt-1">{description}</p>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
      <div className="text-green-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AchievementItem = ({ title, organization }: { title: string, organization: string }) => {
  return (
    <div className="flex items-start">
      <div className="bg-green-100 p-2 rounded-full mr-4">
        <FaAward className="text-green-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{organization}</p>
      </div>
    </div>
  );
};

const LocationCard = ({ city, address, phone }: { city: string, address: string, phone: string }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-bold text-lg text-gray-800 mb-2">{city}</h3>
      <p className="text-gray-600 mb-2">{address}</p>
      <p className="text-green-700">{phone}</p>
    </div>
  );
};

export default ProfilKompanise;