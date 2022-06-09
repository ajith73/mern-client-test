import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
const [name,setName]= useState("");
const [age,setAge]= useState(0);
const [friendList,setFrindlist]= useState([]);

const addFrind =()=>{
  axios.post("https://mernapptest123.herokuapp.com/addFriend", {
    name: name,
    age: age,
}).then((response)=>{
  setFrindlist([...friendList,{ _id: response.data._id, name: name, age: age}]);
})};

useEffect(()=>{
  axios.get("https://mernapptest123.herokuapp.com/read").then((res)=>{
    setFrindlist(res.data)
  }).catch((err)=>{
    console.log(err)
  })

},[]);

const updateFriends= (id)=>{
  const newage= prompt("enter your age");
   axios.put("https://mernapptest123.herokuapp.com/update",{newage: newage, id: id}).then(()=>{
    setFrindlist(friendList.map((list) => {
      return list._id == id ?{_id: id , name: list.name, age: newage} : list;
    }))})};

    const deletefrinds =(id)=>{
      axios.delete(`https://mernapptest123.herokuapp.com/delete/${id}`).then(()=>{
        setFrindlist(friendList.filter((list)=>{
return list._id != id;
        }))
      })
    }


  return (
    <div className="App">
      <div className="inputs">
        <input type="text" placeholder="your name..." onChange={(e)=>setName(e.target.value)} />
        <input type="number" placeholder="your age..." onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={addFrind}>add friends</button>
      </div>
      <div className='list'>
      {friendList.map((list)=>{
        return(
          <>
          <div className='listcontiner'>
          <div className='listitem'>
          <h3>name: {list.name}</h3>
          <h3>age: {list.age} </h3> 
          </div>
          <button onClick={()=>updateFriends(list._id)} className='btn'>update</button>
          <button onClick={()=>deletefrinds(list._id)} className='btn'>x</button>
          </div>
              
          </> )
      })}
      </div>
      
    </div>
  );
}

export default App;
