import { Routes, Route } from 'react-router-dom'
import SidebarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'
import Feed from './components/Feed'
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
  return (
    <div className="layout">

      {/* SIDEBAR ESQUERDA */}
      <SidebarLeft />

      {/* CONTEÚDO CENTRAL */}
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {/* SIDEBAR DIREITA */}
      <SidebarRight />

    </div>
  )
}

export default App