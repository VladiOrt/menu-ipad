import './index.scss'
import { useState } from 'react'






const ArrowLeft = require('../../../utils/img/arrow/left.png')
const ArrowRight = require('../../../utils/img/arrow/right.png')

const StarBrown = require('../../../utils/img/stars/starBrown.png')
const StarWhite = require('../../../utils/img/stars/starWhite.png')
const StarGold = require('../../../utils/img/stars/starGold.png')

const Fisioterapia1 = require('../../../utils/img/bodily/fisioterapia/Icon1.png')


const Relax1 = require('../../../utils/img/bodily/relax/Icon1.png')

const Deep1 = require('../../../utils/img/bodily/Deep/Icon1.png')

const HotStone1 = require('../../../utils/img/bodily/HotStone/Icon1.png')


const Cupping1 = require('../../../utils/img/bodily/cupping/Icon1.png')


const Limphatic1 = require('../../../utils/img/bodily/limphatic/Icon1.png')


const Cold1 = require('../../../utils/img/bodily/cold/Icon.png')


const Remodeling1 = require('../../../utils/img/bodily/remodeling/Icon1.png')







const SkinRenew1 = require('../../../utils/img/tecnologies/SkinRenew/Icon1.png')
const SkinRenew2 = require('../../../utils/img/tecnologies/SkinRenew/Icon2.png')

const diamondCorporal1 = require('../../../utils/img/tecnologies/diamondCorporal/Icon1.png')
const diamondCorporal2 = require('../../../utils/img/tecnologies/diamondCorporal/Icon2.png')

const diamondFacial1 = require('../../../utils/img/tecnologies/diamondFacial/Icon1.png')
const diamondFacial2 = require('../../../utils/img/tecnologies/diamondFacial/Icon2.png')


const Resurfacing1 = require('../../../utils/img/tecnologies/Resurfacing/Icon1.png')
const Resurfacing2 = require('../../../utils/img/tecnologies/Resurfacing/Icon2.png')

const Beginning1 = require('../../../utils/img/tecnologies/begining/Icon1.png')
const Beginning2 = require('../../../utils/img/tecnologies/begining/Icon2.png')



const Ultralift1 = require('../../../utils/img/tecnologies/ultralift/Icon1.png')
const Ultralift2 = require('../../../utils/img/tecnologies/ultralift/Icon2.png')




const Dermapen1 = require('../../../utils/img/tecnologies/dermapen/Icon1.png')






const Bodily = () =>{

    const[vistaTechnologies,setVistaTechnologies] =useState(0)







    function handleViewTecnologies(id){
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





    return(
        <div className="containerBodilyContainer">

            {
                vistaTechnologies == 0 ?
                    <div className="contentTechnologies">
                        <label>
                            Corporales
                        </label>
                        <p>
                            Creamos una experiencia de relajación absoluta con elementos que liberan la tensión de tu cuerpo, explorando distintas sensaciones a través de tus sentidos.
                            Tiempo por tratamiento: 30 minutos, 60 minutos o 90 minutos.
                            <br />
                            <br />
                            ¡Tú decides que experiencia vivir!
                        </p>
                        <nav>
                            <ul>
                                <li onClick={()=>handleViewTecnologies(1)}>
                                    <div className="circle"></div>
                                    <label>
                                        Valoración Fisiotera-péutica
                                    </label>
                                </li>

                                <li onClick={()=>handleViewTecnologies(2)}>
                                    <div className="circle"></div>
                                    <label>
                                        Relax & Renew
                                    </label>
                                </li>                        
                                <li onClick={()=>handleViewTecnologies(3)}>
                                    <div className="circle"></div>
                                    <label>
                                        Deep Tissue Therapy
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(4)}>
                                    <div className="circle"></div>
                                    <label>
                                        Hot Stone Therapy
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(5)}>
                                    <div className="circle"></div>
                                    <label>
                                        Cupping Therapy
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(6)}>
                                    <div className="circle"></div>
                                    <label>
                                        Lymphatic Drainage
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(7)}>
                                    <div className="circle"></div>
                                    <label>
                                        Cold Wrap
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(8)}>
                                    <div className="circle"></div>
                                    <label>
                                        Remodeling
                                    </label>
                                </li>                              
                            </ul>
                        </nav>
                    </div>
                    :<></>
            }







            {
                vistaTechnologies == 1 ?
                    <div className="contentBodilyFisioterapia">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                Valoración Fisioterapéutica
                                </div>
                                <div className="subtitle">
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label></label>
                                <div>
                                    <label className='price'>$<p>1,500</p></label>                                   
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                                La valoración fisioterapéutica evalúa al cuerpo y sus alteraciones, mediante la exploración física.
                                <br /><br /> 
                                Buscando analizar el origen de una lesión, alteración o disfunción musculoesquelética con el fin de brindar un diagnóstico en base a la función y la capacidad de movimiento de una persona.
                                <br /><br />
                                El objetivo es establecer un plan de tratamiento ideal en base a las necesidades y expectativas del paciente.
                            </p>
                        </div>                       
                    </div>
                    :<></>
            }





            {
                vistaTechnologies == 2 ?
                    <div className="contentBodilyRelax">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                      
                             <div className="containerTitle">
                                <div className="title">
                                Relax & Renew
                                </div>
                                <div className="subtitle">
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Básico</label>
                                <div>
                                    <label className='price'>$<p>1,400</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>30 min</label>
                                </div>
                            </div>

                            <div className="Score Medium">
                                <label style={{marginTop:"15px"}}>Medium</label>
                                <div>
                                    <label className='price'>$<p>1,800</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>60 min</label>
                                </div>
                            </div>

                            <div className="Score Premium">
                                <label style={{marginTop:"15px"}}>Premium</label>
                                <div>
                                    <label className='price'>$<p>2,600</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>90 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                                Combinación de movimientos superficiales y maniobras intensas,  con presión suave y a ritmo lento que promueve la relajación y desintoxicación del cuerpo.  
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Reduce el dolor muscular generando alivio para el estrés</p></li>
                                <li><div /><p>Elimina la sensación de ansiedad liberando más oxigeno</p></li>
                                <li><div /><p>Profunda relajación: física y mental</p></li>
                            </ul>
                        </div>
                    </div>
                    :<></>
            }



            {
                vistaTechnologies == 3 ?
                    <div className="contentBodilyDeep">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                 
                            <div className="containerTitle">
                                <div className="title">
                                Deep Tissue Therapy
                                </div>
                                <div className="subtitle">
                                    Masaje descontracturante
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Básico</label>
                                <div>
                                    <label className='price'>$<p>1,400</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>30 min</label>
                                </div>
                            </div>

                            <div className="Score Medium">
                                <label style={{marginTop:"15px"}}>Medium</label>
                                <div>
                                    <label className='price'>$<p>1,800</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>60 min</label>
                                </div>
                            </div>

                            <div className="Score Premium">
                                <label style={{marginTop:"15px"}}>Premium</label>
                                <div>
                                    <label className='price'>$<p>2,600</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>90 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Masaje con toques orientales que incorpora durante su experiencia maniobras superficiales de alta intensidad con una presión profunda, liberando de su cuerpo la energía acumulada y contenida.
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Alivia dolores musculares intensos y mejora  contracturas</p></li>
                                <li><div /><p>Da una mayor capacidad de recuperación y rendimiento al músculo</p></li>
                                <li><div /><p>Acción analgésica reduciendo el dolor de los músculos contraídos</p></li>
                            </ul>
                        </div>
                    </div>
                    :<></>
            }






            {
                vistaTechnologies == 4 ?
                    <div className="contentTechnologiesHotStone">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                Hot Stone Therapy
                                </div>
                                <div className="subtitle">
                                Masaje de piedras calientes
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Básico</label>
                                <div>
                                    <label className='price'>$<p>1,400</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>30 min</label>
                                </div>
                            </div>
                            <div className="Score Medium">
                                <label style={{marginTop:"15px"}}>Medium</label>
                                <div>
                                    <label className='price'>$<p>1,800</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>60 min</label>
                                </div>
                            </div>
                            <div className="Score Premium">
                                <label style={{marginTop:"15px"}}>Premium</label>
                                <div>
                                    <label className='price'>$<p>2,600</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>90 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Combina las propiedades curativas de piedras cálidas y lisas de origen volcánico con un masaje reconstructivo para aliviar el dolor muscular. Activa de esta forma el flujo vital de tu cuerpo, mente y alma, brindando un bienestar integral.                                                        
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                            

                                <li><div /><p>Permite eliminar zonas de tensión sin provocar dolor</p></li>
                                <li><div /><p>Desintoxica el cuerpo eliminando toxinas por su efecto de calor</p></li>
                                <li><div /><p>Crea renovación total en los niveles de tu energía</p></li>
                                
                            </ul>
                        </div>
                    </div>
                    :<></>
            }





            {
                vistaTechnologies == 5 ?
                    <div className="contentBudilyCupping">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                Cupping Therapy
                                </div>
                                <div className="subtitle">
                                Masaje de ventosas
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                        <div className="Score">
                                <label>Básico</label>
                                <div>
                                    <label className='price'>$<p>1,400</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>30 min</label>
                                </div>
                            </div>
                            <div className="Score Medium">
                                <label style={{marginTop:"15px"}}>Medium</label>
                                <div>
                                    <label className='price'>$<p>1,800</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>60 min</label>
                                </div>
                            </div>
                            <div className="Score Premium">
                                <label style={{marginTop:"15px"}}>Premium</label>
                                <div>
                                    <label className='price'>$<p>2,600</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>90 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Masaje suave y repetitivo que activa tu cuerpo y elimina edemas y otras alteraciones derivadas de una mala circulación.
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Disminuye la inflamación del cuerpo e inhibe el dolor en piernas cansadas</p></li>
                                <li><div /><p>Reduce molestias causadas por varices, no severas</p></li>
                                <li><div /><p>Mejora la apariencia de celulitis en tu piel</p></li>
                                
                            </ul>
                        </div>
                    </div>
                    :<></>
            }






            {
                vistaTechnologies == 6 ?
                    <div className="contentBodilyLimphatic">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                Lymphatic Drainage
                                </div>
                                <div className="subtitle">
                                Masaje de drenaje linfático
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Básico</label>
                                <div>
                                    <label className='price'>$<p>1,400</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>30 min</label>
                                </div>
                            </div>
                            <div className="Score Medium">
                                <label style={{marginTop:"15px"}}>Medium</label>
                                <div>
                                    <label className='price'>$<p>1,800</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>60 min</label>
                                </div>
                            </div>
                            <div className="Score Premium">
                                <label style={{marginTop:"15px"}}>Premium</label>
                                <div>
                                    <label className='price'>$<p>2,600</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>90 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Masaje suave y repetitivo que activa tu cuerpo y elimina edemas y otras alteraciones derivadas de una mala circulación.
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Disminuye la inflamación del cuerpo e inhibe el dolor en piernas cansadas</p></li>
                                <li><div /><p>Reduce molestias causadas por varices, no severas</p></li>
                                <li><div /><p>Mejora la apariencia de celulitis en tu piel</p></li>
                            </ul>
                        </div>
                    </div>
                    :<></>
            }





















            {
                vistaTechnologies == 7 ?
                    <div className="contentBodilyCold">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                Cold Wrap
                                </div>
                                <div className="subtitle">
                                Msaje de vendas frias
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Básico</label>
                                <div>
                                    <label className='price'>$<p>1,400</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>30 min</label>
                                </div>
                            </div>
                            <div className="Score Medium">
                                <label style={{marginTop:"15px"}}>Medium</label>
                                <div>
                                    <label className='price'>$<p>1,800</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>60 min</label>
                                </div>
                            </div>
                            <div className="Score Premium">
                                <label style={{marginTop:"15px"}}>Premium</label>
                                <div>
                                    <label className='price'>$<p>2,600</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>90 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>                            
                            Masaje descongestivo, natural y relajante que aprovecha el metabolismo del cuerpo para lograr la hidratación, reafirmación y humectación de la piel.
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Agiliza la circulación mejorando el flujo venoso y el sistema linfático</p></li>
                                <li><div /><p> Efecto desinflamatorio y reducción de edemas o hinchazones</p></li>
                                <li><div /><p>Favorece la eliminación de líquidos, por su efecto drenante</p></li>                                
                            </ul>
                        </div>
                    </div>
                    :<></>
            }




        
            {
                vistaTechnologies == 8 ?
                    <div className="contentBodilyRemodeling">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                Remodeling
                                </div>
                                <div className="subtitle">
                                Masaje de moldeo corporal
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Básico</label>
                                <div>
                                    <label className='price'>$<p>1,400</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>30 min</label>
                                </div>
                            </div>
                            <div className="Score Medium">
                                <label>Medium</label>
                                <div>
                                    <label className='price'>$<p>1,800</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>60 min</label>
                                </div>
                            </div>
                            <div className="Score Premium" >
                                <label>Premium</label>
                                <div>
                                    <label className='price'>$<p>2,600</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>90 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Combinación de técnicas moldeadoras en áreas como abdomen, cadera, brazos y piernas realizadas a una velocidad más rápida a la de un masaje común.
                            </p>
                        </div>


                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Ayuda a eliminar el cúmulo de grasa localizada </p></li>                               
                                <li><div /><p>Estiliza el contorno de la figura logrando una silueta más estética</p></li>    
                                <li><div /><p>Intensifica la circulación y el metabolismo de cuerpo</p></li>    
                            </ul>
                        </div>
                    </div>
                    :<></>
            }




        </div>
        
    )
}


export default Bodily