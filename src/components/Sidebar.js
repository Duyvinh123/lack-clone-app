import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { sidebarItems } from './data/SiderbarData'
import AddIcon from '@material-ui/icons/Add'
import db from '../firebase'
import { useHistory, Link } from 'react-router-dom'

const Sidebar = (props) => {

    const history = useHistory();

    const goToChannel = (id) => {
        if (id) {
            history.push(`/room/${id}`)
        }
    }


    const addChannel = () => {
        const propsName = prompt('Enter Channel Name');
        if (propsName) {
            db.collection('rooms').add({
                name: propsName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    <Link to="/" style={{ color: '#919293', textDecoration: 'none', fontWeight: '700', fontSize: '18px' }} >
                        Slack App
                    </Link>
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>

            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>

                    <div>
                        Channel
                    </div>

                    <AddIcon onClick={addChannel} />
                </NewChannelContainer>

                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)} >
                                # {item.name}
                            </Channel>
                        )
                        )
                    }
                </ChannelsList>
            </ChannelsContainer>


        </Container>
    )
}


export default Sidebar


const Container = styled.div`
    background:#121416;

`

const WorkspaceContainer = styled.div`
    color:white;
    height:64px;
    display:flex;
    align-items:center;
    padding-left:16px;
    justify-content: space-between;
    border-bottom: 1px solid #454749  ;

`
const Name = styled.div`
`

const NewMessage = styled.div`
    width:36px;
    height:36px;
    background: white;
    border-radius:50%;
    color: #111;
    fill:#111;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    margin-right:20px;
    background:#ff5500;
    
`

const MainChannels = styled.div`
    margin-top:20px;
`

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height:28px;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    margin-top:3px;
    :hover {
        background:#454749;
    }
    color:#919293
`

const ChannelsContainer = styled.div`
    color:rgb(188,171,188);
    margin-top: 10px;

`

const NewChannelContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    height:28px;
    padding-left:10px;
    padding-right:10px;
    cursor:pointer;
    color:#919293;
`
const ChannelsList = styled.div`
    color:#919293;
`

const Channel = styled.div`
    height:28px;
    display:flex;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    :hover{
        background:#454749;
    }
`