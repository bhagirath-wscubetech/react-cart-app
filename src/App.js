import Container from './components/Container';
import Header from './components/Header';
import Product from './components/Product';
import { useSelector, } from 'react-redux';
function App() {
  const state = useSelector(state => state)
  console.log(state);
  const Products = state.products.map(
    (product, index) => <Product key={index} data={{ ...product, id: index }} />
  )
  return (
    <>
      <Container classList={['container', 'mt-4']}>
        {
          state.products ?
            Products
            : "Loading.."
        }
      </Container>
    </>
  );
}

export default App;
