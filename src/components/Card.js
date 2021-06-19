function Card({img, desc}) {
  return (
    <div className="heti-felfedezes">
      <img src={img} alt="" />
      <span className="card-text">
        {desc}
      </span>
    </div>
  );
}

export default Card;