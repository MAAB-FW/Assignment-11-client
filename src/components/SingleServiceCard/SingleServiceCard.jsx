import React from "react"
import { IoPricetags } from "react-icons/io5"
import { Link } from "react-router-dom"

const SingleServiceCard = ({ card }) => {
    const { _id, imageUrl, serviceName, price, description, providerImage, providerName } = card || {}
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex gap-5 mb-2">
                    <img className="size-14 border border-accent rounded-full" src={providerImage} alt="" />
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">{providerName}</p>
                        <p className="text-gray-500">Service Provider</p>
                    </div>
                </div>
                <figure className="mb-3">
                    <img className="md:h-80 rounded object-cover w-full" src={imageUrl} />
                </figure>

                <div className="flex justify-between">
                    <h2 className="card-title text-[#010030] text-2xl">{serviceName}</h2>
                    <p className="flex items-center justify-end gap-3 text-lg text-success">
                        <IoPricetags />
                        {price}
                    </p>
                </div>
                <p className="text-gray-700">{description.slice(0, 97)}...</p>

                <div className="card-actions justify-end">
                    <Link to={`/single-services/${_id}`} className="btn bg-[#6366f1] text-white">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleServiceCard