import React from 'react'

import { CSidebar, CSidebarNav } from '@coreui/react'

import  AppSidebarNav  from './AppSidebarNav'


import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from './_nav'


const AppSidebar = () => {

  return (
    <CSidebar
      position="fixed"
    >
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)