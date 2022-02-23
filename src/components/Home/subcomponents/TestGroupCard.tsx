import { CButton, CCard, CCardBody, CCardText, CCardTitle, CLink, } from "@coreui/react";

interface IProps {
    name: string;
    description: string;
    imageName: string;
    testGroupId: string;
    testPacks: {};
}

const TestGroupCard = (props: IProps) => {
    
    return (
        <div>
            <CCard style={{ width: '18rem' }}>
                <img width={'100%'} height={'100%'} src={require('../../../Assets/images/'+props.imageName).default}/>
                <CCardBody>
                    <CCardTitle>{props.name}</CCardTitle>
                    <CCardText>
                        {props.testPacks}
                    </CCardText>
                    <CLink >
                        <CButton href="/home/sampleCategoryDetails">Details</CButton>
                    </CLink>
                </CCardBody>
            </CCard>
        </div>
    );
}

export default TestGroupCard;