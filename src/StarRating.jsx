import { range } from './util'; // Assuming the path is corrected

function StarRating({ rating }) {
  const fullStars = Math.floor(rating); // Get the number of whole stars

  // Use range function to create an array of indexes
  const starIndexes = range(fullStars);

  return (
    <div className="star-wrapper">
      {starIndexes.map((index) => (
        <img
          key={index} // Use index as a unique key
          alt="Star"
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      ))}
    </div>
  );
}

export default StarRating;
