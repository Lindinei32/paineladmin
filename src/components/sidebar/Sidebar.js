import './Sidebar.css';
import logo from '../../assets/imagem.jpg'

const Sidebar =  ({sideBarOpen, closeSidebar }) => {
    return (
        <div className= {sideBarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__tittle">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>Qualquer Coisa</h1>
                </div>
                <i onClick={() => closeSidebar()}
                    className= "fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link" >
                    <i className="fa fa-minus-square"></i>
                    <a href="#top">Home </a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link" >
                <i className="fa fa-tachometer"></i>
                    <a href="#top">AREA ADMINISTRATIVA </a>
                </div>
                <div className="sidebar__link" >
                <i className="fa fa-building"></i>
                    <a href="#top">Lojas </a>
                </div>
                <div className="sidebar__link" >
                <i className="fa fa-archive"></i>
                    <a href="#top">Produtos</a>
                </div>
                <div className="sidebar__link" >
                <i className="fa fa-bars"></i>
                    <a href="#top">Categorias </a>
                </div>
                <div className="sidebar__link" >
                <i className="fa fa-cult"></i>
                    <a href="#top">Pedidos</a>
                </div>
                <h2>Pessoas</h2>
                <div className="sidebar__link" >
                <i className="fa fa-male"></i>
                    <a href="#top">ADMINISTRADORES </a>
                </div>
                <div className="sidebar__link" >
                <i className="fa fa-user-circle"></i>
                    <a href="#top">USUARIOS </a>
                </div>
                <div className="sidebar__link" >
                <i className="fa fa-tasks"></i>
                    <a href="#top">PAGAMENTOS E CUSTOS</a>
                </div>
                <div className="sidebar__logout" >
                <i className="fa fa-power-off"></i>
                    <a href="#top">Log out</a>
                </div>
            </div>

        </div>
        

    )
}

export default Sidebar;