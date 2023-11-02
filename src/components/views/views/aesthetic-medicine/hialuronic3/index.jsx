import './index.scss'
import { useState } from 'react'







const FineLines0 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript0.png')

const FineLines1 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript1.png')
const FineLines2 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/BELOTERO.png')

const FineLines3 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript3.png')

const FineLines4 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript4.png')
const FineLines5 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript5.png')


const Hialuronic3 = () => {


    const[point,setPoint] = useState(0)



    function handlePoint(id){
        console.log(id)
        setPoint(id)
    }

   

    return(
        <div className="containerHialuronicTres">
            <div className={"circle One "+ (point==1?"Active":"") } onClick={() =>handlePoint(1)}><div><div /></div></div>            <div className={"circle Two "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)}><div><div /></div></div>
            <div className={"circle Three "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)} ><div><div /></div></div>
            <div className={"circle Four "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)}> <div><div /></div></div>
            <div className={"circle Five "+  (point==1?"Active":"") } onClick={() =>handlePoint(1)}> <div><div /></div></div>
            <div className={"circle Six "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)}> <div><div /></div></div>
            <div className={"circle Seven "+ (point==2?"Active":"") } onClick={() =>handlePoint(2)}> <div><div /></div></div>
            <div className={"circle Eight "+  (point==4?"Active":"")} onClick={() =>handlePoint(4)}> <div><div /></div></div>
            <div className={"circle Nine "+  (point==1?"Active":"")} onClick={() =>handlePoint(1)}> <div><div /></div></div>
            <div className={"circle Ten "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)}> <div><div /></div></div>
            <div className={"circle Eleven "+  (point==5?"Active":"") } onClick={() =>handlePoint(5)}> <div><div /></div></div>
            <div className={"circle Twelve "+  (point==4?"Active":"") } onClick={() =>handlePoint(4)}> <div><div /></div></div>

            <div className={"circle Therteen "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)}> <div><div /></div></div>
            <div className={"circle Fourteen "+  (point==4?"Active":"") } onClick={() =>handlePoint(4)}> <div><div /></div></div>
            <div className={"circle Fiveteen "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)}> <div><div /></div></div>





            <div className={point!=0?"text":""}>         
                {
                    point==1?
                    <div className='containerText'>
                        <div className='titleDescription'>
                            <label>SOFT</label>
                            <p>
                                Rellena arrugas finas y mejora su apariencia.
                                Zonas: patas de gallo (al rededor de los ojos), líneas de frente y líneas periorales.    
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
                            <label>VOLUME</label>
                            <p>
                            Restaura el volumen de la piel y le da vitalidad al rostro.
                            Zonas: área de mejillas, voluminización: mandíbula y mentón.
                            </p>       
                        </div>                        
                        <div className='IconOne'>
                            <img src={FineLines2} />                        
                        </div>                          

               
                    </div>:""                }


                {
                    point==3?
                    <div className='containerText'>
                        <div className='titleDescription'>
                            <label>BALANCE</label>
                            <p>
                            Rellena arrugas medias y promueve una mirada más joven.
                            Zonas: contorno de labios, arrugas moderadas y ojeras.
                            </p>       
                        </div>                        
                        <div className='IconOne'>
                            <img src={FineLines2} />                        
                        </div>                                           
                    </div>
                    :""
                }

                {   
                  point==4?
                  <div className='containerText'>
                    <div className='titleDescription'>
                        <label>INTENSE</label>
                        <p>
                            Es utilizado para arrugas más profundas.
                            Zonas: estructuración de la región cigomática, líneas de marioneta, pliegues nasolabial, mentón y labios.  
                        </p>       
                    </div>                        
                    <div className='IconOne'>
                        <img src={FineLines2} />                        
                    </div>                                 
                  </div>
                  :""
                }

                {
                    point== 5?
                    <div className='containerText'>
                            <div className='titleDescription'>
                                <label>REVIVE</label>
                                <p>
                                Promueve hidratación a la piel y redefine la textura de la piel.
                               Zonas: Rostro, escote, cuello y manos.
                                </p>       
                            </div>                        
                            <div className='IconOne'>
                                <img src={FineLines2} />                
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


export default Hialuronic3