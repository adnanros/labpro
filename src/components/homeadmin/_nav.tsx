import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
} from '@coreui/icons'
import {  CNavItem } from '@coreui/react'



const _nav = [
  {
    component: CNavItem,
    name: 'SampleCategory',
    to: '/homeAdmin/samplecategory',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TestGroups',
    to: '/homeAdmin/testgroup',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TestPacks',
    to: '/homeAdmin/testpack',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TestGroupTestPack',
    to: '/homeAdmin/testgrouptestpack',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ChemicalAnalysis',
    to: '/homeAdmin/chemicalanalysis',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TestPackChemicalAnalysis',
    to: '/homeAdmin/testpackchemicalanalysis',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Chemical',
    to: '/homeAdmin/chemical',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ChemicalAnalysisChemical',
    to: '/homeAdmin/chemicalanalysischemical',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ImpactCategory',
    to: '/homeAdmin/impactcategory',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Impact',
    to: '/homeAdmin/impact',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ChemicalImpact',
    to: '/homeAdmin/chemicalimpact',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Order',
    to: '/homeAdmin/order',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  }
]

export default _nav
