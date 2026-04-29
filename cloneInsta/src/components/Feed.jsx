import Stories from "./Stories"
import Post from "./Post"

function Feed() {
  return (
    <div className="feed">

      <Stories />

      <Post 
        username="bruno"
        image="https://picsum.photos/500/500?1"
        caption="Primeiro post 🔥"
      />

      <Post 
        username="dev"
        image="https://picsum.photos/500/500?2"
        caption="Aprendendo React 🚀"
      />

    </div>
  )
}

export default Feed