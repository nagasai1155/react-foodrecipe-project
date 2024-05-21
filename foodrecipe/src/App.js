import {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap
import Product from "./Product";





function App() {
  let [search ,setSearch] = useState(" ");
  let [data,setData] = useState([]);
  const YOUR_APP_ID="b678aa3f";
  const YOUR_APP_KEY="ade2615bcd9174cec51b487e99ea4317";
const SubmitHandler = (e)=>{
  e.preventDefault();//used for stopping reloading page
  console.log(search);
  getResponse();

}

async function getResponse(){
  let first =await fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`);

  let second = await first.json();
  setData(second.hits);
  console.log(second.hits);
}
  return (
   <>
 
    <div>

      <center>

        <h3>Food App Recipe </h3>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >NAGAPROFILE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link  enable" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" onSubmit={SubmitHandler}>
        <input className="form-control me-2" value={search} 
        
        onChange={(e)=>{
          setSearch(e.target.value);
        }}
        type="text" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        {/* <form onSubmit={SubmitHandler}>
          <input type='text' value={search} onChange={(e)=>{
            setSearch(e.target.value);
          }}/><br/>
          <input type='submit' className='btn btn-primary' value="Search" />
          </form> */}
          {
            data.length>0?<Product data={data}></Product>:"please wait loading......"
          }
      </center>
    </div>

   </>
  )
}

export default App;
