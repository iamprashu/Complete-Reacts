import { useState } from "react";
import DateCard from "./DateCard";
function Items(props){
    // const [name,ChangeIt] = useState(props.Obj.name)
    // function ChangeName(){
    //     ChangeIt("Namessddd")
    // }
    return(
        <div className="bg-[#1b1b1b] h-[150px] w-[400px] rounded-xl p-5 text-white flex items-center justify-between">
           
            {/* <button onClick = {ChangeName}>Hello</button> */}

            <DateCard Day = {props.Obj.day} Month = {props.Obj.month} Year = {props.Obj.year}></DateCard>
            <p className="text-4xl">{props.Obj.name}</p>

        </div>
    )
}


export default Items;