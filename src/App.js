import './slick.css'
import './App.css';
import './normalize.css'
import {Route, Routes} from "react-router-dom";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";
import Header from "./Header/Header";
function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default App;
