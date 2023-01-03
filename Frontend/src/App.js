import './App.css';
import Content from './components/content';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className='container'>
      <SideBar/>
      <Content/>
    </div>
  );
}

export default App;
