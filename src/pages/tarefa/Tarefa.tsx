import { useEffect, useState } from "react"

function Tarefa() {
  const [completo, setCompleto] = useState<boolean>(false);
  const [tarefa, setTarefa] = useState<string>("");

  useEffect(() => {
    if (completo) {
      setTarefa("Tarefa concluída!");
    } else {
      setTarefa("Tentar de novo");
    }
  }, [completo]); // Este efeito roda sempre que o valor de 'completo' mudar

  return (
    <div style={{ marginTop: "100px"}}>
      <h2>Componente Tarefa</h2>
      
      {/* Exibe o texto da variável 'tarefa' que o useEffect atualizou */}
      <h3>{tarefa}</h3>
      
      <p>Clique no botão para concluir:</p>
      
      {/* O onClick deve estar dentro da tag de abertura do botão */}
      <button onClick={() => setCompleto(!completo)}>{
         completo ? "Não concluido" : "Concluido"}   
      </button>
    </div>
  );
}

export default Tarefa;