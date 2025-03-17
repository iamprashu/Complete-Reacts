import '../output.css';

function Navigation(){
    return(
        <div className = 'navbar flex p-2 h-[60px] bg-red-400 justify-between items-center'>
            <img src="/download.png" class="h-[100%]" alt="logo was here"></img>

            <ul className='flex justify-evenly min-w-[600px] '>
                <li class='bg-slate-400 text-white pt-2 pb-2 pr-3 pl-3 rounded-lg hover:underline '>Home</li>
                <li class='bg-slate-400 text-white pt-2 pb-2 pr-3 pl-3 rounded-lg hover:underline '>About</li>
                <li class='bg-slate-400 text-white pt-2 pb-2 pr-3 pl-3 rounded-lg hover:underline '>Services</li>
                <li class='bg-slate-400 text-white pt-2 pb-2 pr-3 pl-3 rounded-lg hover:underline '>Galary</li>
                <li class='bg-slate-400 text-white pt-2 pb-2 pr-3 pl-3 rounded-lg hover:underline '>Contact</li>
                <li class='bg-slate-400 text-white pt-2 pb-2 pr-3 pl-3 rounded-lg hover:underline '>User Panel</li>
            </ul>

            <img src="/download.png" class="h-[100%]" alt="logo was here"></img>


        </div>
    )

}

export default Navigation;