import { useState } from "react"

function Post({ username, image, caption, profilePic }) {
  const [liked, setLiked] = useState(false)

  const [comments, setComments] = useState([
    {
      user: "user123",
      text: "Muito bom 🔥"
    }
  ])

  const [newComment, setNewComment] = useState("")

  // CURTIR
  const handleLike = () => {
    setLiked(!liked)
  }

  // COMENTAR
  const handleComment = (e) => {
    e.preventDefault()

    if (!newComment.trim()) return

    setComments([
      ...comments,
      {
        user: "bruno.lopes",
        text: newComment
      }
    ])

    setNewComment("")
  }

  return (
    <div className="post">

      {/* HEADER */}
      <div className="post-header">

        {/* FOTO PERFIL */}
        <img
          src={profilePic}
          alt={username}
          className="post-profile"
        />

        {/* USER */}
        <span className="post-username">
          {username}
        </span>

        {/* MENU */}
        <span className="post-more">
          
        </span>

      </div>

      {/* FOTO */}
      <img
        src={image}
        alt="post"
        className="post-img"
      />

      {/* AÇÕES */}
      <div className="post-actions">

        <span
          className={`action-icon ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          {liked ? "❤️" : "🤍"}
        </span>

        <span className="action-icon">
          💬
        </span>

        <span className="action-icon">
          ➤
        </span>

      </div>

      {/* CURTIDAS */}
      <div className="likes">
        Curtido por <strong>user123</strong> e outros
      </div>

      {/* LEGENDA */}
      <div className="post-info">
        <p>
          <strong>{username}</strong> {caption}
        </p>
      </div>

      {/* COMENTÁRIOS */}
      <div className="post-comments">

        {comments.map((comment, index) => (
          <p key={index}>
            <strong>{comment.user}</strong> {comment.text}
          </p>
        ))}

      </div>

      {/* INPUT */}
      <form
        onSubmit={handleComment}
        className="comment-box"
      >

        <input
          type="text"
          placeholder="Adicione um comentário..."
          value={newComment}
          onChange={(e) =>
            setNewComment(e.target.value)
          }
        />

        <button type="submit">
          Publicar
        </button>

      </form>

    </div>
  )
}

export default Post