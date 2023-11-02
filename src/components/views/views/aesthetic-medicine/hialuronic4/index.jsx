import './index.scss'
import { useState } from 'react'







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
        <div className="containerHialuronicCuatro">
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
                    <div>
                        <label>LIPS SOFT</label>
                        <p>Contorno de labios y volumen suave.</p>   
                        <div>
                            <img src={FineLines4} />
                            <img src={FineLines1} />
                        </div>                  
                    </div>
                    :""
                }

                {   
                  point==4?
                  <div>
                      <label>UNIVERSAL</label>
                      <p>Arrugas finas a profundas.</p>   
                      <div>
                          <img src={FineLines3} />
                          <img src={FineLines1} />
                      </div>                  
                  </div>
                  :""
                }

                {
                    point== 5?
                    <div>
                        <label>LIPS</label>
                        <p>Embellecimiento y volumen pronunciado.</p>   
                        <div>
                            <img src={FineLines5} />
                            <img src={FineLines1} />
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