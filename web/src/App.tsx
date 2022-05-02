interface ButtonProps {
  text: string; // text ?: string para deixar opcional
}


function Button(props: ButtonProps){
  return <button>{props.text}</button>
}

function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Ok"/>


    </div>
  )
}

export default App
