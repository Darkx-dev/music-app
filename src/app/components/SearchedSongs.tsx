import React from 'react'
import Song from './Song'

export default function SearchedSongs({searchQuery, data}: any) {
    const {albums, artists, playlists, songs, topQuery} = data.results
    const results = data.results
    const testing = () => {
        console.log(data.results)
    }
  return (
    <div className='searched__songs__wrapper'>
        <h2 onClick={testing}>for &quot;{searchQuery}&quot;</h2>
        <div className="songs__wrapper grid grid-flow-row gap-5 mt-5">
            {results?.map((song: any) => {
                return <Song key={song.id} title={song.name} artist={song.artists.primary[0].name} cover={song.image[1].url}/>
            })}
        </div> 
    </div>
  )
}
