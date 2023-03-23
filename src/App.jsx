import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import './App.css'
import Header from './components/Header'
import { database } from './firebase/config';
import Form from './components/Form';

const produit = [{
  id: 1,
  label: 'Jordan 1',
  price: 120
}]
function Article() {
  const []= useState(0)
   return(
    <div>
      <Article produit={produit}/>
    </div>
   )
}

function App() {
  const []= useState(0) 
  const [count, setCount] = useState(0)
  const [refId, setRefId] = useState('pas de ref!')

  const createDocument = async (Eleves, documentData) => {
    try {
      const docRef = await addDoc(collection(database, Eleves), documentData);
      console.log("Document Ref written:", docRef)
      console.log("Document written with ID: ", docRef.id);
      setRefId(docRef.id)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="App">
      <Header title={'Voici mon formulaire d inscription pour les nouvelles personnes '} />
      <Form />
      <Article produit={produit}/>
    </div>
  )

  
}

export default App