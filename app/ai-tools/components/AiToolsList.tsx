import React, { useEffect, useState } from "react";
import styles from "../AiTools.module.css";
import CardAi from "@/app/ai-tools/components/CardAi/CardAi";
import { AiToolsType } from "@/types/aiTools";
import LoadingCardAi from "./LoadingCardAi/LoadingCardAi";
import { useSession } from "next-auth/react";

type AiToolsListProps = {
  loading: boolean;
  error: string | null;
  data: AiToolsType[] | undefined;
};

const AiToolsList: React.FC<AiToolsListProps> = ({ loading, error, data }) => {
  const { status } = useSession();
  const [favorites, setFavorites] = useState<
    { id: number; isFavorite: boolean }[]
  >([]);

  useEffect(() => {
    const storedFavorites = sessionStorage.getItem("favorites");

    if (storedFavorites) {
      const favoritesArray = JSON.parse(storedFavorites);
      setFavorites(favoritesArray);
    } else {
      sessionStorage.setItem("favorites", JSON.stringify([]));
      setFavorites([]);
    }
  }, []);

  const handleToggleFavorites = (toolId: number) => {
    if (status !== "authenticated") {
      alert("يرجى تسجيل الدخول أولاً.");
      return;
    }
    const updatedFavorites = [...favorites];

    const favoriteIndex = updatedFavorites.findIndex(
      (fav) => fav.id === toolId
    );

    if (favoriteIndex > -1) {
      updatedFavorites[favoriteIndex].isFavorite =
        !updatedFavorites[favoriteIndex].isFavorite;
    } else {
      updatedFavorites.push({ id: toolId, isFavorite: true });
    }
    sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  if (loading)
    return (
      <div className={styles["ai-tools-list"]}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <LoadingCardAi key={index} />
        ))}
      </div>
    );

  if (error) return <div className={styles["error"]}>Error: {error}</div>;

  return (
    <div className={styles["ai-tools-list"]}>
      {data?.map((item) => (
        <CardAi
          key={item.tool_id}
          tool={item}
          image="/images/AiBackground.png"
          isFavorite={
            favorites.find((fav) => fav.id === item.tool_id)?.isFavorite ??
            false
          }
          handleToggleFavorites={handleToggleFavorites}
        />
      ))}
    </div>
  );
};

export default AiToolsList;
