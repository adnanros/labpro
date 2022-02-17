import React from "react";
import {ProgressbarSt} from "./ProgressbarSt";

const ResultDetail: React.FC = () => {
    
    return(
        <div style={{width: '900px', border: '1px solid gray'}}>
            <ProgressbarSt width={200} standard={3.1} amount={2.2}/>
        </div>
    );
    
}

export default ResultDetail;