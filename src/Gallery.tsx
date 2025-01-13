import { motion } from "framer-motion";
import {Star, MapPin, Music, Thermometer, Car, Play, Headphones, CornerUpLeft, Pause, BarChart2} from "lucide-react";

export default function Gallery() {
    return (
        <div className="flex flex-col items-center min-h-screen w-screen bg-gray-100 gap-10">
            {/* Header */}
            <div
                className="sticky w-full flex h-[50%] items-center justify-between px-6 py-4 bg-white rounded-xl shadow-md">
                {/* Left Section: Badge */}
                <div
                    className="flex items-center bg-green-200 text-green-800 font-semibold px-3 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4 mr-2"/> Auto
                </div>

                {/* Center Section: Arrival Info */}
                <div className="flex flex-col items-center">
                    <p className="text-gray-500 font-medium text-sm">
                        Arrival in 20 min at 5:01 PM
                    </p>
                    {/* Progress Bar */}
                    <div className="w-full h-1 mt-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-1/4 h-full bg-blue-500"></div>
                    </div>
                </div>

                {/* Right Section: Icons */}
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                        <BarChart2 className="w-5 h-5 text-gray-600"/>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                        <Pause className="w-5 h-5 text-gray-600"/>
                    </div>
                </div>
            </div>

            {/* Main Cards */}
            <div className="w-full h-max -mb-20 scroll-smooth overflow-x-auto flex gap-4 mt-6 px-4 space-x-4 snap-x snap-mandatory">
                {/* Example Cards */}
                {Array.from({length: 10}, (_, index) => (
                    <motion.div
                        key={index}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="ml-10 mr-10 flex flex-col items-center justify-center flex-shrink-0 w-[33.333%] h-[50vh] p-4 bg-white rounded-xl shadow-md snap-align-center"
                    >
                        <p className="font-medium text-gray-500">Card {index + 1}</p>
                        {index % 5 === 0 && <MapPin className="w-12 h-12 text-blue-500"/>}
                        {index % 5 === 1 && <Music className="w-12 h-12 text-green-500"/>}
                        {index % 5 === 2 && <p className="text-4xl font-bold text-gray-800">69°F</p>}
                        {index % 5 === 3 && <Car className="w-12 h-12 text-gray-500"/>}
                        {index % 5 === 4 && <Play className="w-12 h-12 text-blue-500"/>}
                    </motion.div>
                ))}
            </div>

            {/* Footer */}
            <div
                className="absolute bottom-0 w-full h-1/4 flex items-center justify-between mt-6 px-6  rounded-xl shadow-md">
                {/* Pull Over Button */}
                <motion.button
                    whileTap={{scale: 0.9}}
                    className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 rounded-full px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all md:pt-8 md:pb-8 md:pl-10 md:pr-10"
                >
                    <CornerUpLeft className="w-8 h-8"/>
                    <span className={'text-md md:text-3xl'}>Pull over</span>
                </motion.button>

                {/* Call Support Button */}
                <motion.button
                    whileTap={{scale: 0.9}}
                    className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 rounded-full px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all md:pt-8 md:pb-8 md:pl-10 md:pr-10"
                >
                    <Headphones className="w-8 h-8 "/>
                    <span className="text-md md:text-3xl">Call support</span>
                </motion.button>
            </div>
        </div>
    );
}
