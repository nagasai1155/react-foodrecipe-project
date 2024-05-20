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
        <form onSubmit={SubmitHandler}>
          <input type='text' value={search} onChange={(e)=>{
            setSearch(e.target.value);
          }}/><br/>
          <input type='submit' className='btn btn-primary' value="Search" />
          </form>
          {
            data.length>0?<Product data={data}></Product>:"please wait loading......"
          }
      </center>
    </div>

   </>
  )
}

export default App;
