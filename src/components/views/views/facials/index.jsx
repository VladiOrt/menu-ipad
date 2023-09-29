import './index.scss'
import { useState } from 'react'



import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const ArrowLeft = require('../../../utils/img/arrow/left.png')
const ArrowRight = require('../../../utils/img/arrow/right.png')

const StarBrown = require('../../../utils/img/stars/starBrown.png')
const StarWhite = require('../../../utils/img/stars/starWhite.png')
const StarGold = require('../../../utils/img/stars/starGold.png')

const Detox1 = require('../../../utils/img/facials/detox/Icon1.png')
const DeepCleanse = require('../../../utils/img/facials/detox/Icon2.png')



const Hydratance1 = require('../../../utils/img/facials/hydratance/Icon1.png')
const Thermal1 = require('../../../utils/img/facials/hydratance/Icon2.png')




const Aqua1 = require('../../../utils/img/facials/lifting/Icon1.png')
const Lifting1 = require('../../../utils/img/facials/lifting/Icon2.png')



const PetaPeel1 = require('../../../utils/img/facials/petapeel/Icon1.png')
const Magnetic1 = require('../../../utils/img/facials/petapeel/Icon2.png')

const Nefertari1 = require('../../../utils/img/facials/petapeel/Nefertari.png')

const SkinGlow1 = require('../../../utils/img/tecnologies/skinGlow/Icon1.png')
const SkinGlow2 = require('../../../utils/img/tecnologies/skinGlow/Icon2.png')


const diamondCorporal1 = require('../../../utils/img/tecnologies/diamondCorporal/Icon1.png')
const diamondCorporal2 = require('../../../utils/img/tecnologies/diamondCorporal/Icon2.png')

const diamondFacial1 = require('../../../utils/img/tecnologies/diamondFacial/Icon1.png')
const diamondFacial2 = require('../../../utils/img/tecnologies/diamondFacial/Icon2.png')






const Facials = () =>{

    const[vistaTechnologies,setVistaTechnologies] =useState(0)







    function handleViewTecnologies(id){
        setVistaTechnologies(id)
    }



    function changeView(valor){
        console.log("Valor" ,valor )
        if(valor=='Back'){
            
            if(vistaTechnologies == 1){
                setVistaTechnologies(5)
            }else{
                setVistaTechnologies(vistaTechnologies-1)
            }
        }else if(valor=='Forward'){
            if(vistaTechnologies == 5){
                setVistaTechnologies(1)
            }else{
                setVistaTechnologies(vistaTechnologies+1)
            }
        }
    }





    return(
        <div className="containerFacialsContainer">

            {
                vistaTechnologies == 0 ?
                    <div className="contentFacials">
                        <label>
                            Faciales
                        </label>
                        <p>
                            Nuestros tratamientos faciales son diseñados pensando en cada tipo de piel, nuestras terapeutas altamente calificadas analizarán tu piel y te ofrecerán un tratamiento personalizado para cumplir con tus necesidades.
                        </p>
                        <nav>
                            <ul>
                                <li onClick={()=>handleViewTecnologies(1)}>
                                    <div className="circle"></div>
                                    <label>
                                        Detox Express
                                    </label>
                                </li>

                                <li onClick={()=>handleViewTecnologies(1)}>
                                    <div className="circle"></div>
                                    <label>
                                        Deep Cleanse
                                    </label>
                                </li>                        
                                <li onClick={()=>handleViewTecnologies(2)}>
                                    <div className="circle"></div>
                                    <label>
                                        Hydratance
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(2)}>
                                    <div className="circle"></div>
                                    <label>
                                        Thermal
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(3)}>
                                    <div className="circle"></div>
                                    <label>
                                        Aqua lift
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(3)}>
                                    <div className="circle"></div>
                                    <label>
                                        Lifting
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(4)}>
                                    <div className="circle"></div>
                                    <label>
                                        Petal peel
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(4)}>
                                    <div className="circle"></div>
                                    <label>
                                        Magnetic Mask
                                    </label>
                                </li>
                                <li onClick={()=>handleViewTecnologies(5)}>
                                    <div className="circle"></div>
                                    <label>
                                        Nefertiti
                                    </label>
                                </li>
                               
                            </ul>
                        </nav>
                    </div>
                    :<></>
            }







            {
                vistaTechnologies == 1 ?
                    <div className="contentFacialsDetox">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Detox Express
                                </div>
                                <div className="subtitle">
                                    Intro collection
                                </div>
                            </div>
                        </div>


                        <div className="containerScores">
                            <div className="Score">
                                <label></label>
                                <div>
                                    <label className='price'>$<p>1,900</p></label>
                                    <div className="stars">
                                        {/* <img src={StarBrown} /> */}
                                        {/* <img src={StarBrown} /> */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                       {/*  <img src={StarWhite} />  */}
                                    </div>
                                    <label className='time'>40 min</label>
                               
                                    
                                    

                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                                Dale vida a tu piel con un facial de alto impacto que revitaliza y promueve la luminosidad en tu rostro.
                                Un tratamiento que optimiza el tiempo y garantiza un resultado.
                            </p>
                        </div>



                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Deep Cleanse
                                </div>
                                <div className="subtitle">
                                    Intro collection + Hydrolift
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <label></label>
                                <div>
                                    <label className='price'>$<p>2,600</p></label>
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
                                Facial integral que busca la renovación celular en tu piel para revelar su belleza natural; a través de una exfoliación que purifica tus poros con vapor caliente y deja un tacto en el rostro sorprendentemente suave.
                            </p>
                        </div>
                      
                    </div>
                    :<></>
            }





            {
                vistaTechnologies == 2 ?
                <div className="contentFacialsHydratance">
                    <div className="hederButtons">
                        <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                        <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                    </div>
                    <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Hydratance
                                </div>
                                <div className="subtitle">
                                    Intro collection + Lumicell
                                </div>
                            </div>
                        
                    </div>
                    <div className="containerScores">
                        <div className="Score">
                            <label></label>
                            <div>
                                <label className='price'>$<p>2,600</p></label>
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
                        Facial de máximo confort que mejora la textura de la piel y aporta hidratación absoluta para reparar, proteger y prevenir los signos de envejecimiento prematuro.
                        </p>
                    </div>



                    <div className="containerIcons">
                        <div className="containerTitle">
                            <div className="title">
                                Thermal
                            </div>
                            <div className="subtitle">
                                Intro collection + Thermostem
                            </div>
                        </div>
                    </div>
                    <div className="containerScores">
                        <div className="Score">
                            <label></label>
                            <div>
                                <label className='price'>$<p>2,600</p></label>
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
                            Facial que crea un efecto de calentamiento instantáneo con una mascarilla térmica que te hace sentir en un sauna con aceites de almendras dulces y aloe vera, dejando tu piel más suave.
                        </p>
                    </div>              
                </div>
                    :<></>
            }



            {
                vistaTechnologies == 3 ?
                <div className="contentFacialsLifting">
                    <div className="hederButtons">
                        <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                        <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                    </div>
                    <div className="containerIcons">
                        <div className="containerTitle">
                            <div className="title">
                                Aqua lift
                            </div>
                            <div className="subtitle">
                                Intro collection + Fototerapia
                            </div>
                        </div>
                    </div>
                    <div className="containerScores">
                        <div className="Score">
                            <label></label>
                            <div>
                                <label className='price'>$<p>2,900</p></label>
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
                            Facial para pieles sensibles, que ofrece frescura al humectar y nutrir la piel mejorando su luminosidad y la aparición de líneas finas y arrugas.
                        </p>
                    </div>



                    <div className="containerIcons">
                        <div className="containerTitle">
                            <div className="title">
                                Lifting
                            </div>
                            <div className="subtitle">
                                Intro collection + Resveratrol
                            </div>
                        </div>
                    </div>
                    <div className="containerScores">
                        <div className="Score">
                            <label></label>
                            <div>
                                <label className='price'>$<p>2,900</p></label>
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
                        Facial con efecto reafirmante que ofrece un rejuvenecimiento íntegro en la piel. Gracias a la alta concentración de ingredientes activos proporciona una poderosa acción tensora instantánea.
                        </p>
                    </div>              
                </div>
                    :<></>
            }






            {
                vistaTechnologies == 4 ?
                <div className="contentFacialsPetaPeel">
                <div className="hederButtons">
                    <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                    <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                </div>
                <div className="containerIcons">
                    <div className="containerTitle">
                        <div className="title">
                            Petal peel
                        </div>
                        <div className="subtitle">
                            Intro collection + D-pigment
                        </div>
                    </div>
                </div>
                <div className="containerScores">
                    <div className="Score">
                        <label></label>
                        <div>
                            <label className='price'>$<p>2,900</p></label>
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
                    Facial con vitaminas A, C y E que aporta luminosidad, conservando la juventud de la piel y retrasando el proceso de envejecimiento. Disminuyendo así, visiblemente las líneas finas y arrugas para restaurar energía juvenil en cada capa de la piel.
                    </p>
                </div>



                <div className="containerIcons">
                    <div className="containerTitle">
                        <div className="title">
                            Magnetic mask
                        </div>
                        <div className="subtitle">
                            Intro collection + DNA
                        </div>
                    </div>
                </div>
                <div className="containerScores">
                    <div className="Score">
                        <label></label>
                        <div>
                            <label className='price'>$<p>2,900</p></label>
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
                    Facial especializado en restaurar el ciclo vital de tu piel, a través de una innovadora mascarilla para un efecto detox con imanes. Restaura los ciclos vitales y celebra el momento presente, revirtiendo el tiempo en la piel.
                    </p>
                </div>              
            </div>
                    :<></>
            }







            {
                vistaTechnologies == 5 ?
                    <div className="contentFacialsNefertari">
                        <div className="hederButtons">
                            <img src={ArrowLeft} onClick={()=> changeView('Back')}/>
                            <img src={ArrowRight} onClick={()=> changeView('Forward')}/>
                        </div>
                        <div className="containerIcons">
                            <div className="containerTitle">
                                <div className="title">
                                    Nefertiti
                                </div>
                                <div className="subtitle">
                                 
                                </div>
                            </div>
                        </div>
                        <div className="containerScores">
                            <div className="Score">
                                <div>
                                    <label className='price'>$<p>10,000</p></label>
                                    <div className="stars">
                                       {/*  <img src={StarGold} />  */}
                                       {/*  <img src={StarGold} />  */}
                                       {/*  <img src={StarGold} />  */}
                                       {/*  <img src={StarGold} />  */}
                                       {/*  <img src={StarGold} />  */}
                                    </div>
                                    <label className='time'>120 min</label>
                                    <div className='IconHeart'>
                                        <FavoriteBorderIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="containerParagraph">
                            <p>
                                Rejuvenece tu rostro con todos los beneficios que solo el oro de 24k te puede dar. Oxigena tu piel llenándola de vitalidad para una apariencia radiante.
                            </p>
                        </div>





                        <div className="containerDescriptions">
                            <ul className="ul">
                                <li><div /><p>Aromaterapia</p></li>
                                <li><div /><p>Limpieza y masaje desmaquillante</p></li>
                                <li><div /><p>Cellular Peel</p></li>
                                <li><div /><p>Terapia con radio frecuencia y ultrasonido efecto tensor </p></li>
                                <li><div /><p>Mascarilla Nefertiti ORO 24K</p></li>
                                <li><div /><p>Terapia biolifting tensor </p></li>
                                <li><div /><p>Spray oxigenador de ozono </p></li>
                                <li><div /><p>Drenaje linfático</p></li>                           
                            </ul>
                        </div>
                    </div>
                    :<></>
            }




          








        </div>
        
    )
}


export default Facials