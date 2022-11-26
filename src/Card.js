const SuCard = (props) => {
  return (
    <div className="card" style={{ margin: "100px" }}>
      <img
        src={props.Img}
        alt="Avatar"
        class="card-img-top"
        style={{ width: "20%", height: "20%", padding: "2%" }}
      />

      <div className="card-body">
        <h4 className="card-title">{props.Login}</h4>
        <h4>{props.Id}</h4>
        <a href={props.Url} class="btn btn-primary" target="_blank">
          Go my profile{" "}
        </a>
      </div>
      <div></div>
    </div>
  );
};
export default SuCard;
