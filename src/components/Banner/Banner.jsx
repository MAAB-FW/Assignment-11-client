import React from "react"
import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div className="md:-ml-[8%] md:-mr-[8%] -ml-[5%] -mr-[5%] flex flex-col md:flex-row justify-between bg-[#fefdfe]">
            <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:text-left">
                <h2 className="text-4xl font-bold w-2/3">
                    Revive Your <span className="text-[#6366f1]">Electronics</span> with Our
                    <span className="text-[#6366f1]">Expert</span> Repair Services!
                </h2>
                <p className="w-2/3 mt-5 text-gray-500">
                    Trust our experienced technicians to restore your devices to full functionality. Serving both residential and
                    commercial clients, we offer fast turnaround times and competitive rates.
                </p>
                <div className="flex items-start w-2/3 mt-5">
                    <Link to="/all-services" className="btn btn-info text-white">
                        All Services <FiArrowUpRight className="text-xl" />
                    </Link>
                </div>
            </div>
            <img
                className="md:w-1/2 h-[500px]"
                src="https://cdn.dribbble.com/users/3737023/screenshots/19571641/media/6743a6a0dd318b67d732d6a23cb7ad78.gif"
                alt=""
            />
        </div>
    )
}

export default Banner
