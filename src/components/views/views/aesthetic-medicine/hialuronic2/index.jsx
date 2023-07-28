import './index.scss'
import { useState } from 'react'







const FineLines0 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript0.png')

const FineLines1 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript1.png')
const FineLines2 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript2.png')

const FineLines3 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript3.png')

const FineLines4 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript4.png')
const FineLines5 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript5.png')
const FineLines6 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript6.png')


const Hialuronic2 = () => {


    const[point,setPoint] = useState(0)



    function handlePoint(id){
        console.log(id)
        setPoint(id)
    }

   

    return(
        <div className="containerHialuronicDos">
            <div className={"circle One "+ (point==1?"Active":"") } onClick={() =>handlePoint(1)}><div><div /></div></div>
            <div className={"circle Two "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)}><div><div /></div></div>
            <div className={"circle Three "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)} ><div><div /></div></div>
            <div className={"circle Four "+  (point==4?"Active":"") } onClick={() =>handlePoint(4)}> <div><div /></div></div>
            <div className={"circle Five "+  (point==5?"Active":"") } onClick={() =>handlePoint(5)}> <div><div /></div></div>
            <div className={"circle Six "+  (point==6?"Active":"") } onClick={() =>handlePoint(6)}> <div><div /></div></div>
           

            <div className={point!=0?"text":""}>
         
                {
                    point==1?
                    <div>
                        <label>Bionutriglow - Radiance and Fine Lines</label>
                        <p>
                            Aporta luminosidad y textura a la piel - A partir de los 20 años.
                            Zonas: Todo el rostro.
                        </p>   
                        <div>
                            <img src={FineLines6} />
                        </div>                  
                    </div>:""
                }


                {
                    point==2?
                    <div>
                        <label>MEDICAL HIGHLIGHTING - BEAUTIFICATION & GLOW</label>
                        <p></p>   
                        <div>
                            <img src={FineLines6} />
                        </div>                  
                    </div>:""
                }


                {
                    point==3?
                    <div>
                        <label>Bionutrilift - Texture and Lift effect</label>
                        <p>
                            Tratamiento enfocado en la prevención, funciona con pequeñas arrugas y signos de fatiga - A partir de los 30 años.
                            Zonas: Mejillas.
                        </p>   
                        <div>
                            <img src={FineLines6} />
                        </div>                  
                    </div>
                    :""
                }

                {   
                  point==4?
                  <div>
                      <label>Full face - NEGATIVE EXPRESSIONS & NLF</label>
                      <p></p>   
                      <div>
                          <img src={FineLines6} />
                      </div>                  
                  </div>
                  :""
                }

                {
                    point== 5?
                    <div>
                        <label>Bionutrilips - Perioral Lines & Lips</label>
                        <p>
                            Estimula y restaura el volumen de los labios - A partir de
                            los 30 años.
                            Zonas: Arrugas peribucales.
                        </p>   
                        <div>
                            <img src={FineLines6} />
                        </div>                  
                    </div>
                :""
                }
                {
                    point== 6?
                    <div>
                        <label>Bionutrishape - Oval Sagging, Face Shaping</label>
                        <p> 
                            Pérdida de volumen, masculinización o feminización - A partir de los 45 años.
                            Zonas: Perfilamiento del rostro.
                        </p>   
                        <div>
                            <img src={FineLines6} />
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


export default Hialuronic2