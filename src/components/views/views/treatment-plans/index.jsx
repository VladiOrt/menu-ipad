import './index.scss'
import { useState } from 'react'






const ArrowLeft = require('../../../utils/img/treatments/Left.png')
const ArrowRight = require('../../../utils/img/treatments/Right.png')




const Treatment = () =>{

    const[vistaTechnologies,setVistaTechnologies] =useState(0)




    const[fondo,setFondo] = useState('Fondo0')


    function handleViewTecnologies(id){
        setFondo('Fondo'+id)
    }




    function changeView(valor){        
        if(valor=='Back'){            
            if(vistaTechnologies == 0){
                setVistaTechnologies(9)
                handleViewTecnologies(9)
            }else{
                setVistaTechnologies(vistaTechnologies-1)
                handleViewTecnologies(vistaTechnologies-1)
            }
        }else if(valor=='Forward'){
            if(vistaTechnologies == 9){
                setVistaTechnologies(0)
                handleViewTecnologies(0)
            }else{
                setVistaTechnologies(vistaTechnologies+1)
                handleViewTecnologies(vistaTechnologies+1)
            }
        }
    }





    return(
        <div className={"containerTreatment "+fondo }>
            <div className="containerArrows">
                <img src={ArrowLeft} onClick={() => changeView('Back')} />
                <img src={ArrowRight} onClick={() => changeView('Forward')}  />
            </div>  
        </div>
        
    )
}


export default Treatment