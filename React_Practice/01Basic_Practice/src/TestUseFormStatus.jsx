import { useFormStatus } from 'react-dom';

function Userform() {
    const { pending } = useFormStatus();
    //console.log(pending);
    return (
        <>
            <label> UserName :
                <input type="text" placeholder="Enter the Username" />
            </label>
            <br /> <br />
            <label> Password:
                <input type="password" placeholder="Enter the Password" />
                <br />
            </label>
            <br /> <br />
            <button disabled={pending}>{pending ? "Submiting..." : "Submit"}</button>
        </>
    )
}
const Test = () => {
    const handleForm = async () => {
        await new Promise(res => setInterval(res, 10000));
        console.log("submit");
    }



    return (
        <>
            <form action={handleForm}>
                <Userform />
            </form>
        </>
    )
}
export default Test;
