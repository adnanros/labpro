import AppHomeContent from "../components/Home/AppHomeContent"
import SampleCategoryDetailsPage from "../components/Home/pages/SampleCatergoryDetailsPage"


const routesHome = [
    { path: '/home', exact:true, name: 'Home', component: AppHomeContent },
    { path: '/home/sampleCategoryDetails', exact:true, name: 'Sample category details', component: SampleCategoryDetailsPage },
  ]
  // export default routes
  export default routesHome