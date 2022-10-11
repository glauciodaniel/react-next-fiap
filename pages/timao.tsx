import { NextPageContext } from 'next';
import React, {useState, useEffect} from 'react'

type TimaoProps = {
    frase ?: string;
    autor ?: string;
}


export default function TimaoPage(props:TimaoProps) {
//state em react utiliza o padrão getter & setter.
// get = obter
// set = definir
// const [get, set] = useState(0);
const [frase, setFrase] = useState(props.frase);
const [autor, setAutor] = useState(props.autor);

// useEffect(função, array);

  return (
    <>
        <h1>{frase}</h1>
        {autor && <h2>{autor}</h2>}
        <button onClick={(e)=>{setFrase("Timão é o melhor do mundo!")}}>Mudar a frase</button>
        <button onClick={(e)=>{setAutor("Glaucio Daniel")}}>Mudar o autor</button>
    </>
  )
}



TimaoPage.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    return {
        frase,
        autor
    }
}