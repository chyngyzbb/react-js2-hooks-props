import React from "react";

function Example({getValue}){

    let text='hello'
    return(
        <div>
            <h3 className="example">Hello Example</h3>
            <button onClick={()=>getValue('Example')}
                    style={{
                        color:'blue',
                        background:'hsl(200, 82%, 68%)',
                        padding:'10px 20px',
                        borderRadius:'8px',
                        border: 'blue solid 1px'

                    }}
                >click</button>
                {text}
                
             
        </div>
    )
}

export default Example;
