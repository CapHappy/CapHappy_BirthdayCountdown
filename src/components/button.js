import React from 'react';

const Button = (title, callback)=>{
    return(
        <button key={6} className="button" onclick={callback}>
            {title}
        </button>
    )
}

export default Button;