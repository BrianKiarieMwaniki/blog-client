import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from 'react-router-dom';
import { Menu } from "../components/Menu";

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In rem eius
          adipisci accusamus velit nobis dolore veniam aliquam doloremque
          veritatis enim, quisquam laborum, alias fugit tempore nulla excepturi
          quo impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis aliquid nam doloribus praesentium rerum quod eaque dolorem
          dolor ipsa, consequatur fugiat iusto saepe repellat itaque voluptates,
          atque non, est vitae? Quidem, cupiditate? Ipsa aspernatur, suscipit
          dolor ut, obcaecati a illo beatae quos accusamus vitae fuga libero.
          Vel quia temporibus consectetur totam rem.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Hic vel perspiciatis vero at, similique
          aperiam, rem maxime ullam odit quos accusantium, minus tempora non.
          Dolor rerum dolores maiores exercitationem earum?
        </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
};
