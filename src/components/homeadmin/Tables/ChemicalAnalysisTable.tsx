import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import { listChemicalAnalysiss  } from '../../../graphql/queries';
import AdminMainComponent, { DataLoadCallBack } from '../Base/AdminMainComponent';
import { CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { createChemicalAnalysis, deleteChemicalAnalysis, updateChemicalAnalysis } from '../../../graphql/mutations';
import React from 'react';

interface ChemicalAnalysisModel {
    name: string,
    price: string,
    discount: string,
    description: string
}
const queryIdentifier = "ChemicalAnalysis"
class ChemicalAnalysisTable extends Component<any ,ChemicalAnalysisModel> {
  
    constructor(props: any){
      super(props);
      this.state = {
        name: '',
        price: '0',
        discount: '0',
        description: ''
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
        this.props.getDataList(queryIdentifier,listChemicalAnalysiss,null,true,(success: Boolean)=> {
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
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        );
    }
    createRow(item: any) {
        return(
            <>
            <CTableDataCell>{item.name}</CTableDataCell>
            <CTableDataCell>{item.price}</CTableDataCell>
            </>
        );
    }

    //Whenever we show SampleCategoryDetailsComponent, we listen to change to its values by pasing this function to it.
    modelItemChangeListener(state: ChemicalAnalysisModel) {
        this.setState({name: state.name, description: state.description, price: state.price,discount: state.discount })
    }

    showCreateNewItem() {
        return(
            <ChemicalAnalysisDetailsComponent onChange={this.modelItemChangeListener}/>
        );
    }

    doCreateNewItem (callBack?: DataLoadCallBack){
        const inputData= {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            discount: this.state.discount
          } 
          this.props.createItem(createChemicalAnalysis,inputData,(success: boolean)=> {
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
            <ChemicalAnalysisDetailsComponent 
            onChange={this.modelItemChangeListener} 
            name = { Item?.name} 
            description = {Item?.description}
            price = { Item?.price} 
            discount = {Item?.discount}
            />
        );
    }
    doUpdateItem(itemId: any,callBack?: DataLoadCallBack){
        const inputData= {
            id: itemId,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            discount: this.state.discount
          } 
          this.props.updateItem(updateChemicalAnalysis,inputData,(success: boolean)=> {
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

    doDeleteItem(itemId: any,callBack?: DataLoadCallBack){
          this.props.deleteItem(deleteChemicalAnalysis,itemId,(success: boolean)=> {
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

    showViewItem (Item?: any){
      return(
          <ChemicalAnalysisDetailsComponent 
          onChange={this.modelItemChangeListener} 
          name = { Item?.name} 
          description = {Item?.description}
          price = { Item?.price} 
          discount = {Item?.discount}
          editable = {false}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChemicalAnalysisTable)


function ChemicalAnalysisDetailsComponent(props: any) {
    const editable = props.editable !== undefined ? props.editable : true
    const name = props.name !== undefined ? props.name : ''
    const description = props.description !== undefined ? props.description : ''
    const price = props.price !== undefined ? props.price : '0'
    const discount = props.discount !== undefined ? props.discount : '0'
    const [formData, setFormData] = React.useState({ name: name, description: description, price: price,discount: discount });
  
    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    React.useEffect(() => {
      if (props.onChange) {
        props.onChange(formData)
      }
    }, [formData.name, formData.description,formData.price,formData.discount])
  
    return (
        <>
          <div>
            <div>Name:</div>
            <input name="name" defaultValue={name} onChange={handleChange} disabled = {!editable} />
          </div>
          <br />
          <div>
            <div>Description:</div>
            <input name="description" defaultValue={description} onChange={handleChange} disabled = {!editable} />
          </div>
          <br />
          <div>
            <div>Price:</div>
            <input name="price" defaultValue={price} onChange={handleChange} disabled = {!editable} />
          </div>
          <br/>
          <div>
            <div>Discount:</div>
            <input name="discount" defaultValue={discount} onChange={handleChange} disabled = {!editable} />
          </div>
        </>
      );
  }