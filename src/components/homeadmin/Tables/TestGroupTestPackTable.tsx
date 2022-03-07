import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import AdminMainComponent, { DataLoadCallBack } from '../Base/AdminMainComponent';
import { CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { createTestGroupTestPack, deleteTestGroupTestPack, updateTestGroupTestPack } from '../../../graphql/mutations';
import React from 'react';

const queryIdentifier = "TestGroupTestPacks"
interface TestGroupTestPackTableModel {
    testGroupId: string,
    testPackId: string
}

class TestGroupTestPackTable extends Component<any ,TestGroupTestPackTableModel> {
  
    constructor(props: any){
      super(props);
      this.state = {
        testGroupId: '',
        testPackId: ''
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
            <CTableHeaderCell scope="col">TestGroup</CTableHeaderCell>
            <CTableHeaderCell scope="col">TestPack</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        );
    }
    createRow(item: any) {
        var testGroupName = ''
        var testPackName = ''
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            testGroupName = this.props.data[1].items.find((i: any)=> i.id === item.testGroupId )?.name
            testPackName = this.props.data[2].items.find((i: any)=> i.id === item.testPackId )?.name
        }
        return(
            <>
            <CTableDataCell>{testGroupName}</CTableDataCell>
            <CTableDataCell>{testPackName}</CTableDataCell>
            </>
        );
    }

    //Whenever we show SampleCategoryDetailsComponent, we listen to change to its values by pasing this function to it.
    modelItemChangeListener(state: TestGroupTestPackTableModel) {
        this.setState({testGroupId: state.testGroupId, testPackId: state.testPackId })
    }

    showCreateNewItem() {
        var testGroups = []
        var testPacks = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            testGroups = this.props.data[1].items
            testPacks = this.props.data[2].items
        }
        return(
            <TestGroupsTestPacksDetailsComponent 
            onChange={this.modelItemChangeListener}
            testGroups = {testGroups}
            testPacks = {testPacks}
            />
        );
    }

    doCreateNewItem (callBack?: DataLoadCallBack){
        console.log("wwww",this.state)
        const inputData = {
            testGroupId: this.state.testGroupId,
            testPackId: this.state.testPackId
          }
          this.props.createItem(createTestGroupTestPack,inputData,(success: boolean)=> {
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
        var testGroupId = Item === undefined ? '' : Item.testGroupId
        var testPackId = Item === undefined ? '' : Item.testPackId
        var testGroups = []
        var testPacks = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            testGroups = this.props.data[1].items
            testPacks = this.props.data[2].items
        }

        return(
            <TestGroupsTestPacksDetailsComponent 
            onChange={this.modelItemChangeListener} 
            testGroupId = {testGroupId}
            testPackId = {testPackId}
            testGroups = {testGroups}
            testPacks = {testPacks}
            />
        );
    }
    doUpdateItem(itemId: any,callBack?: DataLoadCallBack){
        const inputData= {
            id: itemId,
            testGroupId: this.state.testGroupId,
            testPackId: this.state.testPackId
          } 
          this.props.updateItem(updateTestGroupTestPack,inputData,(success: boolean)=> {
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
          this.props.deleteItem(deleteTestGroupTestPack,itemId,(success: boolean)=> {
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
        var testGroupId = Item === undefined ? '' : Item.testGroupId
        var testPackId = Item === undefined ? '' : Item.testPackId
        var testGroups = []
        var testPacks = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            testGroups = this.props.data[1].items
            testPacks = this.props.data[2].items
        }
      return(
          <TestGroupsTestPacksDetailsComponent 
          onChange={this.modelItemChangeListener} 
          editable = {false}
          testGroupId = {testGroupId}
          testPackId = {testPackId}
          testGroups = {testGroups}
          testPacks = {testPacks}
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

export default connect(mapStateToProps, mapDispatchToProps)(TestGroupTestPackTable)


function TestGroupsTestPacksDetailsComponent(props: any) {
    const editable = props.editable !== undefined ? props.editable : true
    const testGroups = props.testGroups !== undefined ? props.testGroups : undefined
    const testPacks = props.testPacks !== undefined ? props.testPacks : undefined
    const testGroupId = props.testGroupId !== undefined ? props.testGroupId : (testGroups !== undefined ? testGroups[0].id : '')
    const testPackId = props.testPackId !== undefined ? props.testPackId : (testPacks !== undefined ? testPacks[0].id : '')
    const [formData, setFormData] = React.useState({ testGroupId: testGroupId, testPackId: testPackId });
  
    const handleChange = (e: any) => setFormData({ ...formData, testGroupId: e.target.value });
    const handleChange2 = (e: any) => setFormData({ ...formData, testPackId: e.target.value });
  
    React.useEffect(() => {
      if (props.onChange) {
        props.onChange(formData)
      }
    }, [formData.testGroupId, formData.testPackId])
  
    return (
        <>
          <div>
            <div>Test Group</div>
            <select defaultValue={testGroupId}  onChange={handleChange}  disabled = {!editable}>
            {/* <option  value={parentSampleCategoryId} selected>{parentSampleCategoryName}</option> */}
                {
                    testGroups && testGroups.map((item: any,index:any)=> (
                        <option  key = {index} value={item.id}>{item.name}</option>
                    ))
                }
            </select>
          </div>
          <br />
          <div>
            <div>Test Packs</div>
            <select defaultValue={testPackId}  onChange={handleChange2}  disabled = {!editable}>
            {/* <option  value={parentSampleCategoryId} selected>{parentSampleCategoryName}</option> */}
                {
                    testPacks && testPacks.map((item: any,index:any)=> (
                        <option  key = {index} value={item.id}>{item.name}</option>
                    ))
                }
            </select>
          </div>
        </>
      );
  }


  const listData = /* GraphQL */ `
  query ListTestGroupTestPacks(
    $filter: ModelTestGroupTestPackFilterInput
    $limit: Int
    $nextToken: String
    $filter2: ModelTestGroupFilterInput
    $limit2: Int
    $nextToken2: String
    $filter3: ModelTestPackFilterInput
    $limit3: Int
    $nextToken3: String
  ) {
    listTestGroupTestPacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        testPackId
        testGroupId
        testgroup {
          id
          name
          testGroupTestPack {
            nextToken
          }
        }
        testpack {
          id
          name
          testGroupTestPack {
            nextToken
          }
          testPackChemicalAnalysis {
            nextToken
          }
        }
      }
      nextToken
    },
    listTestGroups(filter: $filter2, limit: $limit2, nextToken: $nextToken2) {
      items {
        id
        name
      }
      nextToken
    },
    listTestPacks(filter: $filter3, limit: $limit3, nextToken: $nextToken3) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;