import "./App.css";
const Data=[
           {
          head1:"Mobile operating system",
          con:["Android","Blackberry","Iphone","window phone" ]
           },
           {
            head1:"Mobile Manufactures",
            con:["Samsung","HTC","Micromax","Apple"]
             },
]


export default function App() {
  return (
    <div className="App">
    <div className="box"><h1>

         <ul>
         {
           Data.map((e)=>{
         return <ul>{e.head1}   {e.con.map((el)=>(
          <li className={`${el.con%2===0 ? "circleList":"squareList"}`}>{el}</li>
    
         ))}</ul>
         
         })}
       
      </ul>
    </h1>
    
    
   
    </div>
    </div>
  );
}
