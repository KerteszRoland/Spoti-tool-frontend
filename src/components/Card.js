function Card({img, desc, onClick, endpoint}) {
  return (
    <button className="custom-card" onClick={() => {onClick(endpoint)}}>
      <img src={img} alt="" />
      <span className="card-text">
        {desc}
      </span>
    </button>
  );
}

export default Card;