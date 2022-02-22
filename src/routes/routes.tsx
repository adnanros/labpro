import Chemical from "../components/homeadmin/data/Chemical"
import ChemicalAnalysis from "../components/homeadmin/data/ChemicalAnalysis"
import ChemicalAnalysisChemical from "../components/homeadmin/data/ChemicalAnalysisChemical"
import ChemicalImpact from "../components/homeadmin/data/ChemicalImpact"
import Impact from "../components/homeadmin/data/Impact"
import ImpactCategory from "../components/homeadmin/data/ImpactCategory"
import Order from "../components/homeadmin/data/Order"
import SampleCategory from "../components/homeadmin/data/SampleCategory"
import TestGroup from "../components/homeadmin/data/TestGroup"
import TestGroupTestPack from "../components/homeadmin/data/TestGroupTestPack"
import TestPack from "../components/homeadmin/data/TestPack"
import TestPackChemicalAnalysis from "../components/homeadmin/data/TestPackChemicalAnalysis"

const routes = [
  { path: '/homeAdmin',exact:true, name: 'Home Admin', component: SampleCategory },
  { path: '/homeAdmin/samplecategory', name: 'SampleCategory', component: SampleCategory },
  { path: '/homeAdmin/testgroup', name: 'TestGroup', component: TestGroup },
  { path: '/homeAdmin/testpack', name: 'TestPacks', component: TestPack },
  { path: '/homeAdmin/testgrouptestpack', name: 'TestGroupTestPack', component: TestGroupTestPack },
  { path: '/homeAdmin/chemicalanalysis', name: 'ChemicalAnalysis', component: ChemicalAnalysis },
  { path: '/homeAdmin/testpackchemicalanalysis', name: 'TestChemicalAnalysis', component: TestPackChemicalAnalysis },
  { path: '/homeAdmin/chemical', name: 'Chemical', component: Chemical },
  { path: '/homeAdmin/chemicalanalysischemical', name: 'ChemicalAnalysisChemical', component: ChemicalAnalysisChemical },
  { path: '/homeAdmin/impactcategory', name: 'ImpactCategory', component: ImpactCategory },
  { path: '/homeAdmin/impact', name: 'Impact', component: Impact },
  { path: '/homeAdmin/chemicalimpact', name: 'ChemicalImpact', component: ChemicalImpact },
  { path: '/homeAdmin/order', name: 'Order', component: Order }
]
// export default routes
export default routes