import styled from '@emotion/styled';

const Label = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 0;
`

const Component = ({ text }) => {
    return <Label>{text}</Label>
}

export default Component
