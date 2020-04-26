import React from 'react'
// TODO : mirar como llamar a un asset local en backgraudn image url
const Card = ({ title, desc, imagename }) => {

    return(
        <div className="hover:shadow-xl my-10 border-gray-600">
            <div className="max-w-full w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden linear-gradient-leos" title="Woman holding a mug">
            </div>
            <div className="border-r border-b border-l  lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-black font-bold text-xl mb-2">{title}</div>
                        <p className="text-grey-darker text-base">{desc}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p className="text-gray-500">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Card