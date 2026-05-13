import Stories from "./Stories"
import Post from "./Post"

import rolezinBruno from "../assets/rolezinBruno.png"
import rolezinDev from "../assets/rolezinDev.png"
import perfilBruno from "../assets/perfilBruno.png"
import urbanStyle from "../assets/urbanStyle.png"
import jurikiJuriki from "../assets/Juriki.png"
import roupa from "../assets/roupasUrban.png"

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
        profilePic={rolezinDev}
        image={roupa}
        caption="Quem tem presença, usa Lopes Urban."
      />
      <Post 
        username="JURIKI"
        profilePic={jurikiJuriki}
        image={urbanStyle}
        caption="A justiça que fala sua lingua."
      />
      
      

    </div>
  )
}

export default Feed