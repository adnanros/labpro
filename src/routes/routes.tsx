import ChemicalAnalysisChemicalTable from "../components/homeadmin/Tables/ChemicalAnalysisChemicalTable"
import ChemicalAnalysisTable from "../components/homeadmin/Tables/ChemicalAnalysisTable"
import ChemicalImpactTable from "../components/homeadmin/Tables/ChemicalImpactTable"
import ChemicalTable from "../components/homeadmin/Tables/ChemicalTable"
import ImpactCategoryTable from "../components/homeadmin/Tables/ImpactCategoryTable"
import ImpactTable from "../components/homeadmin/Tables/ImpactTable"
import OrderTable from "../components/homeadmin/Tables/OrderTable"
import SampleCategoryTable from "../components/homeadmin/Tables/SampleCategoryTable"
import TestGroupsTable from "../components/homeadmin/Tables/TestGroupsTable"
import TestGroupTestPackTable from "../components/homeadmin/Tables/TestGroupTestPackTable"
import TestPackChemicalAnalysisTable from "../components/homeadmin/Tables/TestPackChemicalAnalysisTable"
import TestPacksTable from "../components/homeadmin/Tables/TestPacksTable"

const routes = [
  { path: '/homeAdmin',exact:true, name: 'Home Admin', component: SampleCategoryTable },
  { path: '/homeAdmin/samplecategory', name: 'SampleCategory', component: SampleCategoryTable },
  { path: '/homeAdmin/testgroup', name: 'TestGroup', component: TestGroupsTable },
  { path: '/homeAdmin/testpack', name: 'TestPacks', component: TestPacksTable },
  { path: '/homeAdmin/testgrouptestpack', name: 'TestGroupTestPack', component: TestGroupTestPackTable },
  { path: '/homeAdmin/chemicalanalysis', name: 'ChemicalAnalysis', component: ChemicalAnalysisTable },
  { path: '/homeAdmin/testpackchemicalanalysis', name: 'TestChemicalAnalysis', component: TestPackChemicalAnalysisTable },
  { path: '/homeAdmin/chemical', name: 'Chemical', component: ChemicalTable },
  { path: '/homeAdmin/chemicalanalysischemical', name: 'ChemicalAnalysisChemical', component: ChemicalAnalysisChemicalTable },
  { path: '/homeAdmin/impactcategory', name: 'ImpactCategory', component: ImpactCategoryTable },
  { path: '/homeAdmin/impact', name: 'Impact', component: ImpactTable },
  { path: '/homeAdmin/chemicalimpact', name: 'ChemicalImpact', component: ChemicalImpactTable },
  { path: '/homeAdmin/order', name: 'Order', component: OrderTable }
]
// export default routes
export default routes