function DirectFloating({ setOpenDirect }) {

  const chats = [
    {
      name: "lizin.nk9",
      msg: "Você: Veio só uma preta...",
      time: "3 min",
      img: "https://i.pravatar.cc/50?img=10",
      unread: false
    },

    {
      name: "Mascote e dois gorilas",
      msg: "enviou um anexo.",
      time: "1 h",
      img: "https://i.pravatar.cc/50?img=11",
      unread: true
    },

    {
      name: "Carol",
      msg: "Você: 😳",
      time: "1 h",
      img: "https://i.pravatar.cc/50?img=12",
      unread: false
    }
  ]

  return (
    <div className="direct-popup">

      {/* HEADER */}
      <div className="direct-popup-header">

        <div className="direct-title">

          <span>
            Mensagens
          </span>

          <div className="direct-badge">
            3
          </div>

        </div>

        <div className="direct-header-icons">

          <button>
            ⛶
          </button>

          {/* FECHAR */}
          <button
            onClick={() => setOpenDirect(false)}
          >
            ✕
          </button>

        </div>

      </div>

      {/* LISTA */}
      <div className="direct-chat-list">

        {chats.map((chat, index) => (

          <div
            key={index}
            className="direct-chat"
          >

            <img
              src={chat.img}
              alt=""
            />

            <div className="direct-chat-info">

              <strong>
                {chat.name}
              </strong>

              <p>
                {chat.msg} · {chat.time}
              </p>

            </div>

            {chat.unread && (
              <div className="unread-dot"></div>
            )}

          </div>

        ))}

      </div>

      {/* BOTÃO */}
      <button className="new-message-btn">
        ✎
      </button>

    </div>
  )
}

export default DirectFloating