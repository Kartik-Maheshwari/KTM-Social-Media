import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* WHITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          height={32}
          width={32}
          className="h-8 w-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full flex-wrap">
          <input
            type="text"
            placeholder="Write a comment...."
            className="bg-transparent outline-none "
          />
          <Image
            src="/emoji.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            height={40}
            width={40}
            className="h-10 w-10 rounded-full"
          />
          {/* Desc */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Spencer</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              aut quis consequatur accusantium ipsam blanditiis. Ipsa,
              doloremque voluptatum. Eum cupiditate officiis nostrum repellat
              eos sequi nam in voluptatum saepe quia!
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  height={12}
                  width={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* Icon */}
          <Image
            src="/more.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
