import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import SidebarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import Feed from './components/Feed'
import DirectFloating from './components/DirectFloating'
import MessageButton from './components/MessageButton'

import './App.css'

function Home() {
  return <Feed />
}

function Reels() {
  return <h1 style={{ color: "white" }}>Reels</h1>
}

function Messages() {
  return <h1 style={{ color: "white" }}>Mensagens</h1>
}

function Profile() {
  return <h1 style={{ color: "white" }}>Perfil</h1>
}

function App() {

  const [openDirect, setOpenDirect] = useState(false)

  return (
    <div className="layout">

      {/* ESQUERDA */}
      <SidebarLeft />

      {/* CENTRO */}
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {/* DIREITA */}
      <SidebarRight setOpenDirect={setOpenDirect} />

<MessageButton setOpenDirect={setOpenDirect} />

      {/* DIRECT */}
      {openDirect && (
        
        <DirectFloating setOpenDirect={setOpenDirect} />
      )}

    </div>
  )
}

export default App