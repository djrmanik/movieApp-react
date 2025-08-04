// Components
const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      <Card title="Star Wars" />
      <Card title="One Piece"/>
      <Card title="John Wick"/>
    </div>
  )
}

export default App;