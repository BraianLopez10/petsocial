import React, { useRef, useEffect, useState } from 'react'
import { Button, WrapperImage, Img, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAUL_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, likes = 0, src = DEFAUL_IMAGE }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver
      : import('intersection-observer'))
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            console.log('Si')
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
      })
  }, [ref])

  return (
    <Article ref={ref}>
      { show && (
        <>
          <a href={`/detail/${id}`}>
            <WrapperImage>
              <Img src={src} alt="mascota"/>
            </WrapperImage>
          </a>
          <Button>
            <MdFavoriteBorder size='32px'></MdFavoriteBorder>{likes} likes!
          </Button>
        </>
      ) }
    </Article>
  )
}
