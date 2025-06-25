
import { Hono } from 'hono';

import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';


// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
		CORS_ORIGIN:string
	},
	Variables : {
		userId  : string
	}
}>();

app.use('/*', async (c, next) => {
	const allowedOrigin = c.env.CORS_ORIGIN;
	return cors({
	  origin: (origin) => origin === allowedOrigin ? origin : '',
	  credentials: true,
	})(c, next);
  });


  
app.route('/api/v1/user' , userRouter)
app.route('/api/v1/blog' , blogRouter)





export default app;
