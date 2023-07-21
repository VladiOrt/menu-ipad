import './index.scss'
import { useState } from 'react'









const ArrowLeft = require('../../../utils/img/arrow/left.png')
const ArrowRight = require('../../../utils/img/arrow/right.png')

const StarBrown = require('../../../utils/img/stars/starBrown.png')
const StarWhite = require('../../../utils/img/stars/starWhite.png')
const StarGold = require('../../../utils/img/stars/starGold.png')

const Reskin1 = require('../../../utils/img/tecnologies/reskin/icon1.png')
const Reskin2 = require('../../../utils/img/tecnologies/reskin/icon2.png')



const Technologies = () =>{

    const[vistaTechnologies,setVistaTechnologies] =useState(0)







    function handleViewTecnologies(){

        setVistaTechnologies(1)

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
                                <li onClick={handleViewTecnologies}>
                                    <div className="circle"></div>
                                    <label>
                                        Reskin
                                    </label>
                                </li>

                                <li>
                                    <div className="circle"></div>
                                    <label>
                                        Skin-Glow
                                    </label>
                                </li>                        
                                <li>
                                    <div className="circle"></div>
                                    <label>
                                        Smart Peelings
                                    </label>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <label>
                                        Skin Renew
                                    </label>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <label>
                                        Diamond Lifting Corporal
                                    </label>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <label>
                                        Diamond Lifting Facial
                                    </label>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <label>
                                        Luxe Resurfacing
                                    </label>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <label>
                                        A New Beginning
                                    </label>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <label>
                                        Ultralift
                                    </label>
                                </li>
                                <li>
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
                            <img src={ArrowLeft} />
                            <img src={ArrowRight} />
                        </div>
                        <div className="containerIcons">
                            <img src={Reskin1} />
                            <img src={Reskin2} />
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label>$2,200</label>
                                <div>
                                    <label></label>
                                    <div className="stars">
                                        <img src={StarBrown} />
                                        <img src={StarBrown} />
                                    </div>
                                    <label>70 min</label>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                                Tratamiento innovador con tecnología smart pulse para el foto- rejuvenecimiento  del rostro. ¡Repara daños visibles en tu piel.
                            </p>
                        </div>

                        <div className="containerDescriptions">
                            <div className="ul">
                                <li>Atenúa manchas producidas por la edad o el sol</li>
                                <li>Aumenta la oxigenación y regenera la estructura de la piel</li>
                                <li>Promueve la producción de colágeno y elastina</li>
                                <li>Estimula el crecimiento de uñas y pelo</li>
                            </div>
                        </div>
                    </div>
                    :<></>
            }

          
        </div>
        
    )
}


export default Technologies