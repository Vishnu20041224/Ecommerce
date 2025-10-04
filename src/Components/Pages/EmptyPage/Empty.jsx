import React from 'react'

const Empty = ({img,text}) => {
    return (
        <div style={{ height: "100vh", width: "100vw",backgroundColor:"whitesmoke"}} className='d-flex  justify-content-center align-items-center'>
            <div>
                <div style={{height:"100px",width:"100px"}} className='d-flex align-items-center mx-auto mb-4'>
                    <img className='imgWidthAndHeight' src={img} alt={img} />
                </div>
                <div>
                    <h1 className='fw-bolder'>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default Empty