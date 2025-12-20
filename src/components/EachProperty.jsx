import BedroomSvg from "./svg/Properties/BedroomSvg";
import RestroomSvg from "./svg/Properties/RestroomSvg";

const EachProperty = ({ property }) => {
  const { image, title, facilities, cost, bedroom, restroom } = property;

  return (
    <div class="p-4 bg-white rounded-lg border border-gray-600/10">
      <img
        src={image}
        alt={title}
      />

      <div class="p-6">
        <h4 class="text-2xl font-bold cursor-pointer">
          {title}
        </h4>
        <div>
          {facilities}
        </div>
        <div class="mt-2">
          <span class="text-xl font-extrabold text-blue-600">${cost.toFixed(2)}</span> /M
        </div>

      </div>
      <div class="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div class="flex items-center">
          <BedroomSvg />
          <p><span class="font-bold text-gray-900">{bedroom}</span> Bedrooms</p>
        </div>
        <div class="flex items-center">
          <RestroomSvg />
          <p><span class="font-bold text-gray-900">{restroom}</span> Bathrooms</p>
        </div>
      </div>
    </div>
  )
}

export default EachProperty;