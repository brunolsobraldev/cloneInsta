function MessageButton({ setOpenDirect }) {

  return (
    <div
      className="message-floating"
      onClick={() => setOpenDirect(true)}
    >

      <div className="message-left">

        <span className="message-icon">
          ➤
        </span>

        <span className="message-text">
          Mensagens
        </span>

        <div className="message-badge">
          5
        </div>

      </div>

      <div className="message-users">

        <img src="https://i.pravatar.cc/30?img=10" />
        <img src="https://i.pravatar.cc/30?img=11" />
        <img src="https://i.pravatar.cc/30?img=12" />

      </div>

    </div>
  )
}

export default MessageButton