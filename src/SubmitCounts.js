import React from 'react'
import Submitted from './Submitted.js'

function SubmitCounts(props){


//     let submitters;
//     for(let i = 0; i < props.submitters.length; i ++){
//     console.log(`In SubmitCounts component there are ${props.submitters} submitters.`)

//         console.log(`In SubmitCounts firstname of submitted is ${props.submitters[i].firstName}.`)
//         return ( 
//         submitters = <div><label>Form submitted {props.inputs} times</label><div className="profile"><Submitted inputs={props.submitters[i]} /></div></div>
//         )
    
// }
     
    
        return(
            <>
                {
                   props.submitters.map((submitter, count) => {
                    <div><label>Form submitted {count} times</label><div className="profile"><Submitted inputs={submitter} /></div></div>

                   }) 
                }
            </>
        )
    }

// let submitters;
// if(props.submitters.firstName !== ""){

//     return ( 
//     submitters = <div><label>Form submitted {props.inputs} times</label><div className="profile"><Submitted inputs={props.submitters} /></div></div>
//     )
// }
// else{
//     submitters = <div> <label>Form submitted {props.inputs} times</label></div>
// }
 

//     return(
//         <>
       
//             {submitters}
//         </>
//     )
// }

export default SubmitCounts