import { useState } from "react"
import { useLayoutEffect } from "react"
import './index.scss'



import Button from "../components/utils/button"

const ContainerView = (props) =>{

    const[view,setView] = useState(props.view)
    const[content,setContent] = useState('')

    const[buttons,setButtons] = useState([])

    const[buttonsActive,setButtonsActive] = useState([])



    const Color = [
        "#A9625E",
        "#BF869F",
        "#6660AF",
        "#00B89E",
        "#FFF"
    ]

    const Butons=[
        [
            'Reskin',
            'Skin-Glow',
            'Smart Peelings',
            'Skin Renew',
            'Diamond Lifting Corporal',
            'Diamond Lifting Facial',
            'Luxe Resurfacing',
            'A New Beginning',
            'Ultralift',
            'Dermapen'
        ],
        [   
            "Detox Express",
            "Deep Cleanse",
            "Hydratance",
            "Thermal",
            "Aqua lift",
            "Lifting",
            "Petal peel",
            "Magnetic Mask",
            "Nefertiti"
        ],
        [   
            "Valoración Fisiotera-péutica",
            "Relax & Renew",
            "Deep Tissue Therapy",
            "Hot Stone Therapy",
            "Cupping Therapy",
            "Lymphatic Drainage",
            "Cold Wrap",
            "Remodeling",
        ],
        [   
            "Valoración Fisiotera-péutica",
            "Relax & Renew",
            "Deep Tissue Therapy",
            "Hot Stone Therapy",
            "Cupping Therapy",
            "Lymphatic Drainage",
            "Cold Wrap",
            "Remodeling",
        ] 
    ]

    console.log(Butons)
    console.log("--",Butons[0])
    

/*
{
            "Reskin":"Reskin",
            "Skin-Glow":"Skin-Glow",
            "Smart Peelings":"Smart Peelings", 
            "Skin Renew":"Skin Renew",
            "Diamond Lifting Corporal":"Diamond Lifting Corporal",
            "Diamond Lifting Facial":"Diamond Lifting Facial",
            "Luxe Resurfacing":"Luxe Resurfacing",
            "A New Beginning":"A New Beginning",
            "Ultralift":"Ultralift",
            "Dermapen":"Dermapen" 
        },
        {   
            "Detox Express":"Detox Express",
            "Deep Cleanse":"Deep Cleanse",
            "Hydratance":"Hydratance",
            "Thermal":"Thermal",
            "Aqua lift":"Aqua lift",
            "Lifting":"Lifting",
            "Petal peel":"Petal peel",
            "Magnetic Mask":"Magnetic Mask",
            "Nefertiti":"Nefertiti"
        },
        {   
            "Valoración Fisiotera-péutica":"Valoración Fisiotera-péutica",
            "Relax & Renew":"Relax & Renew",
            "Deep Tissue Therapy":"Deep Tissue Therapy",
            "Hot Stone Therapy":"Hot Stone Therapy",
            "Cupping Therapy":"Cupping Therapy",
            "Lymphatic Drainage":"Lymphatic Drainage",
            "Cold Wrap":"Cold Wrap",
            "Remodeling":"Remodeling",
        } 
*/



    const Title = [
        "Technologies",
        "Facials",
        "Body",
        "Aesthetic",
        "Plans"
    ]

    const Descriptions = [
        "Soluciones de rejuvenecimiento y medicina estética sin cirugía, con la más avanzada tecnología a nivel mundial. Nuestros tratamientos son seguros para todo tipo de piel y su procedimiento es indoloro y no invasivo. ¡Resultados visibles desde la primera sesión!",
        "Nuestros tratamientos faciales son diseñados pensando en cada tipo de piel, nuestras terapeutas altamente calificadas analizarán tu piel y te ofrecerán un tratamiento personalizado para cumplir con tus necesidades.",
        "Creamos una experiencia de relajación absoluta con elementos que liberan la tensión de tu cuerpo, explorando distintas sensaciones a través de tus sentidos. Tiempo por tratamiento: 30 minutos, 60 minutos o 90 minutos. <br /><br /> ¡Tú decides que experiencia vivir!",
        "La relación entre la salud y la belleza con un abordaje terapéutico clínico, siempre guiados por profesionales, para lograr la mejor versión de ti.",
        ""
    ]


    useLayoutEffect(() => {
        if(view == 'Technologies'){setContent(0)}
        if(view == 'Facials'){setContent(1)}
        if(view == 'Body'){setContent(2)}
        if(view == 'Aesthetic'){setContent(3)}
        if(view == 'Plans'){setContent(4)}

        if(view == 'Technologies'){setButtonsActive(Butons[0])}
        if(view == 'Facials'){setButtonsActive(Butons[1])}
        if(view == 'Body'){setButtonsActive(Butons[2])}
        if(view == 'Aesthetic'){setButtonsActive(Butons[3])}

        
    }, [])

    
    return(
        <div className={"containerView " + view} >       
            <section className={"descriptionView"} >
                <label style={{color: Color[content]}}>
                    {view == 'Technologies'? Title[content]:""}    
                    {view == 'Facials'? Title[content]:""}    
                    {view == 'Body'? Title[content]:""}    
                    {view == 'Aesthetic'? Title[content]:""}    
                    {view == 'Plans'? Title[content]:""}         
                </label>
                <p className="Description">
                    {view == 'Technologies'? Descriptions[content]:""}    
                    {view == 'Facials'? Descriptions[content]:""}    
                    {view == 'Body'? Descriptions[content]:""}    
                    {view == 'Aesthetic'? Descriptions[content]:""}    
                    {view == 'Plans'? Descriptions[content]:""}  
                </p>                
            </section>
            <section className="Buttons">
            {
                buttonsActive.map(element =>
                   <Button name={element} Color={Color[content]} />
                )
            }  
              
            </section>

            <div className="containerInformationContent">





                <div className="buttonsControls">
                    <div className="buttonBack">

                    </div>
                    <div className="buttonNext">

                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default ContainerView