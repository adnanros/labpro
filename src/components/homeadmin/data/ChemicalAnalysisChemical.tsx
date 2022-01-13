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
import { getChemicalAnalysisChemical, listChemicalAnalysisChemicals, listChemicalAnalysiss, listChemicals,  } from '../../../graphql/queries';
import React from 'react';
import { createChemicalAnalysisChemical, deleteChemicalAnalysisChemical, updateChemicalAnalysisChemical,   } from '../../../graphql/mutations';


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
class ChemicalAnalysisChemical extends Component<any,IState> {
  
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
      this.props.getDataList(listChemicalAnalysisChemicals);
      this.props.getDataList2(listChemicalAnalysiss);
      this.props.getDataList3(listChemicals);
    
            
    }


    render() {

    
      return (
        <div>
              {(this.props.isLoadingFailed1 || this.props.isLoadingFailed2) && <CButton onClick={()=>{this.props.getDataList(listChemicalAnalysisChemicals)}}>Refresh</CButton>}


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
                        <CTableDataCell>{item.chemicalAnalysis?.name}</CTableDataCell>
                        <CTableDataCell>{item.chemical?.name}</CTableDataCell>
                        <CTableDataCell>
                        <div>
                          <CButton className='primary' color="link" onClick={()=>{this.setState({showDetail: true}); this.props.getItemDetail(getChemicalAnalysisChemical,item.id);}} disabled={this.props.isLoaingItemDetail}>Detail</CButton>
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
                  this.props.deleteItem(deleteChemicalAnalysisChemical,this.state.toBeDeletedId, listChemicalAnalysisChemicals); this.setState({showDeleteAlert: false})} } color="primary">Ok</CButton>
              </CModalFooter>
            </CModal>

            <CModal
            className="show d-block position-static"
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showCreate}
            >
              <CreateChemicalAnalysisChemicalComponent onclick={()=> this.setState({showCreate: false})}/>
            </CModal>

            <CModal
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showEdit}
            onClose = {()=> this.setState({showEdit: false})}
            >
              <CModalHeader>
                <CModalTitle>Edit A ChemicalAnalysis-Chemical Relation</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <UpdateChemicalAnalysisChemicalComponent onclick={()=> this.setState({showEdit: false})} toBeUpdatedItem={this.state.toBeUpdatedId}/>
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
                <GetChemicalAnalysisChemicalComponent onclick={()=> this.setState({showDetail: false})} fetchedItem={this.props.fetchedItem}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChemicalAnalysisChemical)

//*************Create Component?*******************


interface IState2 {
    chemicalAnalysisId: string;
    chemicalId: string;
  }
  
const mapStateToProps2 = (state: AppState) => {
    return {
      isCreatingItem: state.package_admin.dataCreateState.isCreatingItem,
      listData: state.package_admin.dataListState.data,
      chemicalAnalysisList: state.package_admin.dataList2State.data,
      chemicalList: state.package_admin.dataList3State.data
    }
  };
const mapDispatchToProps2  = {
    createItem: admindataActions.createItem,
};

  const CreateChemicalAnalysisChemicalComponent: React.FC<any> = connect(mapStateToProps2,mapDispatchToProps2)((props: any) => {
    

    //console.log('rendered with props:',props);
    const  isCreatingItem: boolean  = props.isCreatingItem;
  

    
    const [chemicalAnalysisId, setChemicalAnalysisId] = useState('');
    const [chemicalId, setChemicalId] = useState('');

    console.log(chemicalAnalysisId);// For Getting rid of Warning
    console.log(chemicalId); // For Getting rid of Warning

    const handleChange1 = (event: React.FormEvent<HTMLSelectElement>) => {
        setChemicalAnalysisId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
    }

    const handleChange2 = (event: React.FormEvent<HTMLSelectElement>) => {
        setChemicalId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
      }

    const validationSchema = Yup.object().shape({
        chemicalAnalysisId: Yup.string().ensure().required('Chemical-Analysis is required'),  
        chemicalId: Yup.string().ensure().required('Chemical is required'),  
    });
    
    const onSubmit = (data: IState2) => {
      const inputData= {
        chemicalAnalysisId: data.chemicalAnalysisId,
        chemicalId: data.chemicalId,
      } 
      
      props.createItem(createChemicalAnalysisChemical,inputData);
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
                    {...register('chemicalAnalysisId')}
                    onChange={handleChange1}
                    required
                    >
                      <option value='' selected>Choose One:</option>
                      {
                        props.chemicalAnalysisList?.map((item: any, index:any) => (
                          <option value={item.id} key={index}>{item.name}</option>
                        ))
                      }
                    </CFormSelect>
                    <div className="invalid-feedback">{errors.chemicalAnalysisId?.message}</div>
                    <CFormSelect aria-label="Default select example" 
                    {...register('chemicalId')}
                    onChange={handleChange2}
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
    chemicalAnalysisId: string;
    chemicalId: string;
  }
  
const mapStateToProps3 = (state: AppState) => {
    return {
      isUpdatingItem: state.package_admin.dataUpdateState.isUpdatingItem,
      listData: state.package_admin.dataListState.data,
      chemicalAnalysisList: state.package_admin.dataList2State.data,
      chemicalList: state.package_admin.dataList3State.data
    }
  };
const mapDispatchToProps3  = {
    updateItem: admindataActions.updateItem,
};

  const UpdateChemicalAnalysisChemicalComponent: React.FC<any> = connect(mapStateToProps3,mapDispatchToProps3)((props: any) => {
    

    //console.log('rendered with props:',props);
    const  isUpdatingItem: boolean  = props.isUpdatingItem;
  
    const toBeUpdatedItemData = props.listData.find(
        (item: any)=>(item.id===props.toBeUpdatedItem)
        );
    
    const [chemicalAnalysisId, setChemicalAnalysisId] = useState(toBeUpdatedItemData.chemicalAnalysisId);
    const [chemicalId, setChemicalId] = useState(toBeUpdatedItemData.chemicalId);

    console.log('iDDDs',props.toBeUpdatedItem);
    console.log(chemicalAnalysisId);// For Getting rid of Warning
    console.log(chemicalId); // For Getting rid of Warning

    const handleChange1 = (event: React.FormEvent<HTMLSelectElement>) => {
        setChemicalAnalysisId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
    }

    const handleChange2 = (event: React.FormEvent<HTMLSelectElement>) => {
        setChemicalId(event.currentTarget.value);
        console.log(`Option selected:`, event.currentTarget.value);
      }

    const validationSchema = Yup.object().shape({
        chemicalAnalysisId: Yup.string().ensure().required('Chemical-Analysis is required'),  
        chemicalId: Yup.string().ensure().required('Chemical is required'),  
    });
    
    const onSubmit = (data: IState3) => {
      const inputData= {
        id: props.toBeUpdatedItem,
        chemicalAnalysisId: data.chemicalAnalysisId,
        chemicalId: data.chemicalId,
      } 
      
      props.updateItem(updateChemicalAnalysisChemical,inputData);
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
                    <h1>ChemicalAnalysis / Chemical</h1>
                    <p className="text-medium-emphasis">Edit a new ChemicalAnalysis / Chemical Connection</p>
                    
                    <CFormSelect aria-label="Default select example" 
                    {...register('chemicalAnalysisId')}
                    onChange={handleChange1}
                    required
                    defaultValue={chemicalAnalysisId}
                    >
                      {
                        props.chemicalAnalysisList.map((item: any, index:any) => (
                          <option value={item.id} key={index}>{item.name}</option>
                        ))
                      }
                    </CFormSelect>
                    <div className="invalid-feedback">{errors.chemicalAnalysisId?.message}</div>
                    <CFormSelect aria-label="Default select example" 
                    {...register('chemicalId')}
                    onChange={handleChange2}
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
      chemicalAnalysisList: state.package_admin.dataList2State.data,
      chemicalList: state.package_admin.dataList3State.data,
  
    }
  };
  const mapDispatchToProps4  = {
  };
  
  const GetChemicalAnalysisChemicalComponent: React.FC<any> = connect(mapStateToProps4,mapDispatchToProps4)((props: any) => {
    //console.log('rendered with props:',props);
    const  isLoadingItemDetail: boolean  = props.isLoadingItemDetail;
  
    
  
    
  
    const onClickHandler = () => {
      
      props.onclick();
    };
  
    // const testPacks: any = props.fetchedItem.testPacks?.items;
    // console.log('zzzzTestGroupsInSampleC', testPacks);
    console.log('XXXXX-FetchedItem',props.fetchedItem);
    console.log('XXXXX-FetchedItemTest',props.fetchedItem.chemicalAnalysis);
    console.log('XXXXX-FetchedItemChem',props.fetchedItem.chemical);
  
    
  
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
                  Chemical-Analysis: {props.fetchedItem.chemicalAnalysis?.name} <hr />
                  Chemical: {props.fetchedItem.chemical?.name}<hr />
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
  
  
