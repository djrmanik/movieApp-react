import { useState } from "react"

// Components
const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);


  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

const App = () => {


  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true}  />
      <Card title="One Piece"/>
      <Card title="John Wick"/>
    </div>
  )
}

export default App;