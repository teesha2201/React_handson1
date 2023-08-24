import React, { useState ,Component} from "react"
import FunctionCompo,{ Heading } from "./FunctionCompo"
import { Classcompo } from "./Classcompo"

import './StyleCompo.css'

function DisplayData()
{
    const [countfun,setcount]= useState(false)

    return(
            <div className="divofdisplaydata">
                <Heading/>
                <button onClick={()=> setcount(!countfun)}>To see styling in functional components</button>
                {countfun? <FunctionCompo/> :''}
            </div>
    )
}
export default DisplayData;

class DisplayClasscomponent extends Component{
    constructor(){
        super();
        this.state = {
            setcountclass :false,
        }
        console.log(this.state.setcountclass)
    }
    render(){
        return(
                <>
                <div  className = "buttonofdisplayclass">
                 <button  onClick={()=>this.setState({setcountclass:!this.state.setcountclass})} >This see styling in class Components</button>
                 {this.state.setcountclass ? <Classcompo/>: ''} 
               
                 </div>
                 </>
        )
    }
}
export {DisplayClasscomponent}