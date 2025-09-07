  const flower =()=>{
        alert("FLOWER OUT");
    }
function Test(){
    const fruit =()=>{
        alert("FRUIT");
    }
   const flower =()=>{
        alert("FLOWER IN");
    }
    function test1(){
        alert("Alert Fruit and Flower !!")
    }

    return(
        <>
        <h1>Test Component </h1>
        <button onClick={fruit}>Fruit</button>
        <button onClick={flower}>Flower</button>
        <button onClick={test1}>Alert</button>

        </>
    )
}
export default Test;