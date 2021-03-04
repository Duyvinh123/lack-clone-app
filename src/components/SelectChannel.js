import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'

const SelectChannel = () => {
    
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
            <SelectContent onClick={addChannel}>
                Create Channel
                <Icon />
            </SelectContent>
        </Container>
    )
}

export default SelectChannel


const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const SelectContent = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 15px 30px;
    font-size:20px;
    font-weight:700;
    border:none;
    cursor:pointer;
    outline:none;
`
const Icon = styled(AddIcon)`
    Color:red;
`