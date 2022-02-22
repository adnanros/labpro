import { CCol, CContainer, CRow, } from "@coreui/react";
import { Link } from "react-router-dom";

const AppHomeFooter = () => {
    return (
        <div>
            <CContainer fluid style={{backgroundColor:'#e3e4f6'}}>
                <CRow>
                    <CCol>
                        <Link className="d-block" to="/">
                            Home
                        </Link>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol style={{width:'100%'}}>
                        Labpro Company &reg; {new Date().getFullYear()}
                    </CCol>
                </CRow>
            </CContainer>

        </div>
    );
}

export default AppHomeFooter;