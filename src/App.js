import React from 'react'
import { ListCategory } from './components/ListOfCategory'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Logo></Logo>
      <ListCategory></ListCategory>
      <ListOfPhotoCard></ListOfPhotoCard>
    </>
  )
}
