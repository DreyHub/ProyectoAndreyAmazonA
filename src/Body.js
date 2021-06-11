import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';

var arrfirstRow = [1,2,3]

// async function callAPI(item) {
//   const rawResponse = await fetch(`https://fakestoreapi.com/products/${item}`);
//   const respond = await rawResponse.json();
//   return respond
// }

function Body() {
  return (
    <div className="container">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
        alt=""
        style={{ width: "100%" }}
        className="carousel-inner"
      />
      <div className='d-flex justify-content-around row pt-3' style={{ position: "absolute", top: "38%"}}>
        {
          arrfirstRow.map(
            item =>{
 
              return(<Cards title='Example' key={item} />)
            
          }
          )
        }   
      </div>

    </div>

  );
}

export default Body;
