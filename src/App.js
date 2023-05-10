import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import './index.css'
import axios from 'axios'


function App() {
  const [ data, setData ] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://fakestoreapi.com/products`
    }).then((res) => {
      setData(res.data)
      console.log('res', res.data);
    }).catch((err) => {
    })
  },[])

  return (
    <div>
    <div>
        {
          data.map((product, i) => (
            <Card 
              key={i}
              id={product.id}
              data={product}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              rating={product.rating}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
