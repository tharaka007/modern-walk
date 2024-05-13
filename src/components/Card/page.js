import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
  const dynamic_bg =
    item?.category == "men's clothing" ? "bg-mw-green" : "bg-mw-pink";
  return (
    <div className="bg-white rounded-2xl shadow-4xl sm:max-w-[322px] text-center mt-11 pt-6 flex flex-col content-between">
      <h3 className="text-[18px] font-bold -tracking-[0.5px] px-14	 line-clamp-2 min-h-[54px]">
        {item?.title}
      </h3>
      <Image
        className="mx-auto mt-4 h-[160px] object-cover mb-6"
        src={item?.image}
        width={200}
        height={250}
        alt={item?.title}
      ></Image>
      <div
        className={`price-wrapper px-5 rounded-2xl pt-[7px] pb-6 ${dynamic_bg}`}
      >
        <span className="text-blue text-[23px] font-bold text-mw-blue block mb-[6px]">
          Rs {item?.price}
        </span>
        <p className="line-clamp-4 px-8 leading-5 text-sm">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
