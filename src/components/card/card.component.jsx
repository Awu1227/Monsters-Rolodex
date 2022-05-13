import "./card.styles.css";
function Card({ monster }) {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster：${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
export default Card;
