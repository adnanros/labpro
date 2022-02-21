import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../../routes/routes'
import { HomePackageAdminRoute } from '../../routes';

const AppContent = (() => {
  return (
    <CContainer >
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <HomePackageAdminRoute
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  
                  // render={(props: any) => (
                  //   <>
                  //     <route.component {...props} />
                  //   </>
                  // )}
                ><route.component/></HomePackageAdminRoute>
              )
            )
          })}
        </Switch>
      </Suspense>
      
    </CContainer>
  )
});

export default AppContent
