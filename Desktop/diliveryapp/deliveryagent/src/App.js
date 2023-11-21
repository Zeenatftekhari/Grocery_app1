import {Space}from 'antd';
import './App.css';
import SideMenu from './components/SideMenu';
import PageContent from './components/PageContent';
//import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="App">
     
      <Space><SideMenu></SideMenu></Space>
        <Space>
          <PageContent></PageContent>
          </Space>
      
    </div>
  );
}

export default App;
