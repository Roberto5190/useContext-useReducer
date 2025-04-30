import { productos } from "./db/db"
import { useState } from "react"


function App() {
 const [data, setData] = useState([productos])

  return (
    <>
        <div>
          {productos.map((product) => (
            <>
              <h1>{product.name}</h1>
              <p>{product.precio} €</p>
            </>

          ))}
        </div>
    </>
  )
}

export default App
