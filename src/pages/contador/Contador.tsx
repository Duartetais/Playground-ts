import { useState } from "react"

function Contador() {

  const [contador, setContador] = useState<number>(0)

  function incrementar() {
    setContador(contador + 1)
  }



  return (
    <div>
      <p>Valor Inical: {contador}</p>
      <button onClick={incrementar}>Adicionar 1 ao Contador </button>
    </div>
  )
}

export default Contador