import { useEffect, useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import './styles/global.scss';
import { api } from './services/api';
import {GenreResponseProps } from './domain/domain'

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  useEffect(() => {

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, []);


  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId}  handleClickButton={handleClickButton} />
      <Content selectedGenreId={selectedGenreId} selectedGenre={selectedGenre}/>
    </div>
  )
}