import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { Skeleton } from '../../utils/skeleton'

function useCategoryData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-tmst-4lx4pvdj9.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }, [])

  return { categories, loading }
}
export const ListCategory = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoryData()
  useEffect(function () {
    function onScrollEvent (e) {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed ? setShowFixed(true) : setShowFixed(false)
    }

    document.addEventListener('scroll', onScrollEvent)
    return () => {
      document.removeEventListener('scroll', onScrollEvent)
    }
  }, [])

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {categories.map((c, index) => <Item key={index}><Category {...c} /></Item>)}
      </List>
    )
  }
  if (loading) {
    return <Skeleton></Skeleton>
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
