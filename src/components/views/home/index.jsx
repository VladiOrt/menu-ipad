import { useState } from 'react'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import Wislish from '../../hook/index.tsx';
import './index.scss'

import Img1 from '../../utils/img/home/icons/Icon1.png'
import Img1Dos from '../../utils/img/home/icons/Icon1-2.png'
import Img2 from '../../utils/img/home/icons/Icon2.png'
import Img2Dos from '../../utils/img/home/icons/Icon2-2.png'
import Img3 from '../../utils/img/home/icons/Icon3.png'
import Img3Dos from '../../utils/img/home/icons/Icon3-2.png'
import Img4 from '../../utils/img/home/icons/Icon4.png'
import Img4Dos from '../../utils/img/home/icons/Icon4-2.png'
import Img5 from '../../utils/img/home/icons/Icon5.png'
import Img5Dos from '../../utils/img/home/icons/Icon5-2.png'




import Technologies from '../views/tecnologies'
import Facials from '../views/facials'
import Bodily from '../views/bodily'
import Aestheric from '../views/aesthetic-medicine'
import Treatment from '../views/treatment-plans'


const Home = () => {
    const[fondo,setFondo] = useState('')
    const[vista,setVista] = useState(0)



    function handleMenu(id){
        console.log("Valor recibido" , id)
        setVista(6)
     
        setTimeout(() => {
            Ver()
        }, 0.5);


        function Ver(){
            if(id==0){
                console.log("Se activa")
                setFondo('')
                setVista(0)
            }else{
                setFondo('Activo')
                
                setVista(id)
            }
        }
        

    }






    return(
        <div className={"containerHome " +fondo} id="containerHome">
            
            <div className="containerContentHome">
                <div className="containerContentNav"  style={{backgroundColor: (vista==1?"rgba(230,212,212 , 0.2)":"") + (vista==2?"rgb(244,235,243.0.2)":"")+(vista==3?"rgb(228,228,244, 0.2)":"") +(vista==4?"rgba(220,252,244,0.2)":"")+(vista==5?"rgba(244,236,236,0.2)":"") }}>
                    <div className="containerButtonVacio" onClick={()=>handleMenu(0)}></div>
                    <div className="containerButtons">
                        <a onClick={()=>handleMenu(1)}    >
                            {
                                vista==1 || fondo=='' ?
                                <img src={Img1} />       
                                :
                                <img src={Img1Dos} />       
                            }                 
                            <label>
                                Tecnologías
                            </label>
                        </a>
                        <a onClick={()=>handleMenu(2)}> 
                            {
                                vista==2 || fondo==''?
                                <img src={Img2} />       
                                :
                                <img src={Img2Dos} />       
                            }                             
                            <label>
                                Faciales
                            </label>
                        </a>
                        <a onClick={()=>handleMenu(3)}>
                            {
                                vista==3 || fondo==''?
                                <img src={Img3} />       
                                :
                                <img src={Img3Dos} />       
                            }                         
                            <label>
                                Corporales
                            </label>
                        </a>
                        <a onClick={()=>handleMenu(4)}>
                            {
                                vista==4 || fondo==''? 
                                <img src={Img4} />       
                                :
                                <img src={Img4Dos} />       
                            }                               
                            <label>
                                Medicina
                                Estética
                            </label>
                        </a>
                        <a onClick={()=>handleMenu(5)}>
                            {
                                vista==5 || fondo==''?
                                <img src={Img5} />       
                                :
                                <img src={Img5Dos} />       
                            }                            
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
                    {
                        vista==6?
                        <Wislish product="Total"  />:<></>
                    }
                </div>                
            </div>

           
        </div>
    )
}


export default Home