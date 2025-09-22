import { useActionState } from "react";

function TestUseActionState(){
    const handleSubmit=async(prevData,formData)=>{
        let name=formData.get('name');
        let password=formData.get('password');
        await new Promise(req=>setTimeout(req,2000));
      // console.log("Handle Submit Is Called :" ,name, password);
        if(name && password){
            return {message:"Data Submitted",name,password};
        }
        else{
            return {error:"Failed to submit due to Empty data",name,password}
        }
        

    }
    const [data,action,pending]=useActionState(handleSubmit,undefined);
    console.log(data);
    return(
        <>
        <div>
            <form action={action}>
                <input type="text" defaultValue={data?.name} placeholder="Enter Name" name="name"/>
                <br/> <br/>
                 <input type="password"  placeholder="Enter Password" name="password"/>
                <br/> <br/>
                <button disabled={pending}>Submit Data</button>
            </form>
            {
                data?.error && <span style={{color:"red"}}>{data?.error}</span>
                
            }
            {
                data?.message && <span style={{color:"green"}}>{data?.message}</span>
                
            }
            <h3>Name :{data?.name}</h3>
            <h3>Password :{data?.password}</h3>
        </div>

        </>
    )
}

export default TestUseActionState;