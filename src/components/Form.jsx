import { useState } from 'react'

function Form() {

    const [Nom, setNewNom] = useState('')
    const [Age, setNewAge] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
    
        
      }

    return(
    <form onSubmit={handleSubmit}>
      <div className="form">
          <div className="form-body">
              <>
                  <label  for="Age">Age </label>
                  <input  type="number" name="Age"                   
              value={Age}
              onChange={(inputElement)=>{ setNewAge(inputElement.target.value) }} 
              htmlFor="lastname"/>
              </>
              <>
                  <label  for="Nom">Nom </label>
                  <input  type="text" name="Nom"           
              value={Nom}
              onChange={(inputElement)=>{ setNewNom(inputElement.target.value) }} htmlFor="lastname"/>
              </>
              <button type="button">Register</button>
          </div>
      </div>   
    </form>   
    )       
}
export default Form;
