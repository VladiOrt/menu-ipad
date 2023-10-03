import { useState } from 'react'
import './index.scss'




import Img1 from '../components/utils/img/home/icons/Icon1.png'
import Img1Dos from '../components/utils/img/home/icons/Icon1-2.png'
import Img2 from '../components/utils/img/home/icons/Icon2.png'
import Img2Dos from '../components/utils/img/home/icons/Icon2-2.png'
import Img3 from '../components/utils/img/home/icons/Icon3.png'
import Img3Dos from '../components/utils/img/home/icons/Icon3-2.png'
import Img4 from '../components/utils/img/home/icons/Icon4.png'
import Img4Dos from '../components/utils/img/home/icons/Icon4-2.png'
import Img5 from '../components/utils/img/home/icons/Icon5.png'
import Img5Dos from '../components/utils/img/home/icons/Icon5-2.png'

import IconMenu from '../assets/images/home/IconMenu.png'


import ContainerView from '../containers'

const Home = () => {
    const[fondo,setFondo] = useState('containerHome')
    
    const[view,setView] = useState('')
    
    

    function handleOpenMenu(id){
        setFondo('containerHomeactive')
        setView(id)
    }
    function handleCloseMenu(){
        setFondo('containerHomeReturn')
        setView('')
    }




    return(
        <div className={fondo} id="containerHome">            
            <div className="filter">
                
                {view==1 ? <ContainerView view="Technologies" />:""}
                {view==2 ? <ContainerView view="Facials" />:""}
                {view==3 ? <ContainerView view="Body" />:""}
                {view==4 ? <ContainerView view="Aesthetic" />:""}
                {view==5 ? <ContainerView view="Plans" />:""}

            </div>
            <div className="containerIcons">
                <div className="containerHome" onClick={()=> handleCloseMenu()}>
                    <img src={IconMenu} />
                </div>
                <div className="containerIcon" onClick={()=> handleOpenMenu(1)}>                   
                    {
                        view == 1 ?
                        <img src={Img1} />
                        :
                        <img src={Img1Dos} />
                    }
                </div>
                <div className="containerIcon" onClick={()=> handleOpenMenu(2)}>
                    {
                        view == 2 ?
                        <img src={Img2} />
                        :
                        <img src={Img2Dos} />
                    }
                </div>
                <div className="containerIcon" onClick={()=> handleOpenMenu(3)}>
                    {
                        view == 3 ?
                        <img src={Img3} />
                        :
                        <img src={Img3Dos} />
                    }
                </div>
                <div className="containerIcon" onClick={()=> handleOpenMenu(4)}>
                    {
                        view == 4 ?
                        <img src={Img4} />
                        :
                        <img src={Img4Dos} />
                    }
                </div>
                <div className="containerIcon" onClick={()=> handleOpenMenu(5)}>
                    {
                        view == 5 ?
                        <img src={Img5} />
                        :
                        <img src={Img5Dos} />
                    }
                </div>
            </div>

        </div>
    )
}


export default Home