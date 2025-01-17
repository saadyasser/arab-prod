import React from "react";

import Image from "next/image";

import styles from "./CardAi.module.css";
import { Button } from "../../../../components/ui/button";
import MoreIcon from "../../../../components/Svgs/MoreIcon/MoreIcon";
import FavoriteDoneIcon from "@/components/Svgs/FavoriteDoneIcon/FavoriteDoneIcon";
import FavoriteIcon from "@/components/Svgs/FavoriteIcon/FavoriteIcon";
import { AiToolsType } from "@/types/aiTools";

interface AiToolType {
  tool: AiToolsType;
  image: string;
  isFavorite: boolean | undefined;
  handleToggleFavorites: (toolId: number) => void;
}

const CardAi: React.FC<AiToolType> = (props) => {
  const { tool_id, imageURL, title, tags, description, pricing, subject } =
    props.tool;

  console.log(props.isFavorite, "props.isFavorite");

  return (
    <div className={styles["card-ai"]}>
      <div
        className={styles["avatar-favorite"]}
        onClick={() => props.handleToggleFavorites(tool_id)}
      >
        {props.isFavorite ? <FavoriteDoneIcon /> : <FavoriteIcon />}
      </div>
      <Image
        src={props.image}
        alt="image ai 1"
        width={100}
        height={100}
        className={styles["image-ai"]}
      />

      <div className={styles["content"]}>
        <h3 className={styles["title"]}>{title}</h3>

        <div className={styles["hashtag"]}>
          {tags.map((value: string, index: number) => (
            <span key={index} dir="ltr">
              {value}
            </span>
          ))}
        </div>

        <div className={styles["container"]}>test</div>

        <p className={styles["description"]}>{description}</p>

        <div className={styles["btn-wrapper"]}>
          <Button className={styles["button"]}>
            المزيد
            <MoreIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardAi;
