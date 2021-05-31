import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sideBar';
import Topbar from './components/topBar'
import Dashboard from './components/dashboard';
import Card from './components/card';

function App() {
  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column"> 
            <div id="content">
              <Topbar/>
              <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <Dashboard/>
                </div>
                <div class="row">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
