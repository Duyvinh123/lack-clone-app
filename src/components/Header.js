import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import {useState} from 'react'

const Header = ({user,logOut}) => {

    const [toggle,setToggle] = useState(false)

    return (
        <Container>

            <Main>
                <AccessTimeIcon />
                <SearchContainer >
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>

            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={()=>setToggle(!toggle)} >
                    <img src={user.photo ? user.photo : "https://lh3.googleusercontent.com/proxy/xnNjvUYWb12eyTf3EQIjvFuIzQqcEQnvEOaPpljiCGEbG9WV6_C3gAxo2jdkcz-9apuCKlDCxNqXNEcOLGN6h0fEHx9cC_kjj5NNCrNuS3mKeBSgZ1JrC7O_KR3FCxAzoQtyWe6T7TJshv1W"} />
               { toggle?<LogOut>
                    <h3>Profile</h3>
                    <h3 onClick={logOut} >LogOut</h3>
                </LogOut>:null }
                </UserImage>
            </UserContainer>
        </Container>


    )
}

export default Header


const Main = styled.div`
    display:flex;
    align-items:center;
    margin-left:16px;
    margin-right:16px;
`

const Container = styled.div`
    background:#010305;
    color:#919293;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    box-shadow:0 1px 0 0 rgb(255 255 255 / 10%);
`
const SearchContainer = styled.div`
    min-width:400px;
    margin-left:16px;
    margin-right:16px;
`

const Search = styled.div`
    width:100%;
    border-radius:6px;
    box-shadow: 0 0 0 1px rgb(104 74 104);
    display:flex;
    align-items:center;

    input {
        background-color:transparent;
        border:none;
        padding-left:8px;
        padding-right:8px;
        color:#919293;
        padding-top:4px;
        padding-bottom:4px;
    }
    input:focus {
        outline:none;
    }
`
const UserContainer = styled.div`
    display:flex;
    align-items:center;
    padding-right:16px;
    position: absolute;
    right:0;
`

const Name = styled.div`
    padding-right:16px;

`

const UserImage = styled.div`
    padding-right:16px;
    width:26px;
    height:26px;


    img {
        width:100%;
        border-radius:50%;
        cursor:pointer;
    }
`
const LogOut = styled.div`
    position: fixed;
    top:32px;
    right:3px;
    background:#121416;
    border-radius:4px;
    overflow: hidden;
    h3{
        cursor:pointer;
        margin-top:5px;

        padding: 5px 10px;
        :hover {
            background:#454749;
        }
    }
`