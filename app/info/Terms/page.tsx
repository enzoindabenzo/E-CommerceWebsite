import React from 'react';
import { FaBalanceScale, FaExclamationTriangle, FaGlobe, FaLock, FaUserShield } from 'react-icons/fa';

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-gray-100 rounded-full p-4 mb-4">
          <FaBalanceScale className="text-green-600 text-3xl" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Kushtet e Përdorimit</h1>
        <p className="text-gray-600">Data e fundit e përditësimit: 15 Qershor 2023</p>
      </div>

      {/* Introduction */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-gray-700">
          Ju lutemi lexoni me kujdes këto Kushte të Përdorimit përpara se të përdorni shërbimet tona. 
          Qasja ose përdorimi i faqes sonë të internetit dhe shërbimeve të lidhura nënkupton pranimin e këtyre kushteve.
        </p>
      </div>

      {/* Terms Sections */}
      <div className="space-y-8">
        <TermSection 
          icon={<FaGlobe />}
          title="1. Përdorimi i Faqes"
          content={
            <>
              <p className="mb-4">
                Agro BLM ofron këtë faqe interneti për qëllime informative dhe blerjesh. Nuk lejohet:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Përdorimi i faqes për qëllime të paligjshme</li>
                <li>Shkarkimi ose modifikimi i përmbajtjes pa leje</li>
                <li>Përdorimi i çdo sistemi automatizuar për të nxjerrë të dhëna</li>
                <li>Shkelja e të drejtave të pronarit të intelektit</li>
              </ul>
            </>
          }
        />

        <TermSection 
          icon={<FaUserShield />}
          title="2. Llogaria e Përdoruesit"
          content={
            <>
              <p className="mb-4">
                Kur krijoni një llogari në Agro BLM, ju pranoni të:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Siguroni informacion të saktë dhe të përditësuar</li>
                <li>Mbani të fshehtë fjalëkalimin tuaj</li>
                <li>Merrni përgjegjësi për të gjitha aktivitetet në llogarinë tuaj</li>
                <li>Na njoftoni menjëherë për çdo përdorim të paautorizuar</li>
              </ul>
            </>
          }
        />

        <TermSection 
          icon={<FaLock />}
          title="3. Privatësia dhe Siguria"
          content={
            <p>
              Politika jonë e Privatësisë, e cila është pjesë përbërëse e këtyre Kushteve, 
              rregullon mbledhjen, përdorimin dhe mbrojtjen e të dhënave tuaja personale. 
              Ne marrim masa të arsyeshme për të mbrojtur informacionin tuaj, por nuk mund 
              të garantojmë siguri absolute kundër çdo shkeljeje.
            </p>
          }
        />

        <TermSection 
          icon={<FaExclamationTriangle />}
          title="4. Kufizimet e Përgjegjësisë"
          content={
            <>
              <p className="mb-4">
                Agro BLM nuk mbart përgjegjësi për:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Çdo humbje ose dëmtim të drejtpërdrejtë, indirekt, rastësor ose pasues</li>
                <li>Gabime, ankesa ose mungesa në përmbajtjen e faqes</li>
                <li>Përdorimin e gabuar të produkteve tona</li>
                <li>Vonesa apo ndërprerje në shërbim për shkak të forcave më të mëdha</li>
              </ul>
            </>
          }
        />

        <TermSection 
          title="5. Ndryshime në Kushtet"
          content={
            <p>
              Agro BLM rezervon të drejtën të modifikojë këto Kushte në çdo kohë. Ndryshimet 
              do të hyjnë në fuqi menjëherë pas publikimit në faqen tonë të internetit. Përdorimi 
              i vazhdueshëm i shërbimeve tona pas ndryshimeve konsiderohet si pranim i kushteve të reja.
            </p>
          }
        />

        <TermSection 
          title="6. Ligji Zbatues dhe Juridiksioni"
          content={
            <p>
              Këto Kushte rregullohen dhe interpretohen në përputhje me ligjet e Republikës së Shqipërisë. 
              Çdo mosmarrëveshje që lind në lidhje me këto Kushte do te nënshtrohen ndaj jurisdiksionit ekskluziv 
              të gjykatëve kompetentë në Tiranë, Shqipëri.
            </p>
          }
        />

        <div className="bg-gray-50 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Kontakt</h3>
          <p className="text-gray-700">
            Për çdo pyetje në lidhje me këto Kushte të Përdorimit, ju lutemi na kontaktoni në:
            <br />
            <strong>Email:</strong> legal@agroblm.com
            <br />
            <strong>Telefon:</strong> +355 4 222 3333
          </p>
        </div>
      </div>
    </div>
  );
};

const TermSection = ({ icon, title, content }: { icon?: React.ReactNode, title: string, content: React.ReactNode }) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex items-center mb-4">
        {icon && <span className="text-green-600 mr-3">{icon}</span>}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="text-gray-700">
        {content}
      </div>
    </div>
  );
};

export default TermsOfUse;