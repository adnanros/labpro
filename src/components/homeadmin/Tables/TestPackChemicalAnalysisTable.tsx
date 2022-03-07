import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import AdminMainComponent, { DataLoadCallBack } from '../Base/AdminMainComponent';
import { CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { createTestPackChemicalAnalysis, deleteTestPackChemicalAnalysis, updateTestPackChemicalAnalysis } from '../../../graphql/mutations';
import React from 'react';

const queryIdentifier = "TestPackChemicalAnalysis"
interface TestPackChemicalAnalysisModel {
    chemicalAnalysisId: string,
    testPackId: string
}

class TestPackChemicalAnalysisTable extends Component<any ,TestPackChemicalAnalysisModel> {
  
    constructor(props: any){
      super(props);
      this.state = {
        chemicalAnalysisId: '',
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
            <CTableHeaderCell scope="col">chemicalAnalysis</CTableHeaderCell>
            <CTableHeaderCell scope="col">TestPack</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        );
    }
    createRow(item: any) {
        var chemicalAnalysisName = ''
        var testPackName = ''
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            chemicalAnalysisName = this.props.data[1].items.find((i: any)=> i.id === item.chemicalAnalysisId )?.name
            testPackName = this.props.data[2].items.find((i: any)=> i.id === item.testPackId )?.name
        }
        return(
            <>
            <CTableDataCell>{chemicalAnalysisName}</CTableDataCell>
            <CTableDataCell>{testPackName}</CTableDataCell>
            </>
        );
    }

    //Whenever we show SampleCategoryDetailsComponent, we listen to change to its values by pasing this function to it.
    modelItemChangeListener(state: TestPackChemicalAnalysisModel) {
        this.setState({chemicalAnalysisId: state.chemicalAnalysisId, testPackId: state.testPackId })
    }

    showCreateNewItem() {
        var chemicalAnalysis = []
        var testPacks = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            chemicalAnalysis = this.props.data[1].items
            testPacks = this.props.data[2].items
        }
        return(
            <TestPackChemicalAnalysisDetailsComponent 
            onChange={this.modelItemChangeListener}
            chemicalAnalysis = {chemicalAnalysis}
            testPacks = {testPacks}
            />
        );
    }

    doCreateNewItem (callBack?: DataLoadCallBack){
        const inputData = {
            chemicalAnalysisId: this.state.chemicalAnalysisId,
            testPackId: this.state.testPackId
          }
          this.props.createItem(createTestPackChemicalAnalysis,inputData,(success: boolean)=> {
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
        var chemicalAnalysisId = Item === undefined ? '' : Item.chemicalAnalysisId
        var testPackId = Item === undefined ? '' : Item.testPackId
        var chemicalAnalysis = []
        var testPacks = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            chemicalAnalysis = this.props.data[1].items
            testPacks = this.props.data[2].items
        }

        return(
            <TestPackChemicalAnalysisDetailsComponent 
            onChange={this.modelItemChangeListener} 
            chemicalAnalysisId = {chemicalAnalysisId}
            testPackId = {testPackId}
            chemicalAnalysis = {chemicalAnalysis}
            testPacks = {testPacks}
            />
        );
    }
    doUpdateItem(itemId: any,callBack?: DataLoadCallBack){
        const inputData= {
            id: itemId,
            chemicalAnalysisId: this.state.chemicalAnalysisId,
            testPackId: this.state.testPackId
          } 
          this.props.updateItem(updateTestPackChemicalAnalysis,inputData,(success: boolean)=> {
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
          this.props.deleteItem(deleteTestPackChemicalAnalysis,itemId,(success: boolean)=> {
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
        var chemicalAnalysisId = Item === undefined ? '' : Item.chemicalAnalysisId
        var testPackId = Item === undefined ? '' : Item.testPackId
        var chemicalAnalysis = []
        var testPacks = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            chemicalAnalysis = this.props.data[1].items
            testPacks = this.props.data[2].items
        }
      return(
          <TestPackChemicalAnalysisDetailsComponent 
          onChange={this.modelItemChangeListener} 
          editable = {false}
          chemicalAnalysisId = {chemicalAnalysisId}
          testPackId = {testPackId}
          chemicalAnalysis = {chemicalAnalysis}
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

export default connect(mapStateToProps, mapDispatchToProps)(TestPackChemicalAnalysisTable)


function TestPackChemicalAnalysisDetailsComponent(props: any) {
    const editable = props.editable !== undefined ? props.editable : true
    const chemicalAnalysis = props.chemicalAnalysis !== undefined ? props.chemicalAnalysis : undefined
    const testPacks = props.testPacks !== undefined ? props.testPacks : undefined
    const chemicalAnalysisId = props.chemicalAnalysisId !== undefined ? props.chemicalAnalysisId : (chemicalAnalysis !== undefined ? chemicalAnalysis[0].id : '')
    const testPackId = props.testPackId !== undefined ? props.testPackId : (testPacks !== undefined ? testPacks[0].id : '')
    const [formData, setFormData] = React.useState({ chemicalAnalysisId: chemicalAnalysisId, testPackId: testPackId });
  
    const handleChange = (e: any) => setFormData({ ...formData, chemicalAnalysisId: e.target.value });
    const handleChange2 = (e: any) => setFormData({ ...formData, testPackId: e.target.value });
  
    React.useEffect(() => {
      if (props.onChange) {
        props.onChange(formData)
      }
    }, [formData.chemicalAnalysisId, formData.testPackId])
  
    return (
        <>
          <div>
            <div>Chemical Analysis</div>
            <select defaultValue={chemicalAnalysisId}  onChange={handleChange}  disabled = {!editable}>
            {/* <option  value={parentSampleCategoryId} selected>{parentSampleCategoryName}</option> */}
                {
                    chemicalAnalysis && chemicalAnalysis.map((item: any,index:any)=> (
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
  query ListTestPackChemicalAnalysiss(
    $filter: ModelTestPackChemicalAnalysisFilterInput
    $limit: Int
    $nextToken: String
    $filter2: ModelChemicalAnalysisFilterInput
    $limit2: Int
    $nextToken2: String
    $filter3: ModelTestPackFilterInput
    $limit3: Int
    $nextToken3: String
  ) {
    listTestPackChemicalAnalysiss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        testPackId
        chemicalAnalysisId
        
        testpack {
          id
          name
        }
        chemicalAnalysis {
          id
          name
        }
      }
      nextToken
    },
    listChemicalAnalysiss(
      filter: $filter2
      limit: $limit2
      nextToken: $nextToken2
    ) {
      items {
        id
        name
        price
        discount
        description
      }
      nextToken
    },
    listTestPacks(filter: $filter3, limit: $limit3, nextToken: $nextToken3) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;