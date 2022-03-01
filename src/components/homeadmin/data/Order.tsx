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
import { getOrder, listOrders,   } from '../../../graphql/queries';
import React from 'react';
import { createOrder,  deleteOrder, updateOrder,  } from '../../../graphql/mutations';
import OrderResult from './OrderResult';


/// in class component we cannot use useState functionality

interface IState {
  showDetail: boolean,
  showEdit: boolean,
  showCreate: boolean,
  showResults: boolean,
  showDeleteAlert: boolean,
  toBeDeletedId: string,
  toBeDeletedName: string,
  toBeUpdatedId: string,

  orderId: string,
  chemicalAnalysisIds: string,
  chemicalAnalysisOrders: [{}]
}
class Order extends Component<any,IState> {
  
    constructor(props: any){
      super(props);
      this.state = {
        showDetail: false,
        showEdit: false,
        showCreate: false,
        showDeleteAlert: false,
        showResults: false,
        toBeDeletedId: '',
        toBeDeletedName: '',
        toBeUpdatedId: '',
        orderId:'',
        chemicalAnalysisIds:'',
        chemicalAnalysisOrders: [{}]
      }
    }

    componentDidMount(){
      this.props.getDataList(listOrders);
    }
    render() {
      return (
        <div>
          {this.props.isLoadingFailed && <CButton onClick={()=>{this.props.getDataList(listOrders)}}>Refresh</CButton>}
              
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
                          <CButton className='primary' color="link" onClick={()=>{this.setState({showDetail: true}); this.props.getItemDetail(getOrder,item.id);}} disabled={this.props.isLoaingItemDetail}>Detail</CButton>
                          <CButton className='primary' color="link" onClick={()=>{this.setState({toBeUpdatedId: item.id ,showEdit: true})}} disabled={this.props.isUpdatingItem}>Edit</CButton>
                          <CButton className='danger' color="link" onClick={()=>{this.setState({toBeDeletedId: item.id,toBeDeletedName:item.name, showDeleteAlert: true})}} disabled={this.props.isDeletingItem}>Delete</CButton>
                          <CButton className='danger' color="link" onClick={()=>{this.setState({showResults: true,orderId: item.id,chemicalAnalysisIds: item.chemicalAnalysisIds,chemicalAnalysisOrders: item.chemicalAnalysisOrder.items})}} disabled={this.props.isDeletingItem}>Results</CButton>
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
                  this.props.deleteItem(deleteOrder,this.state.toBeDeletedId,listOrders); this.setState({showDeleteAlert: false})} } color="primary">Ok</CButton>
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
                <CModalTitle>Create An Order</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CreateOrderComponent onclick={()=> this.setState({showCreate: false})}/>
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
                <CModalTitle>Edit An Order</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <UpdateOrderComponent onclick={()=> this.setState({showEdit: false})} toBeUpdatedItem={this.state.toBeUpdatedId}/>
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
                <CModalTitle>Order Item Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <GetOrderComponent onclick={()=> this.setState({showDetail: false})} fetchedItem={this.props.fetchedItem}/>
              </CModalBody>
            </CModal>

            <CModal
             backdrop={false}
             keyboard={false}
             portal={false}
             visible= {this.state.showResults}
             onClose = {()=> this.setState({showDetail: false})}
             >
              <CModalHeader>
                  <CModalTitle>Order results</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <OrderResult chemicalAnalysisIds= {this.state.chemicalAnalysisIds} chemicalAnalysisOrders= {this.state.chemicalAnalysisOrders} orderId= {this.state.orderId}/>
                  {/* <GetOrderComponent onclick={()=> this.setState({showDetail: false})} fetchedItem={this.props.fetchedItem}/> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Order)

//*************Create Component?*******************


interface IState2 {
    localUserId: string;
    count: number;
    purchasedDate: Date;
    samplingDate: Date;
    resultDate: Date;
    orderStatus: string;
    paymentStatus: string;
    email: string;
    name: string;
    addressPart1: string;
    addressPart2: string;
    contactNumber: string;
    profileImageLink: string;
    country: string;
    city: string;
    postalCode: string;
    company: string;
  }
  
const mapStateToProps2 = (state: AppState) => {
    return {
      isCreatingItem: state.package_admin.dataCreateState.isCreatingItem,
    }
  };
const mapDispatchToProps2  = {
    createItem: admindataActions.createItem,
};

  const CreateOrderComponent: React.FC<any> = connect(mapStateToProps2,mapDispatchToProps2)((props: any) => {
    //console.log('rendered with props:',props);
    const  isCreatingItem: boolean  = props.isCreatingItem;
  
    const validationSchema = Yup.object().shape({
        localUserId: Yup.string()
        .required('localUserId is required'),
        count: Yup.number()
        .required('Count is required'),
        purchasedDate: Yup.string()
        .required('purchasedDate is required'),
        samplingDate: Yup.string()
        .required('samplingDate is required'),
        resultDate: Yup.string()
        .required('resultDate is required'),
        orderStatus: Yup.string()
        .required('orderStatus is required'),
        paymentStatus: Yup.string()
        .required('paymentStatus is required'),
        email: Yup.string()
        .required('email is required'),
        name: Yup.string()
        .required('Name is required'),
        addressPart1: Yup.string()
        .required('addressPart1 is required'),
        addressPart2: Yup.string()
        .required('addressPart2 is required'),
        contactNumber: Yup.string()
        .required('contactNumber is required'),
        profileImageLink: Yup.string()
        .required('profileImageLink is required'),
        country: Yup.string()
        .required('country is required'),
        city: Yup.string()
        .required('city is required'),
        postalCode: Yup.string()
        .required('postalCode is required'),
        company: Yup.string()
        .required('company is required'),  

      
    });
    
    const onSubmit = (data: IState2) => {
      const inputData= {
        localUserId: data.localUserId,
        count: data.count,
        purchasedDate: data.purchasedDate,
        samplingDate: data.samplingDate,
        resultDate: data.resultDate,
        orderStatus: data.orderStatus,
        paymentStatus: data.paymentStatus,
        email: data.email,
        name: data.name,
        addressPart1: data.addressPart1,
        addressPart2: data.addressPart2,
        contactNumber: data.contactNumber,
        profileImageLink: data.profileImageLink,
        country: data.country,
        city: data.city,
        postalCode: data.postalCode,
        company: data.company
      } 
      props.createItem(createOrder,inputData);
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
                      <CFormInput className={`form-control ${errors.localUserId ? 'is-invalid' : ''}`} 
                        {...register('localUserId')}
                        type="text" 
                        placeholder="localUserId" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.localUserId?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.count ? 'is-invalid' : ''}`} 
                        {...register('count')}
                        type="text" 
                        placeholder="count" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.count?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.purchasedDate ? 'is-invalid' : ''}`} 
                        {...register('purchasedDate')}
                        type="text" 
                        placeholder="purchasedDate" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.purchasedDate?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.samplingDate ? 'is-invalid' : ''}`} 
                        {...register('samplingDate')}
                        type="text" 
                        placeholder="samplingDate" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.samplingDate?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.resultDate ? 'is-invalid' : ''}`} 
                        {...register('resultDate')}
                        type="text" 
                        placeholder="resultDate" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.resultDate?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.orderStatus ? 'is-invalid' : ''}`} 
                        {...register('orderStatus')}
                        type="text" 
                        placeholder="orderStatus" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.orderStatus?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.paymentStatus ? 'is-invalid' : ''}`} 
                        {...register('paymentStatus')}
                        type="text" 
                        placeholder="paymentStatus" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.paymentStatus?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                        {...register('email')}
                        type="text" 
                        placeholder="email" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                        {...register('name')}
                        type="text" 
                        placeholder="name" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.name?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.addressPart1 ? 'is-invalid' : ''}`} 
                        {...register('addressPart1')}
                        type="text" 
                        placeholder="addressPart1" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.addressPart1?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.addressPart2 ? 'is-invalid' : ''}`} 
                        {...register('addressPart2')}
                        type="text" 
                        placeholder="addressPart2" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.addressPart2?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`} 
                        {...register('contactNumber')}
                        type="text" 
                        placeholder="contactNumber" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.contactNumber?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.profileImageLink ? 'is-invalid' : ''}`} 
                        {...register('profileImageLink')}
                        type="text" 
                        placeholder="profileImageLink" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.profileImageLink?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.country ? 'is-invalid' : ''}`} 
                        {...register('country')}
                        type="text" 
                        placeholder="country" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.country?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.city ? 'is-invalid' : ''}`} 
                        {...register('city')}
                        type="text" 
                        placeholder="city" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.city?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`} 
                        {...register('postalCode')}
                        type="text" 
                        placeholder="postalCode" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.postalCode?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.company ? 'is-invalid' : ''}`} 
                        {...register('company')}
                        type="text" 
                        placeholder="company" 
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.company?.message}</div>
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
  localUserId: string;
  count: number;
  purchasedDate: Date;
  samplingDate: Date;
  resultDate: Date;
  orderStatus: string;
  paymentStatus: string;
  email: string;
  name: string;
  addressPart1: string;
  addressPart2: string;
  contactNumber: string;
  profileImageLink: string;
  country: string;
  city: string;
  postalCode: string;
  company: string;
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

  const UpdateOrderComponent: React.FC<any> = connect(mapStateToProps3,mapDispatchToProps3)((props: any) => {
    //console.log('rendered with props:',props);
    const  isUpdatingItem: boolean  = props.isUpdatingItem;
  
    const validationSchema = Yup.object().shape({
      localUserId: Yup.string()
      .required('localUserId is required'),
      count: Yup.number()
      .required('Count is required'),
      purchasedDate: Yup.string()
      .required('purchasedDate is required'),
      samplingDate: Yup.string()
      .required('samplingDate is required'),
      resultDate: Yup.string()
      .required('resultDate is required'),
      orderStatus: Yup.string()
      .required('orderStatus is required'),
      paymentStatus: Yup.string()
      .required('paymentStatus is required'),
      email: Yup.string()
      .required('email is required'),
      name: Yup.string()
      .required('Name is required'),
      addressPart1: Yup.string()
      .required('addressPart1 is required'),
      addressPart2: Yup.string()
      .required('addressPart2 is required'),
      contactNumber: Yup.string()
      .required('contactNumber is required'),
      profileImageLink: Yup.string()
      .required('profileImageLink is required'),
      country: Yup.string()
      .required('country is required'),
      city: Yup.string()
      .required('city is required'),
      postalCode: Yup.string()
      .required('postalCode is required'),
      company: Yup.string()
      .required('company is required'),  

  });
  
    
    const onSubmit = (data: IState3) => {
      console.log('toBeUpdated', props.toBeUpdatedItem);
      const inputData= {
        id: props.toBeUpdatedItem,
        localUserId: data.localUserId,
        count: data.count,
        purchasedDate: data.purchasedDate,
        samplingDate: data.samplingDate,
        resultDate: data.resultDate,
        orderStatus: data.orderStatus,
        paymentStatus: data.paymentStatus,
        email: data.email,
        name: data.name,
        addressPart1: data.addressPart1,
        addressPart2: data.addressPart2,
        contactNumber: data.contactNumber,
        profileImageLink: data.profileImageLink,
        country: data.country,
        city: data.city,
        postalCode: data.postalCode,
        company: data.company
      } 
      props.updateItem(updateOrder,inputData);
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
                    
                    <label htmlFor="localUserId">localUserId:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.localUserId ? 'is-invalid' : ''}`} 
                        {...register('localUserId')}
                        type="text" 
                        placeholder="localUserId" 
                        defaultValue= {toBeUpdatedItemData.localUserId}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.localUserId?.message}</div>
                    </CInputGroup>
                    <label htmlFor="count">count:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.count ? 'is-invalid' : ''}`} 
                        {...register('count')}
                        type="text" 
                        placeholder="count" 
                        defaultValue= {toBeUpdatedItemData.count}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.count?.message}</div>
                    </CInputGroup>
                    <label htmlFor="purchasedDate">purchasedDate:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.purchasedDate ? 'is-invalid' : ''}`} 
                        {...register('purchasedDate')}
                        type="text" 
                        placeholder="purchasedDate" 
                        defaultValue= {toBeUpdatedItemData.purchasedDate}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.purchasedDate?.message}</div>
                    </CInputGroup>
                    <label htmlFor="samplingDate">samplingDate:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.samplingDate ? 'is-invalid' : ''}`} 
                        {...register('samplingDate')}
                        type="text" 
                        placeholder="samplingDate" 
                        defaultValue= {toBeUpdatedItemData.samplingDate}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.samplingDate?.message}</div>
                    </CInputGroup>
                    <label htmlFor="resultDate">resultDate:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.resultDate ? 'is-invalid' : ''}`} 
                        {...register('resultDate')}
                        type="text" 
                        placeholder="resultDate" 
                        defaultValue= {toBeUpdatedItemData.resultDate}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.resultDate?.message}</div>
                    </CInputGroup>
                    <label htmlFor="orderStatus">orderStatus:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.orderStatus ? 'is-invalid' : ''}`} 
                        {...register('orderStatus')}
                        type="text" 
                        placeholder="orderStatus" 
                        defaultValue= {toBeUpdatedItemData.orderStatus}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.orderStatus?.message}</div>
                    </CInputGroup>
                    <label htmlFor="paymentStatus">paymentStatus:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.paymentStatus ? 'is-invalid' : ''}`} 
                        {...register('paymentStatus')}
                        type="text" 
                        placeholder="paymentStatus" 
                        defaultValue= {toBeUpdatedItemData.paymentStatus}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.paymentStatus?.message}</div>
                    </CInputGroup>
                    <label htmlFor="email">email:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                        {...register('email')}
                        type="text" 
                        placeholder="email" 
                        defaultValue= {toBeUpdatedItemData.email}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </CInputGroup>
                    <label htmlFor="name">name:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                        {...register('name')}
                        type="text" 
                        placeholder="name" 
                        defaultValue= {toBeUpdatedItemData.name}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.name?.message}</div>
                    </CInputGroup>
                    <label htmlFor="addressPart1">addressPart1:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.addressPart1 ? 'is-invalid' : ''}`} 
                        {...register('addressPart1')}
                        type="text" 
                        placeholder="addressPart1" 
                        defaultValue= {toBeUpdatedItemData.addressPart1}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.addressPart1?.message}</div>
                    </CInputGroup>
                    <label htmlFor="addressPart2">addressPart2:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.addressPart2 ? 'is-invalid' : ''}`} 
                        {...register('addressPart2')}
                        type="text" 
                        placeholder="addressPart2" 
                        defaultValue= {toBeUpdatedItemData.addressPart2}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.addressPart2?.message}</div>
                    </CInputGroup>
                    <label htmlFor="contactNumber">contactNumber:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`} 
                        {...register('contactNumber')}
                        type="text" 
                        placeholder="contactNumber" 
                        defaultValue= {toBeUpdatedItemData.contactNumber}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.contactNumber?.message}</div>
                    </CInputGroup>
                    <label htmlFor="profileImageLink">profileImageLink:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.profileImageLink ? 'is-invalid' : ''}`} 
                        {...register('profileImageLink')}
                        type="text" 
                        placeholder="profileImageLink" 
                        defaultValue= {toBeUpdatedItemData.profileImageLink}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.profileImageLink?.message}</div>
                    </CInputGroup>
                    <label htmlFor="country">country:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.country ? 'is-invalid' : ''}`} 
                        {...register('country')}
                        type="text" 
                        placeholder="country" 
                        defaultValue= {toBeUpdatedItemData.country}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.country?.message}</div>
                    </CInputGroup>
                    <label htmlFor="city">city:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.city ? 'is-invalid' : ''}`} 
                        {...register('city')}
                        type="text" 
                        placeholder="city" 
                        defaultValue= {toBeUpdatedItemData.city}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.city?.message}</div>
                    </CInputGroup>
                    <label htmlFor="postalCode">postalCode:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`} 
                        {...register('postalCode')}
                        type="text" 
                        placeholder="postalCode" 
                        defaultValue= {toBeUpdatedItemData.postalCode}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.postalCode?.message}</div>
                    </CInputGroup>
                    <label htmlFor="company">company:</label>
                    <CInputGroup className="mb-3">
                      <CFormInput className={`form-control ${errors.company ? 'is-invalid' : ''}`} 
                        {...register('company')}
                        type="text" 
                        placeholder="company" 
                        defaultValue= {toBeUpdatedItemData.company}
                        autoComplete="text" 
                        required />
                      <div className="invalid-feedback">{errors.company?.message}</div>
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

const mapStateToProps4 = (state: AppState) => {
      
  return {
    isLoaingItemDetail: state.package_admin.dataDetailState.isLoaingItemDetail,
  }
};
const mapDispatchToProps4  = {
};

const GetOrderComponent: React.FC<any> = connect(mapStateToProps4,mapDispatchToProps4)((props: any) => {
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
                localUserId: {props.fetchedItem.localUserId} <hr />
                count: {props.fetchedItem.count} <hr />
                purchasedDate: {props.fetchedItem.purchasedDate} <hr />
                samplingDate: {props.fetchedItem.samplingDate} <hr />
                resultDate: {props.fetchedItem.resultDate} <hr />
                orderStatus: {props.fetchedItem.orderStatus} <hr />
                paymentStatus: {props.fetchedItem.paymentStatus} <hr />
                email: {props.fetchedItem.email} <hr />
                name: {props.fetchedItem.name} <hr />
                addressPart1: {props.fetchedItem.addressPart1} <hr />
                addressPart2: {props.fetchedItem.addressPart2} <hr />
                contactNumber: {props.fetchedItem.contactNumber} <hr />
                profileImageLink: {props.fetchedItem.profileImageLink} <hr />
                country: {props.fetchedItem.country} <hr />
                city: {props.fetchedItem.city} <hr />
                postalCode: {props.fetchedItem.postalCode} <hr />
                company: {props.fetchedItem.company} <hr />
                

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



