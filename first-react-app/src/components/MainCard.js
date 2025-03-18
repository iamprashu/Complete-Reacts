import Items from "./Items";

function MainCard(props){
    return(
        <div className="bg-fuchsia-400 h-[800px] w-[600px] rounded-xl shadow-yellow-300 shadow-2xl flex flex-col justify-around items-center ">
            
            <Items Obj = {props.Data[0]}>
            </Items>
            <Items Obj = {props.Data[1]}></Items>
            <Items Obj = {props.Data[2]}></Items>
            <Items Obj = {props.Data[3]}></Items>
        </div>
    );
}

export  default MainCard;