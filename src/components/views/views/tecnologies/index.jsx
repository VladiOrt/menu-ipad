import './index.scss'
import { useState } from 'react'



import Peelings from './peelings'





const ArrowLeft = require('../../../utils/img/arrow/left.png')
const ArrowRight = require('../../../utils/img/arrow/right.png')

const StarBrown = require('../../../utils/img/stars/starBrown.png')
const StarWhite = require('../../../utils/img/stars/starWhite.png')
const StarGold = require('../../../utils/img/stars/starGold.png')

const Reskin1 = require('../../../utils/img/tecnologies/reskin/icon1.png')
const Reskin2 = require('../../../utils/img/tecnologies/reskin/icon2.png')


const SkinGlow1 = require('../../../utils/img/tecnologies/skinGlow/Icon1.png')
const SkinGlow2 = require('../../../utils/img/tecnologies/skinGlow/Icon2.png')


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






const Technologies = () =>{

    const[vistaTechnologies,setVistaTechnologies] =useState(0)







    function handleViewTecnologies(id){
        setVistaTechnologies(id)
    }



    function changeView(valor){
        console.log("Valor" ,valor )
        if(valor=='Back'){
            
            if(vistaTechnologies == 1){
                setVistaTechnologies(10)
            }else{
                setVistaTechnologies(vistaTechnologies-1)
            }
        }else if(valor=='Forward'){
            if(vistaTechnologies == 10){
                setVistaTechnologies(1)
            }else{
                setVistaTechnologies(vistaTechnologies+1)
            }
        }
    }





    return(
        <div className="containerTechnologiesContainer">

            {
                vistaTechnologies == 0 ?
                    <div className="contentTechnologies">
                        <label>
                            Tecnologías
                        </label>
                        <p>
                            Soluciones de rejuvenecimiento y medicina estética sin cirugía, con la más avanzada tecnología a nivel mundial.
                            Nuestros tratamientos son seguros para todo tipo de piel y su procedimiento es indoloro y no invasivo.
                            ¡Resultados visibles desde la primera sesión!
                        </p>
                        <nav>
                            <ul>
                                <li onClick={()=>handleViewTecnologies(1)}>
                                    <div className="circle"></div>
                                    <label>
                                        Reskin
                                    </label>
                                </li>

                                <li onClick={()=>handleViewTecnologies(2)}>
                                    <div className="circle"></div>
                                    <label>
                                        Skin-Glow
                                    </label>
                                </li>                        
                                <li onClick={()=>handleViewTecnologies(3)}>
                                    <div className="circle"></div>
                                    <label>
                                        Smart Peelings
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(4)}>
                                    <div className="circle"></div>
                                    <label>
                                        Skin Renew
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(5)}>
                                    <div className="circle"></div>
                                    <label>
                                        Diamond Lifting Corporal
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(6)}>
                                    <div className="circle"></div>
                                    <label>
                                        Diamond Lifting Facial
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(7)}>
                                    <div className="circle"></div>
                                    <label>
                                        Luxe Resurfacing
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(8)}>
                                    <div className="circle"></div>
                                    <label>
                                        A New Beginning
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(9)}>
                                    <div className="circle"></div>
                                    <label>
                                        Ultralift
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(10)}>
                                    <div className="circle"></div>
                                    <label>
                                        Dermapen
                                    </label>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    :<></>
            }







            {
                vistaTechnologies == 1 ?
                    <div className="contentTechnologiesReskin">
                        <div className="hederButtons">                           
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Reskin
                                </div>
                                <div className="subtitle">
                                    Cámara de colágeno
                                </div>
                            </div>
                            <img src={Reskin2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <div>
                                    <label className='price'>$<p>2,200</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>70 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Tratamiento estimulante que mejora la circulación sanguínea, el crecimiento en uñas y cabello e incrementa la producción de colágeno y elastina.
                            <br></br>
                            ¡Luce un aspecto rejuvenecedor de forma natural!
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Atenúa manchas producidas por la edad o el sol</p></li>
                                <li><div />Aumenta la oxigenación y regenera la estructura de la piel</li>
                                <li><div />Promueve la producción de colágeno y elastina</li>
                                <li><div />Estimula el crecimiento de uñas y pelo</li>
                            </ul>
                        </div>
                    </div>
                    :<></>
            }





            {
                vistaTechnologies == 2 ?
                    <div className="contentTechnologiesSkinGlow">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Skin Glow
                                </div>
                                <div className="subtitle">
                                    Hidrodermoabrasión
                                </div>
                            </div>
                            <img src={SkinGlow2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label >Premium</label>
                                <div>
                                    <label className='price'>$<p>3,300</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>70 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Tratamiento purificador para extraer impurezas con tecnología avanzada, precisa y progresiva en la capa superficial de la piel por medio de una suave aspiración. 
                            <br></br>
                            ¡El resultado es increíble: piel saludable, hidratada y radiante!
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Reduce la apariencia de puntos negros y espinillas</p></li>
                                <li><div />Disminuye poros dilatados</li>
                                <li><div />Aumenta la hidratación y unifica el tono de la piel</li>
                                <li><div />Suaviza la textura del cutis</li>
                                <li><div />Maximiza la eficacia de productos aplicados en el rostro</li>
                            </ul>
                        </div>
                    </div>
                    :<></>
            }



            {
                vistaTechnologies == 3 ?
                <div className="contentTechnologiesPeelings">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>                        
                        <Peelings />
                    </div>
                    :<></>
            }






            {
                vistaTechnologies == 4 ?
                    <div className="contentTechnologiesSkinRenew">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Skin Renew
                                </div>
                                <div className="subtitle">
                                    Luz Oulsada Intensa (IPL)
                                </div>
                            </div>
                            <img src={SkinRenew2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Focalizado</label>
                                <div>
                                    <label className='price'>$<p>4,400</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>45 min</label>
                                </div>
                            </div>
                            <div className="Score">
                                <label style={{marginTop:"15px"}}>Premium</label>
                                <div>
                                    <label className='price'>$<p>5,500</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>75 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Tratamiento innovador con tecnología smart pulse para el foto- rejuvenecimiento  del rostro. ¡Repara daños visibles en tu piel.
                                                        
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                            

                                <li><div /><p>Auxiliar en el tratamiento del acné, marcas y cicatrices</p></li>
                                <li><div /><p>Regula el padecimiento de rosácea, dermatitis y zonas enrojecidas</p></li>
                                <li><div /><p>Desvanece venas rojizas (arañas vasculares)</p></li>
                                <li><div /><p>Reduce manchas superficiales y profundas</p></li>
                                <li><div /><p>Previene arrugas y líneas de expresión</p></li>
                                <li><div /><p>Minimiza la apariencia de poro dilatados</p></li>
                                <li><div /><p>Mejora la calidad y textura de la piel</p></li>                            
                            </ul>
                        </div>
                    </div>
                    :<></>
            }





            {
                vistaTechnologies == 5 ?
                    <div className="contentTechnologiesDiamondCorporal">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">

                            <div className="containerTitle">
                                <div className="title">
                                    Diamond Lifting Corporal
                                </div>
                                <div className="subtitle">
                                    Radiofrecuencia multipolar
                                </div>
                            </div>
                            <img src={diamondCorporal2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Focalizado</label>
                                <div>
                                    <label className='price'>$<p>4,000</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>60 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                                Tratamiento rejuvenecedor con radiofrecuencia multipolar que genera un aspecto jovial, disminuyendo líneas finas y arrugas.  ¡Refleja, potencia y prolonga un efecto lifting sin cirugía!                          
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Mejora el aspecto de la piel.</p></li>
                                <li><div /><p>Ayuda a eliminar la celulitis y la flacidez.</p></li>
                                <li><div /><p>Ayuda a eliminar el exceso de grasa localizada.</p></li>
                                <li><div /><p>Mejora la circulación en la zona tratada.</p></li>
                                <li><div /><p>Elimina el exceso de toxinas.Hace que tu piel  esté más tersa y luminosa.</p></li>
                            </ul>
                        </div>
                    </div>
                    :<></>
            }






            {
                vistaTechnologies == 6 ?
                    <div className="contentTechnologiesDiamondFacial">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Diamond Lifting Facial
                                </div>
                                <div className="subtitle">
                                    Radiofrecuencia multipolar
                                </div>
                            </div>
                            
                            <img src={diamondFacial2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Premium</label>
                                <div>
                                    <label className='price'>$<p>5,000</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>90 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Tratamiento rejuvenecedor con radiofrecuencia multipolar que genera un aspecto jovial, disminuyendo líneas finas y arrugas. 
                            <br/>
                            ¡Refleja, potencia y prolonga un efecto lifting sin cirugía!                        
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Estimula la producción de colágeno y elastina</p></li>
                                <li><div /><p>Disminuye flacidez de pómulos y mandíbula para un contorno más definido</p></li>
                                <li><div /><p>Suaviza arrugas y finas líneas de expresión</p></li>
                                <li><div /><p>Reafirma y aporta brillo natural a la piel</p></li>
                                <li><div /><p>Aporta luminosidad y mejora la textura de la piel</p></li>
                                <li><div /><p>Atenúa la apariencia de poros dilatados</p></li>                                
                            </ul>
                        </div>
                    </div>
                    :<></>
            }




            {
                vistaTechnologies == 7 ?
                    <div className="contentTechnologiesResurfacing">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Luxe Resurfacing
                                </div>
                                <div className="subtitle">
                                    Radiofrecuencia nanofraccional
                                </div>
                            </div>
                            <img src={Resurfacing2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label></label>
                                <div>
                                    <label className='price'>$<p>9,500</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>75 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Tratamiento renovador con radiofrecuencia nanofraccional que restaura la piel para mejorar la calidad de tu rostro.
                            <br/>
                            ¡Firmeza, elasticidad y renovación celular!
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Desvanece marcas de acné y cicatrices hasta en un 90%</p></li>
                                <li><div /><p>Reduce poros dilatados, arrugas profundas y textura irregular</p></li>
                                <li><div /><p>Promueve la elasticidad en la piel generando un aspecto más firme</p></li>
                                <li><div /><p>Disminuye la pigmentación en diferentestipos de piel</p></li>                                                             
                            </ul>
                        </div>
                    </div>
                    :<></>
            }




        
            {
                vistaTechnologies == 8 ?
                    <div className="contentTechnologiesBegining">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    A new beginning
                                </div>
                                <div className="subtitle">
                            
                                </div>
                            </div>
                            <img src={Beginning2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label></label>
                                <div>
                                    <label className='price'>$<p>14,000</p></label>
                                    <div className="stars">
                                       {/*  <img src={StarGold} />  */}
                                       {/*  <img src={StarGold} />  */}
                                       {/*  <img src={StarGold} />  */}
                                       {/*  <img src={StarGold} />  */}
                                       {/*  <img src={StarGold} />  */}
                                    </div>
                                    <label className='time'>160 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Tratamiento completo que fusiona tres tecnologías de alta intensidad para una piel hasta 10 años más joven.
                            <br/>
                            ¡Dale un nuevo comienzo a tu piel!
                            </p>
                        </div>


                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Estimula la producción de colágeno y elastina </p></li>
                               
                                <li><div /><p>Auxiliar en el tratamiento del acné, marcas y cicatrices</p></li>    
                                <li><div /><p>Regula el padecimiento de rosácea, dermatitis y zonas enrojecidas</p></li>    
                                <li><div /><p>Desvanece venas rojizas (arañas vasculares)</p></li>    
                                <li><div /><p>Reduce manchas superficiales y profundas</p></li>                                                             
                                <li><div /><p>Previene arrugas y líneas de expresión</p></li>    
                                <li><div /><p>Minimiza la apariencia de poro dilatados</p></li>    
                            </ul>
                        </div>
                    </div>
                    :<></>
            }




            {
                vistaTechnologies == 9 ?
                    <div className="contentTechnologiesUltralift">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Ultralift
                                </div>
                                <div className="subtitle">
                            
                                </div>
                            </div>
                            <img src={Ultralift2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>Facial</label>
                                <div>
                                    <label className='price'>$<p>25,000</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>120 min</label>
                                </div>
                            </div>
                            <div className="Score">
                                <label style={{marginTop:"15px"}}>Corporal</label>
                                <div>
                                    <label className='price'>$<p>36,000</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>120 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Es una tecnologia de ultrasonido focalizado que combina micro y macro focalizado de alta intensidad ayuda a mejorar flacidez, contorno corporal y anclaje muscular. 
                            <br /><br />
                            Rostro: efecto lifting, mejora apariencia de arrugas.
                            <br /><br />
                            Cuerpo: reduce flacidez, disminuye 20% de grasa localizada                            
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Regenera colágeno</p></li>
                                <li><div /><p>Suaviza arrugas</p></li>
                                <li><div /><p>Reafirma tu piel</p></li>
                            </ul>
                        </div>
                    </div>
                    :<></>
            }




            {
                vistaTechnologies == 10 ?
                    <div className="contentTechnologiesDermapen">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Dermapen
                                </div>
                                <div className="subtitle">
                            
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label></label>
                                <div>
                                    <label className='price'>$<p>12,000</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                    </div>
                                    <label className='time'>70 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                            Este procedimiento médico está indicado para realizarse en la zona de papada, contorno de ojos, pómulos, adiposidad corporal, celulitis, entre otras. 
                            <br /><br />
                            Reafirma, eliminar fibrosis o pequeñas cantidades de grasa. Se utilizan para casos de flacidez (tercio inferior de la cara donde se observan las mejillas y el cuello con aspecto caído; papada; en abdomen; fibrosis posterior a una cicatriz postoperatoria; grasa localizada; disminución de celulitis; piernas y brazos).
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>El único sistema enzimático recombinante</p></li>
                                <li><div /><p>Enzimas de última generación</p></li>
                                <li><div /><p>Dispositivo listo para usar, fácil de aplicar y mínimamente invasivo</p></li>                                
                            </ul>
                        </div>
                    </div>
                    :<></>
            }
        </div>
        
    )
}


export default Technologies