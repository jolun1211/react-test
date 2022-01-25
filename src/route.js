import Citys from './pages/CityList';
import Home from './pages/Home';
const routes = [
    {
        title: "首页",
        to: "/",
        path: "/",
        component:  <Home></Home>
    },
    {
        title: "城市选择",
        to: "city",
        path: "/city",
        component: <Citys></Citys>
    }
]
export default routes;
