const Hello = (props) => {
    
  return (
    <article className="heading" >
        <h1>Hello {props.firstName}</h1>
        <p>Comment ça va ?</p>
    </article>
  )
}

export default Hello;

{prenoms.map((prenom, i) => <Hello key={i} firstName = {prenom} />)}