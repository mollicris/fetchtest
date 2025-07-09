import { useFetch } from './useFetch'
import {fetchData} from './fetchData'
import { Suspense } from 'react';
import './App.css'

const apiData = fetchData('https://jsonplaceholder.typicode.com/todos');
function App() {
  const data = apiData.read();
  //const {data,loading,error,handleCancelRequest} = useFetch('https://jsonplaceholder.typicode.com/users')
 

  return (
     <div className="App"> 
      <h1 className="">
        Fetch like Pro
      </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <ul className="card">
          {
            data?.map((item) => <li key={item.id}>{item.title}</li>)
          }
         </ul>
       </Suspense> 
      </div>
  /*  <div className="App"> 
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
    */
  )
}

export default App
