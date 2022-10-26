// import { useState, useEffect, React } from 'react'
import React from 'react'
import '../data/MockedData'
import { mockedData } from '../data/MockedData'

function CadastralData() {

    return (
        <div className="">
            <div className="px-4 sm:px-8 max-w-5xl m-auto">
                <h1 className="text-center font-semibold text-sm">Cadastral Data</h1>
                <p className="mt-2 text-center text-xs mb-4 text-gray-500">Same className for each list item</p>
                <ul className="border border-gray-200 rounded overflow-hidden shadow-md"> {mockedData.map((id, values) => 
                <>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">House Number {id.num_cas} </li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Codigo Commarca {id.codi_comarca}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">CO<sub>2</sub> Emissions <span className="font-bold">{id.emissions_de_co2}</span></li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Building Use {id.us_edifici}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Final Energy Consumed {id.consum_d_energia_final}</li>
                    </>)}
                </ul>
                <a href="mailto:jefte_caro@yahoo.com" className="text-xs text-center text-green-700 block mt-4 hover:underline">Stunning Green</a>
            </div>
        </div>
    )
}

export default CadastralData
