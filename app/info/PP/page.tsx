import React from 'react';
import { FaShieldAlt, FaUserLock, FaDatabase, FaCookie, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-blue-50 rounded-full p-4 mb-4">
          <FaShieldAlt className="text-blue-600 text-3xl" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Politika e Privatësisë</h1>
        <p className="text-gray-600">Efektive nga data: 15 Prill 2025</p>
      </div>

      {/* Introduction */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <p className="text-gray-700">
          Në Agro BLM, ne respektojmë dhe vlerësojmë privatësinë tuaj. Kjo Politika e Privatësisë shpjegon se si mbledhim,
          përdorim dhe mbrojmë informacionin tuaj personal kur përdorni shërbimet tona.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-8">
        <PolicySection 
          icon={<FaUserLock />}
          title="1. Informacioni që Mbledhim"
          content={
            <>
              <p className="mb-3">Ne mund të mbledhim llojet e mëposhtme të informacionit:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Informacioni personal:</strong> Emri, adresa, email, numri i telefonit, etj.</li>
                <li><strong>Informacioni i blerjeve:</strong> Historiku i porosive, preferencat, etj.</li>
                <li><strong>Informacioni teknik:</strong> Adresa IP, lloji i shfletuesit, pajisja, etj.</li>
                <li><strong>Cookies dhe të dhëna të ngjashme:</strong> Shihni seksionin për Cookies më poshtë.</li>
              </ul>
            </>
          }
        />

        <PolicySection 
          icon={<FaDatabase />}
          title="2. Si Përdorim Informacionin"
          content={
            <>
              <p className="mb-3">Informacioni juaj mund të përdoret për:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Përpunimin e porosive dhe ofrimin e shërbimeve tona</li>
                <li>Përmirësimin e produktit dhe përvojës së përdoruesit</li>
                <li>Komunikimin me ju për njoftime dhe oferta</li>
                <li>Parandalimin e mashtrimeve dhe sigurinë e faqes sonë</li>
                <li>Pajtueshmërinë me kërkesat ligjore</li>
              </ul>
            </>
          }
        />

        <PolicySection 
          icon={<FaShieldAlt />}
          title="3. Shpërndarja e Informacionit"
          content={
            <>
              <p className="mb-3">Ne nuk shesim ose japim informacionin tuaj personal palëve të treta, përveç:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Partnerëve të besuar që na ndihmojnë në operacionet tona biznesore</li>
                <li>Kur kërkohet nga ligji ose autoritetet kompetente</li>
                <li>Në rast të një bashkimi, blerjeje ose transferimi biznesi</li>
              </ul>
              <p className="mt-3">
                Ne kërkojmë nga partnerët tanë të respektojnë privatësinë tuaj dhe të trajtojnë informacionin
                në përputhje me këtë politikë.
              </p>
            </>
          }
        />

        <PolicySection 
          icon={<FaCookie />}
          title="4. Cookies dhe Teknologji të Ngjashme"
          content={
            <>
              <p className="mb-3">
                Përdorim cookies dhe teknologji të ngjashme për të përmirësuar përvojën tuaj. Cookies janë fajla të vegjël
                të cilat ruhen në pajisjen tuaj dhe na ndihmojnë të:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mbajmë llogarinë tuaj të kyçur</li>
                <li>Kujtojmë preferencat tuaja</li>
                <li>Kuptojmë se si përdorni faqen tonë</li>
                <li>Përmirësojmë shërbimet tona</li>
              </ul>
              <p className="mt-3">
                Ju mund të kontrolloni ose të fshini cookies përmes cilësimeve të shfletuesit tuaj.
              </p>
            </>
          }
        />

        <PolicySection 
          title="5. Siguria e të Dhënave"
          content={
            <p>
              Ne përdorim masa të arsyeshme teknike dhe organizative për të mbrojtur informacionin personal që mbledhim.
              Megjithatë, asnjë metodë transmetimi në internet ose ruajtje elektronike nuk është 100% e sigurt, kështu që
              nuk mund të garantojmë siguri absolute.
            </p>
          }
        />

        <PolicySection 
          title="6. Të Drejtat e Përdoruesit"
          content={
            <>
              <p className="mb-3">Ju keni të drejtë të:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kërkoni një kopje të të dhënave tuaja personale</li>
                <li>Kërkoni korrigjimin e të dhënave të pasakta</li>
                <li>Kërkoni fshirjen e të dhënave tuaja në raste të caktuara</li>
                <li>Kundërshtoni përpunimin e të dhënave tuaja</li>
                <li>Kërkoni kufizimin e përpunimit në raste të caktuara</li>
              </ul>
            </>
          }
        />

        <PolicySection 
          title="7. Ndryshime në Politikë"
          content={
            <p>
              Ne mund të përditësojmë këtë Politikë të Privatësisë herë pas here. Do te ju njoftojmë për ndryshime të rëndësishme
              duke postuar njoftimin në faqen tonë të internetit dhe/ose duke ju dërguar një njoftim direkt. Ju inkurajojmë të
              rishikoni këtë Politikë periodikisht për të qenë të informuar se si ne mbrojmë informacionin tuaj.
            </p>
          }
        />

        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Kontakt</h3>
          <p className="text-gray-700 mb-2">
            Nëse keni ndonjë pyetje në lidhje me këtë Politikë të Privatësisë, ju lutemi na kontaktoni:
          </p>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-blue-600 mr-2" />
            <span>privacy@agroblm.com</span>
          </div>
          <div className="flex items-center">
            <FaShieldAlt className="text-blue-600 mr-2" />
            <span>+355 4 222 3333 (Zyra e Mbrojtjes së të Dhënave)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PolicySection = ({ icon, title, content }: { icon?: React.ReactNode, title: string, content: React.ReactNode }) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex items-center mb-4">
        {icon && <span className="text-blue-600 mr-3">{icon}</span>}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="text-gray-700">
        {content}
      </div>
    </div>
  );
};

export default PrivacyPolicy;