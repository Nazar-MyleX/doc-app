import styled from '@emotion/styled';

const TextArea = styled.textarea`
  border: 1px solid #D0D4D9;
  box-sizing: border-box;
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #666666;
  outline: none;
  width: ${props => props.width || '100%'};
  height: 45px;
  resize: none;
  overflow:hidden;
`

export default TextArea
