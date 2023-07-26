import React from 'react'
import { useIsFetching, useIsMutating } from 'react-query'
import * as S from './style'
import { getToken } from '../../../utils/userTokenCookie'

function Loading() {
  console.log('loading')
  return (
    <S.LoadingOverlay>
      <S.LoadingWrapper>
        <S.Loading />
      </S.LoadingWrapper>
    </S.LoadingOverlay>
  )
}

export default Loading
