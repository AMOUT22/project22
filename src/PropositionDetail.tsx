import React, { useState } from 'react';
import Footer from './Footer';

const properties = [
  {
    id: 1,
    title: 'Modern Villa',
    image: 'https://images.pexels.com/photos/6315808/pexels-photo-6315808.jpeg?auto=compress&cs=tinysrgb&w=600',
    chambres: 3,
    salon: 2,
    bathrooms: 2,
    localisation: 'Suburb',
    status: 'A vendre',
    prix:"4 000 000"
    
  },
  {
    id: 2,
    title: 'City Apartment',
    image: 'https://images.pexels.com/photos/6510427/pexels-photo-6510427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chambres: 1,
    salon: 1,
    bathrooms: 1,
    localisation: 'City Center',
    status: 'A louer',
    prix:"4 250 000"

  },
  {
    id: 3,
    title: 'Spacious House',
    image: 'https://images.pexels.com/photos/4119833/pexels-photo-4119833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chambres: 4,
    salon: 2,
    bathrooms: 3,
    localisation: 'Suburb',
    status: 'A vendre',
    prix:"2 080 000"

  },
  {
    id: 4,
    title: 'Cozy Studio',
    image: 'https://images.pexels.com/photos/6143348/pexels-photo-6143348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chambres: 1,
    salon: 0,
    bathrooms: 1,
    localisation: 'City Center',
    status: 'A louer',
    prix:"5 000 300"

  },
  {
    id: 5,
    title: 'Luxury Penthouse',
    image: 'https://images.pexels.com/photos/7214173/pexels-photo-7214173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chambres: 3,
    salon: 1,
    bathrooms: 3,
    localisation: 'City Center',
    status: 'A vendre',
    prix:"7 020 000"

  },
  {
    id: 6,
    title: 'Country Cottage',
    image: 'https://images.pexels.com/photos/6283965/pexels-photo-6283965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chambres: 2,
    salon: 1,
    bathrooms: 2,
    localisation: 'Countryside',
    status: 'A vendre',
    prix:"4 050 000"

  },
  {
    id: 7,
    title: 'Modern Loft',
    image: 'https://images.pexels.com/photos/6265835/pexels-photo-6265835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chambres: 2,
    salon: 1,
    bathrooms: 2,
    localisation: 'City Center',
    status: 'A louer',
    prix:"4 000 000"

  },
  {
    id: 8,
    title: 'Beachfront Villa',
    image: 'https://images.pexels.com/photos/7534553/pexels-photo-7534553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chambres: 5,
    salon: 3,
    bathrooms: 4,
    localisation: 'Beach',
    status: 'A vendre',
    prix:"4 780 000"

  },
  {
    id: 9,
    title: 'Rural Retreat',
    image: 'https://images.pexels.com/photos/6284236/pexels-photo-6284236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chambres: 3,
    salon: 1,
    bathrooms: 2,
    localisation: 'Countryside',
    status: 'A vendre',
    prix:"3 000 000"

  },
  {
    id: 10,
    title: 'Urban Condo',
    image: 'https://images.pexels.com/photos/6585766/pexels-photo-6585766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chambres: 2,
    salon: 1,
    bathrooms: 1,
    localisation: 'City Center',
    status: 'A louer',
    prix:"1 000 000"
    
  },
];

const FilterablePropertyList: React.FC = () => {
  const [selectedChambres, setSelectedChambres] = useState<number | null>(null);
  const [selectedSurface, setSelectedSurface] = useState<string | null>(null);
  const [selectedLocalisation, setSelectedLocalisation] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedSalon, setSelectedSalon] = useState<number | null>(null);

  const filteredProperties = properties.filter(property => {
    if (
      (selectedChambres === null || selectedChambres === property.chambres) &&
      (selectedSurface === null || selectedSurface === '60m2' /* Add other surface conditions */) &&
      (selectedLocalisation === null || selectedLocalisation === 'Centre Ville' /* Add other localisation conditions */) &&
      (selectedStatus === null || selectedStatus === 'A vendre' /* Add other status conditions */) &&
      (selectedSalon === null || selectedSalon === property.salon)
    ) {
      return true;
    }
    return false;
  });

  return (
    <>   <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 bg-gray-100 p-4 ">
        <h2 className="font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <p className="font-semibold mb-2">Chambre:</p>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedChambres === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedChambres(1)}
          >
            1 <i className="fa-solid fa-bed"></i>
          </button>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedChambres === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedChambres(2)}
          >
            2 <i className="fa-solid fa-bed"></i>
          </button>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedChambres === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedChambres(3)}
          >
            Plus
          </button>
        </div>
        <div className="mb-4">
          <p className="font-semibold mb-2">Surface:</p>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedSurface === '60m2' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedSurface('60m2')}
          >
            60 m2
          </button>
        </div>
        <div className="mb-4">
          <p className="font-semibold mb-2">Localisation:</p>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedLocalisation === 'Centre Ville' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedLocalisation('Centre Ville')}
          >
            Centre ville <i className="fa-solid fa-city"></i>
          </button>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedLocalisation === 'Autre' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedLocalisation('Autre')}
          >
            Autre
          </button>
        </div>
        <div className="mb-4">
          <p className="font-semibold mb-2">Status de la propriété:</p>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedStatus === 'A vendre' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedStatus('A vendre')}
          >
            A vendre
          </button>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedStatus === 'A louer' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedStatus('A louer')}
          >
            A louer
          </button>
        </div>
        <div className="mb-4">
          <p className="font-semibold mb-2">Salon:</p>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedSalon === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedSalon(1)}
          >
            1 salon
          </button>
          <button
            className={`mr-2 mb-2 py-1 px-3 rounded ${
              selectedSalon === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedSalon(2)}
          >
            2 salons
          </button>
          {/* Add other salon buttons */}
        </div>
      </div>
      <div className="">
  <h2 className="font-bold mb-4">Properties</h2>
  <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
    {filteredProperties.map(property => (
      <div key={property.id} className="bg-white p-4 shadow-md rounded-md">
        <img src={property.image} alt={property.title} className="mb-2" />
        <h3 className="text-lg font-semibold">{property.title}</h3>
        
        <p>Chambres: {property.chambres}</p>
        <p>Salon: {property.salon}</p>
        <p>Bathrooms: {property.bathrooms}</p>
        <p>Localisation: {property.localisation}</p>
        <p className='text-[#015CAF]'>Status: {property.status}</p>
        <p>prix: {property.prix}</p>

      </div>
    ))}
  </div>
</div>
    </div>
    <Footer/>
    </>
 
  );
};

export default FilterablePropertyList;
