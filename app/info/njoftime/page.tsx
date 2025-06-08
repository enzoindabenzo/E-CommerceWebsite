import React from "react";
import { FaBullhorn, FaCalendarAlt, FaTags, FaShippingFast, FaUserClock, FaGift } from "react-icons/fa";

export default function Njoftimet() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Njoftimet e Fundit</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Informohu me njoftimet më të fundit, ofertat speciale dhe lajmet nga Agro BLM
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
          <div className="flex items-center mb-3">
            <FaBullhorn className="text-green-600 mr-3 text-xl" />
            <h2 className="text-2xl font-semibold text-gray-800">Lajme dhe Njoftime</h2>
          </div>
          <ul className="space-y-4">
            <NotificationItem 
              title="Sezoni i Ri i Prodhimeve" 
              date="15 Janar 2025"
              content="Hasi sezonin e ri me prodhimet tona të freskëta lokale. Shfletoni koleksionin tonë të ri!"
              icon={<FaCalendarAlt />}
            />
            <NotificationItem 
              title="Sistemi i Ri i Pagesave" 
              date="1 Shkurt 2025"
              content="Tani mund të paguani edhe me kriptomonedha. Përdorni Bitcoin ose Ethereum për blerjet tuaja."
            />
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <div className="flex items-center mb-3">
            <FaTags className="text-blue-600 mr-3 text-xl" />
            <h2 className="text-2xl font-semibold text-gray-800">Oferta Speciale</h2>
          </div>
          <ul className="space-y-4">
            <NotificationItem 
              title="Zbritje 30% për Frutat" 
              date="Deri më 25 Shkurt 2025"
              content="Përfitoni zbritje të madhe për të gjitha frutat e sezonit. Porositni tani!"
              icon={<FaTags />}
              urgent
            />
            <NotificationItem 
              title="Paketimi Falas për Dhurata" 
              date="Gjithë muajin Qershor"
              content="Bëni dhuratë të dashurve tuaj me paketim special falas për çdo porosi mbi 3000 Lekë."
              icon={<FaGift />}
            />
          </ul>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FaShippingFast className="text-orange-500 mr-3" />
          Ndryshime në Shërbimet Tona
        </h2>
        
        <div className="space-y-6">
          <div className="pl-4 border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold mb-2">Zgjerimi i Zonave të Dërgesave</h3>
            <p className="text-gray-600 mb-1"><span className="font-medium">Data:</span> 1 Mars 2025</p>
            <p className="text-gray-700">
              Tani ofrojmë shërbim dërgimi në të gjithë vendin. Kontrolloni nëse zona juaj është përfshirë në listën tonë të re.
            </p>
          </div>

          <div className="pl-4 border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-2">Orari i Ri i Punës</h3>
            <p className="text-gray-600 mb-1"><span className="font-medium">Data:</span> Prej sot</p>
            <p className="text-gray-700">
              Dyqani fizik tani është i hapur edhe të shtunave nga ora 9:00 deri në 14:00. Ju presim!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
          <FaUserClock className="text-yellow-600 mr-2" />
          Lajmërim i Rëndësishëm
        </h2>
        <p className="text-yellow-700">
          <strong>Kujdes:</strong> Nga data 1 Prill 2025, të gjitha llogaritë e përdoruesve që nuk kanë qenë aktive për më shumë se 1 vit do të fshihen. 
          Për të ruajtur llogarinë tuaj, ju lutemi identifikohuni para kësaj date.
        </p>
      </div>
    </div>
  );
}

interface NotificationItemProps {
  title: string;
  date: string;
  content: string;
  icon?: React.ReactNode;
  urgent?: boolean;
}

function NotificationItem({ title, date, content, icon, urgent = false }: NotificationItemProps) {
  return (
    <li className={`p-4 rounded-md ${urgent ? 'bg-red-50 border-l-4 border-red-500' : 'bg-gray-50'}`}>
      <div className="flex items-start">
        {icon && <div className="text-green-600 mr-3 mt-1">{icon}</div>}
        <div>
          <h3 className={`font-medium text-lg ${urgent ? 'text-red-700' : 'text-gray-800'}`}>{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </li>
  );
}