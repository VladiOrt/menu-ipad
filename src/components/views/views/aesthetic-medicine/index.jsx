import './index.scss'
import { useState } from 'react'


import PuntosToxina1 from './toxina1'
import PuntosToxina2 from './toxina2'

import Hialuronic1 from './hialuronic1'
import Hialuronic2 from './hialuronic2'
import Hialuronic3 from './hialuronic3'
import Hialuronic4 from './hialuronic4'






const ArrowLeft = require('../../../utils/img/arrow/left.png')
const ArrowRight = require('../../../utils/img/arrow/right.png')

const StarBrown = require('../../../utils/img/stars/starBrown.png')
const StarWhite = require('../../../utils/img/stars/starWhite.png')
const StarGold = require('../../../utils/img/stars/starGold.png')





const Toxina1 = require('../../../utils/img/aesthetic/toxina/Icon1.png')
const Toxina2 = require('../../../utils/img/aesthetic/toxina/Icon2.png')


const Fillers1 = require('../../../utils/img/aesthetic/fillers/Icon1.png')

const Fillers2 = require('../../../utils/img/aesthetic/fillers/Icon1-0.png')




const AcidoHialuronico1 = require('../../../utils/img/aesthetic/fillers/Icon2.png')





const Aesthetic = () =>{

    const[vistaTechnologies,setVistaTechnologies] =useState(0)





    const[vistaToxina,setVistaToxina]  = useState('')



    const[vistaFillers,setVistaFillers]  = useState('')
    const[stateHialuronic,setStateHialuronic]  = useState(0)


    function handleViewTecnologies(id){
        setVistaTechnologies(id)
    }

    function handleViewFillers(id){
        setVistaTechnologies(id)
    }

    function changeView(valor){
        console.log("Valor" ,valor )
        if(valor=='Back'){
            
            if(vistaTechnologies == 1){
                setVistaTechnologies(8)
            }else{
                setVistaTechnologies(vistaTechnologies-1)
            }
        }else if(valor=='Forward'){
            if(vistaTechnologies == 8){
                setVistaTechnologies(1)
            }else{
                setVistaTechnologies(vistaTechnologies+1)
            }
        }
    }


    function changeViewHyaluronic(id){
        if(id==1){
            setsubButton(1)
            setStateHialuronic(0)
        }
        if(id==2){
            setsubButton(2)
            setStateHialuronic(3)
        }
        if(id==3){
            setsubButton(3)
            setStateHialuronic(4)
        }
    }


    const[subButton,setsubButton] = useState(0)






    return(
        <div className="containerAestheticContainer">
            {
                vistaTechnologies == 0 ?
                    <div className="contentAesthetic">
                        <label>
                        Medicina Estética                        
                        </label>
                        <p>
                            La relación entre la salud y la belleza con un abordaje terapéutico clínico, siempre guiados por profesionales, para lograr la mejor versión de ti.
                        </p>
                        <nav>
                            <ul>
                                <li onClick={()=>handleViewTecnologies(1)}>
                                    <div className="circle"></div>
                                    <label>
                                    Toxina Botulínica
                                    </label>
                                </li>

                                <li onClick={()=>handleViewTecnologies(2)}>
                                    <div className="circle"></div>
                                    <label>
                                    Fillers
                                    </label>
                                </li>                        
                                <li onClick={()=>handleViewTecnologies(3)}>
                                    <div className="circle"></div>
                                    <label>
                                    Enzimas
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(4)}>
                                    <div className="circle"></div>
                                    <label>
                                    Exosomas
                                    </label>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    :<></>
            }

            {
                vistaTechnologies == 1 ?
                    <div className={"contentAestheticToxina "+ vistaToxina } >
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <img src={Toxina1} />
                            <img src={Toxina2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">                        
                                <div>
                                    <label className='price'>Desde $<p>6,000</p></label>                                  
                                </div>
                            </div>                           
                        </div>
                        <div className="containerParagraph">
                            {
                                vistaToxina=='ToxinaUno'?
                                    <p>
                                        Auxiliar en el relajamiento de músculos que ayuda a corregir arrugas híper-dinámicas y dinámicas.  Se aplica anestesia local.
                                    </p>:
                                    ""
                            }
                            {
                                vistaToxina==''?
                                    <p>
                                        Auxiliar en el relajamiento de músculos que ayuda a corregir arrugas híper-dinámicas y dinámicas.  Se aplica anestesia local.
                                    </p>:""
                            }                        
                            {
                                vistaToxina=='ToxinaDos'?
                                    <p>
                                        Auxiliar en el tratamiento para sudoración excesiva (hiperhidrosis).
                                    </p>:""
                            }
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Duración de efecto: 3 a 6 meses</p></li>
                                <li><div /><p>Es un tratamiento rápido y no impide realizar las actividades diarias</p></li>
                                <li><div /><p>Se inyecta únicamente en la zona a tratar</p></li>
                                <li><div /><p>Se adapta a cada rostro y forma de gesticular</p></li>
                                <li><div /><p>Es reversible</p></li>
                                <li><div /><p>Es una técnica segura</p></li>
                            </ul>
                        </div>         



                        <div className="containerOpcions">
                            <div>
                                <label>
                                    Baby
                                    <p>
                                    (preventivo)
                                    </p>
                                </label>
                                <p>Hasta 30 a 35 unidades / A partir de los 20 años.</p>
                            </div>    
                            <div>
                                <label>
                                    Baby
                                    <p>
                                    (preventivo)
                                    </p>
                                </label>
                                <p>Hasta 30 a 35 unidades / A partir de los 20 años.</p>
                            </div>    
                            <div>
                                <label>
                                    Baby
                                    <p>
                                    (preventivo)
                                    </p>
                                </label>
                                <p>Hasta 30 a 35 unidades / A partir de los 20 años.</p>
                            </div>    
                        </div>         


                        <div className="containerButtons">
                            <div onClick={() => setVistaToxina('ToxinaUno') }>
                                Facial
                            </div>
                            <div onClick={() => setVistaToxina('ToxinaDos') }>
                                Corporal
                            </div>
                        </div>

                        
                            {
                                vistaToxina=='ToxinaUno'?
                                <div className="containerPoints">
                                    <PuntosToxina1 />
                                </div>:""

                            }                                              
                            {
                                vistaToxina=='ToxinaDos'?
                                <div className="containerPoints">
                                    <PuntosToxina2 />
                                </div>:""
                            }
                    </div>
                    :<></>
            }

            {
                vistaTechnologies == 2 ?
                    <div className={"contentAestheticFillers "+ vistaToxina } >
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            {
                                vistaFillers==''?
                                    <img src={Fillers1}  />         
                                    :                                    
                                    <img src={Fillers2}  />       
                            }                                                   
                        </div>
                        <div className="containerScores">
                            <div className="Score">                        
                                <div>
                                    {
                                        vistaFillers=='FillersUno'?
                                        <img src={AcidoHialuronico1} style={{maxWidth:"170px",marginRight:"10px"}}  /> :""               
                                    }
                                    <label className='price'>Desde $<p>9,000</p></label>                                  
                                </div>
                            </div>                           
                        </div>
                        <div className="containerParagraph">
                            {
                                vistaFillers=='FillersUno'?
                                    <p>
                                       El ácido hialurónico es utilizado en dos formas reticulado y no reticulado.
                                        <br />
                                        Reticulado sirve como relleno por su retención del agua y su densidad.
                                        <br />
                                        No Reticulado sirve como una sustancia ligera para hidratar la piel que se infiltra a nivel superficial.
                                        <br />
                                        El uso de cada uno depende del resultado esperado.
                                    </p>:
                                    ""
                            }
                            {
                                vistaFillers==''?
                                    <p>
                                        Aporta hidratación y volumen en la piel, remodelando y mejorando la estética facial.
                                        Potencializa el efecto de esculpir, voluminizar y suavizar el rostro.
                                        Resultados a medida.
                                    </p>:""
                            }                        
                            {
                                vistaFillers=='FillersDos'?
                                    <p>                                        
                                        El ácido hialurónico es utilizado en dos formas reticulado y no reticulado.
                                        <br /><br />
                                        Reticulado sirve como relleno por su retención del agua y su densidad.
                                        <br /><br />
                                        No Reticulado sirve como una sustancia ligera para hidratar la piel que se infiltra a nivel superficial.
                                        <br /><br />
                                        El uso de cada uno depende del resultado esperado.
                                    </p>:""
                            }
                                                     
                            {
                                vistaFillers=='FillersTres'?
                                    <p>
                                        Auxiliar en el tratamiento para sudoración excesiva (hiperhidrosis).

                                    </p>:""
                            }
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Duración de tratamiento: 60 min</p></li>
                                <li><div /><p>Duración de efecto: 6 a 14 meses </p></li>
                                <li><div /><p>Resultados visibles de forma instantánea</p></li>
                                <li><div /><p>Revisión a los 15 días post tratamiento</p></li>                         
                            </ul>
                        </div>         
                        <div className="containerOpcions">
                            { 
                                vistaFillers==''?
                                <div>
                                    <label>
                                        Efecto lifting
                                        <p>
                                        </p>
                                    </label>
                                    <p>Armonización facial y perfilamiento, a partir de los 30 años</p>
                                </div>    
                                :""
                            }
                                                     
                        </div>         
                        <div className="containerButtons">
                            <div onClick={() => setVistaFillers('FillersUno') } className={vistaFillers=='FillersUno'?"BotonActivo":""}  >
                                Ácido Hialurónico
                            </div>                        
                            <div onClick={() => setVistaFillers('FillersDos') } className={vistaFillers=='FillersDos'?"BotonActivo":""} >
                                Revitalizadores
                            </div>
                            <div onClick={() => setVistaFillers('FillersTres') } className={vistaFillers=='FillersTres'?"BotonActivo":""} >
                                Bioestimuladores
                            </div>


                            <div className="containerSubButtons">
                                {
                                    vistaFillers=='FillersUno'?



                                        <div className={ 
                                                (subButton==0?"containerContentButtons":"")+
                                                (subButton==1?"containerContentButtonsOne":"")+
                                                (subButton==2?"containerContentButtonsTwo":"")+
                                                (subButton==3?"containerContentButtonsThree":"")
                                            }>
                                            <div className="contentSubButtons">
                                                <div className={subButton==1?"buttonOneActive":"buttonOne"} onClick={()=>changeViewHyaluronic(1)}></div>
                                                <div className={subButton==2?"buttonTwoActive":"buttonTwo"} onClick={()=>changeViewHyaluronic(2)}></div>
                                                <div className={subButton==3?"buttonThreeActive":"buttonThree"} onClick={()=>changeViewHyaluronic(3)}></div>
                                            </div>
                                            <div className="contentText">
                                                {
                                                    subButton==1?
                                                        <p>
                                                            Resultados a medida con rendimiento de larga duración.
                                                         
                                                            Tratamiento mínimamente invasivo.   
                                                        </p>
                                                        :""
                                                }
                                                {
                                                    subButton==2?
                                                        <p>
                                                            Reduce la aparición de líneas y arrugas, rehidrata la piel y restaura los volúmenes de perfiles faciales. 
                                                            
                                                            Tratamiento mínimamente invasivo.
                                                        </p>
                                                        :""
                                                }
                                                {
                                                    subButton==3?
                                                        <p>
                                                            Diseñado para corrección de arrugas, contorno facial y restauración de volumen.
                                                            Tratamiento mínimamente invasivo.
                                                        </p>
                                                        :""
                                                }
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                            </div>                        
                        </div>                        
                    
                    
                        {
                            vistaFillers=='FillersUno'?
                            <div className="backgroundImageOne">                                
                            </div>:""
                        }     
                        {
                            subButton==1?
                            <div className="ButtonsTop">
                                <div className={stateHialuronic ==1 ? "active":""} onClick={()=> setStateHialuronic(1)}>INYECTABLES</div>
                                <div className={stateHialuronic ==2 ? "active":""} onClick={()=> setStateHialuronic(2)}>PROTOCOLOS</div>
                            </div>:""
                        }     
                        {
                            stateHialuronic==1?
                            <div className="containerPoints">
                                <Hialuronic1 />
                            </div>:""
                        }                             
                        {
                            stateHialuronic==2?
                            <div className="containerPoints">
                                <Hialuronic2 />
                            </div>:""
                        }
                        {
                            stateHialuronic==3?
                            <div className="containerPoints">
                                <Hialuronic3 />
                            </div>:""
                        }
                        {
                            stateHialuronic==4?
                            <div className="containerPoints">
                                <Hialuronic4 />
                            </div>:""
                        }
                    </div>
                    :<></>
            }





            {
                vistaTechnologies == 3 ?
                    <div className={"contentAestheticEnzimas "+ vistaToxina } >
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <img src={Fillers1}  />

                           
                        </div>
                        <div className="containerScores">
                            <div className="Score">                        
                                <div>
                                    <label className='price'>Desde $<p>9,000</p></label>                                  
                                </div>
                            </div>                           
                        </div>
                        <div className="containerParagraph">
                            {
                                vistaFillers=='FillersUno'?
                                    <p>
                                       El ácido hialurónico es utilizado en dos formas reticulado y no reticulado.
                                        <br /><br />
                                        Reticulado sirve como relleno por su retención del agua y su densidad.
                                        <br /><br />
                                        No Reticulado sirve como una sustancia ligera para hidratar la piel que se infiltra a nivel superficial.
                                        <br /><br />
                                        El uso de cada uno depende del resultado esperado.
                                    </p>:
                                    ""
                            }
                            {
                                vistaFillers==''?
                                    <p>
                                        Aporta hidratación y volumen en la piel, remodelando y mejorando la estética facial.
                                        Potencializa el efecto de esculpir, voluminizar y suavizar el rostro.
                                        Resultados a medida.
                                    </p>:""
                            }                        
                            {
                                vistaFillers=='FillersDos'?
                                    <p>                                        
                                        El ácido hialurónico es utilizado en dos formas reticulado y no reticulado.
                                        <br /><br />
                                        Reticulado sirve como relleno por su retención del agua y su densidad.
                                        <br /><br />
                                        No Reticulado sirve como una sustancia ligera para hidratar la piel que se infiltra a nivel superficial.
                                        <br /><br />
                                        El uso de cada uno depende del resultado esperado.
                                    </p>:""
                            }
                                                     
                            {
                                vistaFillers=='FillersTres'?
                                    <p>
                                        Auxiliar en el tratamiento para sudoración excesiva (hiperhidrosis).

                                    </p>:""
                            }
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Duración de tratamiento: 60 min</p></li>
                                <li><div /><p>Duración de efecto: 6 a 14 meses </p></li>
                                <li><div /><p>Resultados visibles de forma instantánea</p></li>
                                <li><div /><p>Revisión a los 15 días post tratamiento</p></li>                         
                            </ul>
                        </div>         



                        <div className="containerOpcions">
                            <div>
                                <label>
                                    Efecto lifting
                                    <p>
                                    </p>
                                </label>
                                <p>Armonización facial y perfilamiento, a partir de los 30 años</p>
                            </div>                              
                        </div>         


                        <div className="containerButtons">
                            <div onClick={() => setVistaFillers('FillersUno') }>
                            Ácido Hialurónico
                            </div>
                            <div onClick={() => setVistaFillers('FillersDos') }>
                            Revitalizadores
                            </div>
                            <div onClick={() => setVistaFillers('FillersTres') }>
                            Bioestimuladores
                            </div>
                        </div>

                        
                            {
                                vistaToxina=='ToxinaUno'?
                                <div className="containerPoints">
                                    <PuntosToxina1 />
                                </div>:""

                            }                                              
                            {
                                vistaToxina=='ToxinaDos'?
                                <div className="containerPoints">
                                    <PuntosToxina2 />
                                </div>:""
                            }
                    </div>
                    :<></>
            }












            {
                vistaTechnologies == 4 ?
                    <div className={"contentAestheticExosomas1 " } >
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <img src={Fillers1}  />

                           
                        </div>
                        <div className="containerScores">
                            <div className="Score">                        
                                <div>
                                    <label className='price'>Desde $<p>9,000</p></label>                                  
                                </div>
                            </div>                           
                        </div>
                        <div className="containerParagraph">
                            {
                                vistaFillers=='FillersUno'?
                                    <p>
                                       El ácido hialurónico es utilizado en dos formas reticulado y no reticulado.
                                        <br /><br />
                                        Reticulado sirve como relleno por su retención del agua y su densidad.
                                        <br /><br />
                                        No Reticulado sirve como una sustancia ligera para hidratar la piel que se infiltra a nivel superficial.
                                        <br /><br />
                                        El uso de cada uno depende del resultado esperado.
                                    </p>:
                                    ""
                            }
                            {
                                vistaFillers==''?
                                    <p>
                                        Aporta hidratación y volumen en la piel, remodelando y mejorando la estética facial.
                                        Potencializa el efecto de esculpir, voluminizar y suavizar el rostro.
                                        Resultados a medida.
                                    </p>:""
                            }                        
                            {
                                vistaFillers=='FillersDos'?
                                    <p>                                        
                                        El ácido hialurónico es utilizado en dos formas reticulado y no reticulado.
                                        <br /><br />
                                        Reticulado sirve como relleno por su retención del agua y su densidad.
                                        <br /><br />
                                        No Reticulado sirve como una sustancia ligera para hidratar la piel que se infiltra a nivel superficial.
                                        <br /><br />
                                        El uso de cada uno depende del resultado esperado.
                                    </p>:""
                            }
                                                     
                            {
                                vistaFillers=='FillersTres'?
                                    <p>
                                        Auxiliar en el tratamiento para sudoración excesiva (hiperhidrosis).

                                    </p>:""
                            }
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Duración de tratamiento: 60 min</p></li>
                                <li><div /><p>Duración de efecto: 6 a 14 meses </p></li>
                                <li><div /><p>Resultados visibles de forma instantánea</p></li>
                                <li><div /><p>Revisión a los 15 días post tratamiento</p></li>                         
                            </ul>
                        </div>         



                        <div className="containerOpcions">
                            <div>
                                <label>
                                    Efecto lifting
                                    <p>
                                    </p>
                                </label>
                                <p>Armonización facial y perfilamiento, a partir de los 30 años</p>
                            </div>                              
                        </div>         


                        <div className="containerButtons">
                            <div onClick={() => setVistaFillers('FillersUno') }>
                            Ácido Hialurónico
                            </div>
                            <div onClick={() => setVistaFillers('FillersDos') }>
                            Revitalizadores
                            </div>
                            <div onClick={() => setVistaFillers('FillersTres') }>
                            Bioestimuladores
                            </div>
                        </div>

                        
                            {
                                vistaToxina=='ToxinaUno'?
                                <div className="containerPoints">
                                    <PuntosToxina1 />
                                </div>:""

                            }                                              
                            {
                                vistaToxina=='ToxinaDos'?
                                <div className="containerPoints">
                                    <PuntosToxina2 />
                                </div>:""
                            }
                    </div>
                    :<></>
            }





        </div>
        
    )
}



export default Aesthetic