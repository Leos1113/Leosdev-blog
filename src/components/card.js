import React from 'react'

const Card = ({ title, desc, cardImage, date }) => {
    const { src } = cardImage;
    
    return(
        <div className="hover:shadow-xl my-10 border-gray-600">
            <div className="max-w-full w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden linear-gradient-leos card-img-div" title="Logo de Rust">
                    <img src={src} alt="test" />
                </div>
                
                <div className="border-r border-b border-l  lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8 bg-white">
                        <div className="text-black font-bold text-xl mb-2 bg-white">{title}</div>
                        <p className="text-grey-darker text-base bg-white">{desc}</p>
                    </div>
                    <div className="flex items-cente bg-white">
                        <div className="text-sm bg-white">
                            <p className="text-gray-500 bg-white">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card