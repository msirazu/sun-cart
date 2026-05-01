const BrandCard = ({ name, description }) => {
    return (
        <div className="border border-gray-200 p-3 rounded-lg cursor-pointer hover:bg-gray-100 hover:border-gray-300">
                    <h5 className="text-center font-medium">{name}</h5>
                    <p className="text-[10px] text-center">{description}</p>
                </div>
    );
};

export default BrandCard;