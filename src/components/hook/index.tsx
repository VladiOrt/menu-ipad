import { useState } from "react"


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

interface Props{
    product?: string,
    price?: number,
}




const Lista = []





const Wislish = ( {product=''} : Props,  {price=0} : Props ) => {

    const[Total, setTotal] = useState('')
    const[counterState , setCounterState] = useState({
        descripcion : '',
        costo : price
    })

    const{ descripcion, costo } = counterState



    const handleClickAdd = (descr, cost) =>{
        console.log("-->" , descr)
        setCounterState( prev =>({
            descripcion: prev.descripcion + "-" +descr,
            costo : prev.costo + "-" + cost
        }))

        setTotal(prev => (prev+","+product))

        console.log("2.-*****" , Total ,"******")
    
    }
    
    const handleClickDelete = (descr, cost) =>{
        let stringBuscado =  "-"+descr
        let costoBuscado =  "-"+cost
        setCounterState( prev =>({
            descripcion: (prev.descripcion).replace(stringBuscado,''),
            costo : (prev.costo).replace(costoBuscado,'')
        }))


    }


    const array = descripcion != ""? descripcion.split("-"):""
    


    console.log("*****" , Total ,"******")
    const Existe = function () {
        let encontrado = 0
        for(let i=0; i < array.length; i++){
            if(product == array[i]) encontrado = 1
        }
        return encontrado
    }()
   

    return (
        
            product=="Total"?
            <div>
                
                <li>Productos</li>                    
                
                {descripcion}
                        
            </div>
            
            :
            <div>
                {
                    Existe == 0 ? 
                    <AddShoppingCartIcon fontSize="large" onClick={() => handleClickAdd(product,price)} />
                    :
                    <ShoppingCartCheckoutIcon fontSize="large" onClick={() => handleClickDelete(product,price)} />
                }               
            </div>      
    )
}



export default Wislish