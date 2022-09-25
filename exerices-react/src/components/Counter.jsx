import { useState } from "react"
import { Button } from "react-bootstrap"



export default function Counter(){
    const [count,setCount] = useState('0')
    

    return (
        <div>
            counter : 
            <span>{count}</span>
            <Button 
                onClick={()=>setCount(count+1)}
                variant="primary"
            >
                    +
            </Button>
            <Button 
                onClick={()=>setCount(count-1)}
                variant="danger"
            >
                    -
            </Button>
        </div>
    )
}




/*
function useState(initialValue){
    let _val = initialValue
    function setState(newVal){
        _val = newVal
    }
    return [_val,setState]
}
*/
