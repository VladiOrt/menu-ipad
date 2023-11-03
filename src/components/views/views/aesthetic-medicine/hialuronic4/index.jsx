import { useState } from 'react'
import './index.scss'







const FineLines0 = require('../../../../../assets/images/aestethic/perfectha.png')

const FineLines1 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript1.png')
const FineLines2 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript2.png')

const FineLines3 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript3.png')

const FineLines4 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript4.png')
const FineLines5 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript5.png')


const Hialuronic4 = () => {


    const[point,setPoint] = useState(0)



    function handlePoint(id){
        console.log(id)
        setPoint(id)
    }

   

    return(
        <div className="containerHialuronicCuatroNew">
                    
            <div className={"circle One "+ (point==1?"Active":"") } onClick={() =>handlePoint(1)}><div><div /></div></div>
              
            <div className={"circle Two "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)}><div><div /></div></div>
 
            <div className={"circle Three "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)} ><div><div /></div></div>
       
            <div className={"circle Four "+  (point==4?"Active":"") } onClick={() =>handlePoint(4)}> <div><div /></div></div>

            <div className={"circle Five "+  (point==4?"Active":"") } onClick={() =>handlePoint(4)}> <div><div /></div></div>
             
            <div className={"circle Six "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)}> <div><div /></div></div>
            <div className={"circle Seven "+ (point==1?"Active":"") } onClick={() =>handlePoint(1)}> <div><div /></div></div>
            <div className={"circle Eight "+  (point==4?"Active":"")} onClick={() =>handlePoint(4)}> <div><div /></div></div>
            <div className={"circle Nine "+  (point==4?"Active":"")} onClick={() =>handlePoint(4)}> <div><div /></div></div>
            <div className={"circle Ten "+  (point==1?"Active":"") } onClick={() =>handlePoint(1)}> <div><div /></div></div>
            <div className={"circle Eleven "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)}> <div><div /></div></div>
            <div className={"circle Twelve "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)}> <div><div /></div></div>





            <div className={point!=0?"text":""}>
         
                {
                    point==1?
                    <div className='containerText'>
                        <div className='titleDescription'>
                            <label>DERM</label>
                            <p>
                                Rellena líneas faciales medias y de presiones de la piel.
                                Zonas: Línea de la glabela, contorno de labios, comisura oral.  
                            </p>       
                        </div>                        
                        <div className='IconOne'>
                            <img src={FineLines0} />                        
                        </div>                                    
                    </div>:""
                }


                {
                    point==2?

                    <div className='containerText'>
                        <div className='titleDescription'>
                            <label>FINELINES</label>
                            <p>
                                Rellena líneas faciales superficiales.
                                Zonas: Línea periorbital, arrugas periorales, reducción de ojeras.
                            </p>       
                        </div>                        
                        <div className='IconOne'>
                            <img src={FineLines0} />                        
                        </div>   

                                
                    </div>:""
                }


                {
                    point==3?

                    <div className='containerText'>
                        <div className='titleDescription'>
                            <label>SUBSKIN</label>
                            <p>
                            Aumento de volumen.
                                Zonas: redefinición de contorno facial, proyección malar, proyección de la barbilla, rejuvenecimiento de manos.    
                            </p>       
                        </div>                        
                        <div className='IconOne'>
                            <img src={FineLines0} />                        
                        </div>   

                    </div>
                    :""
                }

                {   
                  point==4?
                  <div className='containerText'>
                        <div className='titleDescription'>
                            <label>DEEP</label>
                            <p>
                                Rellena líneas faciales profundas y depresiones de la piel.
                                Zonas: aumento de volumen en labios, redefinición nariz, líneas de marioneta, comisura oral, aumento moderado de mentón y mejillas.
                            </p>       
                        </div>                        
                        <div className='IconOne'>
                            <img src={FineLines0} />                        
                        </div>                  

                  
                  </div>
                  :""
                }

                {
                    point== 5?
                    <div className='containerText'>
                        <div className='titleDescription'>
                            <label>Subskin</label>
                            <p>
                                Aumento de volumen.
                                Zonas: redefinición de contorno facial, proyección malar, proyección de la barbilla, rejuvenecimiento de manos.
                            </p>       
                        </div>
                        <div className='IconOne'>
                            <img src={FineLines0} />
                        </div>
                    </div>
                :""
                }

              
            </div>
            <div className= {point!=0?"circleClose":""} onClick={()=>setPoint(0)}>
                
            </div>
        </div>
    )
}


export default Hialuronic4