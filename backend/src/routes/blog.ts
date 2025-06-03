import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables : {
        userId  : string
    }
}>()

blogRouter.use("/*",async (c, next) => {

    // get the header
  
    const header = c.req.header("Authorization");
    
  // check it 
    if (!header) {
      c.status(403);
      return c.json({ error: "Unauthorized" });
    }
  
  
    const token = header.split(" ")[1];
  
    try {
      const payload = await verify(token, c.env.JWT_SECRET);
      if (!payload || !payload.id) {
        c.status(403);
        return c.json({ error: "Unauthorized" });
      }
  
      //  Set userId in context  need to set it for give it to next route
  
       c.set("userId", payload.id as string);
  
      await next();
    } catch (err) {
      c.status(403);
      return c.json({ error: "Invalid token" });
    }
  });
  





blogRouter.post('/create', async (c) => {

    const body = await c.req.json()
    const xId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())


    try {
       const blog =  await prisma.post.create({
            data : {
                title : body.title,
                content : body.content,
                authorId : parseInt(xId)
            }
        })
    
    
    
        return c.json({
            msg : 'Blog posted succesfully,' ,
        id : blog.id})
    } catch (error) {
        return c.json({
            msg : "something is wrong "
        })
    }
})



blogRouter.put('/update',async (c) => {
const body = await c.req.json()
const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
}).$extends(withAccelerate())

try {
    const blogx = await prisma.post.update({
        where :{
            id : body.id
        },
        data : {
            title : body.title,
            content : body.content,
                
        }
    })

    return c.json({
        id : blogx.id
    })
} catch (error) {
    return c.json({
        msg : "can not updated"
    })
}

	

    
})

// add  pagination
blogRouter.get('/bulk', async (c) => {
	const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select : { 
            title : true,
            content : true,
            id : true,

            author : {
                select : {
                    name : true
                }
            }
        }
    })

    return c.json({
        blogs
    })
})




blogRouter.get('/:id',async (c) => {
    const body =  c.req.param("id") 
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL

    }).$extends(withAccelerate())

    
	try {
        const blog = await prisma.post.findFirst({
            where : {
                id : Number(body)
            },
            select :{
                id : true,
                title : true ,
                content : true,
                author:{
                    select :{
                        name : true
                    }
                }
            }
        })
     return c.json({
         blog
     })

    } catch (error) {
        return c.json({
            msg : "can not find"
        })
    }

	
})
