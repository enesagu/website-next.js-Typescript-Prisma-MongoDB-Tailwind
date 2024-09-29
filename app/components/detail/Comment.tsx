"use client";
import { RxAvatar } from "react-icons/rx";

const Comment = ({ prd }: { prd: any }) => {

  return (
    <div className="border w-full md:-1/3 p-2 rounded-lg">
      {/* Kullanıcı avatarı ve adı */}
      <div className="flex items-center gap-1">
        <RxAvatar size="25" />
        <div>{prd?.user?.name}</div>
      </div>
      
      {/* Yorum ve Tarih */}
      <div className="text-slate-500">
        {prd.comment}{" "}
        <span className="block text-sm text-gray-400">
          {new Date(prd.createdAt).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
};

export default Comment;
