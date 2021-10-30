
import 'react-app-polyfill/stable'
import 'core-js'
import ReactDOM from 'react-dom'
import {App} from './App'
import { store } from './_helpers'
import { Provider } from 'react-redux'
//import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
         <App message={''} type={''} isLoadingAuthStatus={true} />
    </Provider> , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister()