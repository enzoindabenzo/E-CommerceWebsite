'use client';
import React, { useState } from 'react';
import { FaExclamationCircle, FaPaperPlane, FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa';

const Ankesat = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    complaintType: 'product',
    message: '',
    files: [] as File[]
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: Array.from(e.target.files as FileList) }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Emri është i detyrueshëm';
    if (!formData.email && !formData.phone) newErrors.contact = 'Ju lutemi jepni email ose telefon';
    if (!formData.message) newErrors.message = 'Përshkrimi i ankesës është i detyrueshëm';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center bg-green-50 rounded-lg p-8">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-800 mb-2">Ankesa juaj është dërguar!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Faleminderit për feedback-in tuaj. Ekipi ynë do të shqyrtojë ankesën tuaj dhe do ju kontaktojë brenda 48 orëve.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-green-700 text-white font-bold py-3 px-6 rounded hover:bg-green-800 transition duration-300"
          >
            Dërgo një ankesë tjetër
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-red-50 rounded-full p-4 mb-4">
          <FaExclamationCircle className="text-red-600 text-3xl" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Formulari i Ankesave</h1>
        <p className="text-gray-600">
          Na ndihmoni të përmirësojmë shërbimet tona duke na dërguar ankesat ose sugjerimet tuaja
        </p>
      </div>

      {/* Complaint Form */}
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                <FaUser className="inline mr-2" />
                Emri i plotë <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                placeholder="Shkruani emrin tuaj të plotë"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="orderNumber" className="block text-gray-700 font-medium mb-2">
                Numri i porosisë (nëse është e aplikueshme)
              </label>
              <input
                type="text"
                id="orderNumber"
                name="orderNumber"
                value={formData.orderNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Nr. i porosisë"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                <FaEnvelope className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="email@shembull.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                <FaPhone className="inline mr-2" />
                Numri i telefonit
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="+355 XX XXX XXXX"
              />
            </div>
          </div>
          {(errors.contact && !formData.email && !formData.phone) && (
            <p className="text-red-500 text-sm mb-4">Ju lutemi jepni të paktën një metodë kontakti (email ose telefon)</p>
          )}

          <div className="mb-6">
            <label htmlFor="complaintType" className="block text-gray-700 font-medium mb-2">
              Lloji i ankesës <span className="text-red-500">*</span>
            </label>
            <select
              id="complaintType"
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="product">Problem me produktin</option>
              <option value="service">Problem me shërbimin</option>
              <option value="delivery">Problem me dorëzimin</option>
              <option value="payment">Problem me pagesën</option>
              <option value="other">Tjetër</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              <FaFileAlt className="inline mr-2" />
              Përshkrimi i ankesës <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              placeholder="Përshkruani ankesën tuaj në detaje..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="files" className="block text-gray-700 font-medium mb-2">
              Bashkëngjitni dokumente (nëse është e nevojshme)
            </label>
            <input
              type="file"
              id="files"
              name="files"
              onChange={handleFileChange}
              multiple
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <p className="text-gray-500 text-sm mt-1">Mund të ngarkoni foto, faturë ose dokumente të tjera mbështetëse</p>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded flex items-center transition duration-300"
            >
              <FaPaperPlane className="mr-2" />
              Dërgo Ankesën
            </button>
          </div>
        </form>
      </div>

      {/* Additional Information */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Informacion shtesë</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Koha e përpunimit:</strong> Ankesat përpunohen brenda 2-5 ditëve pune.
          </p>
          <p>
            <strong>Kontakt alternativ:</strong> Nëse preferoni, mund të na kontaktoni direkt në:
          </p>
          <ul className="list-disc pl-6">
            <li>Telefon: +355 4 222 3333 (oraret 08:00-16:00)</li>
            <li>Email: ankesa@agroblm.com</li>
            <li>Dyqani fizik: Rruga e Bujqësisë, Nr. 15, Tirana</li>
          </ul>
          <p>
            <strong>Rasti i urgjencës:</strong> Për probleme urgjente me produktet e freskëta, ju lutemi telefononi direkt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ankesat;