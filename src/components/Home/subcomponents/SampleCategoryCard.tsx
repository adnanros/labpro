import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CContainer, CRow, } from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";

var myImg = document.getElementById('myId') as HTMLImageElement;

myImg?.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeu4wXOAa2ISH6oCkYHuJbcl6X4c1oJO1p6Q&usqp=CAU');

const SampleCategoryCard = () => {
    
    return (
        <div>
            <CCard style={{ width: '18rem' }}>
                <CCardImage id="myId" orientation="top" />
                <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
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