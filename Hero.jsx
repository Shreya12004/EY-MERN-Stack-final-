import React from 'react';
import HeroImg from "../../assets/image1.jpg";
import { motion } from "framer-motion";

const bgStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    width: '100%',
};

const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeInOut",
            }
        }
    }
}

const Hero = () => {
    const [data, setData] = React.useState({
        name: "",
        email: "",
        phone: "",
        amount: 0,
        frequency: "One-time",
    });

    const handleClick = (e) => {
        const name = e.target.name;
        setData((previousData) => {
            return {
                ...previousData,
                [name]: e.target.value,
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <>
        <div style={bgStyle}>
            <div className='min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-blue-900/80 to-green-600/60 pt-3 pb-10 md:pt-48 justify-center items-center pl-45'>
                <div className='container'>
                    <div className='grid grid-cols-1 items-center gap-12 text-white'>
                        {/* Hero Text */}
                        <div className='flex flex-col items-center text-center gap-5 lg:items-center lg:text-center lg:w-full'>
                            <motion.h1 variants={FadeUp(0.2)} initial="initial" animate="animate" className='text-5xl lg:text-7xl font-bold'>Join Our Mission</motion.h1>
                            <motion.p variants={FadeUp(0.4)} initial="initial" animate="animate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</motion.p>
                            <div className='space-x-4'>
                                <motion.button variants={FadeUp(0.6)} initial="initial" animate="animate" className='rounded-md border-green-600 bg-green-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-green-600/80'>Get Started</motion.button>
                                <motion.button variants={FadeUp(0.2)} initial="initial" animate="animate" className='rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300'>Learn More</motion.button>
                            </div>
                        </div>
                        {/* Form section */}
                        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100 }} className='w-[90%] md:w-[400px] mx-auto p-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-2xl shadow-md'>
                            <div>
                                <h1 className='text-lg text-center font-semibold'>Donation Form</h1>
                                <div className='flex items-center justify-center gap-8 py-4'>
                                    <button onClick={() => setData({ ...data, amount: 10 })} className='w-[50px] h-[50px] p-2 border-[1px] border-slate-300 rounded-md bg-gray-200 dark:bg-gray-900'>10 Rs.</button>
                                    <button onClick={() => setData({ ...data, amount: 50 })} className='w-[50px] h-[50px] p-2 border-[1px] border-slate-300 rounded-md bg-gray-200 dark:bg-gray-900'>50 Rs</button>
                                    <button onClick={() => setData({ ...data, amount: 100 })} className='w-[50px] h-[50px] p-2 border-[1px] border-slate-300 rounded-md bg-gray-200 dark:bg-gray-900'>100 Rs</button>
                                    <button onClick={() => setData({ ...data, amount: 1000 })} className='w-[50px] h-[50px] p-2 border-[1px] border-slate-300 rounded-md bg-gray-200 dark:bg-gray-900'>1000 Rs</button>
                                </div>
                                {/* Input section */}
                                <div className='space-y-6'>
                                    <input type="number" name="amount" id="amount" onChange={handleClick} placeholder='Amount' defaultValue={10} value={data.amount} min={1} max={10000} className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-gray-800' />
                                    <input type="text" name="name" id="name" onChange={handleClick} placeholder='Name' className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-gray-800' />
                                    <input type="email" name="email" id="email" onChange={handleClick} placeholder='Email' className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-gray-800' />
                                    <input type="tel" name="phone" id="phone" onChange={handleClick} placeholder='Phone Number' className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-gray-800' />
                                    <select name="frequency" id="frequency" onChange={handleClick} value={data.frequency} className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-gray-800'>
                                        <option value="One-time">One-time</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Annually">Annually</option>
                                    </select>
                                    <button className='rounded-full border-green-600 bg-green-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-green-600/80 w-full' onClick={handleSubmit}>
                                        Contribute Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* Recent Donors Section */}
            <div className='bg-gray-100 py-10'>
                <div className='container mx-auto'>
                    <h2 className='text-3xl font-semibold text-center mb-6'>Recent Donors</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {/* Donor 1 */}
                        <div className='bg-white p-4 rounded-lg shadow-md'>
                            <p className='text-xl font-semibold'>John Doe</p>
                            <p className='text-gray-700'>Donated 100 Rs</p>
                        </div>
                        {/* Donor 2 */}
                        <div className='bg-white p-4 rounded-lg shadow-md'>
                            <p className='text-xl font-semibold'>Jane Smith</p>
                            <p className='text-gray-700'>Donated 50 Rs</p>
                        </div>
                        {/* Donor 3 */}
                        <div className='bg-white p-4 rounded-lg shadow-md'>
                            <p className='text-xl font-semibold'>Robert Brown</p>
                            <p className='text-gray-700'>Donated 1000 Rs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;
