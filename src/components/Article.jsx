import App from "../App";

function ListeArticle (props){
    const  produit = props.produit;

    return(
        <div>
            {produit.map((produit)=>(
                <div key={produit.id} className="group relative">
                    <h3>{produit.name}</h3>
                </div>
            ))}
        </div>
    )


}
export default ListeArticle;