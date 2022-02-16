import React from "react";
import IndicatorImage from '../../images/arraw.png';


const ProgressbarSt = (width: number, standard: number, amount: number)=> {

    const multiplayer= 1.5;
    let max = Math.max(standard*multiplayer, amount);
    let w= width * amount / max;

    <div style={{width: width, height: 50, backgroundColor: 'gray'}} >
        <div style={{width: w, height: 50, backgroundColor: amount <= standard? 'green': 'red'}}>
        </div>
        <div style={{
            backgroundImage: 'url(' + IndicatorImage + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width:"20px", height: "20px",
            position: 'relative', left: w - 10
        }}>

        </div>

    </div>

}

export default ProgressbarSt;