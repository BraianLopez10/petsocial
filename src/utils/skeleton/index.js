import React from 'react'
import { Items, Wrapper, Anchor, Image, Label } from './style'

function CategorySkeleton () {
  return (
    <Anchor>
      <Image src="" alt="cover"></Image>
      <Label></Label>
    </Anchor>
  )
}
export const Skeleton = () => {
  return (
    <Wrapper>
      <Items>
        {[1, 2, 3, 4, 5, 6].map((o, index) => <CategorySkeleton key={index}></CategorySkeleton>
        )}
      </Items>

    </Wrapper>
  )
}
