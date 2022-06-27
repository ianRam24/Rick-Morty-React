export default function Character({ character }) {
  return (
    <div key={character.id} className="card">
      <h2>{character.name}</h2>
      <p>
        Specie: <span className="specie">{character.species}</span>
      </p>
      <p>
        Location: <span className="specie">{character.origin.name}</span>
      </p>
      <img src={character.image} alt={character.name} className="img" />
    </div>
  );
}
