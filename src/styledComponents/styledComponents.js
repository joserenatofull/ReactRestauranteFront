import styled, {css} from 'styled-components';

const Campo = styled.div`
margin-bottom:10px;
`;

const Rotulo = styled.label`
width: 70px;
  @media (max-width:426px){
    display:block;
  }
  ${props => props.largura100 && css `
  width:100px;  
  `}
`;

const Input = styled.input`

width:250px;
padding: 5px 10px;
font-size: 1.25em;
background-color: white;

${ props => props.fundoCinza && css`
background-color: whiteSmoke;`}
`;

const Botao = styled.button`
margin-top:20px;

`

const Selectt = styled.select`

width:250px;
padding: 5px 10px;
font-size: 1em;
`
export  {
    Campo,Rotulo,Input,Botao,Selectt
}