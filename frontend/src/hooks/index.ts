import axios from "axios"
import { useEffect, useState } from "react"
// import { BACKEND_URL } from "../config"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export interface Blog {
  content : string ,
  title : string , 
  id : number ,
  author :{
    name : string
  }
}

export const useBlog = ({id} : {id : string} ) => {

  const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => { 
     const fetching =  async () => {
         try {
          const response =await  axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,
       { headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }}
        )
        setBlog(response.data.blog)
         } catch (error) {
          console.error('error while fetchig')
         }finally{setLoading(false)}
        
        
        }

        fetching()
      }
    , [])
    

  return {
    loading,
    blog}
  
}


export const useBlogs = () => {
  const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => { 
     const fetching =  async () => {
         try {
          const response =await  axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,
       { headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}` 
        }}
        )
        setBlogs(response.data.blogs)
         } catch (error:any) {
          console.error('error while fetchig',error)
          setError(error.message ?? "Something went wrong")
          
         }finally{setLoading(false)}
        
        
        }

        fetching()
      }
    , [])
    

  return {
    loading,
    blogs,error}
}
