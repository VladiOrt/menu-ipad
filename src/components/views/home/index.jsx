import { useState } from 'react'


import './index.scss'

import Img1 from '../../utils/img/home/icons/Icon1.png'
import Img2 from '../../utils/img/home/icons/Icon2.png'
import Img3 from '../../utils/img/home/icons/Icon3.png'
import Img4 from '../../utils/img/home/icons/Icon4.png'
import Img5 from '../../utils/img/home/icons/Icon5.png'




import Technologies from '../views/tecnologies'
import Facials from '../views/facials'
import Bodily from '../views/bodily'
import Aestheric from '../views/aesthetic-medicine'
import Treatment from '../views/treatment-plans'


const Home = () => {
    const[fondo,setFondo] = useState('')
    const[vista,setVista] = useState(0)



    function handleMenu(id){




      
            


   
        setFondo('Activo')
        setVista(id)
    }






    return(
        <div className={"containerHome " +fondo} id="containerHome">
            
            <div className="containerContentHome">
                <div className="containerContentNav">
                    <div className="containerButtons">
                        <a onClick={()=>handleMenu(1)}>
                            <img src={Img1} />                        
                            <label>
                                Tecnologías
                            </label>
                        </a>
                        <a onClick={()=>handleMenu(2)}> 
                            <img src={Img2} />                        
                            <label>
                                Faciales
                            </label>
                        </a>
                        <a onClick={()=>handleMenu(3)}>
                            <img src={Img3} />                        
                            <label>
                                Corporales
                            </label>
                        </a>
                        <a onClick={()=>handleMenu(4)}>
                            <img src={Img4} />                        
                            <label>
                                Medicina
                                Estética
                            </label>
                        </a>
                        <a onClick={()=>handleMenu(5)}>
                            <img src={Img5} />                        
                            <label>
                                Planes de
                                tratamientos
                            </label>
                        </a>
                    </div>            
                </div>
                <div className="containerContentViews">
                    {
                        vista==1?
                            <Technologies />:<></>
                    }
                    {
                        vista==2?
                            <Facials />:<></>
                    }
                    {
                        vista==3?
                            <Bodily />:<></>
                    }
                    {
                        vista==4?
                            <Aestheric />:<></>
                    }
                    {
                        vista==5?
                            <Treatment />:<></>
                    }
                </div>                
            </div>

           
        </div>
    )
}


export default Home