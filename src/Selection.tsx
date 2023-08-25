import React from 'react';

const cards = [
  {
    title: 'Appartement spacieux avec terrasse',
    description: 'Prix: 4 300 000 Dhs',
    image: 'https://images.unsplash.com/photo-1614628079765-6c164f4bd970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Appartement bien soigné avec grenier',
    description: 'Prix: 3 500 000 Dhs',
    image: 'https://images.unsplash.com/photo-1634045924031-98026a4557c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=707&q=80',
  },
  {
    title: 'Appartement moderne et lumineux',
    description: 'Prix: 4 000 000 Dhs',
    image: 'https://images.unsplash.com/photo-1613082442324-62ef5249275e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

function HomeCards() {
  return (
    <>
    <div className='text-[#005BAF] '>
      <h1 className='text-center text-4xl md:text-4xl font-bold'>Nos Sélection</h1>
      <div className="grid gap-6 md:grid-cols-3 mt-3">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2 text-[#000000]">{card.title}</h3>
            <p className="mb-4">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default HomeCards;