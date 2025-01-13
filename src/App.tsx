import './App.css'
import {GlimmerButton} from "./components/glimmerbtn.tsx";

function App() {
    // {/* make two side by side divs, 60/40 width of screen, in tailwind.
    // the first div should be 60% of the screen width and the second div should be 40% of the screen width. */}
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
            {/* Main Container */}
            <div className="flex w-full max-w-[2022px] h-full">
                {/* Left Section */}
                <div className="w-[60%] p-8 flex flex-col bg-gray-50 relative">
                    {/* Badge */}
                    <div className="flex items-center w-min bg-green-500 text-white font-semibold px-3 py-1 rounded-lg text-lg md:text-3xl">
                        <span className="mr-1 ">★</span> Auto
                    </div>

                    {/* Greeting Text */}
                    <div className="pt-20">
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800">Good morning,</h1>
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800">Baylee</h2>
                    </div>

                    {/* Sun and Cloud */}
                    <div className="absolute bottom-3 right-[20%] md:w-[500px] md:h-[500px] sm:w-[100px] sm:h-[100px]">
                        <div className="w-[70%] h-[50%] bg-gray-200 rounded-full absolute opacity-80"></div>
                        <div className="w-[90%] h-[60%] bg-gray-300 rounded-full absolute top-[15%] left-[10%] opacity-80"></div>
                        <div className="w-[50%] h-[50%] bg-yellow-400 rounded-full absolute top-[-20%] right-[-20%]"></div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-[40%] p-8 flex flex-col justify-between bg-white border-l border-gray-200">
                    {/* Header */}
                    <div>
                        <div className={''}>
                            <p className="text-sm font-semibold text-gray-400">W A Y M O <b
                                className={'text-gray-700 pl-2'}> O N E </b></p>

                            <div
                                className="absolute right-5 top-6 w-20 text-center bg-gray-600 text-green-500 font-semibold px-3 py-1 rounded-full ">
                                BA
                            </div>
                        </div>

                        <div className={'mt-10'}>
                            <div className="flex items-center justify-between mt-4 text-gray-400">
                                <p className="text-md font-bold">DESTINATION</p>
                                <p className="text-md font-bold">ARRIVAL</p>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <p className="text-xl font-bold">Bay Area Transit Discord</p>
                                <p className="text-xl font-bold">5:15 PM</p>
                            </div>
                        </div>


                    </div>

                    {/* Start Ride Button */}
                    <div className="">
                        {/* Start Ride Button */}
                        <GlimmerButton>
                            START RIDE
                        </GlimmerButton>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4">
                        <div className="text-gray-500">
                            Riding as a guest?{" "}
                            <a href="#" className="text-blue-500 hover:text-blue-600">
                                Check out
                            </a>{" "}
                            what you need to know
                        </div>
                        <button
                            className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all">
                            📞 Call support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default App
