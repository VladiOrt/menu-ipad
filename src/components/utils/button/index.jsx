
import { useLayoutEffect } from 'react'
import './index.scss'

const Button = (props) =>{

   
    let BColor = ''
    useLayoutEffect(() => {
        BColor = "rgba("+props.Color+", 0.5)"
      }, [])

    return(
        <div className="containerButton" >
            <div>
                <div className='circleOne' style={{backgroundColor: props.Color ,  opacity:0.2}}></div>
                <div className='circleTwo' style={{backgroundColor: props.Color ,  opacity:1}}></div>
            </div>
            <label style={{color: props.Color }}>
                {props.name}
            </label>            
        </div>
    )
}


export default Button