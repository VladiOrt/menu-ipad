import './index.scss'
import { useState } from 'react'







const FineLines0 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript0.png')

const FineLines1 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript1.png')
const FineLines2 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript2.png')

const FineLines3 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript3.png')

const FineLines4 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript4.png')
const FineLines5 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript5.png')


const Revitalizadores1 = () => {


    const[point,setPoint] = useState(0)



    function handlePoint(id){
        console.log(id)
        setPoint(id)
    }

   

    return(
        <div className="containerHialuronicCuatro">
            <div className={"circle One "+ (point==1?"Active":"") } onClick={() =>handlePoint(1)}><div><div /></div></div>
            <div className={"circle Two "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)}><div><div /></div></div>
            <div className={"circle Three "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)} ><div><div /></div></div>
            <div className={"circle Four "+  (point==4?"Active":"") } onClick={() =>handlePoint(4)}> <div><div /></div></div>
            <div className={"circle Five "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)}> <div><div /></div></div>
         



            <div className={point!=0?"text":""}>         
                {
                    point==1?
                    <div>
                        <label>OJERAS</label>
                        <p>Disminuye arrugas.</p>   
                        <div>                           
                        </div>                  
                    </div>:""
                }
                {
                    point==2?
                    <div>
                        <label>CARA</label>
                        <p>Estimula el colágeno.</p>   
                        <div>             
                        </div>                  
                    </div>:""
                }
                {
                    point==3?
                    <div>
                        <label>Cuello y Escote</label>
                        <p>Estimula la elastina.</p>   
                        <div>                         
                        </div>                  
                    </div>
                    :""
                }
                {   
                  point==4?
                  <div>
                      <label>Manos</label>
                      <p>Hidrata la piel.</p>   
                      <div>                      
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


export default Revitalizadores1