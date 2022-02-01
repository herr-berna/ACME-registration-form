// Desse arquivo serão importados os styles
import styled from 'styled-components';

export const Grid = styled.div`

`;

// Todas as children de Row terão propriedades flex
export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size}
`

export const Header = styled.div`
height: 84px;
border: 1px solid red;
margin-bottom: 2.7rem;
`

export const Title = styled.h1`
  font-size: 36px;
  margin: 1rem auto 3rem;
  padding-left: 1.5rem;
  color: var(--main-color);
  font-weight: 400;
  span {
    color: var(--secondary-color);
    display: block;
    font-size: 24px;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    color: #012856;
    margin: 1.3rem auto 2rem;
  }
`

export const MainButton = styled.button`
width: 318px;
display: flex;
align-items: center;
justify-content: center;
height: 75px;
margin: 2rem auto;
border: 1px solid #95D6F2;
box-shadow: 0px 1px 5px 3px rgba(190, 178, 178, 0.25);
border-radius: 7px;
  span {
    color: #012856;
    font-size: 18px;
    font-weight: 500;
    margin-left: .7rem;
  }
`;

export const SecButton = styled.button`
height: 57px;
width: 146px;
display: flex;
align-items: center;
justify-content: center;
margin: 2.7rem auto;
border: 1px solid #55B995;
box-shadow: 0px 1px 5px 3px rgba(190, 178, 178, 0.25);
border-radius: 7px;
  span {
    color: #55B995;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Footer = styled.div`
position: absolute;
width: 360px;
height: 17px;
background-color: #012856;
bottom: 0;
left: 0;
`;
// export const FlexWrapper = 