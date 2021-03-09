import React from "react";

export default function SkillList({ item }) {
  return (
    <div className="col-md-6 mt-3">
      <div className="bg-pink-dark p-3 h-100 skill__list">
        <div className="d-flex align-items-center">
          <h3 className="col-8 p-0 m-0">{item.heading}</h3>
          <img
            className="col-4 pl-1 pr-0 mb-n2"
            src={item.picture.asset.fluid.src}
            width="68"
            height="90"
            alt=""
          />
        </div>
        <ul className="list-unstyled">
          {item.listItems.map((listItem, index) => (
            <li
              className="h6 font-weight-bold small"
              key={`${item._key}${index}`}
            >
              {listItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
