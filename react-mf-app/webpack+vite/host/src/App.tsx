import './index.css'
import { Counter } from 'remote/Counter'

function App() {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <Counter />
    </div>
  )
}

export default App
