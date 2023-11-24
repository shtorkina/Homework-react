import './App.css'
import Title from './components/Title/Title'
import Paragraph from './components/Paragraph/paragraph'
import Button from './components/Button/Button'

function App() {
  return (
    <>
      <div className="frame-search">
        <Title title="Поиск" />
        <Paragraph title="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
        <Button title="Искать" />
      </div>
    </>
  )
}

export default App
