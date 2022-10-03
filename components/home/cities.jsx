import { useEffect, useState, Suspense } from "react";
import { NextPage } from "next";

const GetData = ({city}) =>{
    
  

  if(!city_.data){
    return <div>Loading...</div>
 }
    return <div>
            {city.data.map(city=>{
        return <div>{city.name}</div>
    })}
    </div>
}

const Cities =()=>{
    // var data_ ,Arry=[];


  

    
return <div>
    <Suspense fallback="Loading...">
<GetData />
</Suspense>
</div>

};
export default Cities; 