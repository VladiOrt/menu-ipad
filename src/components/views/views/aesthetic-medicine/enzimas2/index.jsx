import './index.scss'
import { useState } from 'react'







const FineLines0 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript0.png')

const FineLines1 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript1.png')
const FineLines2 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript2.png')

const FineLines3 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript3.png')

const FineLines4 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript4.png')
const FineLines5 = require('../../../../utils/img/aesthetic/fillers/AcidoHialuronico/ImgDescript5.png')


const Enzimas2 = () => {


    const[point,setPoint] = useState(0)



    function handlePoint(id){
        console.log(id)
        setPoint(id)
    }

   

    return(
        <div className="containerEnzimas2">
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
                        <label>Brazos</label>
                               
                    </div>:""
                }
                {
                    point==2?
                    <div>
                        <label>Abdomen superior</label>
                               
                    </div>:""
                }
                {
                    point==3?
                    <div>
                        <label>Abdomen inferior</label>
                       
                    </div>
                    :""
                }
                {   
                  point==4?
                  <div>
                      <label>Pierna</label>
                               
                  </div>
                  :""
                }         
                {   
                  point==5?
                  <div>
                      <label>Espalda alta</label>
                    
                  </div>
                  :""
                }       
                {   
                  point==6?
                  <div>
                      <label>Espalda baja</label>                        
                  </div>
                  :""
                }             
            </div>
            <div className= {point!=0?"circleClose":""} onClick={()=>setPoint(0)}>
                
            </div>
        </div>
    )
}


export default Enzimas2