
import List from './List.jsx'
import ListItem from './ListItem.jsx'

export default function SelectedMovieList({ movies }) {
  return (
    <div className="divide-y divide-slate-100">
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </div>
  )
}