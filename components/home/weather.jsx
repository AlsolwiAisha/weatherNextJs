import { useState ,useEffect} from "react";

const Weather=(city)=>{
    const[state,setStat]=useState([]);
    // useEffect(() => {
        async function getResponse() {

            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Sanaa&appid=52922fa07c551a030f9701eff376927a`);
            if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
           }
           setStat( await response.json());
           console.log(state)
           }
           getResponse();
         
      
// },[]);


 return(<></>
//      state.weather.map(item => {
       
//     return(
       
// <div>{item.weather.name}</div> 
           
//     );
// }
// )
);

};
export default Weather; 