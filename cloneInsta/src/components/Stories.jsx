import { useState } from "react"
import StoryViewer from "./StoryViewer"

function Stories() {
  const [viewer, setViewer] = useState(null)
  const [seen, setSeen] = useState({})

  const users = [
    {
      name: "bruno",
      stories: [
        { type: "image", src: "https://picsum.photos/400/700?1", duration: 5000 },
        { type: "image", src: "https://picsum.photos/400/700?2", duration: 5000 }
      ]
    },
    {
      name: "dev",
      stories: [
        { type: "image", src: "https://picsum.photos/400/700?3", duration: 5000 },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 8000 }
      ]
    }
  ]

  const openStory = (index) => {
    setSeen(prev => ({ ...prev, [index]: true }))
    setViewer({ userIndex: index, storyIndex: 0 })
  }

  return (
    <>
      <div className="stories">
        {users.map((user, index) => (
          <div
            key={index}
            className={`story ${seen[index] ? "seen" : ""}`}
            onClick={() => openStory(index)}
          >
            <div className="story-ring">
              <img src={user.stories[0].src} className="story-avatar" />
            </div>
            <span>{user.name}</span>
          </div>
        ))}
      </div>

      {viewer && (
        <StoryViewer
          users={users}
          viewer={viewer}
          setViewer={setViewer}
          onClose={() => setViewer(null)}
        />
      )}
    </>
  )
}

export default Stories