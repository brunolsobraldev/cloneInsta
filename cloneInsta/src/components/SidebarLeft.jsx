import { NavLink } from "react-router-dom"
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineHeart
} from "react-icons/ai"
import {
  MdOutlineExplore,
  MdOutlineSlowMotionVideo
} from "react-icons/md"
import { FiMessageCircle, FiPlusSquare } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { FaInstagram } from "react-icons/fa"

function SidebarLeft() {
  return (
    <div className="sidebar-left">

      <h2 className="logo">
        <FaInstagram />
      </h2>


      <nav>

        <NavLink to="/" className="menu-item" data-label="Página inicial">
          <AiFillHome />
        </NavLink>

        <div className="menu-item" data-label="Pesquisa">
          <AiOutlineSearch />
        </div>

        <div className="menu-item" data-label="Explorar">
          <MdOutlineExplore />
        </div>

        <NavLink to="/reels" className="menu-item" data-label="Reels">
          <MdOutlineSlowMotionVideo />
        </NavLink>

        <NavLink to="/messages" className="menu-item" data-label="Mensagens">
          <FiMessageCircle />
        </NavLink>

        <div className="menu-item" data-label="Notificações">
          <AiOutlineHeart />
        </div>

        <div className="menu-item" data-label="Criar">
          <FiPlusSquare />
        </div>

        <NavLink to="/profile" className="menu-item" data-label="Perfil">
          <CgProfile />
        </NavLink>
        

      </nav>

    </div>
  )
}

export default SidebarLeft