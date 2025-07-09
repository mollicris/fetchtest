import { useFetch } from './useFetch'
import './App.css'

function App() {

  const {data,loading,error,handleCancelRequest} = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div className="App"> 
      <h1 className="">
        Fetch like Pro
      </h1>
      <div className="card">
        <button onClick={handleCancelRequest}>Cancel Request</button>
        { loading && <p>Loading...</p> }
        { error && <p>Error: {error}</p> }
        { data?.map((user) => (<li key={user.id}>{user.name}</li>)) }
      </div>
    </div>
  )
}

export default App
