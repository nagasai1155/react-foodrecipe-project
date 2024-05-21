import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { useState } from 'react';
import ProductCardList from './ProductCardList';
import Mainrouting from './Mainrouting';
import photo from "./photofood.webp";

function App() {
const [search2,setSearch2] =useState(" ");
const [data2,setData2] = useState([]);


  const YOUR_APP_ID="b678aa3f";
  const YOUR_APP_KEY="ade2615bcd9174cec51b487e99ea4317";
  
  function submitHandler(ec){
 ec.preventDefault();
getItems();
 console.log(search2);
 console.log(data2);

  }
  async function getItems(){
    const firstresp = await fetch(`https://api.edamam.com/search?q=${search2}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`);
    const secondresp = await firstresp.json();

    setData2(secondresp.hits);
   
  }

  return (
    <>
    
   <center>
   <header className='text-danger'>FOOD WEB APPLICATION</header>

   <div>
   <Mainrouting></Mainrouting>
      <form onSubmit={submitHandler} >
      
        <input type="text" placeholder="search food"
        
        onChange={(e)=>{
          setSearch2(e.target.value);
        }}
        className="form-control narrow-input"/>
        <input type="submit" value="search" className="btn btn-outline-success" />

      </form>
    </div>
    
   </center>
   <div class="app">
   
   
    {
      data2.map((ele)=>{
         return <ProductCardList data={ele}></ProductCardList>
      })
    }
   </div>
  
    </>
  )
}

export default App;
