import './index.scss'
import { useState } from 'react'

const PuntosToxina2 = () => {


    const[point,setPoint] = useState(0)



    function handlePoint(id){
        console.log(id)
        setPoint(id)
    }

   

    return(
        <div className="containerToxinaDos">
            <div className={"circle One "+ (point==1?"Active":"") } onClick={() =>handlePoint(1)}><div><div /></div></div>
            <div className={"circle Two "+  (point==2?"Active":"") } onClick={() =>handlePoint(2)}><div><div /></div></div>
           
            <div className={point!=0?"text":""} >
         
                {
                    point==1?
                    <div>
                        <label>Manos</label>
                        <p>
                            Disminuye la actividad de la glándula sudorípara que genera una cantidad excesiva de sudor.
                            <br /><br />
                            Unidades: De 50 a 100 unidades por mano.    
                        </p>                     
                    </div>:""
                }


                {
                    point==2?
                    <div>
                        <label>Axilas</label>
                        <p>
                            Controla la sudación excesiva.
                            <br /><br />
                            Unidades: De 50 a 100 unidades por cada lado.    
                        </p>                     
                    </div>:""
                }


            
            </div>
            <div className={point!=0?"circleClose":""}  onClick={()=>setPoint(0)}>
                
            </div>
        </div>
    )
}


export default PuntosToxina2