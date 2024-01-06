import React, { useState } from 'react'
import bird from '../assets/31530356_bird_2-removebg-preview.png'
import { FaPlus } from 'react-icons/fa';
const Web = () => {

    const plans = [
        {
            name: 'Basic Plan',
            price: '499',
            features: ['Basic website', 'Up to 5 pages', 'Responsive design'],
        },
        {
            name: 'Standard Plan',
            price: '999',
            features: ['Custom design', 'Up to 10 pages', 'Responsive design', 'Contact form'],
        },
        {
            name: 'Premium Plan',
            price: '1499',
            features: [
                'Custom design',
                'Up to 20 pages',
                'Responsive design',
                'Contact form',
                'Content management system (CMS)',
            ],
        },
    ];
    const faqData = [
        {
            question: 'What is your company about?',
            answer: 'We are a web development company specializing in creating innovative and responsive websites.',
        },
        {
            question: 'How do I contact customer support?',
            answer: 'You can reach our customer support team by sending an email to support@example.com.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept credit/debit cards and PayPal for all transactions.',
        },
        {
            question: 'How long does it take to complete a project?',
            answer: 'The project duration depends on its complexity. We provide estimated timelines during the consultation.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
            <div>
                <div className=' bg-gradient-to-tr from-pink-400 to-[#4169E1] h-[20vh] flex items-center sm:justify-center sm:p-2'>
                    <h1 className='text-5xl lg:text-6xl  text-white uppercase text-center font-semibold p-4'>maximice Associates</h1>
                </div>
                <div className='p-4'>
                    <div className='flex items-center'>
                        <h1 className='text-3xl lg:text-5xl font-semibold '>Web Development</h1>
                        <img src={bird} className='w-[50px] lg:w-[60px]' alt="" />
                    </div>
                    <p className='p-2 text-justify lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi voluptates laudantium sapiente vitae deserunt, earum rem maiores recusandae perferendis quisquam ullam dolorem inventore cum ad illum perspiciatis a hic?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, atque!</p>
                </div>
                <div className="container mx-auto mt-8 p-4">
                    <h1 className="text-3xl text-center lg:text-start font-semibold mb-6">Web Development Plans</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 h-full lg:h-[500px] gap-8 ">
                        {plans.map((plan, index) => (
                            <div key={index} className=" bg-gradient-to-tr from-black to-gray-800 text-gray-400 p-8 justify-around flex flex-col rounded-md shadow-md">
                                <div>

                                    <h2 className="text-xl font-semibold mb-4 text-center">{plan.name}</h2>
                                    <p className="text-gray-200 mb-4 text-4xl text-center">&#8377;{plan.price}</p>
                                </div>
                                <div>
                                    <ul className="mb-6">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center mb-2">
                                                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="bg-gradient-to-tr from-pink-400 to-[#4169E1] text-gray-900 px-4 py-2 ease-in-out transition-all rounded-md hover:text-white ">
                                        Select Plan
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto mt-8 p-4">
                    <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
                    <div className="grid gap-6">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white p-4 flex flex-col justify-around rounded-md shadow-md">
                               {/* <div className='flex w-full justify-around'> */}
                               <h2 className="text-xl font-semibold mb-4 cursor-pointer" onClick={() => toggleAnswer(index)} >{faq.question}</h2>
                                <FaPlus size={15}  className="cursor-pointer" onClick={() => toggleAnswer(index)} />
                               {/* </div> */}
                            
                                {openIndex === index && (
                                    <p className="text-gray-600">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full h-full p-4'>
                    <div className='grid grid-rows-1 lg:grid-cols-2 p-4 gap-4  h-[40vh] justify-center items-center  bg-black text-white'>
                        <div className='flex flex-col'>
                            <h1 className='text-4xl font-semibold'>Its not about idea</h1>
                            <h1 className='text-4xl font-semibold'>Its about making idea happen </h1>
                            <span className='text-xl text-gray-400 font-semibold'>- Scott belsky</span>
                        </div>
                        <div className='flex justify-center gap-4 '>
                            <div>
                                <h1 className='text-4xl font-bold'>Maximice Associates</h1>
                                <h2 className='text-xl'>Seamless Solution</h2>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h1 className='mt-2 text-center  font-semibold'>businessatmaximice@gmail.com</h1>
                        <h1 className='text-center font-semibold'>+91 9890845263</h1>
                        <h1 className='text-center uppercase mt-6 font-semibold text-white bg-black p-2'>@ 2024 All Rights Reserved</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Web