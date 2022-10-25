import React from 'react'

export default function CadastralSearchButton() {
  function Button({ text, bg, padding }) {
    const buttonText = 'Connect your Wallet';

    const [buttonText, setButtonText] = useState('Click');

    function handleClick() {
      setButtonText('New text');
    }
    return (
      <div>
        <button onClick={handleClick}
          className={`
                ${padding || 'px-6 py-2'} text-sm 
                rounded-lg text-white transition ${bg}`}
        >
          <span>{text}</span>
        </button>
      </div>
    );
  }
}