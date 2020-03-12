import React from 'react';
import Bee from "../images/heroheaderbee.png"

const heroheader = () => {
    return (
        <div style={{width: `100%`, marginTop: `-26px`}}>
            <img src={Bee} alt="Bee"></img>
        </div>
    );
};

export default heroheader;