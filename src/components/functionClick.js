import React from 'react';

function ClickHandler(){
    return(
    console.log('Button clicked')
)};

function FunctionClick(){
    return(
        <div>
        <button onClick={ClickHandler}>Show Days Until</button>
        </div>
    )
};

export default FunctionClick;