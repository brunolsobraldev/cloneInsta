import { useNavigate } from "react-router-dom"

function DirectFloating() {
  const navigate = useNavigate()

  return (
    <div className="direct-floating" onClick={() => navigate("/messages")}>

      {/* ÍCONE + BADGE */}
      <div className="direct-icon">
        💬
        <span className="badge">7</span>
      </div>

      {/* TEXTO */}
      <span className="direct-text">Mensagens</span>

      {/* AVATARES */}
      <div className="direct-avatars">
        <img src="https://i.pravatar.cc/30?img=10" />
        <img src="https://i.pravatar.cc/30?img=11" />
        <img src="https://i.pravatar.cc/30?img=12" />
      </div>

    </div>
  )
}

export default DirectFloating