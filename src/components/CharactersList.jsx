import { useEffect, useState } from 'react';
import Character from './Character';
import NextPage from './NextPage';

import './../App.css';
export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [Page, setPage] = useState(1);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${Page}`
      );
      const data = await response.json();
      setloading(false);
      setCharacters(data.results);
    }
    getData();
  }, [Page]);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="grid">
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
      <NextPage page={Page} setPage={setPage} />
    </div>
  );
}
