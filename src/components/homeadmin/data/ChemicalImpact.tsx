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
  CFormSelect,
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
import { connect } from 'react-redux';
import { Component, useState } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import { getChemicalImpact, listChemicalImpacts, listChemicals, listImpacts,  } from '../../../graphql/queries';
import React from 'react';
import { createChemicalImpact, deleteChemicalImpact, updateChemicalImpact,   } from '../../../graphql/mutations';


// in class component we cannot use useState functionality

interface IState {
  showDetail: boolean,
  showEdit: boolean,
  showCreate: boolean,
  showDeleteAlert: boolean,
  toBeDeletedId: string,
  toBeDeletedName: string,
  toBeUpdatedId: string,
  itemNameList: any,
  
}
class ChemicalImpact extends Component<any,IState> {
  
    constructor(props: any){
      super(props);
      this.state = {
        showDetail: false,
        showEdit: false,
        showCreate: false,
        showDeleteAlert: false,
        toBeDeletedId: '',
        toBeDeletedName: '',
        toBeUpdatedId: '',
        itemNameList: null,
      }
    }

    componentDidMount(){
      this.props.getDataList(listChemicalImpacts);
      this.props.getDataList2(listChemicals);
      this.props.getDataList3(listImpacts);
    
            
    }


    render() {

    
      return (
        <div>
              {(this.props.isLoadingFailed1 || this.props.isLoadingFailed2) && <CButton onClick={()=>{this.props.getDataList(listChemicalImpacts)}}>Refresh</CButton>}


              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Chemical-Analysis</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Chemical</CTableHeaderCell>
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
                        <CTableDataCell>{item.chemical?.name}</CTableDataCell>
                        <CTableDataCell>{item.impact?.name}</CTableDataCell>
                        <CTableDataCell>
                        <div>
                          <CButton className='primary' color="link" onClick={()=>{this.setState({showDetail: true}); this.props.getItemDetail(getChemicalImpact,item.id);}} disabled={this.props.isLoaingItemDetail}>Detail</CButton>
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
                <CModalTitle>Delete</CModalTitle>
              </CModalHeader>
              <CModalBody>Delete selected Chemical-Impact connection</CModalBody>
              <CModalFooter>
                <CButton onClick={()=>{this.setState({showDeleteAlert: false})}} color="secondary">Close</CButton>
                <CButton onClick={()=>{
                  this.props.deleteItem(deleteChemicalImpact,this.state.toBeDeletedId, listChemicalImpacts); this.setState({showDeleteAlert: false})} } color="primary">Ok</CButton>
              </CModalFooter>
            </CModal>

            <CModal
            className="show d-block position-static"
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showCreate}
            >
              <CreateChemicalImpactComponent onclick={()=> this.setState({showCreate: false})}/>
            </CModal>

            <CModal
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showEdit}
            onClose = {()=> this.setState({showEdit: false})}
            >
              <CModalHeader>
                <CModalTitle>Edit A Chemical-Impact Relation</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <UpdateChemicalImpactComponent onclick={()=> this.setState({showEdit: false})} toBeUpdatedItem={this.state.toBeUpdatedId}/>
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
                <CModalTitle>ChemicalAnalysis-Chemical Relation Item Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <GetChemicalImpactComponent onclick={()=> this.setState({showDetail: false})} fetchedItem={this.props.fetchedItem}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChemicalImpact)

//*************Create Component?*******************


interface IState2 {
    chemicalId: string;
    impactId: string;
  }
  
const mapStateToProps2 = (state: AppState) => {
    return {
      isCreatingItem: state.package_admin.dataCreateState.isCreatingItem,
      listData: state.package_admin.dataListState.data,
      chemicalList: state.package_admin.dataList2State.data,
      impactList: state.package_admin.dataList3State.data
    }
  };
const mapDispatchToProps2  = {
    createItem: admindataActions.createItem,
};

  const CreateChemicalImpactComponent: React.FC<any> = connect(mapStateToProps2,mapDispatchToProps2)((props: any) => {
    

    //console.log('rendered with props:',props);
    const  isCreatingItem: boolean  = props.isCreatingItem;
  

    
    const [chemicalId, setChemicalId] = useState('');
    const [impactId, setImpactId] = useState('');

    console.log(chemicalId);// For Getting rid of Warning
    console.log(impactId); // For Getting rid of Warning

    const handleChange1 = (event: React.FormEvent<HTMLSelectElement>) => {
        setChemicalId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
    }

    const handleChange2 = (event: React.FormEvent<HTMLSelectElement>) => {
        setImpactId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
      }

    const validationSchema = Yup.object().shape({
        chemicalId: Yup.string().ensure().required('Chemical is required'),  
        impactId: Yup.string().ensure().required('Impact is required'),  
    });
    
    const onSubmit = (data: IState2) => {
      const inputData= {
        chemicalId: data.chemicalId,
        impactId: data.impactId,
      } 
      
      props.createItem(createChemicalImpact,inputData);
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
                    <h1>ChemicalAnalysis / Chemical</h1>
                    <p className="text-medium-emphasis">Create a new ChemicalAnalysis / Chemical Relation</p>
                    
                    <CFormSelect aria-label="Default select example" 
                    {...register('chemicalId')}
                    onChange={handleChange1}
                    required
                    >
                      <option value='' selected>Choose One:</option>
                      {
                        props.chemicalList?.map((item: any, index:any) => (
                          <option value={item.id} key={index}>{item.name}</option>
                        ))
                      }
                    </CFormSelect>
                    <div className="invalid-feedback">{errors.chemicalId?.message}</div>
                    <CFormSelect aria-label="Default select example" 
                    {...register('impactId')}
                    onChange={handleChange2}
                    required
                    >
                      <option value='' selected>Choose One:</option>
                      {
                        props.impactList?.map((item: any, index:any) => (
                          <option value={item.id} key={index}>{item.name}</option>
                        ))
                      }
                    </CFormSelect>
                    <div className="invalid-feedback">{errors.impactId?.message}</div>
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

/*****************Edit Componnenet */

interface IState3 {
    id: string,
    chemicalId: string;
    impactId: string;
  }
  
const mapStateToProps3 = (state: AppState) => {
    return {
      isUpdatingItem: state.package_admin.dataUpdateState.isUpdatingItem,
      listData: state.package_admin.dataListState.data,
      chemicalList: state.package_admin.dataList2State.data,
      impactList: state.package_admin.dataList3State.data
    }
  };
const mapDispatchToProps3  = {
    updateItem: admindataActions.updateItem,
};

  const UpdateChemicalImpactComponent: React.FC<any> = connect(mapStateToProps3,mapDispatchToProps3)((props: any) => {
    

    //console.log('rendered with props:',props);
    const  isUpdatingItem: boolean  = props.isUpdatingItem;
  
    const toBeUpdatedItemData = props.listData.find(
        (item: any)=>(item.id===props.toBeUpdatedItem)
        );
    
    const [chemicalId, setChemicalId] = useState(toBeUpdatedItemData.chemicalId);
    const [impactId, setImpactId] = useState(toBeUpdatedItemData.impactId);

    console.log('iDDDs',props.toBeUpdatedItem);
    console.log(chemicalId);// For Getting rid of Warning
    console.log(impactId); // For Getting rid of Warning

    const handleChange1 = (event: React.FormEvent<HTMLSelectElement>) => {
        setChemicalId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
    }

    const handleChange2 = (event: React.FormEvent<HTMLSelectElement>) => {
        setImpactId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
      }

    const validationSchema = Yup.object().shape({
        chemicalId: Yup.string().ensure().required('Chemical is required'),  
        impactId: Yup.string().ensure().required('Impact is required'),  
    });
    
    const onSubmit = (data: IState3) => {
      const inputData= {
        id: props.toBeUpdatedItem,
        chemicalId: data.chemicalId,
        impactId: data.impactId,
      } 
      
      props.updateItem(updateChemicalImpact,inputData);
      props.onclick();
    };
    
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<IState3>({
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
                    <h1>Chemical / Impact</h1>
                    <p className="text-medium-emphasis">Edit a Chemical / Impact Connection</p>
                    
                    <CFormSelect aria-label="Default select example" 
                    {...register('chemicalId')}
                    onChange={handleChange1}
                    required
                    defaultValue={chemicalId}
                    >
                      {
                        props.chemicalList.map((item: any, index:any) => (
                          <option value={item.id} key={index}>{item.name}</option>
                        ))
                      }
                    </CFormSelect>
                    <div className="invalid-feedback">{errors.chemicalId?.message}</div>
                    <CFormSelect aria-label="Default select example" 
                    {...register('impactId')}
                    onChange={handleChange2}
                    required
                    defaultValue={impactId}
                    >
                      {
                        props.impactList.map((item: any, index:any) => (
                          <option value={item.id} key={index}>{item.name}</option>
                        ))
                      }
                    </CFormSelect>
                    <div className="invalid-feedback">{errors.impactId?.message}</div>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type='submit' disabled={isUpdatingItem}>
                          Save
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


// ******************ItemDetail*****************************


const mapStateToProps4 = (state: AppState) => {
      
    return {
    
    }
  };
  const mapDispatchToProps4  = {
  };
  
  const GetChemicalImpactComponent: React.FC<any> = connect(mapStateToProps4,mapDispatchToProps4)((props: any) => {

    const  isLoadingItemDetail: boolean  = props.isLoadingItemDetail;
  
 
  
    const onClickHandler = () => {
      props.onclick();
    };
  
    
  
    return (
      <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
        <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CRow>
                  <h3>Item Details:</h3><hr />
                  </CRow>
                  Chemical: {props.fetchedItem.chemical?.name} <hr />
                  Impact: {props.fetchedItem.impact?.name}<hr />
                  <hr />
              
                  <CRow>
                    <CCol xs={6}>
                      <CButton color="primary" className="px-4" onClick={onClickHandler} disabled={isLoadingItemDetail}>
                        Back
                      </CButton>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      </div>
    )
  });
  
  
