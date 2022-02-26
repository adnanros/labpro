import AppHomeContent from "../components/Home/AppHomeContent"
import OrderRegisterationPage from "../components/Home/pages/OrderRegisterationPage"
import SampleCategoryDetailsPage from "../components/Home/pages/SampleCatergoryDetailsPage"


const routesHome = [
    { path: '/', exact:true, name: 'Home', component: AppHomeContent },
    { path: '/sampleCategoryDetails', exact:true, name: 'Sample category details', component: SampleCategoryDetailsPage },
  ]
  // export default routes
  export default routesHome