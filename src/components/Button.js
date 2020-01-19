import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform: capitalize;
background: trasparent;
font-size: 1.4rem;
border: 0.09rem solid black;
border-color:${props => props.cart?"var(--mainYellow)":"0.09rem solid black"};
color:${props => props.cart?"var(--mainYellow)":"light dark"};
border-radius: 0.5rem;
padding: 0.2 rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
background: orange;
color:black;
}
&:focus{
outline: none:
}

`