import React, { useState } from 'react';

function Services(){
    const data=[
        {
            title:"Clarté",
            description:" Notre objectif est de vous fournir des informations détaillées à chaque étape de votre parcours immobilier.",
            icon:"fa-solid fa-eye"
        },
        {
            title:"Qualité",
            description:"Nous nous engageons fermement envers la qualité dans chaque aspect de notre travail.",
            icon:"fa-solid fa-medal"
        },
        {
            title:"Service Client",
            description:"Notre équipe dévouée est là pour vous guider, vous conseiller et répondre à vos questions.",
            icon:"fa-solid fa-handshake"
        },
        {
            title:"Communication",
            description:"Nous nous engageons à vous tenir informé à chaque étape du processus, à vous fournir des mises à jour régulières.",
            icon:"fa-regular fa-comments"
        }
    ]
    return(
        <div className=" mx-auto px-4 md:px-8 lg:px-16 xl:px-20 bg-[#F2F9FB] mt-16">
        <section className="py-8 md:cursor-pointer ">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 text-[#003089] 'text-center ">Nos valeurs</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4  ">
                {data.map((item,index)=>
                  <div className="bg-white rounded-lg shadow-md p-6 ">
                    <h1 className='text-center text-2xl text-[#003089]'><i className={item.icon}></i></h1>
                    <h3 className="text-center text-xl font-semibold mb-4 text-[#003089]">{item.title}</h3>
                    <p className="text-gray-600">
                   {item.description}
                    </p>
                     
                </div>
                )}
              
            </div>
                
        </section>
    </div>
    );
}

export default Services;