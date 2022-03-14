import { CButton, CCard, CCardBody, CCardText, CCardTitle, } from "@coreui/react";
import { Link } from "react-router-dom";

interface IProps {
    name: string;
    description: string;
    imageName: string;
    sampleCategoryId: string;
}

const SampleCategoryCard = (props: IProps) => {
    
    return (
        <div>
            <CCard style={{ minHeight: '20rem'}}>
                <img alt={props.name} width={'100%'} height={'100%'} src={require('../../../Assets/images/'+props.imageName).default}/>
                <CCardBody>
                    <CCardTitle>{props.name}</CCardTitle>
                    <CCardText>
                        {props.description}
                    </CCardText>
                    <Link to={{
                        pathname: "/sampleCategoryDetails",
                        state: {id: props.sampleCategoryId }
                    }}>
                    <CButton>Details</CButton>
                    </Link>
                    
                </CCardBody>
            </CCard>
        </div>
    );
}

export default SampleCategoryCard;