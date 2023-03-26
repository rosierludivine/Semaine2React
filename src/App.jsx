import React from "react"
import { useState, useEffect } from 'react'

function App() {
  useEffect(() => {
    Achat()
  },[]
  )
  const Achat = async (collectionName, achatData) => {
    try {
      const achatID = await addDoc(collection(database, collectionName), achatData);
      console.log(achatID.id);
    } catch (errorEvent ) {
      console.error( errorEvent);
    }
  }

  const [jordanCounter, setjordanCounter] = useState(0)
  return (
    <div className="">
      <div className=" ">
        <div className="p-10">
          <div className="">
            <h1 className=' text-3xl text-center'>My Shoes  </h1>
          </div>
        </div>

    {/* div ou vont se trouver mais jordan 1  */}
    <div className=" w-full overflow-auto flex flex-row flex-nowrap gap-12 ">
      <div className="flex flex-col items-center ">
        <h3 className=" ">Jordan 1</h3>
      </div>
    </div>

    {/* Affiche de l'artice jordan 1  */}
    {/* Création des trois colonnes avec columns  */}
    <div className="columns-3">
          <div className="">
            <div className="columns-3">
              <img className="w-full aspect-square" src="./asset/Jordan1Yellow.jpg"></img>
              <h3 className="font-title text-xl ">Jordan 1</h3>
              <div className='flex flex-row justify-center'>
                {/* Création d'un bouton pour ajouter un article et npour supprimer un article  */}
                <button className="flex justify-center items-center px-1  m-5 border-black  bg-gray-200 border-solid hover:border-dotted" onClick={() => setjordanCounter((jordanCounter) => jordanCounter + 1)}>+ Ajouter</button>
                <button className="flex justify-center items-center px-1  m-5 border-black  bg-gray-200 border-solid hover:border-dotted" onClick={() => setjordanCounter((jordanCounter) => jordanCounter - 1)}>- Supprimer</button>
              </div>
              {/* bouton pour envoyer au panier */}
              <button onClick={() => Achat( 'achats', {produit: 'jordan1', quantité: {jordanCounter}})} type="button" className="text-m  font-paragraph border-2 border-white border-solid px-4  ">Acheter {jordanCounter}  paire </button>
            </div>
          </div>
    </div>

    
    </div>
    </div>

     
  )
}

export default App