import { useState } from "react"

function Post({ username, image, caption }) {
  const [comments, setComments] = useState([
    { user: "user123", text: "Muito bom 🔥" }
  ])
  const [newComment, setNewComment] = useState("")

  const handleComment = (e) => {
    e.preventDefault()

    if (!newComment.trim()) return

    setComments([
      ...comments,
      { user: "bruno.lopes", text: newComment }
    ])

    setNewComment("")
  }

  return (
    <div className="post">

      {/* HEADER */}
      <div className="post-header">
        <div className="avatar"></div>
        <span>{username}</span>
      </div>

      {/* IMAGEM */}
      <img src={image} className="post-img" />

      {/* AÇÕES */}
      <div className="post-actions">
        ❤️ 💬 ➤
      </div>

      {/* LEGENDA */}
      <div className="post-info">
        <p><strong>{username}</strong> {caption}</p>
      </div>

      {/* 🔥 COMENTÁRIOS */}
      <div className="post-comments">
        {comments.map((c, index) => (
          <p key={index}>
            <strong>{c.user}</strong> {c.text}
          </p>
        ))}
      </div>

      {/* 🔥 INPUT COMENTAR */}
      <form onSubmit={handleComment} className="comment-box">
        <input
          type="text"
          placeholder="Adicione um comentário..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Publicar</button>
      </form>

    </div>
  )
}

export default Post