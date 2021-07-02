import React from 'react';

function functionClick(){
    function clickHandler(){
        console.log('Button clicked')
    }
    return(
        <div>
        <button onClick={clickHandler}>Show Days Until</button>
        </div>
    )
}

export default functionClick;