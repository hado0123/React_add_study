import styled from 'styled-components'

// styled-components: 스타일을 줄수 있는 컴포넌트
const StyledButton = styled.button`
   color: white;
   background-color: green;
`

// 감싸기 기능: 기존 컴포넌트에 새로운 CSS를 붙여서 만든다
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   font-size: ${(props) => props.size || '10px'};
`

function ReactButton() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>버튼</LargeButton>
         <PrimaryButton primary>버튼</PrimaryButton>
         <PrimaryButton size="20px">버튼</PrimaryButton>
         <PrimaryButton>버튼</PrimaryButton>
      </>
   )
}

export default ReactButton
