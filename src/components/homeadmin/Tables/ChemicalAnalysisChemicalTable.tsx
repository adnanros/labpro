import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import AdminMainComponent, { DataLoadCallBack } from '../Base/AdminMainComponent';
import { CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { createChemicalAnalysisChemical, deleteChemicalAnalysisChemical, updateChemicalAnalysisChemical } from '../../../graphql/mutations';
import React from 'react';

const queryIdentifier = "ChemicalAnalysisChemical"
interface ChemicalAnalysisChemicalModel {
    chemicalAnalysisId: string,
    chemicalId: string
}

class ChemicalAnalysisChemicalTable extends Component<any ,ChemicalAnalysisChemicalModel> {
  
    constructor(props: any){
      super(props);
      this.state = {
        chemicalAnalysisId: '',
        chemicalId: ''
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
            <CTableHeaderCell scope="col">Chemical</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        );
    }
    createRow(item: any) {
        var chemicalAnalysisName = ''
        var chemicalName = ''
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            chemicalAnalysisName = this.props.data[1].items.find((i: any)=> i.id === item.chemicalAnalysisId )?.name
            chemicalName = this.props.data[2].items.find((i: any)=> i.id === item.chemicalId )?.name
        }
        return(
            <>
            <CTableDataCell>{chemicalAnalysisName}</CTableDataCell>
            <CTableDataCell>{chemicalName}</CTableDataCell>
            </>
        );
    }

    //Whenever we show SampleCategoryDetailsComponent, we listen to change to its values by pasing this function to it.
    modelItemChangeListener(state: ChemicalAnalysisChemicalModel) {
        this.setState({chemicalAnalysisId: state.chemicalAnalysisId, chemicalId: state.chemicalId })
    }

    showCreateNewItem() {
        var chemicalAnalysis = []
        var chemicals = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            chemicalAnalysis = this.props.data[1].items
            chemicals = this.props.data[2].items
        }
        return(
            <ChemicalAnalysisChemicalDetailsComponent 
            onChange={this.modelItemChangeListener}
            chemicalAnalysis = {chemicalAnalysis}
            chemicals = {chemicals}
            />
        );
    }

    doCreateNewItem (callBack?: DataLoadCallBack){
        const inputData = {
            chemicalAnalysisId: this.state.chemicalAnalysisId,
            chemicalId: this.state.chemicalId
          }
          this.props.createItem(createChemicalAnalysisChemical,inputData,(success: boolean)=> {
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
        var chemicalId = Item === undefined ? '' : Item.chemicalId
        var chemicalAnalysis = []
        var chemicals = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            chemicalAnalysis = this.props.data[1].items
            chemicals = this.props.data[2].items
        }

        return(
            <ChemicalAnalysisChemicalDetailsComponent 
            onChange={this.modelItemChangeListener} 
            chemicalAnalysisId = {chemicalAnalysisId}
            chemicalId = {chemicalId}
            chemicalAnalysis = {chemicalAnalysis}
            chemicals = {chemicals}
            />
        );
    }
    doUpdateItem(itemId: any,callBack?: DataLoadCallBack){
        const inputData= {
            id: itemId,
            chemicalAnalysisId: this.state.chemicalAnalysisId,
            chemicalId: this.state.chemicalId
          } 
          this.props.updateItem(updateChemicalAnalysisChemical,inputData,(success: boolean)=> {
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
          this.props.deleteItem(deleteChemicalAnalysisChemical,itemId,(success: boolean)=> {
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
        var chemicalId = Item === undefined ? '' : Item.chemicalId
        var chemicalAnalysis = []
        var chemicals = []
        if(this.props.data && this.props.queryIdentifier === queryIdentifier) {
            chemicalAnalysis = this.props.data[1].items
            chemicals = this.props.data[2].items
        }
      return(
          <ChemicalAnalysisChemicalDetailsComponent 
          onChange={this.modelItemChangeListener} 
          editable = {false}
          chemicalAnalysisId = {chemicalAnalysisId}
          chemicalId = {chemicalId}
          chemicalAnalysis = {chemicalAnalysis}
          chemicals = {chemicals}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChemicalAnalysisChemicalTable)


function ChemicalAnalysisChemicalDetailsComponent(props: any) {
    const editable = props.editable !== undefined ? props.editable : true
    const chemicalAnalysis = props.chemicalAnalysis !== undefined ? props.chemicalAnalysis : undefined
    const chemicals = props.chemicals !== undefined ? props.chemicals : undefined
    const chemicalAnalysisId = props.chemicalAnalysisId !== undefined ? props.chemicalAnalysisId : (chemicalAnalysis !== undefined ? chemicalAnalysis[0].id : '')
    const chemicalId = props.chemicalId !== undefined ? props.chemicalId : (chemicals !== undefined ? chemicals[0].id : '')
    const [formData, setFormData] = React.useState({ chemicalAnalysisId: chemicalAnalysisId, chemicalId: chemicalId });
  
    const handleChange = (e: any) => setFormData({ ...formData, chemicalAnalysisId: e.target.value });
    const handleChange2 = (e: any) => setFormData({ ...formData, chemicalId: e.target.value });
  
    React.useEffect(() => {
      if (props.onChange) {
        props.onChange(formData)
      }
    }, [formData.chemicalAnalysisId, formData.chemicalId])
  
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
            <div>Chemicals</div>
            <select defaultValue={chemicalId}  onChange={handleChange2}  disabled = {!editable}>
            {/* <option  value={parentSampleCategoryId} selected>{parentSampleCategoryName}</option> */}
                {
                    chemicals && chemicals.map((item: any,index:any)=> (
                        <option  key = {index} value={item.id}>{item.name}</option>
                    ))
                }
            </select>
          </div>
        </>
      );
  }


  const listData = /* GraphQL */ `
  query ListChemicalAnalysisChemicals(
    $filter: ModelChemicalAnalysisChemicalFilterInput
    $limit: Int
    $nextToken: String
    $filter2: ModelChemicalAnalysisFilterInput
    $limit2: Int
    $nextToken2: String
    $filter3: ModelChemicalFilterInput
    $limit3: Int
    $nextToken3: String
  ) {
    listChemicalAnalysisChemicals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chemicalId
        chemicalAnalysisId
        chemicalAnalysis {
          id
          name
        }
        chemical {
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
      }
      nextToken
    },
    listChemicals(filter: $filter3, limit: $limit3, nextToken: $nextToken3) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;