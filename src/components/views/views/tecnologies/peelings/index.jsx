
import './index.scss'



import { useState } from 'react'



const Peelings1 = require('../../../../utils/img/tecnologies/peelings/Icon1.png')
const Peelings2 = require('../../../../utils/img/tecnologies/peelings/Icon2.png')


const StarBrown = require('../../../../utils/img/stars/starBrown.png')
const StarWhite = require('../../../../utils/img/stars/starWhite.png')
const StarGold = require('../../../../utils/img/stars/starGold.png')


const Peelings = () => {

    
    const[fondo,setFondo] = useState('')
    const[vista,setVista] = useState(0)
    


    function handleVista(id){
        setVista(id)

        if(id==1){
            setFondo('Imagen1')
        }else if(id==2){
            setFondo('Imagen2')
        }else if(id==3){
            setFondo('Imagen3')
        }else if(id==4){
            setFondo('Imagen4')
        }else if(id==5){
            setFondo('Imagen5')
        }

    }


    return(
        <div className={"containerPeelings " + fondo} >
            <div className="contentTechnologiesSmartPeelings">             
                <div className="containerIcons">
                    <div className="containerTitle">
                                <div className="title">
                                    Smart Peelings
                                </div>
                                <div className="subtitle">                             
                                </div>
                            </div>
                    <img src={Peelings2} />
                </div>
                <div className="containerScores">
                    <div className="Score">
                        <label></label>
                        <div>
                            <label className='price'>$<p>3,300</p></label>
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
                        Tratamientos químicos faciales con  los  cuales  se  produce una exfoliación sin descamación, hechos a partir de enzimas para rejuvenecer y mejorar la calidad de la piel.
                        <br /><br />
                        Activos que actúan en sinergía con este tratamiento: Vitamina A, Complejo Vitamínico B, Vitamica C, Vitamina E, DMAE y Ácido Hiaulurónico.
                        <br /><br />
                        • Los beneficios en cada procedimiento dependerá de los ingredientes que se utilicen en el protocolo.
                    </p>
                </div>

                <div className={vista!=0?
                "imageContainerBackground":""
                } >
                    
                </div>

                <div className="containerDescriptions">
                    <ul className="ul">
                        <li className='Firmness' onClick={()=> handleVista(1)}>
                            <div className={vista==1?"circleOneActive":"circleOne" } />
                            <div className={vista==1?"circleTwoActive":"circleTwo" } />
                            <p>Firmness</p>
                        </li>
                        <li className='Equilibrium' onClick={()=> handleVista(2)}>
                            <div className={vista==2?"circleOneActive":"circleOne" } />
                            <p>Equilibrium</p>
                        </li>
                        <li className='Multivit' onClick={()=> handleVista(3)}>
                            <div className={vista==3?"circleOneActive":"circleOne" } />
                            <div className={vista==3?"circleTwoActive":"circleTwo" } />
                            <p>Multivit</p>
                        </li>                        
                        <li className='Hyaluronic' onClick={()=> handleVista(4)}>
                            <div className={vista==4?"circleOneActive":"circleOne" } />
                            <p>Hyaluronic</p>
                        </li>
                        <li className='Radiant' onClick={()=> handleVista(5)}>
                            <div className={vista==5?"circleOneActive":"circleOne" } />
                            <p>Radiant</p>
                        </li>
                    </ul>
                </div>


                {
                    vista>0?
                    <div className="containerPoints">
                        <div className="point One" onClick={()=> handleVista(2)}></div>
                        <div className="point Two" onClick={()=> handleVista(4)}></div>
                        <div className="point Three" onClick={()=> handleVista(5)}></div>
                        <div className="point Four"  onClick={()=> handleVista(3)}></div>
                        <div className="point Five"  onClick={()=> handleVista(1)}></div>
                    </div>
                    :""

                }

             

            </div>        
        </div>
    )

}


export default Peelings