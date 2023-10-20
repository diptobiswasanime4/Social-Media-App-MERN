import React from "react";

function ProfileInfo() {
  return (
    <div className="my-2 w-2/3 h-fit rounded-xl pt-2 px-2 bg-white shadow-lg">
      <img
        src="https://pbs.twimg.com/profile_banners/1553067672237006850/1687965815/600x200"
        alt="Cover_pic"
        className="rounded-lg"
      />
      <div className="flex">
        <img
          src="src\assets\images\Yin.jpg"
          alt="Profile_pic"
          className="relative -top-8 left-4 w-24 h-24 rounded-full"
        />
        <div className="flex flex-col pl-6 pt-1">
          <div className="text-2xl">Lina Yin</div>
          <div className="text-gray-700">Canton, China</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
