import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import firebase from 'firebase'

const Chat = ({ user }) => {

    let { channelId } = useParams();

    const [channel, setChannel] = useState([]);
    const [message, setMessage] = useState([])

    const getMessage = () => {
        db.collection('rooms')
            .doc(channelId)
            .collection('message')
            .orderBy('time','asc')
            .onSnapshot((snapshot) => {
                let message = snapshot.docs.map((doc) => doc.data())
                setMessage(message)
            })
    }

    const sendMessage = (text) => {
        let send = {
            name: user.name,
            picture: user.photo,
            text: text,
            time: firebase.firestore.Timestamp.now()
        }
        db.collection('rooms')
            .doc(channelId)
            .collection('message')
            .add(send);

    }
 
    const getChannel = () => {
        db.collection('rooms')
            .doc(channelId)
            .onSnapshot((snapshot) => {
                setChannel(snapshot.data());
            })
    }




    useEffect(() => {
        getChannel();
        getMessage();
    }, [channelId])

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel.name}
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide announcements and work-based matters
                    </ChannelInfo>
                </Channel>

                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />

                </ChannelDetails>

            </Header>

            <MessageContainer>
                {
                    message.length > 0 &&
                    message.map((data, index) => (
                        <ChatMessage
                            text={data.text}
                            name={data.name}
                            image={data.picture}
                            time={data.time} />))
                }
            </MessageContainer>
            <ChatInput sendMessage={sendMessage} />

        </Container>
    )
}

export default Chat


const Container = styled.div`
    display:grid;
    grid-template-rows: 64px auto min-content;
    min-height:0;

`
const Channel = styled.div`

`

const Header = styled.div`
    padding-left:20px;
    padding-right:20px;
    display:flex;
    align-items:center;
    border-bottom:1px solid rgba(83,39,83,.13);
    justify-content:space-between;
`
const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight:400;
    color: #606060;
    font-size:13px;
    margin-top:8px;
`

const ChannelDetails = styled.div`
    display:flex;
    align-items:center;
    color:#606060;
`
const Info = styled(InfoOutlinedIcon)`
    margin-left:10px;
`

const MessageContainer = styled.div`
    display:flex;
    flex-direction: column;
    overflow: scroll;
`

