import './index.scss'
import { useState } from 'react'

const PuntosToxina1 = () => {


    const[point,setPoint] = useState(0)



    function handlePoint(id){
        console.log(id)
        setPoint(id)
    }

   

    return(
        <div className="containerToxinauno">
            <div className={"circle One "+ (point==1?"Active":"") } onClick={() =>handlePoint(1)}><div><div /></div></div>
            <div className={"circle Two "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)}><div><div /></div></div>
            <div className={"circle Three "+  (point==3?"Active":"") } onClick={() =>handlePoint(3)} ><div><div /></div></div>
            <div className={"circle Four "+  (point==4?"Active":"") } onClick={() =>handlePoint(4)}> <div><div /></div></div>
            <div className={"circle Five "+  (point==5?"Active":"") } onClick={() =>handlePoint(5)}> <div><div /></div></div>
            <div className={"circle Six "+  (point==6?"Active":"") } onClick={() =>handlePoint(6)}> <div><div /></div></div>
            <div className={"circle Seven "+ (point==7?"Active":"") } onClick={() =>handlePoint(7)}> <div><div /></div></div>
            <div className={"circle Eight "+  (point==8?"Active":"")} onClick={() =>handlePoint(8)}> <div><div /></div></div>
            <div className={"circle Nine "+  (point==9?"Active":"")} onClick={() =>handlePoint(9)}> <div><div /></div></div>
            <div className={"circle Ten "+  (point==10?"Active":"") } onClick={() =>handlePoint(10)}> <div><div /></div></div>
            <div className={"circle Eleven "+  (point==11?"Active":"") } onClick={() =>handlePoint(11)}> <div><div /></div></div>


            <div className={point!=0?"text":""}>
         
                {
                    point==1?
                    <div>
                        <label>Líneas frontales (frente)</label>
                        <p>Desvanece líneas de expresión</p>                     
                    </div>:""
                }


                {
                    point==2?
                    <div>
                        <label>Entrecejo</label>
                        <p>Desvanece arrugas híper-dinámicas y dinámicas</p>                     
                    </div>:""
                }







                {
                    point==3?
                    <div>
                        <label>Lifting de cejas (elevación)</label>
                        <p>Otorga un aspecto relajado y joven</p>                     
                    </div>:""
                }

                {   
                    point==4?
                    <div>
                        <label>Líneas de los ojos laterales (orbicular)</label>
                        <p>Desvanece arrugas llamadas “patas de gallo”</p>                     
                    </div>:""
                }

                {
                    point==5?
                    <div>
                        <label>Bunny lines (líneas de la nariz)</label>
                        <p>Otorga un efecto lifting</p>                     
                    </div>:""
                }

                {
                    point==6?
                    <div>
                        <label>Líneas por sonrisa</label>
                        <p>Otorga un efecto lifting</p>                     
                    </div>:""
                }

                {
                    point==7?
                    <div>
                        <label>Arrugas peribucales (líneas periorales)</label>
                        <p></p>                     
                    </div>:""
                }

                {
                    point==8?
                    <div>
                        <label>Sonrisa gingival</label>
                        <p>Otorga in efecto lifting</p>                     
                    </div>:""
                }

                {
                    point==9?
                    <div>
                        <label>Líneas por sonrisa</label>
                        <p>Otorga un efecto lifting</p>                     
                    </div>:""
                }

                {
                    point==10?
                    <div>
                        <label>Mentón (pliegues en barbilla)</label>
                        <p>Otorga un aspecto relajado y joven</p>                     
                    </div>:""
                }
                
                {
                    point==11?
                    <div>
                        <label>Cuello y Escote (Bandas cervicales)</label>
                        <p>Otorga un efecto lifting</p>                     
                    </div>:""
                }
            
            
            </div>
            <div className= {point!=0?"circleClose":""} onClick={()=>setPoint(0)}>
                
            </div>
        </div>
    )
}


export default PuntosToxina1