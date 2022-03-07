import React from "react";
import IndicatorImage from '../../images/arraw.png';

interface inputs {
    width: number,
    height: number,
    standard: number, 
    amount: number
}


export const ProgressbarSt: React.FC<inputs> = (props: inputs)=> {

    const multiplayer= 1.5;
    let max = Math.max(props.standard*multiplayer, props.amount);
    let w= props.width * props.amount / max;

    return (
        <div>
            <div style={{
            backgroundImage: 'url(' + IndicatorImage + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width:"10px", height: "10px",
            position: 'relative', left: w - 5
            }}></div>
            <div style={{width: props.width, height: props.height, backgroundColor: '#e1e1e1', borderRadius:2}} >
                <div style={{width: w, height: props.height, backgroundColor: props.amount <= props.standard? 'green': 'red', borderRadius:2}}>
                </div>
            </div>
        </div>
        
    );
  
}

// export default ProgressbarSt;