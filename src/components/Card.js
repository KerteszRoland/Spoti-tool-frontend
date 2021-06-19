function Card({img, desc}) {
  return (
    <div className="custom-card">
      <img src={img} alt="" />
      <span className="card-text">
        {desc}
      </span>
    </div>
  );
}

export default Card;