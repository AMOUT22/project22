import React, { useState } from 'react';
import logo from'./logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
  };

  return (
  
<footer className="bg-white dark:bg-gray-900 my-5">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <img className='logo' src={logo} alt="" />
         
        </div>
        <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="my-11">
                    <a href="#" className="">Le meilleur choix pour votre prochaine acquisition</a>
                </li>
               
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white foot">Contactez-nous</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline"><i className="fa-brands fa-facebook"></i>   Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline"><i className="fa-brands fa-instagram"></i> Instagram</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline"><i className="fa-brands fa-google"></i> Google</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white foot">Inscrivez-vous pour recevoir les dernières nouvelles</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Entrer l adresse e-mail"
              className="py-2 px-3 border rounded"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Inscription
            </button>
          </form>
          {isSubscribed && (
            <div className="text-blue-500 mt-2 md:mt-0">un responsable vous contactera dans moins de 24H</div>
          )}
            </ul>
        </div>
    </div>
    <div className=" px-4 py-6 text-[#ffffff] bg-[#005BAF] md:flex md:items-center md:justify-between">
        <span className="text-center text-sm sm:text-center span">© 2023 <a href="">Company's name</a>. All Rights Reserved.
        </span>
        
      </div>
    </div>
</footer>

  );
};

export default Footer;
