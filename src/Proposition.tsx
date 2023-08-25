import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Selection from './Selection';


function Proposition() {
  const propertyData = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1614628079765-6c164f4bd970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Appartement avec un atmosphère convivale',
      price: 'Prix: 5 700 000 Dhs',
      location: 'Casablanca - Centre Ville',
      reference: 'Ref:668VA',
    },

    {
      imageSrc: 'https://images.unsplash.com/photo-1592222376988-92af20d4d06c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Appartement moderne avec une bonne vue',
      price: 'Prix: 3 700 000 Dhs',
      location: 'Casablanca - hay hassani',
      reference: 'Ref:627VA',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1613082442324-62ef5249275e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Appartement confortable et bien situé',
      price: 'Prix: 4 700 000 Dhs',
      location: 'Casablanca - Centre Ville',
      reference: 'Ref:637VA',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1614628079765-6c164f4bd970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Appartement avec un atmosphère convivale',
      price: 'Prix: 5 700 000 Dhs',
      location: 'Casablanca - Centre Ville',
      reference: 'Ref:668VA',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  };
  const [selectedOption, setSelectedOption] = useState('appartements');
  const options = ['appartements', 'garages'];

  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };



  return (

    <div className="p-4 ">
      <Selection />
      <h1 className='text-center text-4xl md:text-4xl font-bold m-6'>Nos dernières propositions</h1>

      <div className="flex space-x-4 mb-4 items-center justify-center">

        {options.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded-md  ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            onClick={() => handleOptionChange(option)}
          >
            {option === 'appartements' ? 'Appartements' : 'Garages'}
          </button>
        ))}
      </div>


      <div>
        {selectedOption === 'appartements' ? (
          <div className='my-6 ' id='proposition'>
            <h2 className="text-xl font-semibold mb-2 text-center ">Appartements</h2>
            <Carousel responsive={responsive} swipeable={false} className='z-30 md:cursor-pointer'>



              {propertyData.map(property => (
                // <Link to={`/property/${property.reference}`} key={property.reference}></Link>
                
                <div className="card my-6 mx-3 text-center cursor-pointer">
                  <img className="product--image" src={property.imageSrc} alt={property.title} />
                  <h2 className="text-center font-bold">{property.title}</h2>
                  <p className="price font-bold text-[#005BAF]">{property.price}</p>
                  <p>{property.location}</p>
                  <h6 className="text-center font-bold text-[#005BAF]">{property.reference}</h6>
                 
                  <button className='bg-[#005BAF] text-[#FFFFFF]  '> <Link to="/detail">Voir Plus</Link></button>

                </div>
              ))}








            </Carousel>

          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">Garages</h2>
            <Carousel responsive={responsive} className="">
              <div className='card item-center font-blod z-0'>
                <h1>No items for the moment </h1>
              </div>
            </Carousel>
          </div>
        )}
      </div>
<Footer />
    </div>



  );
}

export default Proposition;
