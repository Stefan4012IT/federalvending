import React from 'react'

function Subtitle({ txts }) {

    return (
        <div className="subtitle">
            {txts.map((txt, index) => (
                <React.Fragment key={index}>
                    <h5>{txt}</h5>
                    {index < txts.length - 1 && <div className="middle-point"></div>}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Subtitle