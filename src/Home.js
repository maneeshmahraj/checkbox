import { useState } from "react";



const Home = () => {
     const empArr=[
      {
        id:'1',
        inputTpye:'checkbox',
        name:'jonpur',
        button:'delete',
        status:false
      },
      {
        id:'2',
        name:'lacknow',
        inputTpye:'checkbox',
        button:'delete',
        status:false
      },
      {
        id:'3',
        name:'jhansi',
        inputTpye:'checkbox',
        button:'delete',
        status:false
      },
      {
        id:'4',
        name:'bhopal',
        inputTpye:'checkbox',
        button:'delete',
        status:false
      }
     ]
     const [arr,setArr]=useState(empArr);
     const handleClick=(e)=>{
      let mid=e.target.id;
     // console.log(mid)
      let copyArr=[...arr];

       copyArr= copyArr.map((key)=>{
         if(key.id===mid)
          {
              key.status=!key.status;
          }
          return key;
      })
      setArr(copyArr);
     
     }
     const handleDelete=(id)=>{
       let mid=id;
       console.log(mid)
        let copyArr=[...arr];
        copyArr= copyArr.filter((item)=>item.id!==mid);
         setArr(copyArr);
     }
  return(
         <>
  <div className="container">
    <h1>Task Manager !</h1>
     
     <div className="list">
        {
             arr.map((item,i)=>{
              return(
                <>
                 <input
                 key={i}
                 id={item.id}
                   onClick={(e)=>{handleClick(e)}}
                 type={item.inputTpye}/>
                 <span>{item.name}</span>
                  {
                  item.status? <button onClick={()=>{handleDelete(item.id)}}>{item.button}</button>:''
                  }
                 <br/>
                 <br/>

                </>
              )
             })
        }
     </div>
    
  </div>
      
       </>

  )
}

export default Home;