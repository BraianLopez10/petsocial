import React, { useRef, useEffect, useState } from 'react'
import { Button, WrapperImage, Img, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
const DEFAUL_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, likes = 0, src = DEFAUL_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, elemento] = useNearScreen()
  const icon = !liked
    ? (
      <>
        <MdFavoriteBorder size='32px'></MdFavoriteBorder>{likes} likes!
      </>
    )
    : (
      <>
        <MdFavorite size='32px'></MdFavorite>{likes} likes!
      </>
    )

  return (
    <Article ref={elemento}>
      { show && (
        <>
          <a href={`/detail/${id}`}>
            <WrapperImage>
              <Img src={src} alt="mascota"/>
            </WrapperImage>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            {icon}
          </Button>
        </>
      ) }
    </Article>
  )
}
