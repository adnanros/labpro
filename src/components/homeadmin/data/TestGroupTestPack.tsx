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
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { connect } from 'react-redux';
import { Component, useState } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import { getTestGroup, listTestGroups, listTestGroupTestPacks, listTestPacks,  } from '../../../graphql/queries';
import React from 'react';
import { createTestGroupTestPack, deleteTestGroupTestPack,  } from '../../../graphql/mutations';
import { stat } from 'fs';


// in class component we cannot use useState functionality

interface IState {
  showDetail: boolean,
  showEdit: boolean,
  showCreate: boolean,
  showDeleteAlert: boolean,
  toBeDeletedId: string,
  toBeDeletedName: string,
  toBeUpdatedId: string,

  
}
class TestGroupTestPack extends Component<any,IState> {
  
    constructor(props: any){
      super(props);
      this.state = {
        showDetail: false,
        showEdit: false,
        showCreate: false,
        showDeleteAlert: false,
        toBeDeletedId: '',
        toBeDeletedName: '',
        toBeUpdatedId: ''
      }
    }

    componentDidMount(){
      this.props.getDataList(listTestGroupTestPacks);
      this.props.getDataList2(listTestGroups);
      this.props.getDataList3(listTestPacks);

    }
    
    render() {
      return (
        <div>
              {(this.props.isLoadingFailed1 || this.props.isLoadingFailed2) && <CButton onClick={()=>{this.props.getDataList(listTestGroupTestPacks)}}>Refresh</CButton>}


              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      <CButton onClick= {()=> {this.setState({showCreate: true})}} disabled={this.state.showCreate}>Create</CButton>
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {this.props.data && this.props.data2 && this.props.data3 &&
                    this.props.data.map((item: any, index:any) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                        <CTableDataCell>{item.testGroupId}</CTableDataCell>
                        <CTableDataCell>{item.testPackId}</CTableDataCell>
                        <CTableDataCell>
                        <div>
                          <CButton className='primary' color="link" onClick={()=>{this.setState({showDetail: true}); this.props.getItemDetail(getTestGroup,item.id);}} disabled={this.props.isLoaingItemDetail}>Detail</CButton>
                          <CButton className='primary' color="link" onClick={()=>{this.setState({toBeUpdatedId: item.id ,showEdit: true})}} disabled={this.props.isUpdatingItem}>Edit</CButton>
                          <CButton className='danger' color="link" onClick={()=>{this.setState({toBeDeletedId: item.id,toBeDeletedName:item.name, showDeleteAlert: true})}} disabled={this.props.isDeletingItem}>Delete</CButton>
                        </div>
                        </CTableDataCell>
                    </CTableRow>
                    ))
                  }
                </CTableBody>
              </CTable>
              <React.Fragment>
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
                  this.props.deleteItem(deleteTestGroupTestPack,this.state.toBeDeletedId,listTestGroupTestPacks); this.setState({showDeleteAlert: false})} } color="primary">Ok</CButton>
              </CModalFooter>
            </CModal>

            <CModal
            className="show d-block position-static"
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showCreate}
            >
              <CreateTestGroupTestPackComponent onclick={()=> this.setState({showCreate: false})}/>
            </CModal>

            <CModal
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showEdit}
            onClose = {()=> this.setState({showEdit: false})}
            >
              <CModalHeader>
                <CModalTitle>Edit Sample Category</CModalTitle>
              </CModalHeader>
              <CModalBody>
                {/* <UpdateTestGroupComponent onclick={()=> this.setState({showEdit: false})} toBeUpdatedItem={this.state.toBeUpdatedId}/> */}
              </CModalBody>
            </CModal>

            <CModal
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showDetail}
            onClose = {()=> this.setState({showDetail: false})}
            >
              <CModalHeader>
                <CModalTitle>Sample Category Item Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
                {/* <GetTestGroupComponent onclick={()=> this.setState({showDetail: false})} fetchedItem={this.props.fetchedItem}/> */}
              </CModalBody>
            </CModal>

        </div>
      );
    }
  };


  const mapStateToProps = (state: AppState) => {
    const itemDetailLoaded: any= state.package_admin.dataDetailState.loadedItemDetailData;
    const itemDetailEmpty = {id: '', name: '', description: ''}
    return {
      isDataLoading: state.package_admin.dataListState.isLoadingData,
      isLoadingFailed1: state.package_admin.dataListState.isLoadingFailed,
      isLoadingFailed2: state.package_admin.dataList2State.isLoadingFailed,
      data: state.package_admin.dataListState.data,
      data2: state.package_admin.dataList2State.data,
      data3: state.package_admin.dataList3State.data,


      isDeletingItem: state.package_admin.dataDeleteState.isDeletingItem,
      deletedId: state.package_admin.dataDeleteState.deletedId,

      isCreatingItem: state.package_admin.dataCreateState.isCreatingItem,
      isCreatedSuccessfully: state.package_admin.dataCreateState.isCreatedSuccessfully,
      // createdItemData: state.package_admin.dataCreateState.createdItemData,

      isUpdatingItem: state.package_admin.dataUpdateState.isUpdatingItem,
      isUpdatedSuccessfully: state.package_admin.dataUpdateState.isUpdatedSuccessfully,

      isLoaingItemDetail: state.package_admin.dataDetailState.isLoaingItemDetail,
      isLoadedItemDetailSuccessfully: state.package_admin.dataDetailState.isLoadedItemDetailSuccessfully,
      fetchedItem: itemDetailLoaded !== null? Object.values(state.package_admin.dataDetailState.loadedItemDetailData)[0] : itemDetailEmpty, 

    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
    getDataList2: admindataActions.getDataList2,
    getDataList3: admindataActions.getDataList3,
    deleteItem: admindataActions.deleteItem,
    createItem: admindataActions.createItem,
    getItemDetail: admindataActions.getItemDetail,
  };

export default connect(mapStateToProps, mapDispatchToProps)(TestGroupTestPack)

interface IState2 {
    testGroupId: string;
    testPackId: string;
  }
  
const mapStateToProps2 = (state: AppState) => {
    return {
      isCreatingItem: state.package_admin.dataCreateState.isCreatingItem,
      testGroupList: state.package_admin.dataList2State.data,
      testPackList: state.package_admin.dataList3State.data
    }
  };
const mapDispatchToProps2  = {
    createItem: admindataActions.createItem,
};

  const CreateTestGroupTestPackComponent: React.FC<any> = connect(mapStateToProps2,mapDispatchToProps2)((props: any) => {
    

    //console.log('rendered with props:',props);
    const  isCreatingItem: boolean  = props.isCreatingItem;
  
    const [testGroupId, setTestGroupId] = useState('');
    const [testPackId, setTestPackId] = useState('');

    
    const handleChange1 = (event: React.FormEvent<HTMLSelectElement>) => {
        setTestGroupId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
    }

    const handleChange2 = (event: React.FormEvent<HTMLSelectElement>) => {
        setTestPackId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
      }

    const validationSchema = Yup.object().shape({
        testGroupId: Yup.string().ensure().required('Test-Group-Id is required'),  
        testPackId: Yup.string().ensure().required('Test-Pack-Id is required'),  
    });
    
    const onSubmit = (data: IState2) => {
      const inputData= {
        testGroupId: data.testGroupId,
        testPackId: data.testPackId,
      } 
      
      props.createItem(createTestGroupTestPack,inputData);
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
                    <h1>Test Group / Test Pack</h1>
                    <p className="text-medium-emphasis">Create a new Test Group / Test Pack Connection</p>
                    
                    <CFormSelect aria-label="Default select example" 
                    {...register('testGroupId')}
                    onChange={handleChange1}
                    required
                    >
                      <option value='' selected>Choose One:</option>
                      {
                        props.testGroupList.map((item: any, index:any) => (
                          <option value={item.id} key={index}>{item.name}</option>
                        ))
                      }
                    </CFormSelect>
                    <div className="invalid-feedback">{errors.testGroupId?.message}</div>
                    <CFormSelect aria-label="Default select example" 
                    {...register('testPackId')}
                    onChange={handleChange2}
                    required
                    >
                      <option value='' selected>Choose One:</option>
                      {
                        props.testPackList.map((item: any, index:any) => (
                          <option value={item.id} key={index}>{item.name}</option>
                        ))
                      }
                    </CFormSelect>
                    <div className="invalid-feedback">{errors.testPackId?.message}</div>
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

