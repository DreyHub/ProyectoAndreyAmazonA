import 'bootstrap/dist/css/bootstrap.css';
function Cards(props) {
  return (
<div className="card" style={{width: "18rem", marginLeft: "100px"}}>
  <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p href="#" style={{color: "#007185"}}>Compra ahora</p>
  </div>
</div>
  );
}

export default Cards;
