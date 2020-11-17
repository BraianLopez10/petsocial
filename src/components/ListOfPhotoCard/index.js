import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
const withPhotos = gql`
  query getPhotos{
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const ListOfPhotoCard = () => {
  const { loading, error, data } = useQuery(withPhotos)
  if (loading) return <h1>Cargando...</h1>
  if (error) return <p>Error...</p>

  return (
    <ul>
      {data.photos.map((p, index) => <li key={index} ><PhotoCard {...p} /></li>)}
    </ul>
  )
}
