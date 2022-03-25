import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 33px;
  height: 100%;
  width: 100%;
  background: linear-gradient(69.92deg, #1089BC 13.76%, #042330 140.51%);
  padding: 10px 61px 9px 26px;
`

export const InputList = styled.div`
  width: ${props => props.weight};
  display: flex;
  flex-direction: column;
  row-gap: 19.5px;
`

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;
`

export const DragDropWrapper = styled.div`
  width: 242px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #F0E6E6;
  border-radius: 20px;
  cursor: pointer;
`

export const DragDropText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #338EB4;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 25px;
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%
`
