import { CContainer, CSpinner } from "@coreui/react";
import { Component, Suspense } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import AppHomeFooter from "../components/Home/AppHomeFooter";
import AppHomeHeader from "../components/Home/AppHomeHeader";
import routesHome from "../routes/routes_home";
import { AppState } from "../_helpers";

class HomePage extends Component<any,any> {
    render(){
        return (
        <div>
          <AppHomeHeader />
                    <CContainer >
                    <Suspense fallback={<CSpinner color="primary" />}>
                        <Switch>
                        {routesHome.map((route, idx) => {
                            return (
                            route.component && (
                                <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                //name={route.name}
                                
                                render={(props: any) => (
                                  <>
                                    <route.component {...props} />
                                  </>
                                )}
                                ></Route>
                            )
                            )
                        })}
                        </Switch>
                    </Suspense>
                    
                    </CContainer>
                    <AppHomeFooter />
        </div>);
    }
}


const mapStateToProps = (state: AppState) => {
    return {
    auth: state.authentication,
    }
  };

export default connect(mapStateToProps, null)(HomePage);