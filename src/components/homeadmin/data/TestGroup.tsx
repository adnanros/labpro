import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { connect } from 'react-redux';
import { Component, useState } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import { listSampleCategorys, listTestGroups,  } from '../../../graphql/queries';
import React from 'react';
import { createTestGroup, deleteTestGroup } from '../../../graphql/mutations';


// in class component we cannot use useState functionality

interface IState {
  showDetail: boolean,
  showEdit: boolean,
  showCreate: boolean,
  showDeleteAlert: boolean,
  toBeDeletedId: string
}
class TestGroup extends Component<any,IState> {
  
    constructor(props: any){
      super(props);
      this.state = {
        showDetail: false,
        showEdit: false,
        showCreate: false,
        showDeleteAlert: false,
        toBeDeletedId: ''
      }
    }

    componentDidMount(){
      this.props.getDataList(listTestGroups);
      this.props.getDataList2(listSampleCategorys);
    }
    
    render() {
      return (
        <div>
              {(this.props.isLoadingFailed1 || this.props.isLoadingFailed2) && <CButton onClick={()=>{this.props.getDataList(listSampleCategorys)}}>Refresh</CButton>}

              ***********************************************<CButton onClick= {()=> {this.setState({showCreate: true})}} disabled={this.state.showCreate}>Create</CButton>
              <React.Fragment>
              {this.props.data && this.props.data2 &&
                this.props.data.map((item: any, index:any) => (
                  <div key={index}>
                    <div>
                    **************************** {item.name}
                    </div>
                    <div>
                      <button onClick={()=>{this.setState({showDetail: true})}} disabled={this.props.isDeletingItem}>Edit</button>
                      <button onClick={()=>{this.setState({showEdit: true})}} disabled={this.props.isDeletingItem}>Detail</button>
                      888888888888888888888888888888888888<button onClick={()=>{this.setState({toBeDeletedId: item.id, showDeleteAlert: true})}} disabled={this.props.isDeletingItem}>Delete</button>
                    </div>
                  </div>)
                )}
            </React.Fragment>
            <CModal
              className="show d-block position-static"
              backdrop={false}
              keyboard={false}
              portal={false}
              visible= {this.state.showDeleteAlert}
            >
              <CModalHeader>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>Modal body text goes here.</CModalBody>
              <CModalFooter>
                <CButton onClick={()=>{this.setState({showDeleteAlert: false})}} color="secondary">Close</CButton>
                <CButton onClick={()=>{
                  this.props.deleteItem(deleteTestGroup,this.state.toBeDeletedId,listTestGroups); this.setState({showDeleteAlert: false})} } color="primary">Ok</CButton>
              </CModalFooter>
            </CModal>

            <CModal
            className="show d-block position-static"
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showCreate}
            >
              <CreateTestGroupComponent onclick={()=> this.setState({showCreate: false})}/>
            </CModal>

        </div>
      );
    }
  };


  const mapStateToProps = (state: AppState) => {
    return {
      isDataLoading: state.package_admin.dataListState.isLoadingData,
      isLoadingFailed1: state.package_admin.dataListState.isLoadingFailed,
      isLoadingFailed2: state.package_admin.dataList2State.isLoadingFailed,
      data: state.package_admin.dataListState.data,
      data2: state.package_admin.dataList2State.data,


      isDeletingItem: state.package_admin.dataDeleteState.isDeletingItem,
      deletedId: state.package_admin.dataDeleteState.deletedId,

      isCreatingItem: state.package_admin.dataCreateState.isCreatingItem,
      isCreatedSuccessfully: state.package_admin.dataCreateState.isCreatedSuccessfully,
      // createdItemData: state.package_admin.dataCreateState.createdItemData,
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
    getDataList2: admindataActions.getDataList2,
    deleteItem: admindataActions.deleteItem,
    createItem: admindataActions.createItem,
  };

export default connect(mapStateToProps, mapDispatchToProps)(TestGroup)


interface IState2 {
    name: string;
    description: string;
  }
  
const mapStateToProps2 = (state: AppState) => {
    return {
      isCreatingItem: state.package_admin.dataCreateState.isCreatingItem,
      sampleCategoryList: state.package_admin.dataList2State.data,
    }
  };
const mapDispatchToProps2  = {
    createItem: admindataActions.createItem,
};

  const CreateTestGroupComponent: React.FC<any> = connect(mapStateToProps2,mapDispatchToProps2)((props: any) => {
    

    //console.log('rendered with props:',props);
    const  isCreatingItem: boolean  = props.isCreatingItem;
  
    const [SampleCategoryId, setSampleCategoryId] = useState('');
    
    const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
      setSampleCategoryId(event.currentTarget.value);
      console.log(`Option selected:`, event.currentTarget.value);
    }

    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required'),
      description: Yup.mixed()
        .required('DEscription is required'),
      sampleCategoryId: Yup.string().ensure().required('Sample-category-Id is required'),  
    });
    
    const onSubmit = (data: IState2) => {
      const inputData= {
        name: data.name,
        description: data.description,
        sampleCategoryId: SampleCategoryId,
      } 
      
      props.createItem(createTestGroup,inputData);
      props.onclick();
    };
    
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(validationSchema)
    });

    
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="needs-validation" onSubmit={handleSubmit(onSubmit)} >
                    <h1>Test Group</h1>
                    <p className="text-medium-emphasis">Create a new Test Group</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                      {...register('name')} type="text" placeholder="name" autoComplete="text" required />
                      <div className="invalid-feedback">{errors.name?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        {...register('description')}
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder="description"
                        autoComplete="text"
                        required
                      />
                      <div className="invalid-feedback">{errors.description?.message}</div>
                    </CInputGroup>
                    <CFormSelect aria-label="Default select example" 
                    {...register('sampleCategoryId')}
                    onChange={handleChange}
                    required
                    >
                      <option value='' selected>Choose One:</option>
                      {
                        props.sampleCategoryList.map((item: any, index:any) => (
                          <option value={item.id} key={index}>{item.name}</option>
                        ))
                      }
                    </CFormSelect>
                    <div className="invalid-feedback">{errors.sampleCategoryId?.message}</div>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type='submit' disabled={isCreatingItem}>
                          Create
                        </CButton>
                      </CCol>
                      
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      </div>
    )
  });
