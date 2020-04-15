import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: white;
    background-color: grey;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`
const StyledImage = styled.img`
    box-shadow: 0 0 5px #ddd;
    width: 30%;
    height: auto;
    border-radius: 50%;
    border-style: dotted;

`

function UserCard (props) {
    return(
        <div className="MainHeader">
            <StyledDiv className="MainUser">
                <p>...this is my information...</p>
                <h3>login: {props.dataSet.login} </h3>
                <p>name: {props.dataSet.name}</p>
                <StyledImage src={props.dataSet.avatar_url} alt={props.dataSet.login}/>
                
                
            </StyledDiv>
        </div>
    );
};

export default UserCard