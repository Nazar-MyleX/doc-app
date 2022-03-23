import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 272px;
  background: #FFFFFF;
  padding: 50px 23px 34px;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    color: #338EB4;
    font-weight: 500;
  }
`

export const TextIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 17px;
`

export const BottomContainer = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 21px;
`
