import React from 'react';

const changeDate = (title, callback)=>{
    return(
        <button key={2} className="change-date" onclick={callback}>
            <i className="far fa-calendar-alt"></i>
            {title}
        </button>
    )
}

export default changeDate;