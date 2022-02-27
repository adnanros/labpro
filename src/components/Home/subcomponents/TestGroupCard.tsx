import { CCard, CCardBody, CCardTitle, CCol, CRow, } from "@coreui/react";
import { Component } from "react";
import { Link } from "react-router-dom";

interface IProps {
    name: string;
    description: string;
    imageName: string;
    testGroupId: String;
    testGroupTestPacks: [{}],
    TestPackChemicalAnalysis: [{}]
}

class TestGroupCard extends Component<IProps,any> {
    constructor(props: IProps){
        super(props);
        var tps=props.testGroupTestPacks.filter((item: any) => item.testGroupId === props.testGroupId);
        var cms = props.TestPackChemicalAnalysis.filter((item: any) =>  tps.some((e: any) => e.testPackId === item.testPackId));
        var price = cms.map((a:any) => Number(a.chemicalAnalysis.price)).reduce((a, c) => { return a + c })
        var discount = cms.map((a:any) => Number(a.chemicalAnalysis.discount)).reduce((a, c) => { return a + c })
        this.state = {
          testPacks: tps,
          chemicalAnalysis: cms,
          price: price,
          discount: discount
        }
      }
      
    render(){
        return (
            <div>
            <CCard style={{ width: '18rem' }}>
                <img alt={this.props.name} width={'100%'} height={'100%'} src={require('../../../Assets/images/'+this.props.imageName).default}/>
                <CCardBody>
                    <CCardTitle>{this.props.name}</CCardTitle>
                    
                      {this.state.testPacks.map((item: any, index:any) => (
                        <CRow  key={index}>
                            <CCol>
                                {item.testpack.name}
                            </CCol>
                       </CRow>
                        ))
                      }
                      {
                        this.state.price
                      }
                      <Link to={{
                        pathname: "/orderRegisteration",
                        state: {chemicalAnalysis: this.state.chemicalAnalysis }//to get: this.props.location.state.chemicalAnalysis
                    }}>Order</Link>
                </CCardBody>
            </CCard>
        </div>
            );
    }
}

export default TestGroupCard;