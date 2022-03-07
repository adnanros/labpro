import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { Component } from "react"

export type DataLoadCallBack = (data?: any[]) => void;
enum Operation {
    None,
    LoadingList,
    CreatingItem,
    LoadingItem,
    UpdatingItem,
    DeletingItem,
    ViewingItem
}

enum OperationState {
    Unknown,
    Requested,
    Success,
    Failure
}

export interface IProps {
    loadData: (callBack?: DataLoadCallBack) => void,
    
    createTableHeader: () => any,
    createRow: (item: any) => any,

    showCreateNewItem: () => any,
    doCreateNewItem: (callBack?: DataLoadCallBack)=> void,

    showUpdateItem: (Item?: any) => any,
    doUpdateItem: (itemId: any,callBack?: DataLoadCallBack)=> void,

    doDeleteItem: (itemId: any,callBack?: DataLoadCallBack)=> void,

    showViewItem: (Item?: any) => any
}

interface IState {
    Operation: Operation,
    OperationState: OperationState
    DataList?: any[],
    ShowCreateNewItem: boolean,
    ToWorkOnItem: any,
    ShowUpdateItem: boolean,
    ShowDeleteItem: boolean,
    ShowViewItem: boolean
}

class AdminMainComponent extends Component<IProps ,IState> {
  
    constructor(props: IProps){
      super(props);
      this.state = {
        Operation: Operation.None,
        OperationState: OperationState.Unknown,
        DataList: undefined,
        ShowCreateNewItem: false,
        ToWorkOnItem: undefined,
        ShowUpdateItem: false,
        ShowDeleteItem: false,
        ShowViewItem: false
      }
    }

    componentDidMount(){
      this.loadData();
    }

    loadData() {
      this.setState({Operation: Operation.LoadingList, OperationState: OperationState.Requested });
      this.props.loadData((data?: any[]) => {
          if( typeof data !== undefined) {
            this.setState({Operation: Operation.None, OperationState: OperationState.Success,DataList: data })
          }else {
            this.setState({Operation: Operation.None, OperationState: OperationState.Failure })
          }
      }
      );
    }

    doCreateNewItem() {
        this.setState({Operation: Operation.CreatingItem,OperationState: OperationState.Requested})
        this.props.doCreateNewItem((data?: any[]) => {
            if(data !== undefined) {
                this.setState({Operation: Operation.None,OperationState: OperationState.Success, ShowCreateNewItem: false,DataList: data})
            }else {
                this.setState({Operation: Operation.None,OperationState: OperationState.Failure})
            }
        }) 
    }

    doUpdateItem(item: any) {
        this.setState({Operation: Operation.UpdatingItem,OperationState: OperationState.Requested})
        this.props.doUpdateItem(item,(data?: any[]) => {
            if(data !== undefined) {
                this.setState({Operation: Operation.None,OperationState: OperationState.Success, ShowUpdateItem: false,DataList: data})
            }else {
                this.setState({Operation: Operation.None,OperationState: OperationState.Failure})
            }
        }) 
    }
    doDeleteItem(item: any) {
        this.setState({Operation: Operation.DeletingItem, OperationState: OperationState.Requested})
        this.props.doDeleteItem(item,(data?: any[]) => {
            if(data !== undefined) {
                this.setState({Operation: Operation.None,OperationState: OperationState.Success, ShowDeleteItem: false,DataList: data})
            }else {
                this.setState({Operation: Operation.None,OperationState: OperationState.Failure})
            }
        }) 
    }
    render() {
      return (
        <div>
        {
            //buttons
            <div>
                <CButton onClick= {()=> {this.loadData()}} disabled={this.state.OperationState === OperationState.Requested }>Refresh</CButton>
                <CButton onClick= {()=> {this.setState({ShowCreateNewItem: true})}} disabled={this.state.OperationState === OperationState.Requested }>Create</CButton>
            </div>
        }

        <CTable>
            {
                //table header
                this.props.createTableHeader()
            }
            <CTableBody>
            {
                    this.state.DataList !== undefined &&
                    this.state.DataList.map((item: any, index:any) => (
                        <CTableRow key={index}>
                            <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                            {this.props.createRow(item)}
                            <CTableDataCell>
                            <div>
                            <CButton className='primary' color="link" onClick={()=>{this.setState({ToWorkOnItem: item, ShowUpdateItem: true})}} disabled={this.state.OperationState === OperationState.Requested}>Edit</CButton>
                            <CButton className='danger' color="link" onClick={()=>{this.setState({ToWorkOnItem: item, ShowDeleteItem: true})}} disabled={this.state.OperationState === OperationState.Requested}>Delete</CButton>
                            <CButton className='danger' color="link" onClick={()=>{this.setState({ToWorkOnItem: item, ShowViewItem: true})}} disabled={this.state.OperationState === OperationState.Requested}>Details</CButton>
                            </div>
                            </CTableDataCell>
                        </CTableRow>
                        ))
                }
            </CTableBody>
        </CTable>
        {/* Create new Item Modal */}
        <CModal backdrop={false}  keyboard={false} portal={false} visible= {this.state.ShowCreateNewItem}  onClose = {()=> this.setState({ShowCreateNewItem: false})}  >
            <CModalHeader>
                <CModalTitle>Create New Item.</CModalTitle>
            </CModalHeader>
            <CModalBody>{this.props.showCreateNewItem()}</CModalBody>
            <CModalFooter>
            <CButton onClick={()=>{this.doCreateNewItem()}} disabled={this.state.OperationState === OperationState.Requested } color="primary">
            {this.state.Operation === Operation.CreatingItem && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>}
                Create
            </CButton>
            </CModalFooter>
        </CModal>

        {/* Update existing Item Modal */}
        <CModal backdrop={false}  keyboard={false} portal={false} visible= {this.state.ShowUpdateItem}  onClose = {()=> this.setState({ShowUpdateItem: false})}  >
            <CModalHeader>
                <CModalTitle>Edit Item</CModalTitle>
            </CModalHeader>
            <CModalBody>{this.props.showUpdateItem(this.state.ToWorkOnItem)}</CModalBody>
            <CModalFooter>
            <CButton onClick={()=>{this.doUpdateItem(this.state.ToWorkOnItem.id)}} disabled={this.state.OperationState === OperationState.Requested } color="primary">
            {this.state.Operation === Operation.UpdatingItem && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>}
                Update
            </CButton>
            </CModalFooter>
        </CModal>

        {/* Delete existing Item Modal */}
        <CModal backdrop={false}  keyboard={false} portal={false} visible= {this.state.ShowDeleteItem}  onClose = {()=> this.setState({ShowDeleteItem: false})}  >
            <CModalHeader>
                <CModalTitle>Delete Item?</CModalTitle>
            </CModalHeader>
            <CModalBody>Are you sure you want to delete {this.state.ToWorkOnItem?.name}</CModalBody>
            <CModalFooter>
            <CButton onClick={()=>{this.doDeleteItem(this.state.ToWorkOnItem.id)}} disabled={this.state.OperationState === OperationState.Requested } color="primary">
            {this.state.Operation === Operation.DeletingItem && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>}
                Delete
            </CButton>
            </CModalFooter>
        </CModal>
        {/* Viewing existing Item Modal */}
        <CModal backdrop={false}  keyboard={false} portal={false} visible= {this.state.ShowViewItem}  onClose = {()=> this.setState({ShowViewItem: false})}  >
            <CModalHeader>
                <CModalTitle>Item Details.</CModalTitle>
            </CModalHeader>
            <CModalBody>{this.props.showViewItem(this.state.ToWorkOnItem)}</CModalBody>
            <CModalFooter>
            <CButton onClick={()=>{this.setState({ShowViewItem: false})}} color="primary">
                Close
            </CButton>
            </CModalFooter>
        </CModal>
        {
            this.state.Operation === Operation.LoadingList &&
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
        </div>
      );
    }
  };

export default AdminMainComponent