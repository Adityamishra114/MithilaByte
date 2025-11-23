import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const PackagesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggleModal();
  };

  return (
    <section className="font-publicSans sm:py-20 py-2 py-0 sm:px-8 mt-[calc(var(--header-height))]">
      <div className="container mx-auto text-center mb-6 sm:mb-16">
        <h5 className="text-xl sm:text-2xl font-bold text-primary mb-2">Our Packages</h5>
        <h2 className="text-4xl sm:text-5xl mb-12 font-extrabold text-[#253462]">
          Grow Your <span className="text-primary">Profit</span>
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
          <h4 className="text-2xl font-extrabold text-primary mb-4">Basic Package</h4>
          <ul className="space-y-2 items-start text-md sm:text-lg text-black">
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Daily 2 trade in all segments</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Proper research team support</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Proper technical support</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Only one research alert per day</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Get Positional Equity alerts</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Delivery:Mobile App & web portal</li>
          </ul>
          <div className="flex justify-center gap-4 mt-6">
            <a href="tel:+919161276060" className="bg-[#253462] text-white py-2 px-6 rounded-full font-semibold hover:bg-primary transition duration-300">Call Now</a>
            <button onClick={toggleModal} className="bg-primary text-white py-2 px-6 rounded-full font-semibold hover:bg-[#1f2a3d] transition duration-300">Enquiry</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
          <h4 className="text-2xl font-extrabold text-primary mb-4">Silver Package</h4>
           <ul className="space-y-2 items-start text-md sm:text-lg text-black">
             <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Daily 2 trade in all segments</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Proper research team support</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Proper technical support</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Only one research alert per day</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Get Positional Equity alerts</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Delivery:Mobile App & web portal</li>
          </ul>
          <div className="flex justify-center gap-4 mt-6">
            <a href="tel:+919161276060" className="bg-[#253462] text-white py-2 px-6 rounded-full font-semibold hover:bg-primary transition duration-300">Call Now</a>
            <button onClick={toggleModal} className="bg-primary text-white py-2 px-6 rounded-full font-semibold hover:bg-[#1f2a3d] transition duration-300">Enquiry</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
          <h4 className="text-2xl font-extrabold text-primary mb-4">Gold Package</h4>
           <ul className="space-y-2 items-start text-md sm:text-lg text-black">
        <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Daily 2 trade in all segments</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Proper research team support</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Proper technical support</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Only one research alert per day</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Get Positional Equity alerts</li>
            <li className="flex items-start"><FaCheck className="text-primary mr-1 mt-1" /> Delivery:Mobile App & web portal</li>
          </ul>
          <div className="flex justify-center gap-4 mt-6">
            <a href="tel:+919161276060" className="bg-[#253462] text-white py-2 px-6 rounded-full font-semibold hover:bg-primary transition duration-300">Call Now</a>
            <button onClick={toggleModal} className="bg-primary text-white py-2 px-6 rounded-full font-semibold hover:bg-[#1f2a3d] transition duration-300">Enquiry</button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-6">Enquiry Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="package" className="block text-sm font-semibold text-gray-700">Package</label>
                <select name="package" id="package" value={formData.package} onChange={handleInputChange} required className="w-full p-3 border border-gray-300 rounded-lg">
                  <option value="">Select Package</option>
                  <option value="Basic">Basic</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="comment" className="block text-sm font-semibold text-gray-700">Comment</label>
                <textarea id="comment" name="comment" value={formData.comment} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg" rows="4"></textarea>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={toggleModal} className="bg-gray-500 text-white py-2 px-6 rounded-full">Cancel</button>
                <button type="submit" className="bg-[#ff6600] text-white py-2 px-6 rounded-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PackagesSection;
