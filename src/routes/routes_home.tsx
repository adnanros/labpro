import AppHomeContent from "../components/Home/AppHomeContent"
import OrderRegisterationPage from "../components/Home/pages/OrderRegisterationPage"
import SampleCategoryDetailsPage from "../components/Home/pages/SampleCatergoryDetailsPage"
import resultListPage from "../pages/resultListPage"


const routesHome = [
    { path: '/', exact:true, name: 'Home', component: AppHomeContent,isSignedInRequired: false },
    { path: '/sampleCategoryDetails', exact:true, name: 'Sample category details', component: SampleCategoryDetailsPage ,isSignedInRequired: false},
    { path: '/orderRegisteration', exact:true, name: 'Order registration', component: OrderRegisterationPage ,isSignedInRequired: true},
    { path: '/resulList', exact:true, name: 'Results list', component: resultListPage ,isSignedInRequired: true},
  ]
  // export default routes
  export default routesHome