import { use, useState } from 'react'
import'./app.css'

function App() {
  
const capacetesImage =['./img/capacete_namelessking.png'
  ,'./img/dois.png',
  './img/treis.png',
  './img/quatro.png',
  './img/cinco.png',] ;
 

const peitoralImage=['./img/umPeito.png',
  './img/doisPeito.png',
  './img/treisPeito.png',
 './img/quatroPeito.png',
  './img/cincoPeito.png']

  const luvalImage =['./img/umLuva.png',
   './img/doisLuva.png',
  './img/luvaTres.png',
   './img/quatroLuva.png',
   './img/luvaCinco.png']

const pernaImage =['./img/umPerna.png',
 './img/doisPerna.png',
 './img/tresPerna.png',
 './img/quatroPerna.png',
  './img/cincoPerna.png']



const [capaceteUsado,setCapaceteUsado] = useState('https://dicionario.priberam.org/images/dplp/preto.jpg')

const [peitoralUsado,setPeitoralUsado] = useState('https://dicionario.priberam.org/images/dplp/preto.jpg')

const [luvaUsado,setLuvaUsado] = useState('https://dicionario.priberam.org/images/dplp/preto.jpg')
 
const [pernaUsado,setPernaUsado] = useState('https://dicionario.priberam.org/images/dplp/preto.jpg')

function radomCapacete(){

 
  let radomImageCap = Math.floor(Math.random() * capacetesImage.length)
  console.log(capacetesImage[radomImageCap])
 
  let radomImagePeito = Math.floor(Math.random() * peitoralImage.length)
  console.log(peitoralImage[radomImagePeito])

  let radomImageLuva = Math.floor(Math.random() * luvalImage.length)
  console.log(luvalImage[radomImageLuva])

  let radomImagePerna = Math.floor(Math.random() * pernaImage.length)
  console.log(pernaImage[radomImagePerna])


  setCapaceteUsado(capacetesImage[radomImageCap]); // Atualiza o estado com a letra correspondente

  setPeitoralUsado(peitoralImage[radomImagePeito])

  setLuvaUsado( luvalImage [radomImageLuva])

  setPernaUsado( pernaImage [radomImagePerna])







}






return (
  <>
    <h1>RPG Imagens</h1>
    <h2>Capacete Selecionado:</h2>
    
    {/* Mostra a imagem selecionada */}
    <img src={capaceteUsado} alt="Capacete" className='capacetes_imagems'/>

    <br />
    
    {capaceteUsado && <img src={peitoralUsado} alt="Capacete" className='capacetes_imagems'/>}
    
    <br />
    <img src={luvaUsado} alt="Capacete" className='capacetes_imagems'/>
    
    <br />
    <img src={pernaUsado} alt="Capacete" className='capacetes_imagems'/>
    
    <br />
    
    
    <button onClick={radomCapacete}>gerar armadura</button>

    
  </>
);
}

export default App;