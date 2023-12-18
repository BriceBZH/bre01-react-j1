const Student = (props) => {
    const notes = props.data.notes;
    let total = 0;
    for(let i =0; i<notes.length; i++) {
      total += notes[i];
    }
    const moyenne = Math.round(total / notes.length);
    return (
        <>
        <article>
        <h3>{props.data.name}</h3>
        <ul>
          {notes.map((note, i) => <li key={i}>{note}</li>)}
        </ul>
        <p>
            Moyenne : {moyenne}
        </p>
      </article>
        </>
  )
}

export default Student;