import React from 'react'

function ProjectHeader() {
    return (
        <header className="bg-white">
            <div className="container mx-auto px-5 py-8 flex items-center">
                <div className="mr-auto md:w-48 flex-shrink-0">
                    <h1 class="font-bold h-8 md:h-10">Company Name</h1>
                    <p>
                        <h3 className="italic text-sm">NIF: 98832181821</h3>
                    </p>
                </div>

                <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-center">
                    <span className="font-bold md:text-xl">663 332 656</span>
                    <span className="font-semibold text-sm text-gray-400">Support Number</span>
                </div>

                <div className="ml-4 hidden sm:flex flex-col font-bold">
                    <span className="text-xs text-gray-400">Your Wallet</span>
                    <span>7a6ffe...</span>
                </div>
            </div>

            <hr />
        </header>
    )
}

export default ProjectHeader
