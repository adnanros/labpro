import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CContainer, CRow, } from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";
import { number } from "yup/lib/locale";
import pic from '../../../images/sampleCat1.jpg';

var myImg = document.getElementById('myImg') as HTMLImageElement;

myImg?.setAttribute('src', pic);

const SampleCategoryCard = ({index}) => {
    
    return (
        <div>
            <CCard style={{ width: '18rem' }}>
                <CCardImage id= {'myImg' + index} orientation="top" />
                <CCardBody>
                    <CCardTitle>Card title {index}</CCardTitle>
                    <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                </CCardBody>
            </CCard>
        </div>
    );
}

export default SampleCategoryCard;