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
   { path: '/samplecategory',exact:true, name: 'SampleCategory', component: SampleCategory },
  { path: '/testgroup', name: 'TestGroup', component: TestGroup },
  { path: '/testpack', name: 'TestPacks', component: TestPack },
  { path: '/testgrouptestpack', name: 'TestGroupTestPack', component: TestGroupTestPack },
  { path: '/chemicalanalysis', name: 'ChemicalAnalysis', component: ChemicalAnalysis },
  { path: '/testpackchemicalanalysis', name: 'TestChemicalAnalysis', component: TestPackChemicalAnalysis },
  { path: '/chemical', name: 'Chemical', component: Chemical },
  { path: '/chemicalanalysischemical', name: 'ChemicalAnalysisChemical', component: ChemicalAnalysisChemical },
  { path: '/impactcategory', name: 'ImpactCategory', component: ImpactCategory },
  { path: '/impact', name: 'Impact', component: Impact },
  { path: '/chemicalimpact', name: 'ChemicalImpact', component: ChemicalImpact },
  { path: '/order', name: 'Order', component: Order },








]
// export default routes
export default routes