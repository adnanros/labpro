import AppHomeContent from "../components/Home/AppHomeContent"
import OrderRegisterationPage from "../components/Home/pages/orderRegisterationPage"
import SampleCategoryDetailsPage from "../components/Home/pages/sampleCatergoryDetailsPage"
import ResultListPage from "../components/Home/pages/resultListPage"
import OrderListPage from "../components/Home/pages/orderListPage"


const routesHome = [
    { path: '/', exact:true, name: 'Home', component: AppHomeContent,isSignedInRequired: false },
    { path: '/sampleCategoryDetails', exact:true, name: 'Sample category details', component: SampleCategoryDetailsPage ,isSignedInRequired: false},
    { path: '/orderRegisteration', exact:true, name: 'Order registration', component: OrderRegisterationPage ,isSignedInRequired: true},
    { path: '/resultList', exact:true, name: 'Results list', component: ResultListPage ,isSignedInRequired: true},
    { path: '/orderList', exact:true, name: 'Order list', component: OrderListPage ,isSignedInRequired: true},
    
  ]
  // export default routes
  export default routesHome