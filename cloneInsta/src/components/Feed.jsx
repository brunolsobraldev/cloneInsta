import Stories from "./Stories"
import Post from "./Post"

import rolezinBruno from "../assets/rolezinBruno.png"
import rolezinDev from "../assets/rolezinDev.png"
import perfilBruno from "../assets/perfilBruno.png"

function Feed() {
  return (
    <div className="feed">

      <Stories />

      <Post 
        username="Bruno Lopes"
        profilePic={perfilBruno}
        image={rolezinBruno}
        caption="A cabeça tá em 4K e o corpo carregando em 144p 💀"
      />

      <Post 
        username="Lopes Urban"
        profilePic={perfilBruno}
        image={rolezinDev}
        caption="Quem tem presença, usa Lopes Urban."
      />

    </div>
  )
}

export default Feed