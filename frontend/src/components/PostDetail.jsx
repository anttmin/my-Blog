import React from "react";
import { ArrowLeftIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const PostDetail = ({ posts }) => {
  const { description, image, title, date } = posts;
  return (
    <>
      <section className="Details">
        <div className="TopLayer">
          <div className="Data">
            <span>{title}</span>
            <span>
              <CalendarDaysIcon className="Icon" />
              {date}
            </span>
          </div>

          <Link to={"/"}>
            {" "}
            <ArrowLeftIcon className="Icon" />
          </Link>
        </div>
        <img src={image} alt="img" />
        <p>{description}</p>
      </section>
    </>
  );
};

export default PostDetail;
