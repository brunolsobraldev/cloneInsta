import { useEffect, useState, useRef } from "react"

function StoryViewer({ users, viewer, setViewer, onClose }) {
  const { userIndex, storyIndex } = viewer
  const user = users[userIndex]
  const story = user.stories[storyIndex]

  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const [liked, setLiked] = useState(false)

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [likedFooter, setLikedFooter] = useState(false)

  const touchStartX = useRef(0)

  // PROGRESSO DINÂMICO
  useEffect(() => {
    setProgress(0)
    const duration = story.duration || 5000

    const interval = setInterval(() => {
      if (!paused) {
        setProgress(prev => {
          const inc = 100 / (duration / 100)
          if (prev >= 100) {
            handleNext()
            return 0
          }
          return prev + inc
        })
      }
    }, 100)

    return () => clearInterval(interval)
  }, [viewer, paused])

  // NEXT
  const handleNext = () => {
    if (storyIndex < user.stories.length - 1) {
      setViewer({ userIndex, storyIndex: storyIndex + 1 })
    } else if (userIndex < users.length - 1) {
      setViewer({ userIndex: userIndex + 1, storyIndex: 0 })
    } else {
      onClose()
    }
  }

  // PREV
  const handlePrev = () => {
    if (storyIndex > 0) {
      setViewer({ userIndex, storyIndex: storyIndex - 1 })
    } else if (userIndex > 0) {
      const prevUser = users[userIndex - 1]
      setViewer({
        userIndex: userIndex - 1,
        storyIndex: prevUser.stories.length - 1
      })
    }
  }

  // DOUBLE CLICK LIKE
  const handleDoubleClick = () => {
    setLiked(true)
    setTimeout(() => setLiked(false), 800)
  }

  // ENVIAR
  const handleSend = () => {
    if (!message.trim()) return
    setMessages([...messages, message])
    setMessage("")
  }

  // LIKE FOOTER
  const handleLikeFooter = () => {
    setLikedFooter(true)
    setTimeout(() => setLikedFooter(false), 600)
  }

  return (
    <div className="story-viewer">
      <div
        className="story-content"
        onMouseDown={() => setPaused(true)}
        onMouseUp={() => setPaused(false)}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const endX = e.changedTouches[0].clientX
          if (endX - touchStartX.current > 50) handlePrev()
          if (touchStartX.current - endX > 50) handleNext()
        }}
        onDoubleClick={handleDoubleClick}
      >

        {/* PROGRESS */}
        <div className="progress-container">
          {user.stories.map((_, i) => (
            <div key={i} className="progress-bar">
              <div
                className="progress"
                style={{
                  width:
                    i < storyIndex
                      ? "100%"
                      : i === storyIndex
                      ? `${progress}%`
                      : "0%"
                }}
              />
            </div>
          ))}
        </div>

        {/* MÍDIA */}
        {story.type === "video" ? (
          <video src={story.src} autoPlay muted />
        ) : (
          <img src={story.src} />
        )}

        {/* LIKE CENTRAL */}
        {liked && <div className="heart">❤️</div>}

        {/* HEADER */}
        <div className="story-header">
          <span>{user.name}</span>
          <button onClick={onClose}>✖</button>
        </div>

        {/* FOOTER */}
        <div className="story-footer">
          <input
            type="text"
            placeholder="Responder..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="story-input"
          />

          <button onClick={handleSend} className="send-btn">➤</button>

          <button
            onClick={handleLikeFooter}
            className={`like-btn ${likedFooter ? "liked" : ""}`}
          >
            ❤️
          </button>
        </div>

        {/* CLICK */}
      <div className="click-left" onClick={handlePrev}></div>
<div className="click-right" onClick={handleNext}></div>

      </div>
    </div>
  )
}

export default StoryViewer