function Card(){

    var title = "10 Tips for Effective Time Management";
var author = "John Doe";
var description = "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
var image = "https://via.placeholder.com/150";
    return(<>
       <div className="card " style={{width:400}}>
  <img className="card-img-top" src={image} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">{title}</h4>
    <p className="card-text">{author}</p>
    <pre>{description}</pre>
  </div>
</div>
    </>)
}

export default Card;