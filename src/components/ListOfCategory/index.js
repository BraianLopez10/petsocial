import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
export const ListCategory = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://petgram-tmst-4lx4pvdj9.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
      .catch(err => console.log(err))
  }, [])

  const renderList = (fixed) => {
    return (
      <List className={fixed ? 'fixed' : ''}>
        {categories.map((c, index) => <Item key={index}><Category {...c} /></Item>)}
      </List>
    )
  }
  return (
    <>
      { renderList()}
      {renderList(true)}
    </>
  )
}
