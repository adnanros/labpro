import { CCol, CContainer, CRow, } from "@coreui/react";
import React from "react";
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
                        <Link className="d-block" to="/">
                            Home
                        </Link>
                        <Link className="d-block" to="/">
                            Home
                        </Link>
                    </CCol>
                    <CCol >
                        <Link className="d-block" to="/">
                            About
                        </Link>
                        <Link className="d-block" to="/">
                            About   
                        </Link>
                        <Link className="d-block" to="/">
                            About
                        </Link>
                    </CCol>
                    <CCol >
                        <Link className="d-block" to="/">
                            About
                        </Link>
                        <Link className="d-block" to="/">
                            About   
                        </Link>
                        <Link className="d-block" to="/">
                            About
                        </Link>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        Labpro Company &reg; {new Date().getFullYear()}
                    </CCol>
                </CRow>
            </CContainer>

        </div>
    );
}

export default AppHomeFooter;