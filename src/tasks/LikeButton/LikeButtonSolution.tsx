import "./style.css";

import { useState } from "react";
import { HeartIcon, SpinnerIcon } from "./icons";

export const LikeButtonSolution = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [status, setStatus] = useState<"liked" | "idle">("idle");

  const likeButton = async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          body: JSON.stringify({
            action: status === "liked" ? "unlike" : "like",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }
      await response.json();

      setStatus((prevStatus) => (prevStatus === "liked" ? "idle" : "liked"));
    } catch (error) {
      console.log("error", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button
        className={`btn btn--${status}`}
        onClick={likeButton}
        disabled={isLoading}
      >
        {isLoading ? <SpinnerIcon /> : <HeartIcon />}
        {status === "liked" ? "Liked" : "Like"}
      </button>
      <p className="error">
        {isError &&
          `Unknown error during attempted ${
            status === "idle" ? "like" : "unlike"
          }. Please try again later.!`}
      </p>
    </div>
  );
};
