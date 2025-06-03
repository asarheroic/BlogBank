import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import HomeAppbar from "../components/HomeAppbar"
import { useBlogs } from "../hooks"

const Homoepage = () => {
    const { loading, blogs } = useBlogs()

    if (loading) {
        return(
        <div >

            <HomeAppbar/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50" >
                <div className="w-full max-w-2xl px-4">
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>

                </div>

            </div>
        </div>)
    }



    return (
        <div >

    <HomeAppbar/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50" >
                <div className="w-full max-w-2xl px-4">
                    {blogs.map(blog => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name ? blog.author.name : "Anonymous"}
                            title={blog.title}
                            publishedDate="30 Feb 1900"
                            content={blog.content}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}




export default Homoepage