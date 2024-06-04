import { Link } from "react-router-dom";
const GameSection = ({ image, title, description, link }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          to={link}
          className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};
export default GameSection;
