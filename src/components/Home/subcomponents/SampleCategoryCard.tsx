import { CButton, CCard, CCardBody, CCardText, CCardTitle, } from "@coreui/react";

interface IProps {
    name: string;
    description: string;
    imageName: string;
    sampleCategoryId: string;
}

const SampleCategoryCard = (props: IProps) => {
    
    return (
        <div>
            <CCard style={{ width: '18rem' }}>
                <img width={'100%'} height={'100%'} src={require('../../../Assets/images/'+props.imageName).default}/>
                <CCardBody>
                    <CCardTitle>{props.name}</CCardTitle>
                    <CCardText>
                        {props.description}
                    </CCardText>
                    <CButton href="/home/sampleCategoryDetails">Details</CButton>
                </CCardBody>
            </CCard>
        </div>
    );
}

export default SampleCategoryCard;