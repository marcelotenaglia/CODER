import { useState } from "react";

function Cards({ title, arroba, img }) {
  const [like, setLike] = useState(0); //like : variable de estado, setLike : setter

  function handleClickLike() {
    setLike(like + 1);
  }

  function handleClickDislike() {
    setLike(like - 1);
  }

  return (
    <div className="card ">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={img} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <h3 className="title">{title}</h3>
          <p className="subtitle">{arroba}</p>

          <div className="columns">
            <div className="column">
              <button
                onClick={handleClickLike}
                className="button is-info is fullwidth"
              >
                +
              </button>
            </div>
            <div className="column">
              <button
                onClick={handleClickDislike}
                className="button is-info is fullwidth"
              >
                -
              </button>
            </div>
          </div>

          <p> likes : {like} </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
