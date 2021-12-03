import React,{useState} from 'react';
import { StyledCard, StyledCardBody, StyledCardBodyContent } from '../styled/Card.styled'
export default function Card({ data, size,hideColumn, preferredOrder }) {
    const { img, ...restData} = { ...data }
    const [obj, setObj] = useState()
   let order = ['name','nickname','birthday','occupation','status']

     let renderData = ()=>{
         let elem = '';
         for(let key in restData){
             if(!hideColumn.includes(key)){
                    let firstLetter = key.charAt(0).toUpperCase();
                    elem+=`<div style="${key === "status" && 'font-size:20px; font-weight:bold'}">${restData[key] === "Unknown" ? 'N/A': restData[key]}</div>`
             }
         }
         return elem
     } 

     

    //  let  preferredOrderHandler = ()=> {
    //     var newObject = {};
    //     if(restData){
    //         for(var i = 0; i < order.length; i++) {
    //             if(restData.hasOwnProperty(order[i])) {
    //                 newObject[order[i]] = restData[order[i]];
    //             }
    //         }
    //         console.log(newObject)
    //         setObj(newObject)
    //     }
    
    // }
    
    return (
        <>
            {
                data && (<StyledCard size={size}>
                    <StyledCardBody>
                        <img src={img} alt='' />
                        <StyledCardBodyContent dangerouslySetInnerHTML={{ __html: renderData()}}></StyledCardBodyContent>
                    </StyledCardBody>
                </StyledCard>
                )
            }

        </>
    )
}