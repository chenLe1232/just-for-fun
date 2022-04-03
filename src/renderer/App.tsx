import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import leli from '../../assets/a.jpeg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={leli} className="leli" />
      </div>
      <h1>每天都是开心满满的乐丽同学</h1>
      <div>恭喜你看到了我目前的第一个打包出来的app</div>
      <div>希望我们一起努力</div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
