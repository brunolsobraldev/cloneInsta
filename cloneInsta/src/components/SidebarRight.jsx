import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SidebarRight() {
  const navigate = useNavigate()

  const [suggestions, setSuggestions] = useState([
    {
      name: "ana.dev",
      info: "Seguido por bruno",
      img: "https://i.pravatar.cc/40?img=5",
      following: false
    },
    {
      name: "joao.code",
      info: "Novo no Instagram",
      img: "https://i.pravatar.cc/40?img=6",
      following: false
    },
    {
      name: "maria.ui",
      info: "Seguido por dev",
      img: "https://i.pravatar.cc/40?img=7",
      following: false
    }
  ])

  const toggleFollow = (index) => {
    const updated = [...suggestions]
    updated[index].following = !updated[index].following
    setSuggestions(updated)
  }

  return (
    <div className="sidebar-right">

      {/* PERFIL */}
      <div className="profile">
        <img src="https://i.pravatar.cc/50?img=1" />
        <div>
          <strong>bruno.lopes</strong>
          <p>Bruno Lopes</p>
        </div>
        <span className="switch">Mudar</span>
      </div>

      {/* HEADER */}
      <div className="suggestions-header">
        <span>Sugestões para você</span>
        <span className="see-all">Ver tudo</span>
      </div>

      {/* LISTA */}
      {suggestions.map((user, index) => (
        <div key={index} className="suggestion">
          <img src={user.img} />

          <div className="info">
            <strong>{user.name}</strong>
            <p>{user.info}</p>
          </div>

          <button
            onClick={() => toggleFollow(index)}
            className={`follow-btn ${user.following ? "following" : ""}`}
          >
            {user.following ? "Seguindo" : "Seguir"}
          </button>
        </div>
      ))}

      {/* 🔥 LINKS IGUAL INSTAGRAM */}
      <div className="insta-links">
        <span>Sobre</span> • <span>Ajuda</span> • <span>Imprensa</span> • 
        <span>API</span> • <span>Carreiras</span> • <span>Privacidade</span> • 
        <span>Termos</span> • <span>Localizações</span> • <span>Idioma</span> • 
        <span>Meta Verified</span>
      </div>

      <div className="copyright">
        © 2025 Instagram from Meta
      </div>

      {/* 🔥 DIRECT IGUAL INSTAGRAM */}
      <div className="direct-box" onClick={() => navigate("/messages")}>

        <div className="direct-header">
          <span className="icon">💬</span>
          <span>Mensagens</span>
          <span className="badge">3</span>
        </div>

        <div className="direct-users">
          <img src="https://i.pravatar.cc/30?img=10" />
          <img src="https://i.pravatar.cc/30?img=11" />
          <img src="https://i.pravatar.cc/30?img=12" />
        </div>

      </div>

    </div>
  )
}

export default SidebarRight