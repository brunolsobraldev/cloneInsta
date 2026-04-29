function Post({ username, image, caption }) {
  return (
    <div className="post">

      <div className="post-header">
        <div className="avatar"></div>
        <span>{username}</span>
      </div>

      <img src={image} className="post-img" />

      <div className="post-actions">
        ❤️ 💬 ➤
      </div>

      <div className="post-info">
        <p><strong>{username}</strong> {caption}</p>
      </div>

    </div>
  )
}

export default Post