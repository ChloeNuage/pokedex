import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  id: number;
  name: string;
  imgSrc?: string;
}

const pokemonList: Pokemon[] = [
  {
    id: 1, // Ajout de l'ID
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 2, // Ajout de l'ID
    name: "mew",
  },
];

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}

export default App;
