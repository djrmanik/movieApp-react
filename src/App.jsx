// Components
const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="One Piece"/>
      <Card title="John Wick"/>
    </div>
  )
}

export default App;