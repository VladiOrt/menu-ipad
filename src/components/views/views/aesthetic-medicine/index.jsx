import './index.scss'
import { useState, useLayoutEffect } from 'react'


import PuntosToxina1 from './toxina1'
import PuntosToxina2 from './toxina2'

import Hialuronic1 from './hialuronic1'
import Hialuronic2 from './hialuronic2'
import Hialuronic3 from './hialuronic3'
import Hialuronic4 from './hialuronic4'

import Revitalizadores1 from './revitalizadores1'

import Bioestimuladores1 from './bioestimuladores1'
import Bioestimuladores2 from './bioestimuladores2'

import ENZIMAS1 from './enzimas1'
import ENZIMAS2 from './enzimas2'
import ENZIMAS3 from './enzimas3'




const ArrowLeft = require('../../../utils/img/arrow/left.png')
const ArrowRight = require('../../../utils/img/arrow/right.png')

const StarBrown = require('../../../utils/img/stars/starBrown.png')
const StarWhite = require('../../../utils/img/stars/starWhite.png')
const StarGold = require('../../../utils/img/stars/starGold.png')





const Toxina1 = require('../../../utils/img/aesthetic/toxina/Icon1.png')
const Toxina2 = require('../../../utils/img/aesthetic/toxina/Icon2.png')


const Fillers1 = require('../../../utils/img/aesthetic/fillers/Icon1.png')
const Fillers2 = require('../../../utils/img/aesthetic/fillers/Icon1-0.png')


const Revitalizadores0 = require('../../../utils/img/aesthetic/fillers/Revitalizadores/Icon0.png')

const Bioestimuladores0 = require('../../../utils/img/aesthetic/fillers/Bioestimuladores/Icon0.png')





const Enzimas = require('../../../utils/img/aesthetic/enzimas/Icon0.png')


const Exoxomas1 = require('../../../utils/img/aesthetic/exosomas/Icon1.png')
const Exoxomas2 = require('../../../utils/img/aesthetic/exosomas/Icon2.png')




const AcidoHialuronico1 = require('../../../utils/img/aesthetic/fillers/Icon2.png')





const Aesthetic = (props) =>{

    const[vistaTechnologies,setVistaTechnologies] =useState(0)





    const[vistaToxina,setVistaToxina]  = useState('')
    const[subButton,setsubButton] = useState(0)



    const[vistaFillers,setVistaFillers]  = useState('')
    const[stateHialuronic,setStateHialuronic]  = useState(0)

    const[vistaEnzimas,setVistaEnzimas]  = useState('')

    const[stateEnzimas,setStateEnzimas]  = useState(0)


    function handleVistaFillers (id){
        setStateHialuronic(0)
        setsubButton(0)
        setVistaFillers(id)       
    }

    function handleVistaEnzimas (id){
        setStateEnzimas(0)
        setsubButton(0)
        setVistaEnzimas(id)       
    }

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
                setVistaTechnologies(4)
            }else{
                setVistaTechnologies(vistaTechnologies-1)
            }
        }else if(valor=='Forward'){
            if(vistaTechnologies == 4){
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
        if(id==5){
            setsubButton(5)
            setStateHialuronic(5)
        }
        if(id==6){
            setsubButton(6)
            setStateHialuronic(6)
        }
        if(id==7){
            setsubButton(7)
            setStateHialuronic(7)
        }
    }


 

        useLayoutEffect(() => {
            if(props.container =='Exosomas'){
                handleViewTecnologies(4)
            }
        }, [])




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
                            <div className="containerTitle">
                                <div className="title">
                                    Toxina Butolínica
                                </div>
                                <div className="subtitle">
                            
                                </div>
                            </div>
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
                            {/*
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
                            */}
                        </div>         


                        <div className="containerButtons">
                            <div onClick={() => setVistaToxina('ToxinaUno') } >
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
                    <div className={"contentAestheticFillers "+ vistaToxina } style={vistaFillers!=''? {background:"none"}:  {background:""}}  >
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Fillers
                                </div>
                                <div className="subtitle">
                                    {
                                        vistaFillers=='FillersUno'?
                                        "Ácido Hialurónico":""
                                    }
                                    {
                                        vistaFillers=='FillersDos'?
                                        "Revitalizadores":""
                                    }

                                    {
                                        vistaFillers=='FillersTres'?
                                        "Bioestimuladores":""
                                    }

                                </div>
                            </div>                                                 
                        </div>
                        <div className="containerScores">
                            <div className="Score">                        
                                <div>
                                    {
                                    /*
                                        vistaFillers=='FillersUno'?
                                        <img src={AcidoHialuronico1} style={{maxWidth:"170px",marginRight:"10px"}}  /> :""               
                                    */
                                    }
                                    {
                                    /*
                                        vistaFillers=='FillersDos'?
                                        <img src={Revitalizadores0} style={{maxWidth:"170px",marginRight:"10px"}}  /> :""               
                                    */ 
                                    }
                                    {
                                    /*
                                        vistaFillers=='FillersTres'?
                                        <img src={Bioestimuladores0} style={{maxWidth:"170px",marginRight:"10px"}}  /> :""               
                                    */
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
                                    <div>                                        
                                        <p>                                        
                                            Un auténtico booster de nutrición cutánea formulado de forma científica.
                                            <br /><br />
                                            Aporta a tu piel hidratación, elasticidad, luminosidad y firmeza.                                                                              
                                        </p>
                                        <ul >
                                            <li>Estimula fibrolastos</li>
                                            <li>Estimula el colágeno</li>
                                            <li>Estimula radicales libres</li>
                                        </ul>
                                    </div>    
                                    :""
                            }

                            {
                                vistaFillers=='FillersTres'?
                                    <p>
                                        Su función es estimular la producción de colágeno en la piel para mantener la firmeza, elasticidad y flexibilidad apropiada.
                                    </p>:""
                            }
                            {
                                subButton==6?
                                    <div>                                        
                                        <p>                                        
                                            Beneficios
                                        </p>
                                        <ul >
                                            <li>Restauración de volumen inmediata </li>
                                            <li>Estimulación de producción de colágeno</li>
                                            <li>Rellena arrugas</li>
                                            <li>Disminuye pliegues</li>
                                            <li>Mejora el aspecto de flacidez</li>
                                            <li>Perfilamiento y proyección facial</li>                                     
                                        </ul>
                                    </div>    
                                    :""
                            }

                            {
                                subButton==7?
                                    <div>                                        
                                        <p>                                        
                                            Beneficios
                                        </p>
                                        <ul >
                                            <li>Restauración de volumen inmediata </li>
                                            <li>Estimulación de producción de colágeno </li>
                                            <li>Rellena arrugas</li>
                                            <li>Rejuvenecimiento facial </li>
                                            <li>Proporciona un efecto natural</li>
                                            <li>Mejora el aspecto de flacidez</li>
                                            <li>Perfilamiento y proyección facial</li>                                            
                                        </ul>
                                    </div>    
                                    :""
                            }                       
                           
                        </div>

                        <div className="containerDescriptions">
                            {
                                vistaFillers==''?
                                <ul className="ul">
                                    <li><div /><p>Duración de tratamiento: 60 min</p></li>
                                    <li><div /><p>Duración de efecto: 6 a 14 meses </p></li>
                                    <li><div /><p>Resultados visibles de forma instantánea</p></li>
                                    <li><div /><p>Revisión a los 15 días post tratamiento</p></li>                         
                                </ul>:""
                            }
                            {
                                vistaFillers=='FillersUno'?
                                <ul className="ul">
                                    <li><div /><p>Duración de tratamiento: 60 min</p></li>
                                    <li><div /><p>Duración de efecto: 6 a 14 meses </p></li>
                                    <li><div /><p>Resultados visibles de forma instantánea</p></li>
                                    <li><div /><p>Revisión a los 15 días post tratamiento</p></li>                         
                                </ul>:""
                            }
                            {
                                vistaFillers=='FillersDos'?
                                <ul className="ul">
                                    <li><div /><p>Duración de tratamiento: 40 min</p></li>
                                    <li><div /><p>Duración de efecto: 3 a 4 meses </p></li>
                                    <li><div /><p>Resultados visibles de forma instantánea</p></li>
                                    <li><div /><p>Revisión a los 15 días post tratamiento</p></li>                         
                                </ul>:""
                            }
                           {
                                vistaFillers=='FillersTres'?
                                <ul className="ul">
                                    <li><div /><p>Duración de tratamiento: 60 min</p></li>
                                    <li><div /><p>Duración de efecto: hasta 14 meses</p></li>
                                    <li><div /><p>Resultados visibles de forma instantánea</p></li>
                                    <li><div /><p>Revisión a los 15 días post tratamiento</p></li>                         
                                </ul>:""
                            }
                        </div>         
                        <div className="containerOpcions">
                            { 
                                vistaFillers==''?
                                <div>
                                    {/*
                                    <label>
                                        Efecto lifting
                                        <p>
                                        </p>
                                    </label>
                                    <p>Armonización facial y perfilamiento, a partir de los 30 años</p>
                                    */}
                                </div>    
                                :""
                            }
                                                     
                        </div>         
                        <div className="containerButtons">
                            <div onClick={() => handleVistaFillers('FillersUno') } className={vistaFillers=='FillersUno'?"BotonActivo":""}  >
                                Ácido Hialurónico
                            </div>                        
                            <div onClick={() => handleVistaFillers('FillersDos') } className={vistaFillers=='FillersDos'?"BotonActivo":""} >
                                Revitalizadores
                            </div>
                            <div onClick={() => handleVistaFillers('FillersTres') } className={vistaFillers=='FillersTres'?"BotonActivo":""} >
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

                                
                                {
                                    vistaFillers=='FillersDos'?
                                        <div className="containerContentButtonsOneRevitalizadores">
                                            <div className="contentSubButtonsRevitalizadores">
                                                <div className={subButton==5?"buttonOneRevitalizadores":"buttonOneRevitalizadores"} onClick={()=>changeViewHyaluronic(5)}></div>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }




                                {
                                    vistaFillers=='FillersTres'?
                                        <div className="containerContentButtonsBio">
                                            <div className="contentSubButtons">
                                                <div className={subButton==6?"buttonFiveActive":"buttonFive"} onClick={()=>changeViewHyaluronic(6)}></div>
                                                <div className={subButton==7?"buttonSixActive":"buttonSix"} onClick={()=>changeViewHyaluronic(7)}></div>
                                            </div>
                                            <div className="contentTextBio">
                                                {
                                                    subButton==6?
                                                        <p>
                                                           Sustancia que ayuda a restaurar el colágeno estimulando las células propias.
                                                            Proporciona soporte estructural a la piel
                                                            y volumen.
                                                        </p>
                                                        :""
                                                }
                                                {
                                                    subButton==7?
                                                        <p>
                                                           Relleno facial formado por macropartículas que restauran el colágeno agotado.
                                                            Tiene dos fines: generar volumen y ser bioestimulador.
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
                            vistaFillers=='FillersTres'?
                            <div className="backgroundImageOne">                                
                            </div>:""
                        }    
                         {
                            vistaFillers=='FillersDos'?
                            <div className="backgroundImageOneRevitalizadores">                                
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
                        {
                            stateHialuronic==5?
                            <div className="containerPoints">
                                <Revitalizadores1 />
                            </div>:""
                        }


                        {
                            stateHialuronic==6?
                            <div className="containerPoints">
                                <Bioestimuladores1 />
                            </div>:""
                        }

                        {
                            stateHialuronic==7?
                            <div className="containerPoints">
                                <Bioestimuladores2 />
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


                        <div className="containerTitle">
                                <div className="title">
                                    Enzimas
                                </div>
                                <div className="subtitle">
                                
                                </div>
                            </div>    

                           
                        </div>
                        <div className="containerScores">
                            <div className="Score">                        
                                <div>
                                    <label className='price'>1er generación Desde $<p>5,000</p></label>    
                                </div>
                                <div>
                                    <label className='price'>2da generación Desde $<p>10,000</p></label>                                                                      
                                </div>
                            </div>                           
                        </div>
                        <div className="containerParagraph">
                            {
                                vistaEnzimas=='EnzimasUno'?
                                    <p>
                                        Se reduce el volumen sin dañar el tejido eliminado el exceso de sebo a nivel superficial dejando la piel limpia mejorando su aspecto y textura.
                                        <br /><br />
                                        Disminuye adiposidades localizadas.
                                    </p>:
                                    ""
                            }
                            {
                                vistaEnzimas=='EnzimasDos'?
                                    <p>
                                        Renueva las fibras de colágeno y estimula su regeneración promoviendo así la renovación de la estructura facial o corporal con potente efecto.
                                        <br /><br />
                                        Mejora la textura, flexibilidad y toxicidad de la piel.
                                    </p>:
                                    ""
                            }
                            {
                                vistaEnzimas=='EnzimasTres'?
                                    <p>
                                        Incrementa la permeabilidad dérmica, el drenaje linfático y el flujo sanguíneo.
                                    </p>:
                                    ""
                            }
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Resultados visibles a partir de un mes de la primera sesión</p></li>
                                <li><div /><p>Se recomiendan mínimo 3 sesiones para un resultado garantizado </p></li>
                                <li><div /><p>Revisión a los 15 días post tratamiento</p></li>                                
                            </ul>
                        </div>         



                        <div className="containerButtonsEnzimas">
                            <div onClick={() => handleVistaEnzimas('EnzimasUno') }>
                            { vistaEnzimas=='EnzimasUno'? <div className='EnzimasLogo1Activo' />:<div className='EnzimasLogo1' /> }
                            <label>SLIM+</label>
                            </div>
                            <div onClick={() => handleVistaEnzimas('EnzimasDos') }>
                            { vistaEnzimas=='EnzimasDos'? <div className='EnzimasLogo2Activo' />:<div className='EnzimasLogo2' /> }
                            <label>SMOOTH+</label>                            
                            </div>
                            <div onClick={() => handleVistaEnzimas('EnzimasTres') }>
                            { vistaEnzimas=='EnzimasTres'? <div className='EnzimasLogo3Activo' />:<div className='EnzimasLogo3' /> }
                            <label>DRAIN+</label>                            
                            </div>
                        </div>

                        
                            
                        {
                            vistaEnzimas=="EnzimasUno"?
                            <div className="containerButtonsPoints" >
                                <div className={stateEnzimas==1?"active":""} onClick={()=> setStateEnzimas(1)} >ROSTRO</div>
                                <div className={stateEnzimas==2?"active":""} onClick={()=> setStateEnzimas(2)} >CORPORAL</div>
                                <div className={stateEnzimas==3?"active":""} onClick={()=> setStateEnzimas(3)}>PROTOCOLOS</div>
                            </div>:""
                        }        
                        
                
                        {
                            vistaEnzimas=="EnzimasDos"?
                            <div className="containerButtonsPoints" >
                                <div className={stateEnzimas==1?"active":""} onClick={()=> setStateEnzimas(1)} >ROSTRO</div>
                                <div className={stateEnzimas==2?"active":""} onClick={()=> setStateEnzimas(2)} >CORPORAL</div>
                                <div className={stateEnzimas==3?"active":""} onClick={()=> setStateEnzimas(3)}>PROTOCOLOS</div>
                            </div>:""
                        }        
                        
                        {
                            vistaEnzimas=="EnzimasTres"?
                            <div className="containerButtonsPoints" >
                                <div className={stateEnzimas==1?"active":""} onClick={()=> setStateEnzimas(1)} >ROSTRO</div>
                                <div className={stateEnzimas==2?"active":""} onClick={()=> setStateEnzimas(2)} >CORPORAL</div>
                                <div className={stateEnzimas==3?"active":""} onClick={()=> setStateEnzimas(3)}>PROTOCOLOS</div>
                            </div>:""
                        }        
                        

                        {
                             stateEnzimas==1?
                            <div className="backgroundImageOne">                                
                            </div>:""
                        }     
                          {
                             stateEnzimas==2?
                            <div className="backgroundImageTwo">                                
                            </div>:""
                        }     
                          {
                             stateEnzimas==3?
                            <div className="backgroundImageThree">                                
                            </div>:""
                        }     



                            {
                                
                                stateEnzimas==1?
                                <div className="containerPoints">
                                    <ENZIMAS1 />
                                </div>:""                                
                            } 
                             {
                                
                                stateEnzimas==2?
                                <div className="containerPoints">
                                    <ENZIMAS2 />
                                </div>:""                                
                            }     
                             {
                                
                                stateEnzimas==3?
                                <div className="containerPoints">
                                    <ENZIMAS3 />
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
                            <img src={Exoxomas1} style={{maxWidth:"180px"}} />                           
                        </div>
                        <div className="containerScores">
                            <img src={Exoxomas2} style={{maxWidth:"100px"}}  />
                            <div className="Score">                                                    
                                <div>
                            
                                </div>
                            </div>                           
                        </div>
                        <div className="containerParagraph">                           
                            <p>
                                Son regeneradores de doble acción (intensa) formulado para absorberse rápidamente dentro de la piel. Se regenera la piel otorgando rejuvenecimiento manteniendo la firmeza y elasticidad de la piel.
                                <br/>
                                <br/>
                                Tratamiento en conjunto con la tecnología de radiofrecuencia nanofraccional (Luxe resurfacing), dermapen o nanopore.
                            </p>                            
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Duración del tratamiento: 90 minutos</p></li>
                                <li><div /><p>Cambios desde la primera sesión sin embargo hasta el día 7 sentirás el total de cambios en tu piel</p></li>                                
                                <li><div /><p>Revisión a los 15 días post tratamiento</p></li>                         
                            </ul>
                        </div>         
            
                        <div className="containerButtons">
                            <div onClick={() => handleVistaFillers('FillersUno') }>
                            Luxe Resurfacing
                            </div>
                            <div onClick={() => handleVistaFillers('FillersDos') }>
                            Dermapen
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