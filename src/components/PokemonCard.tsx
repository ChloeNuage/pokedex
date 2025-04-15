interface Pokemon {
  id: number;
  name: string;
  imgSrc?: string; // Le '?' rend imgSrc optionnel
  // Ajoutez d'autres propriétés si nécessaire
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  console.log({ pokemon });
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
