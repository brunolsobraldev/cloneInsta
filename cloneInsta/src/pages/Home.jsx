import SidebarLeft from '../components/SidebarLeft'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className="layout">

      <SidebarLeft />

      <div className="main">
        <div className="feed">
          <Post 
            username="bruno"
            image="https://via.placeholder.com/500"
            caption="Primeiro post 🔥"
          />

          <Post 
            username="dev"
            image="https://via.placeholder.com/500"
            caption="Aprendendo React 🚀"
          />
        </div>

        <Sidebar />
      </div>

    </div>
  )
}

export default Home