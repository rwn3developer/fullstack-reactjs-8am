import { useState } from "react";
// import AddTodo from "./AddTodo";
// import Viewtodo from "./Viewtodo";
import {data,category} from "./Data";
import Heading from "./Heading";
import Menu from "./Menu";
import Food from "./Food";

function App() {

  // const [record,setAllrecord]= useState([]);

  // const Addrecord = (task,date) => {
  //     let obj = {id : Math.floor(Math.random()* 10000),task,date};
  //     let old = [...record,obj];
  //     setAllrecord(old);
  // }

  const filterButton = (cat) => {
      console.log(cat);
  }

  return (
    <div>
     
        {/* <AddTodo getrecord={Addrecord}/>
        <Viewtodo todolist={record}/> */}

        <div className="container"> 
            <div className="row">
                <div className="col-lg-12">
                    <Heading/>
                </div>
            </div>


            {/* menu section */}
            <div className="row">
                <div className="col-lg-12">
                    <Menu category={category} filterbtn={filterButton}/>
                </div>
            </div>

            {/* //food data */}

            <div className="row">
                <div className="col-lg-12">
                    <Food food={data}/>
                </div>
            </div>

        </div>
        

    </div>
  );
}
export default App;
