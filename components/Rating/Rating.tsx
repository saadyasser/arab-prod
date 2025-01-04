/**
 * A reusable rating component that supports fractional stars.
 *
 * @param value - Current rating value (e.g., 2.5).
 * @param maxRating - Maximum number of stars (default: 5).
 */

import StarFill from "../Svgs/Star/StarFill";
import StarEmpty from "../Svgs/StarEmpty/StarEmpty";
import StarHalf from "../Svgs/StarHalf/StarHalf";
import "./Rating.css";

interface RatingProps {
  value: number;
  maxRating?: number;
}
const Rating: React.FC<RatingProps> = ({ value, maxRating = 5 }) => {
  return (
    <div className="ratingContainer">
      {Array.from({ length: maxRating }, (_, i) => {
        const starIndex = i + 1;

        // Determine which icon to display
        const isFull = value >= starIndex;
        const isHalf = value >= starIndex - 0.5 && value < starIndex;

        return (
          <div key={i} className="star">
            {isFull ? (
              <StarFill />
            ) : isHalf ? (
              <StarHalf className="star-half" />
            ) : (
              <StarEmpty />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
