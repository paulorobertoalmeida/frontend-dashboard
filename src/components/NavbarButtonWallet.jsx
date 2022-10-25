import React from 'react'
import { useState } from 'react';

export default function NavbarButtonWallet() {
    const [buttonText, setButtonText] = useState('Launch App');

    function handleClick() {
        setButtonText('Wallet Connected');
    }

    return (
        <div>
            <button onClick={handleClick} className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">{buttonText}</button>
            {/* <button onClick={ }
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
                Submit
            </button> */}
        </div>
    );
};
