import React from 'react';

const Button = (title, callback)=>{
    return(
        <button className="button" onclick={callback}>
            {title}
        </button>
    )
}

export default Button;