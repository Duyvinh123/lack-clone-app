import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import SelectChannel from './components/SelectChannel'


const App = () => {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))


  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  const logOut = ()=>{
    localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {
    getChannels()
  }, [])

  return (
    <Router>
      {
        !user ?
          <Login setUser={setUser} />
          :
          <Container>
            <Header logOut={logOut} user={user} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path='/'>
                  <SelectChannel />
                </Route>
              </Switch>
            </Main>
          </Container>
      }
    </Router>
  )
}



export default App;


const Container = styled.div`
  width:100%;
  height:100vh;
  
  display:grid;
  grid-template-rows: 30px minmax(0,1fr);
`

const Main = styled.div`
  
  display: grid;
  grid-template-columns: 260px auto;

`