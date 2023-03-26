import Header from './components/Header'

function Form2 (){
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
        <Article produit={produit}/>
        <Form2 />
      </div>
    )
}
export default Form2 ;