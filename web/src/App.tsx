interface ButtonProps {
  text: string; // text ?: string para deixar opcional
}


function Button(props: ButtonProps){
  return <button className="bg-[#8262e7] p-2 px-4 h-10 rounded text-violet-200 hover:bg-violet-800 transition-colors">{props.text}</button> //p = padding e 2 = 8px(0.5rem)
} //px = padding no eixo x

function App() {
  return (
    <div className="flex gap-2 m-2"> 
      <Button text="Enviar" />
      <Button text="Ok"/>


    </div>
  )
}

export default App
