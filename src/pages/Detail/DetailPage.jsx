import React, { useEffect, useState } from "react";
import "./detail.scss";
import { useProduct } from "../../context/ProductContextProvider";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContextPrvider";
import { Avatar, IconButton } from "@mui/material";

export default function DetailPage() {
  const { getOneProduct, addComments, readComments, comments, oneProduct } =
    useProduct();
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    readComments(id);
    console.log(oneProduct);
  }, []);

  const [text, setText] = useState();
  const handleComment = () => {
    const obj = {
      name: user.email,
      text: text,
    };
    console.log(obj);
    addComments(id, obj);
  };
  return (
    <div className="cardDetail">
      <div className="cardDetail__container">
        <div className="cardDetail__imageBlock">
          <img
            className="cardDetail__imageBlock--image"
            src={oneProduct.image}
            alt=""
          />
        </div>
        <div className="cardDetail__text">
          <div className="cardDetail__text--title">
            Title: <strong>{oneProduct.title}</strong>
          </div>
          <div className="cardDetail__text--price">
            Price: <strong>{oneProduct.price}$</strong>
          </div>
          <div className="cardDetail__text--comments">
            <div className="cardDetail__text--block">
              {comments.map((elem) => (
                <div style={{display:"flex", marginTop:"5px", marginLeft:"5px"}}>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      alt={user.email}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                  <div style={{marginLeft:"5px"}}>
                    <div>{elem.name}</div>
                    <div>{elem.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <input
                type="text"
                placeholder="give your opinion"
                className="cardDetail__text--input"
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={handleComment}>add</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
