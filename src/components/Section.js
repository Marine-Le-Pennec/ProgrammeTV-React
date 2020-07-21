import React from "react";

function Section(props) {
  return (
    <section>
      <div className="block1">
        <div className="time">
          <span>{props.category.time}</span>
        </div>
        <div className="picture">
          <img src={props.category.image} alt="programme"></img>
        </div>

        <div className="infos">
          <div className="titles">
            <h2>{props.category.title}</h2>
            <h3>{props.category.type}</h3>
          </div>
          <div className="end">
            <span className="duration">{props.category.duration}</span>

            {props.category.isUnseen === true ? (
              <span className="color">&bull; &nbsp;Inédit</span>
            ) : null}
            {props.category.direct === true ? (
              <span className="color">&bull; &nbsp;Direct</span>
            ) : null}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </section>
  );
}

export default Section;
