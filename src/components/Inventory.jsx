import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
   Inkpens:20,
  });

  
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{
          console.log(inv)
    inv.books=inv.books+1
    const obj={
      books: inv.books,
      notebooks: 13,
      pens: 40,
     Inkpens:20
    }
    setInv(obj)
  
      //console.log(inv.books=inv.books+1)
       console.log("clicked")
     }}>+</button>
        <button className="circlularButton" onClick={()=>{
          console.log(inv)
    inv.books=inv.books-1
    if(inv.books<0){
      return 
    }
    const obj={
      books: inv.books,
      notebooks: 13,
      pens: 40,
      Inkpens:20

    }
    
    setInv(obj)
  
      //console.log(inv.books=inv.books+1)
       console.log("clicked")
     }}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton"
        onClick={()=>{
          console.log(inv)
    inv.notebooks=inv.notebooks+1
    const obj={
      books:10 ,
      notebooks:inv.notebooks,
      pens: 40,
      Inkpens:20

    }
    setInv(obj)
  
      //console.log(inv.books=inv.books+1)
       console.log("clicked")
     }}>+</button>
        <button className="circlularButton"  onClick={()=>{
          console.log(inv)
    inv.notebooks=inv.notebooks-1
    if(inv.notebooks<0){
      return 
    }
    const obj={
      books:10 ,
      notebooks:inv.notebooks,
      pens: 40,
      Inkpens:20

    }
    setInv(obj)
  
      //console.log(inv.books=inv.books+1)
       console.log("clicked")
     }}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton"
         onClick={()=>{
          console.log(inv)
    inv.pens=inv.pens+1
    const obj={
      books:10 ,
      notebooks:13,
      pens: inv.pens,
      Inkpens:20

    }
    setInv(obj)
  
      //console.log(inv.books=inv.books+1)
       console.log("clicked")
     }}>+</button>
        <button className="circlularButton"
         onClick={()=>{
          console.log(inv)
    inv.pens=inv.pens-1
    if(inv.pens<0){
      return 
    }
    const obj={
      books:10 ,
      notebooks:13,
      pens:inv.pens,
      Inkpens:20

    }
    setInv(obj)
  
      //console.log(inv.books=inv.books+1)
       console.log("clicked")
     }}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton"
         onClick={()=>{
          console.log(inv)
          inv.Inkpens=inv.Inkpens+1
    const obj={
      books:10 ,
      notebooks:13,
      pens: 40,
     Inkpens:inv.Inkpens,
    }
    setInv(obj)
  
      //console.log(inv.books=inv.books+1)
       console.log("clicked")
     }}>+</button>
        <button className="circlularButton"
         onClick={()=>{
          console.log(inv)
          inv.Inkpens=inv.Inkpens-1
          if(inv.Inkpens<0){
            return 
          }
    const obj={
      books:10 ,
      notebooks:13,
      pens: 40,
     Inkpens:inv.Inkpens
    }
    setInv(obj)
  
      //console.log(inv.books=inv.books+1)
       console.log("clicked")
     }}>-</button>
        <span>{inv.Inkpens}</span>
      </div>
            {/*calculate total and show it*/}
          
   <div>   
     
     total:{inv.books+inv.notebooks+inv.pens+inv.Inkpens}</div>
   
      
    </div>
  );
  
};
