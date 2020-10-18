import React from 'react'
import { Button, WrapperImage, Img } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAUL_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, likes = 0, src = DEFAUL_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <WrapperImage>
          <Img src={src} alt="mascota"/>
        </WrapperImage>
      </a>
      <Button>
        <MdFavoriteBorder size='32px'></MdFavoriteBorder>{likes} likes!
      </Button>
    </article>
  )
}
