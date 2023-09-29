import { useState } from 'react'
import './index.scss'




const Home = () => {
    const[fondo,setFondo] = useState('')
    
    




    return(
        <div className={"containerHome " +fondo} id="containerHome">
                

            <div className="filter">

            </div>
            <div className="containerIcons">
                <div className="containerHome"></div>
                <div className="containerIcon"></div>
                <div className="containerIcon"></div>
                <div className="containerIcon"></div>
                <div className="containerIcon"></div>
                <div className="containerIcon"></div>
            </div>

        </div>
    )
}


export default Home