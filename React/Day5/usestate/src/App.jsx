

const App = () => {

   let a = 10

   const hancleclick=()=>{
    a++
    console.log(a);
    
   }


  return (
    <><div>App</div>
    <h1>{a}</h1>
    <button onClick={hancleclick}>Click</button>
    </>
  )
}

export default App