import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { sidebarItems } from './data/SiderbarData'
import AddIcon from '@material-ui/icons/Add'
import db from '../firebase'
import {useHistory} from 'react-router-dom'

const Sidebar = (props) => {

    const history = useHistory();

    const goToChannel = (id)=>{
        if(id){
            history.push(`/room/${id}`)
        }
    }


    const addChannel = () => {
        const propsName = prompt('Enter Channel Name');
        if(propsName){
            db.collection('rooms').add({
                name:propsName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Duy
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
                            <Channel onClick={()=>goToChannel(item.id)} > 
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
    background:#3F0E40;

`

const WorkspaceContainer = styled.div`
    color:white;
    height:64px;
    display:flex;
    align-items:center;
    padding-left:16px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;

`
const Name = styled.div`

`

const NewMessage = styled.div`
    width:36px;
    height:36px;
    background: white;
    border-radius:50%;
    color: #3F0E40;
    fill:#3F0E40;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    margin-right:20px;
    
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
        background:#350D36;
    }
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
`
const ChannelsList = styled.div`

`

const Channel = styled.div`
    height:28px;
    display:flex;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    :hover{
        background:#350D36;
    }
`