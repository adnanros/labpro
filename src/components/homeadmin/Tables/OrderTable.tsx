import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import { listOrders,  } from '../../../graphql/queries';
import AdminMainComponent, { DataLoadCallBack } from '../Base/AdminMainComponent';
import { CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { createOrder } from '../../../graphql/mutations';
import React from 'react';
import OrderResult from './OrderResult';

interface OrderModel {
    localUserId: string;
    count: string;
    purchasedDate: string;
    samplingDate: string;
    resultDate: string;
    orderStatus: string;
    paymentStatus: string;
    email: string;
    name: string;
    addressPart1: string;
    addressPart2: string;
    contactNumber: string;
    profileImageLink: string;
    country: string;
    city:string;
    postalCode: string;
    company:string;
}
const queryIdentifier = "Order"
class OrderTable extends Component<any ,OrderModel> {
  
    constructor(props: any){
      super(props);
      this.state = {
        localUserId: '',
        count: '',
        purchasedDate: '',
        samplingDate: '',
        resultDate: '',
        orderStatus: '',
        paymentStatus: '',
        email: '',
        name: '',
        addressPart1: '',
        addressPart2: '',
        contactNumber: '',
        profileImageLink: '',
        country: '',
        city:'',
        postalCode: '',
        company:'',
      }

      this.loadData = this.loadData.bind(this);
      this.createTableHeader = this.createTableHeader.bind(this);
      this.createRow = this.createRow.bind(this);
      this.showCreateNewItem = this.showCreateNewItem.bind(this);
      this.doCreateNewItem = this.doCreateNewItem.bind(this);
      this.modelItemChangeListener = this.modelItemChangeListener.bind(this);
      this.showUpdateItem = this.showUpdateItem.bind(this);
      this.doUpdateItem = this.doUpdateItem.bind(this);
      this.doDeleteItem = this.doDeleteItem.bind(this);
      this.showViewItem = this.showViewItem.bind(this);
    }

    loadData(callBack?: DataLoadCallBack) {
        this.props.getDataList(queryIdentifier,listOrders,null,true,(success: Boolean)=> {
            if(success) {
                var data = this.props.data[0].items
                if (callBack !== undefined) {
                    callBack(data);
                }
            }else {
                if (callBack !== undefined) {
                    callBack(undefined);
                }
            }
        });
    }

    createTableHeader(){
        return(
        <CTableHead>
            <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        );
    }
    createRow(item: any) {
        return(
            <CTableDataCell>{item.email}</CTableDataCell>
        );
    }

    //Whenever we show OrderDetailsComponent, we listen to change to its values by pasing this function to it.
    modelItemChangeListener(state: OrderModel) {
        this.setState({name: state.name })
    }

    showCreateNewItem() {
        return(
            <OrderDetailsComponent onChange={this.modelItemChangeListener}/>
        );
    }

    doCreateNewItem (callBack?: DataLoadCallBack){
        const inputData= {
            name: this.state.name
          } 
          this.props.createItem(createOrder,inputData,(success: boolean)=> {
            if(success) {
                var data = this.props.data[0].items
                if (callBack !== undefined) {
                    callBack(data);
                }
            }else {
                if (callBack !== undefined) {
                    callBack(undefined);
                }
            }
          });
    }

    showUpdateItem (Item?: any){
        return(
            <OrderDetailsComponent 
            onChange={this.modelItemChangeListener} 
            name = { Item?.email}
            editable = {false}
            />
        );
    }
    doUpdateItem(itemId: any,callBack?: DataLoadCallBack){
        if (callBack !== undefined) {
            callBack(undefined);
        }
    }

    doDeleteItem(itemId: any,callBack?: DataLoadCallBack){
        if (callBack !== undefined) {
            callBack(undefined);
        }
    }

    showViewItem (Item?: any){
        var chemicalAnalysisIds = Item !== undefined ? Item.chemicalAnalysisIds : ''
        var chemicalAnalysisOrders = Item !== undefined ? Item.chemicalAnalysisOrder.items : []
        var orderId = Item !== undefined ? Item.id : ''
      return(
        <OrderResult 
        order= {Item}
         />
      );
  }

    render() {
      return (
          <AdminMainComponent
          loadData={this.loadData}

          createTableHeader={this.createTableHeader}
          createRow={this.createRow}

          showCreateNewItem={this.showCreateNewItem}
          doCreateNewItem={this.doCreateNewItem}

          showUpdateItem={this.showUpdateItem}
          doUpdateItem={this.doUpdateItem}

          doDeleteItem={this.doDeleteItem}
          
          showViewItem={this.showViewItem}
          >
           </AdminMainComponent>
      );
    }
  };

  const mapStateToProps = (state: AppState) => {
    return {
      isDataLoading: state.package_admin.dataListState.isLoadingData,
      isLoadingFailed:state.package_admin.dataListState.isLoadingFailed,
      queryIdentifier: state.package_admin.dataListState.QueryIdentifier,
      data: state.package_admin.dataListState.data,
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
    deleteItem: admindataActions.deleteItem,
    createItem: admindataActions.createItem,
    updateItem: admindataActions.updateItem,
  };

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable)


function OrderDetailsComponent(props: any) {
    const editable = props.editable !== undefined ? props.editable : true
    const email = props.name !== undefined ? props.name : ''
    const [formData, setFormData] = React.useState({ email: email });
  
    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    React.useEffect(() => {
      if (props.onChange) {
        props.onChange(formData)
      }
    }, [formData.email])
  
    return (
        <>
          <div>
            <div>Name:</div>
            <input name="email" defaultValue={email} onChange={handleChange} disabled = {!editable} />
          </div>
          <br />
        </>
      );
  }