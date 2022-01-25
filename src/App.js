import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import routes from './route';

function App() {
  console.log("数据", routes)
  return (
    <Router>

      <div className="App">
        <ul>
          {
            routes.map((item, i) => {
              return <li key={i}><Link to={item.path}>{item.title}</Link></li>
            })
          }
        </ul>


        <Routes>
          {
            routes.map((item, i) => {
              return <Route key={i} path={item.path} element={item.component}></Route>
            })
          }
        </Routes>


      </div>
    </Router>

  );
}

export default App;
