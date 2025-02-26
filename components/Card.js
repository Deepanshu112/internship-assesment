const Card = ({ title, description, image, logo }) => {
    return (
      <div className="bg-[#EAF7ED] p-6 rounded-xl shadow-md border w-full">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && <p className="text-gray-600 text-sm mt-2">{description}</p>}
        <div className="mt-4 flex items-center justify-between">
          <button className="p-2 border border-gray-300 rounded-full">➝</button>
          {image ? (
            <img src={image} alt="Card Image" className="rounded-lg w-36 h-24 object-cover" />
          ) : (
            <div className="p-6 bg-green-200 rounded-lg">
              <span className="text-2xl font-bold text-green-900">{logo}</span>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Card;
  