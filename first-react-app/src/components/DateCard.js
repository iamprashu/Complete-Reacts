function DateCard(props){
    return(
        <div className = "bg-[#2b2a2a] h-[120px] w-[120px] rounded-2xl flex flex-col items-center text-white justify-around">
            <p className="text-2xl">{props.Month}</p>
            <p className="text-2xl">{props.Year}</p>
            <p className="text-2xl">{props.Day}</p>
        </div>
    )
}

export default DateCard;