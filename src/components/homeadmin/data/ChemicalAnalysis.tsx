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
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import { getChemicalAnalysis, listChemicalAnalysiss, } from '../../../graphql/queries';
import React from 'react';
import { createChemicalAnalysis, deleteChemicalAnalysis, updateChemicalAnalysis, } from '../../../graphql/mutations';


/// in class component we cannot use useState functionality

interface IState {
  showDetail: boolean,
  showEdit: boolean,
  showCreate: boolean,
  showDeleteAlert: boolean,
  toBeDeletedId: string,
  toBeDeletedName: string,
  toBeUpdatedId: string,
}
class ChemicalAnalysis extends Component<any,IState> {
  
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
      }
    }

    componentDidMount(){
      this.props.getDataList(listChemicalAnalysiss);
    }
    render() {
      return (
        <div>
          {this.props.isLoadingFailed && <CButton onClick={()=>{this.props.getDataList(listChemicalAnalysiss)}}>Refresh</CButton>}
              
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
                  {
                    this.props.data &&
                    this.props.data.map((item: any, index:any) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>
                        <div>
                          <CButton className='primary' color="link" onClick={()=>{this.setState({showDetail: true}); this.props.getItemDetail(getChemicalAnalysis,item.id);}} disabled={this.props.isLoaingItemDetail}>Detail</CButton>
                          <CButton className='primary' color="link" onClick={()=>{this.setState({toBeUpdatedId: item.id ,showEdit: true})}} disabled={this.props.isUpdatingItem}>Edit</CButton>
                          <CButton className='danger' color="link" onClick={()=>{this.setState({toBeDeletedId: item.id,toBeDeletedName:item.name, showDeleteAlert: true})}} disabled={this.props.isDeletingItem}>Delete</CButton>
                        </div>
                        </CTableDataCell>
                    </CTableRow>
                    ))
                  }
                </CTableBody>
              </CTable>
            <CModal
              
              backdrop={false}
              keyboard={false}
              portal={false}
              visible= {this.state.showDeleteAlert}
              onClose = {()=> this.setState({showDeleteAlert: false})}
            >
              <CModalHeader>
                <CModalTitle>Delete Item?</CModalTitle>
              </CModalHeader>
              <CModalBody>Are you sure you want to delete {this.state.toBeDeletedName} ?</CModalBody>
              <CModalFooter>
                <CButton onClick={()=>{this.setState({showDeleteAlert: false})}} color="secondary">Close</CButton>
                <CButton onClick={()=>{
                  this.props.deleteItem(deleteChemicalAnalysis,this.state.toBeDeletedId,listChemicalAnalysiss); this.setState({showDeleteAlert: false})} } color="primary">Ok</CButton>
              </CModalFooter>
            </CModal>

            <CModal
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showCreate}
            onClose = {()=> this.setState({showCreate: false})}
            >
              <CModalHeader>
                <CModalTitle>Create Chemical Analysis</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CreateChemicalAnalysisComponent onclick={()=> this.setState({showCreate: false})}/>
              </CModalBody>
            </CModal>

            <CModal
            backdrop={false}
            keyboard={false}
            portal={false}
            visible= {this.state.showEdit}
            onClose = {()=> this.setState({showEdit: false})}
            >
              <CModalHeader>
                <CModalTitle>Edit Chemical Analysis</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <UpdateChemicalAnalysisComponent onclick={()=> this.setState({showEdit: false})} toBeUpdatedItem={this.state.toBeUpdatedId}/>
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
                <CModalTitle>Chemical Analysis Item Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <GetChemicalAnalysisComponent onclick={()=> this.setState({showDetail: false})} fetchedItem={this.props.fetchedItem}/>
              </CModalBody>
            </CModal>

        </div>
      );
    }
  };

  const mapStateToProps = (state: AppState) => {
    const itemDetailLoaded: any= state.package_admin.dataDetailState.loadedItemDetailData;
    const itemDetailEmpty = {id: '', name: '', description: ''};
    return {
      isDataLoading: state.package_admin.dataListState.isLoadingData,
      isLoadingFailed:state.package_admin.dataListState.isLoadingFailed,
      data: state.package_admin.dataListState.data,

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
    deleteItem: admindataActions.deleteItem,
    createItem: admindataActions.createItem,
    getItemDetail: admindataActions.getItemDetail,
  };

export default connect(mapStateToProps, mapDispatchToProps)(ChemicalAnalysis);


//*************Create Component?*******************


interface IState2 {
    name: string;
    price: string;
    discount: string;
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

  const CreateChemicalAnalysisComponent: React.FC<any> = connect(mapStateToProps2,mapDispatchToProps2)((props: any) => {
    //console.log('rendered with props:',props);
    const  isCreatingItem: boolean  = props.isCreatingItem;
  
    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required'),
      price: Yup.string()
        .required('Price is required'),
      discount: Yup.string()
        .required('Discount is required'),
      description: Yup.string()
        .required('Description is required')
    });
    
    const onSubmit = (data: IState2) => {
      const inputData= {
        name: data.name,
        price: data.price,
        discount: data.discount,
        description: data.description
      } 
      props.createItem(createChemicalAnalysis,inputData);
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
      <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
        <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="needs-validation" onSubmit={handleSubmit(onSubmit)} >
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register('name')} type="text" placeholder="name" autoComplete="text" required />
                      <div className="invalid-feedback">{errors.name?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CFormInput
                        {...register('price')}
                        className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder="price"
                        autoComplete="text"
                        required
                      />
                      <div className="invalid-feedback">{errors.price?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CFormInput
                        {...register('discount')}
                        className={`form-control ${errors.discount ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder="discount"
                        autoComplete="text"
                        required
                      />
                      <div className="invalid-feedback">{errors.discount?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
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

//*************Edit Component?*******************

interface IState3 {
    id: string;
    name: string;
    price: string;
    discount: string;
    description: string;
  }
    const mapStateToProps3 = (state: AppState) => {
      return {
        isUpdatingItem: state.package_admin.dataUpdateState.isUpdatingItem,
        listData: state.package_admin.dataListState.data,
      }
    };
  const mapDispatchToProps3  = {
      updateItem: admindataActions.updateItem,
  };
  
    const UpdateChemicalAnalysisComponent: React.FC<any> = connect(mapStateToProps3,mapDispatchToProps3)((props: any) => {
      //console.log('rendered with props:',props);
      const  isUpdatingItem: boolean  = props.isUpdatingItem;
    
      const validationSchema = Yup.object().shape({
        name: Yup.string()
          .required('Name is required'),
          price: Yup.string()
          .required('Price is required'),
        discount: Yup.string()
          .required('Discount is required'),
        description: Yup.string()
          .required('DEscription is required')
      });
      
      const onSubmit = (data: IState3) => {
        console.log('toBeUpdated', props.toBeUpdatedItem);
        const inputData= {
          id: props.toBeUpdatedItem,
          name: data.name,
          price: data.price,
          discount: data.discount,
          description: data.description,
        } 
        props.updateItem(updateChemicalAnalysis,inputData);
        props.onclick();
      };
      
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<IState3>({
        resolver: yupResolver(validationSchema)
      });
    
      const toBeUpdatedItemData = props.listData.find(
        (item: any)=>(item.id===props.toBeUpdatedItem)
        );
      return (
        <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
          <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm className="needs-validation" onSubmit={handleSubmit(onSubmit)} >
                      <label htmlFor="name">Name:</label>
                      <CInputGroup className="mb-3">
                        <CFormInput 
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                          {...register('name')} 
                          type="text" 
                          placeholder="name" 
                          defaultValue= {toBeUpdatedItemData.name}
                          autoComplete="text" 
                          required />
                        <div className="invalid-feedback">{errors.name?.message}</div>
                      </CInputGroup>
                      <label htmlFor="price">Price:</label>
                      <CInputGroup className="mb-4">
                      <CFormInput
                        {...register('price')}
                        className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder='price'
                        defaultValue= {toBeUpdatedItemData.price}
                        autoComplete="text"
                        required
                      />
                      <div className="invalid-feedback">{errors.price?.message}</div>
                    </CInputGroup>
                    <label htmlFor="discount">Discount:</label>
                    <CInputGroup className="mb-4">
                      <CFormInput
                        {...register('discount')}
                        className={`form-control ${errors.discount ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder='discount'
                        defaultValue= {toBeUpdatedItemData.discount}
                        autoComplete="text"
                        required
                      />
                      <div className="invalid-feedback">{errors.discount?.message}</div>
                    </CInputGroup>
                      <label htmlFor="description">Description:</label>
                      <CInputGroup className="mb-4">
                        <CFormInput
                          {...register('description')}
                          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                          type="text"
                          placeholder="description"
                          defaultValue= {toBeUpdatedItemData.description}
                          autoComplete="text"
                          required
                        />
                        <div className="invalid-feedback">{errors.description?.message}</div>
                      </CInputGroup>
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

// interface IState4 {
//   id: string;
//   name: string;
//   description: string;
// }
const mapStateToProps4 = (state: AppState) => {
      
  return {
    isLoaingItemDetail: state.package_admin.dataDetailState.isLoaingItemDetail,
  }
};
const mapDispatchToProps4  = {
};

const GetChemicalAnalysisComponent: React.FC<any> = connect(mapStateToProps4,mapDispatchToProps4)((props: any) => {
  //console.log('rendered with props:',props);
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
                name: {props.fetchedItem.name} <hr />
                Price: {props.fetchedItem.price} <hr />
                Discount: {props.fetchedItem.discount} <hr />
                description: {props.fetchedItem.description}<hr />
                <CRow>
                  
                </CRow>
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

