import React from 'react'
import styled from 'styled-components'

const ChatMessage = ({text,time,image,name}) => {
    return (
        <Container>
            <UserAvatar>
                <img src={image} alt="" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(time.toDate()).toUTCString() }</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
    display:flex;
    padding: 8px 20px;
`
const UserAvatar = styled.div`
    width:36px;
    height:36px;
    overflow:hidden;
    border-radius:4px;
    margin-right:8px;
    align-items:center;
    img{
        width:100%;
        
    }

`
const MessageContent = styled.div`
    display:flex;
    flex-direction: column;
`
const Name = styled.div`
    font-weight:900;
    font-size:15px;
    line-height:1.4;
    span{
        font-weight:400;
        color:rgb(97,96,97);
        margin-left:5px;
        font-size:13px;
    }
`
const Text = styled.div`

`