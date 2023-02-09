import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import F0 from "../Images/F0.png";
import F1 from "../Images/F1.png";
import F2 from "../Images/F2.png";
import F3 from "../Images/F3.png";
import F4 from "../Images/F4.png";

export default function Score() {
  const [score, setScore] = useState([]);
  const [winner, setWinner] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = async () => {
        try {
          const response = await axios.get("http://localhost:3001/fight");
          setScore(
            response.data.sort(
              (a, b) => parseFloat(b.score) - parseFloat(a.score)
            )
          );
          setWinner(
            response.data.filter((item) => item.active === true)[0].winner
          );
          console.log(score);
        } catch (err) {
          console.log(err);
        }
      };

      data();
    }, 100);
  }, []);

  return (
    <div className="GameBoyFont">
      <Header />
      {winner ? (
        <div>
          <h1 className="text-center m-5">Congrats!! You Won!!!</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-center m-5">Sorry!! You lost!!!</h1>
        </div>
      )}

      <div>
        <h4 className="text-center m-5">Score Board:</h4>
      </div>
      {score.map((score) => {
        return (
          <div
            className="d-flex justify-content-between fs-5 w-50 mx-auto align-items-center p-3"
            style={{
              color: "rgb(255, 217, 0)",
              background: " rgb(26, 42, 87)",
              border: score.active ? "solid rgb(255, 217, 0)" : "",
            }}
          >
            <div>
              {" "}
              {score.img === 0 && <img src={F0} className="facePic" />}
              {score.img === 1 && <img src={F1} className="facePic" />}
              {score.img === 2 && <img src={F2} className="facePic" />}
              {score.img === 3 && <img src={F3} className="facePic" />}
              {score.img === 4 && <img src={F4} className="facePic" />}
            </div>
            <div> {score.user}</div>
            <div> {score.score}</div>
          </div>
        );
      })}
    </div>
  );
}
