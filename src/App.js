

import Filter from './components/Filter'
import CardList from './components/CardList';
import { useContext, useEffect } from 'react';
import Context from './components/ContextAPI';


function App() {
  const { state, dispatch } = useContext(Context)

  useEffect(() => {

    fetch("https://assessment-edvora.herokuapp.com")
      .then(res => res.json())
      .then(data => dispatch({
        type: "fetchdata",
        payload: data
      }))
      console.log("runnng")
      
  }, [dispatch])
  
  return (
    <div className="mt-20">
      <h2 className="text-white text-4xl mt-5 ml-HeadFont">Edvora</h2>
      <div className="text-xl ml-HeadFont  transform translate-y-6 text-grayish">Products</div>
      <div className="text-md ml-HeadFont w-26  transform translate-y-14   border-b pb-1  text-white">{state.productname}</div>

        <Filter />
      
        <CardList/>
      
       
  
    </div>
  );
}

export default App;
