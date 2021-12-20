import Card from "./card.js"
function Listmovies(props) {
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent: 'space-around', backgroundColor:'black'}}>
      {props.moviedata.map( (el) => <Card el ={el} ></Card> )}
    </div>
  );
}

export default Listmovies;
