import React from "react";
import IndicatorImage from '../../images/arraw.png';

interface inputs {
    width: number,
    standard: number, 
    amount: number
}


export const ProgressbarSt: React.FC<inputs> = (props: inputs)=> {

    const multiplayer= 1.5;
    let max = Math.max(props.standard*multiplayer, props.amount);
    let w= props.width * props.amount / max;

    return (
        <div style={{width: props.width, height: 50, backgroundColor: 'gray'}} >
        <div style={{width: w, height: 50, backgroundColor: props.amount <= props.standard? 'green': 'red'}}>
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
    );
  
}

// export default ProgressbarSt;