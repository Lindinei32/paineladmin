import { useState} from 'react';
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);

  };

  return ( 
    <div className="container">
      <Navbar sideBarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Sidebar sideBarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      <Main sideBarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
}

export default App;
