import React from 'react'
// import CadastralSearchButton from './CadastralSearchButton'

function CadastralSearch() {
  function cadastralButton() {
    console.log('Cadastral button')
  }
  return (
    <header className="bg-white rounded-lg">
      <div className="container mx-auto px-3 py-3 flex items-center">

        <div className="mr-auto md:w-48 flex-shrink-0">
          <h1 className="h-8 md:h-10 italic">Searching Buildings</h1>
        </div>

        <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
          <select className="bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
            <option>Cadastral Reference Id</option>
          </select>
          <input className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4" type="text" placeholder="I'm searching for ..." />

        </div>

        {/* <CadastralSearchButton /> */}
        <div className="ml-4 hidden sm:flex flex-col font-bold">
          <button onClick={cadastralButton} className="text-center text-white font-bold rounded py-2 px-3  bg-green-900 border-2">Submit</button>
        </div>
      </div>
      <hr />
    </header>
  )
}

export default CadastralSearch