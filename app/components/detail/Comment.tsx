"use client";
import { RxAvatar } from "react-icons/rx";

// Yorum bileşeni
const Comment = ({ prd }: { prd: any }) => {
  return (
    <div className="border w-full md:w-1/3 p-2 rounded-lg">
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

// Yorumlar ana bileşeni
const Comments = ({ comments }: { comments: any[] }) => {
  return (
    <div>
      {comments.slice().reverse().map((comment, index) => (
        <Comment key={index} prd={comment} />
      ))}
    </div>
  );
};

export default Comments;
