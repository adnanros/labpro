import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import AdminMainComponent, { DataLoadCallBack } from '../Base/AdminMainComponent';
import { CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { createTestGroup, deleteTestGroup, updateTestGroup } from '../../../graphql/mutations';
import React from 'react';

const queryIdentifier = "TestGroups"
interface TestGroupModel {
    name: string;
    description: string;
    includedTestsDesc: string;
    includedReportsDesc: string;
    sampleCategoryId: string;
}

class TestGroupsTable extends Component<any ,TestGroupModel> {
  
    constructor(props: any){
      super(props);
      this.state = {
        name: '',
        description: '',
        includedTestsDesc: '',
        includedReportsDesc: '',
        sampleCategoryId: '',
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
            <CTableHeaderCell scope="col">SampleCategory</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        );
    }
    createRow(item: any) {
        var parentSampleCategory = ''
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            parentSampleCategory = this.props.data[1].items.find((i: any)=> i.id === item.sampleCategoryId )?.name
        }
        return(
            <>
            <CTableDataCell>{item.name}</CTableDataCell>
            <CTableDataCell>{parentSampleCategory}</CTableDataCell>
            </>
        );
    }

    //Whenever we show SampleCategoryDetailsComponent, we listen to change to its values by pasing this function to it.
    modelItemChangeListener(state: TestGroupModel) {
        this.setState({name: state.name, description: state.description,sampleCategoryId: state.sampleCategoryId })
    }

    showCreateNewItem() {
        var sampleCategories = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            sampleCategories = this.props.data[1].items
        }
        return(
            <TestGroupsDetailsComponent 
            onChange={this.modelItemChangeListener}
            sampleCategories = {sampleCategories}/>
        );
    }

    doCreateNewItem (callBack?: DataLoadCallBack){
        const inputData= {
            name: this.state.name,
            description: this.state.description,
            includedTestsDesc: '',
            includedReportsDesc: '',
            sampleCategoryId: this.state.sampleCategoryId,
          } 
          this.props.createItem(createTestGroup,inputData,(success: boolean)=> {
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
        var parentSampleCategoryId = ""
        var sampleCategories = []
        if(Item !== undefined && this.props.data && this.props.queryIdentifier === queryIdentifier) {
            parentSampleCategoryId = this.props.data[1].items.find((i: any)=> i.id === Item.sampleCategoryId )?.id
            sampleCategories = this.props.data[1].items
        }
        return(
            <TestGroupsDetailsComponent 
            onChange={this.modelItemChangeListener} 
            name = { Item?.name} 
            description = {Item?.description}
            parentSampleCategoryId = {parentSampleCategoryId}
            sampleCategories = {sampleCategories}
            />
        );
    }
    doUpdateItem(itemId: any,callBack?: DataLoadCallBack){
        const inputData= {
            id: itemId,
            name: this.state.name,
            description: this.state.description,
            sampleCategoryId: this.state.sampleCategoryId,
          } 
          this.props.updateItem(updateTestGroup,inputData,(success: boolean)=> {
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
          this.props.deleteItem(deleteTestGroup,itemId,(success: boolean)=> {
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
        var parentSampleCategoryId = ""
        var sampleCategories = []
        if(Item !== undefined && this.props.data && this.props.queryIdentifier === queryIdentifier) {
            parentSampleCategoryId = this.props.data[1].items.find((i: any)=> i.id === Item.sampleCategoryId )?.id
            sampleCategories = this.props.data[1].items
        }
      return(
          <TestGroupsDetailsComponent 
          onChange={this.modelItemChangeListener} 
          name = { Item?.name} 
          description = {Item?.description}
          editable = {false}
          parentSampleCategoryId = {parentSampleCategoryId}
          sampleCategories = {sampleCategories}
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

export default connect(mapStateToProps, mapDispatchToProps)(TestGroupsTable)


function TestGroupsDetailsComponent(props: any) {
    const editable = props.editable !== undefined ? props.editable : true
    const name = props.name !== undefined ? props.name : ''
    const description = props.description !== undefined ? props.description : ''
    const parentSampleCategoryId = props.parentSampleCategoryId !== undefined ? props.parentSampleCategoryId : ''
    const sampleCategories = props.sampleCategories !== undefined ? props.sampleCategories : []
    const [formData, setFormData] = React.useState({ name: name, description: description,sampleCategoryId: parentSampleCategoryId });
  
    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleChange2 = (e: any) => setFormData({ ...formData, sampleCategoryId: e.target.value });
  
    React.useEffect(() => {
      if (props.onChange) {
        props.onChange(formData)
      }
    }, [formData.name, formData.description,formData.sampleCategoryId])
  
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
            <div>parent Sample Category:</div>
            <select defaultValue={parentSampleCategoryId}  onChange={handleChange2}  disabled = {!editable}>
            {/* <option  value={parentSampleCategoryId} selected>{parentSampleCategoryName}</option> */}
                {
                    sampleCategories.map((item: any,index:any)=> (
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
  query ListTestGroups(
    $filter: ModelTestGroupFilterInput
    $limit: Int
    $nextToken: String
    $filter2: ModelSampleCategoryFilterInput
    $limit2: Int
    $nextToken2: String
  ) {
    listTestGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        includedTestsDesc
        includedReportsDesc
        sampleCategoryId
      }
      nextToken
    },
    listSampleCategorys(filter: $filter2, limit: $limit2, nextToken: $nextToken2) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;