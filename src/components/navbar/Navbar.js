
import './Navbar.css';
import avatar from '../../assets/avatar.jpg'

const Navbar = ({sidebarOpen, openSidebar}) => {

    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#a">Produtos</a>
                <a href="#b">Usuários</a>
                <a href="#c" className="active_link">Admin</a>
            </div>
            
            <div className="navbar__right">
                <a href="#d">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#e">
                    <i className="fa fa-clock-o"></i>
                </a>

               <a href="#f">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>


        </nav>
    )

}

export default Navbar;