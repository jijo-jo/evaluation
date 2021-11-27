import './nav.css'

import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from './home'
import Assets from './assetList'
import Assetdetails from './assetDetails'
import Nomatch from './noMatch'
import Addassets from './addAssets'
import Assetdelete from './deleteAsset'
import Assetedit from './assetEdit'
import Userlogin from './userLogin'
import Registeruser from './registerUser'
function App() {
  return (
  <body >
  <div >
      <NavBar/>
  </div>
  </body>
 

 );
}

function NavBar(){

  return(
  <Router>
  <nav className="navbar">
  <div className="logo">XYZ Assets</div>
  <ul className="nav-links">
    <div className="menu">
      <li><Link to="/">Home</Link></li>
      {localStorage.getItem('mytoken') && <li><Link to="/assets">Assets</Link></li>}
      {!localStorage.getItem('mytoken') && <li><Link to="/login">Login</Link></li>}
      {localStorage.getItem('mytoken') && <li><Link onClick={()=>window.location ='/login'} to="/login">Logout</Link></li>}
     
    </div>
  </ul>
</nav>
<Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/assets" element={<Assets/>}/>
       <Route path = "/login" element = {<Userlogin/>}/>
       <Route path="/addassets" element={<Addassets/>}/>
       <Route path="/register" element={<Registeruser/>}/>
       <Route path="/assets/:id" element={<Assetdetails/>}/>
       <Route path="/deleteassets/:id" element={<Assetdelete/>}/>
       <Route path="/editassets/:id" element={<Assetedit/>}/>
       <Route path="*" element={<Nomatch/>}/>
</Routes>
</Router>);
}



export default App;
