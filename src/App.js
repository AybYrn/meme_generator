import './App.css';
import Content from './Content';
import Navigation from './Navigation';
import Data from './Data.js';


export default function App() {
  const data = Data.map(item => <Content {...item}/>)

  return (
    <div className="container">
        <Navigation />
        {data}
    </div>
  );
}