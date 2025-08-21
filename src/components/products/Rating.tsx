import { Star, StarHalf } from "lucide-react";
import React from "react";


interface Props {
  rating: number;
  size:number
}

const Rating: React.FC<Props> = ({rating,size}) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => {
        const starNumber = i + 1;

        if (rating >= starNumber) {
          return <Star  key={i} color="#ffc633" fill='#ffc633' strokeWidth={1} size={size} absoluteStrokeWidth/>; // Full star
        } else if (rating >= starNumber - 0.5) {
          return <StarHalf key={i} color="#ffc633" fill='#ffc633'  strokeWidth={1} size={size} absoluteStrokeWidth />; // Half star
        } else {
          return <Star key={i} color="#ffc633" strokeWidth={1} size={size} absoluteStrokeWidth />; // Empty star
        }
      })}
    </div>
  );
};

export default Rating;
