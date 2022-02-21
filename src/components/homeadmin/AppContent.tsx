import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../../routes/routes'
import { HomePackageAdminRoute } from '../../routes';
import SampleCategory from './data/SampleCategory';
import TestGroup from './data/TestGroup';

const AppContent = React.memo(() => {
  return (
    <CContainer>
      
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route: any, idx: any) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  component = {route.component }
                  // render={(props) => (
                  //   <>
                  //     <route.component {...props} />
                  //   </>
                  // )}
                />
              )
            )
          })}
        </Switch>
      </Suspense>
    </CContainer>
  )
});

export default React.memo(AppContent)
