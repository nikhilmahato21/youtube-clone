import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex justify-center">
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Anime" />
      <Button name="movies" />
      <Button name="Podcasts" />
      <Button name="Algorithm" />
      <Button name="Mixes" />
    </div>
  );
};

export default ButtonList;
