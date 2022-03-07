import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import AdminMainComponent, { DataLoadCallBack } from '../Base/AdminMainComponent';
import { CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { createImpact, deleteImpact, updateImpact } from '../../../graphql/mutations';
import React from 'react';

const queryIdentifier = "Impacts"
interface ImpactModel {
    name: string;
    description: string;
    impactCategoryId: string;
}

class ImpactTable extends Component<any ,ImpactModel> {
  
    constructor(props: any){
      super(props);
      this.state = {
        name: '',
        description: '',
        impactCategoryId: '',
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
        this.props.getDataList(queryIdentifier,listData,null,true,(success: Boolean)=> {
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
            <CTableHeaderCell scope="col">ImapctCategory</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        );
    }
    createRow(item: any) {
        var parentImactCategory = ''
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            parentImactCategory = this.props.data[1].items.find((i: any)=> i.id === item.impactCategoryId )?.name
        }
        return(
            <>
            <CTableDataCell>{item.name}</CTableDataCell>
            <CTableDataCell>{parentImactCategory}</CTableDataCell>
            </>
        );
    }

    //Whenever we show SampleCategoryDetailsComponent, we listen to change to its values by pasing this function to it.
    modelItemChangeListener(state: ImpactModel) {
        this.setState({name: state.name, description: state.description,impactCategoryId: state.impactCategoryId })
    }

    showCreateNewItem() {
        var impactCategories = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            impactCategories = this.props.data[1].items
        }
        return(
            <ImpactDetailsComponent 
            onChange={this.modelItemChangeListener}
            impactCategories = {impactCategories}/>
        );
    }

    doCreateNewItem (callBack?: DataLoadCallBack){
        const inputData= {
            name: this.state.name,
            description: this.state.description,
            impactCategoryId: this.state.impactCategoryId,
          } 
          this.props.createItem(createImpact,inputData,(success: boolean)=> {
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
        var parentimpactCategoryId = ""
        var impactCategories = []
        if(Item !== undefined && this.props.data && this.props.queryIdentifier === queryIdentifier) {
            parentimpactCategoryId = this.props.data[1].items.find((i: any)=> i.id === Item.impactCategoryId )?.id
            impactCategories = this.props.data[1].items
        }
        return(
            <ImpactDetailsComponent 
            onChange={this.modelItemChangeListener} 
            name = { Item?.name} 
            description = {Item?.description}
            parentimpactCategoryId = {parentimpactCategoryId}
            impactCategories = {impactCategories}
            />
        );
    }
    doUpdateItem(itemId: any,callBack?: DataLoadCallBack){
        const inputData= {
            id: itemId,
            name: this.state.name,
            description: this.state.description,
            impactCategoryId: this.state.impactCategoryId,
          } 
          this.props.updateItem(updateImpact,inputData,(success: boolean)=> {
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
          this.props.deleteItem(deleteImpact,itemId,(success: boolean)=> {
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
        var parentimpactCategoryId = ""
        var impactCategories = []
        if(Item !== undefined && this.props.data && this.props.queryIdentifier === queryIdentifier) {
            parentimpactCategoryId = this.props.data[1].items.find((i: any)=> i.id === Item.impactCategoryId )?.id
            impactCategories = this.props.data[1].items
        }
      return(
          <ImpactDetailsComponent 
          onChange={this.modelItemChangeListener} 
          name = { Item?.name} 
          description = {Item?.description}
          editable = {false}
          parentimpactCategoryId = {parentimpactCategoryId}
          impactCategories = {impactCategories}
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

export default connect(mapStateToProps, mapDispatchToProps)(ImpactTable)


function ImpactDetailsComponent(props: any) {
    const editable = props.editable !== undefined ? props.editable : true
    const name = props.name !== undefined ? props.name : ''
    const description = props.description !== undefined ? props.description : ''
    const parentimpactCategoryId = props.parentimpactCategoryId !== undefined ? props.parentimpactCategoryId : ''
    const impactCategories = props.impactCategories !== undefined ? props.impactCategories : []
    const [formData, setFormData] = React.useState({ name: name, description: description,impactCategoryId: parentimpactCategoryId });
  
    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleChange2 = (e: any) => setFormData({ ...formData, impactCategoryId: e.target.value });
  
    React.useEffect(() => {
      if (props.onChange) {
        props.onChange(formData)
      }
    }, [formData.name, formData.description,formData.impactCategoryId])
  
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
            <div>parent Impact Category:</div>
            <select defaultValue={parentimpactCategoryId}  onChange={handleChange2}  disabled = {!editable}>
            {/* <option  value={parentimpactCategoryId} selected>{parentSampleCategoryName}</option> */}
                {
                    impactCategories.map((item: any,index:any)=> (
                        <option  key = {index} value={item.id}>{item.name}</option>
                    ))
                }
            </select>
          </div>
          <br />
        </>
      );
  }


  const listData = /* GraphQL */ `
  query ListImpacts(
    $filter: ModelImpactFilterInput
    $limit: Int
    $nextToken: String
    $filter2: ModelImpactCategoryFilterInput
    $limit2: Int
    $nextToken2: String
  ) {
    listImpacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        iconLink
        impactCategoryId
        createdAt
        updatedAt
        chemicalImpacts {
          items {
            id
            chemicalId
            impactId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    },
    listImpactCategorys(filter: $filter2, limit: $limit2, nextToken: $nextToken2) {
      items {
        id
        name
        description
        iconLink
      }
      nextToken
    }
  }
`;