import Login from "../Login/Login";
import NewsDetail from "../News/NewsDetail";
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
     <Routes>
<Route path="/" element={<Login />} />
<Route path="/detail/:key" element={<NewsDetail/>}/>
<Route path="*" element={<h1>Not Found</h1>} />
</Routes>
    </>
  );
}

export default App;


