import { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";


import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react';
import { createOrder } from "../../../graphql/mutations";

class OrderRegisterationPage extends Component<any,any> {
    constructor(props: any) {
        super(props)
        var chemicalAnalysisIds = this.props.location.state.chemicalAnalysis.map(function(k: any){return k.chemicalAnalysisId}).join(",");
        this.state = {
            chemicalAnalysis: this.props.location.state.chemicalAnalysis,
            chemicalAnalysisIds: chemicalAnalysisIds,
            localUserId: "",
            count: "1",
            purchasedDate: new Date().toISOString().slice(0,10),
            samplingDate: new Date().toISOString().slice(0,10),
            resultDate: new Date().toISOString().slice(0,10),
            orderStatus: "",
            paymentStatus: "",
            email: this.props.auth.email,
            name: "",
            addressPart1: "",
            addressPart2: "",
            contactNumber: "+12065550142",
            profileImageLink: "",
            country: "",
            city: "",
            postalCode: "",
            company: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event: any) {
        const target = event.target;  
        console.log(target.name);
        console.log(target.value);  
        this.setState({
          [target.name]: target.value
        });
    }

    doRegister = () => {
        const inputData= {
            localUserId: this.state.email,
            count: this.state.count,
            purchasedDate: this.state.purchasedDate,
            samplingDate: this.state.samplingDate,
            resultDate: this.state.resultDate,
            orderStatus: this.state.orderStatus,
            paymentStatus: this.state.paymentStatus,
            email: this.state.email,
            name: this.state.name,
            addressPart1: this.state.addressPart1,
            addressPart2: this.state.addressPart2,
            contactNumber: this.state.contactNumber,
            profileImageLink: this.state.profileImageLink,
            country: this.state.country,
            city: this.state.city,
            postalCode: this.state.postalCode,
            company: this.state.company,
            chemicalAnalysisIds: this.state.chemicalAnalysisIds
          } 
       this.props.createItem(createOrder,inputData,"/")
    }
    
    render(){
        return (
            <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
                 {
            this.state.chemicalAnalysis.map((item: any,index: any) => (
                <CRow key={index}>
                    <CCol>
                        {item.chemicalAnalysis.name}
                    </CCol>
                </CRow>
            )
            )
            }
            <CContainer>
                <CRow className="justify-content-center">
                <CCol md={8}>
                    <CCardGroup>
                    <CCard className="p-4">
                        <CCardBody>
                        <CForm className="needs-validation">
                            <CInputGroup className="mb-3">
                            <CFormInput className={`form-control`} 
                                type="text" 
                                placeholder="count" 
                                autoComplete="text"
                                name="count"
                                value={this.state.count} 
                                onChange={this.handleInputChange}
                                required />
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                            <CFormInput className={`form-control`}
                                type="text" 
                                placeholder="email" 
                                name="email"
                                value={this.state.email} 
                                onChange={this.handleInputChange}
                                autoComplete="text" 
                                required />
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                            <CFormInput className={`form-control`} 
                                type="text" 
                                placeholder="addressPart1" 
                                name="addressPart1"
                                value={this.state.addressPart1}
                                onChange={this.handleInputChange} 
                                autoComplete="text" 
                                required />
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                            <CFormInput className={`form-control `}
                                type="text" 
                                placeholder="contactNumber" 
                                name="contactNumber"
                                value={this.state.contactNumber} 
                                onChange={this.handleInputChange}
                                autoComplete="text" 
                                required />
                            </CInputGroup>
                        </CForm>
                        </CCardBody>
                    </CCard>
                    </CCardGroup>
                </CCol>
                </CRow>
            </CContainer>
            <CButton onClick={()=> this.doRegister()} disabled={this.props.isCreating}>register </CButton>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
      auth: state.authentication,
      isCreating: state.package_admin.dataCreateState.isCreatingItem,
      isCreatedSuccessfully: state.package_admin.dataCreateState.isCreatedSuccessfully,
      data: state.package_admin.dataCreateState.createdItemData,
    }
  };
  
  const mapDispatchToProps  = {
    createItem: admindataActions.createItem,
  };

export default connect(mapStateToProps, mapDispatchToProps)(OrderRegisterationPage);
