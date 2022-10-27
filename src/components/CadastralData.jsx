// import { useState, useEffect, React } from 'react'
import React from 'react'
import '../data/MockedData'
import { mockedData } from '../data/MockedData'

function CadastralData() {

    return (
        <div className="">
            <div className="px-4 sm:px-8 max-w-5xl m-auto">
                <h1 className="text-center font-semibold text-sm">Cadastral Data</h1>
                
                <ul className="border border-gray-200 rounded overflow-hidden shadow-md"> {mockedData.map((id, values) => 
                <>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"> <span className="font-sans">House Number :</span> <span className="text-sm font-mono">{id.num_cas}</span> </li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"><span className="font-sans"> Codigo Commarca </span> {id.codi_comarca}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">CO<sub>2</sub> Emissions <span className="font-bold">{id.emissions_de_co2}</span></li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Building Use {id.us_edifici}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Province{id.nom_provincia}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">City {id.poblacio}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Number of Square Foot {id.metres_cadastre}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Consume Qualification {id.qualificaci_de_consum_d}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Emission Qualification {id.qualificacio_d_emissions}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Address: {id.adre_a} {id.numero}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Final Energy Consumed {id.consum_d_energia_final}</li>
                    <li  key={id} class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Entry Date {id.data_entrada}</li>
                    </>
                    )}
                </ul>
                <a href="mailto:jefte_caro@yahoo.com" className="text-xs text-center text-green-700 block mt-4 hover:underline">Stunning Green</a>
            </div>
        </div>
    )
}

export default CadastralData
