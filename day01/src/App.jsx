import Child from './Child'

function App() {
   const add = (a, b) => a + b
   return <Child name="하서" time={7} add={add} />
}

export default App
