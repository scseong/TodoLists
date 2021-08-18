import Header from './component/layout/Header'
import Main from './component/layout/Main'
import SideBar from './component/layout/SideBar'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
