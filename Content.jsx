
import { useRef } from 'react';

const Content = ()=>{

    
    let textarea = useRef();
    let tagP = useRef();
    
    const demo = ()=>{
        
        const  valueOfTextarea = textarea.current.value;
        tagP.current.innerHTML= valueOfTextarea;
        
    }
 

return(
        <div>
            
                <textarea name="" id="" cols="30" rows="5"  ref={textarea}></textarea> <br />
            
                <button onClick={demo} style={{backgroundColor:"white", color:"black", marginTop:"30px"}}>Submit
                </button> 
                  
        
            <p ref={tagP}>
            </p>


           
        </div>
    )
}

export default Content; 