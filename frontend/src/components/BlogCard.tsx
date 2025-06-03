import Avatar from "./Avatar"

// interface Blogcard {
//     authorName : string,
//     publishedDate : string,
//     content : string ,
//     title : string
// }

// const BlogCard = ({authorName , publishedDate , title , content } : Blogcard) => {
//   return (
//     <div className="p-4 border-b-3 items-center   border-b-gray-100  w-screen max-w-screen-md">
        
//       <div className="flex  "  >
//        <Avatar name={authorName} /> 
//        <div className="flex gap-2 justify-center font-light pb-1 text-sm" > {authorName} 
//        <div className="font-extrabold justify-center">·</div> 

//         <div className="font-extralight text-gray-500">{publishedDate}</div>

//        </div>
//       </div>
//       <div className="font-bold text-xl">
//         {title}
//       </div>

//       <div className=" text-base font-light">
//         {content.length >200 ? content.slice(0,200) + "..."  : content}
//       </div>

//       <div className="text-slate-500 text-sm font-thin">
//         {`${Math.ceil(content.length / 100 )} min read`}
//       </div>
//     </div>
//   )
// }

// export default BlogCard
import { Link } from "react-router-dom";
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
                <div className="flex justify-center flex-col pl-2 ">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">
.
    </div>
}