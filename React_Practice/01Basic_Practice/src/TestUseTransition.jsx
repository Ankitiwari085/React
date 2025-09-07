import { useTransition } from "react";

const Transition=()=>{
    const [pending,startTransition]=useTransition();
    const handleTransition=()=>{
        
       startTransition(async ()=>{
         await new Promise(res=>setTimeout(res,5000));
        });
    }
    
    return(
        <>
        <h2>Use Transition Effect </h2>
        {
            
            pending?<img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif" 
            style={{width:"200px" , height:"200 px"}}    />
                    :null
            
        }
        
        <button  disabled={pending} onClick={handleTransition}>{pending?"Transition...":"Click For The Transition"}</button>
        </>
    )
}
 export default Transition;