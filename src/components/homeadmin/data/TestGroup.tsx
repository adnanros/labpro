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
import { Component } from "react"
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
              ***********************************************<CButton onClick= {()=> {this.setState({showCreate: true})}} disabled={this.state.showCreate}>Create</CButton>
              <React.Fragment>
              {this.props.data &&
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
      data: state.package_admin.dataListState.data,

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
    }
  };
const mapDispatchToProps2  = {
    createItem: admindataActions.createItem,
};

  const CreateTestGroupComponent: React.FC<any> = connect(mapStateToProps2,mapDispatchToProps2)((props: any) => {
    

    //console.log('rendered with props:',props);
    const  isCreatingItem: boolean  = props.isCreatingItem;
  
    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required'),
      description: Yup.string()
        .required('DEscription is required')
    });
    
    const onSubmit = (data: IState2) => {
      const inputData= {
        name: data.name,
        description: data.description
      } 
      props.createItem(createTestGroup,inputData);
      props.onclick();
    };
    
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<IState2>({
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
                      <CFormInput className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register('name')} type="text" placeholder="name" autoComplete="text" required />
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
