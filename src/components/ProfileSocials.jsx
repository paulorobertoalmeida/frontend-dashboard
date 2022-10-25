import React from 'react'

export default function ProfileSocials() {
    function editInformation(){
        console.log('Edit information here');
    }
    return (
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
            <div>
                <h2 class="text-gray-800 text-xl font-semibold">Contact Information</h2>
                <a href="#"><p class="mt-2 text-gray-600 italic text-sm">email: company@example.com</p></a>
                
                <p class="mt-2 text-gray-600 italic text-sm">website: www.example.com</p>
                <p class="mt-2 text-gray-600 italic text-sm">twitter: @example</p>
                <p class="mt-2 text-gray-600 italic text-sm">Instagram: @exemple</p>
            </div>
            <div class="flex justify-end mt-4">
                <button onClick={editInformation} href="#" class="text-md font-medium text-indigo-900">Edit</button>
            </div>
        </div>
    )
}
