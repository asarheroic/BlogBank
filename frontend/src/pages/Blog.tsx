
import Appbar from "../components/Appbar";
import GetBlog from "../components/GetBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import {useParams} from "react-router-dom";

 const  Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div >
            <Appbar />
            <div className="flex justify-center items-center pt-80">
            <Spinner></Spinner>
            </div>
            </div>
    }
    return <div>
        <GetBlog blog={blog} />
    </div>
}  


export default Blog