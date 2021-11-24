import styled from "styled-components";
import React from 'react'

function Login(props) {
    return (
        <div>
            <Container>
                <Content>content</Content>
            </Container>
        </div>
    )
}
const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;
const Content = styled.div`
 margin-bottom:10vw;
 width:100%;
 position:relative;
 min-height:100vh;
 box-sizing:border-box;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-item:center;
 padding:80px 40px;
 height:100%;
`;

export default Login
