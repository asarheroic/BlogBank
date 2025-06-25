import { Link } from "react-router-dom";

export default function HomeINTRO() {
  return (
    <div className=" w-full bg-white text-gray-900">
      
      <section className="flex flex-col items-center justify-center pt-30 pb-30 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">Welcome to BlogBank 📝</h1>
        <p className="text-lg mb-8 max-w-xl text-gray-600">
          A modern blogging platform where creators share and grow. Secure, fast, and built for developers.
        </p>
        <div className="space-x-4">
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Become a Blogger</button>
          </Link>
          <Link to="/signin">
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 transition">Login</button>
          </Link>
        </div>
      </section>

      <div className="flex w-full flex-col gap-30">
        <div className="">
          <p className="bg-gray-50 border-b border-gray-200 text-[1.05rem] leading-relaxed text-gray-800 font-[500] max-w-3xl mx-auto mb-8 px-6 py-5 rounded-xl shadow-sm">
            <strong className="text-blue-700">BlogBank</strong> is a full-stack blogging website built to explore the complete web development lifecycle. As a user, you can create an account, securely log in, and start publishing your own blogs. The platform also allows visitors to read blogs written by others, making it a dynamic and interactive space. It covers everything from authentication with JWT to database management using Prisma and fast APIs with Hono, all wrapped in a responsive UI built with React + Vite. This project aims to simulate a real-world content platform, helping developers like me learn and apply modern web tech in a meaningful way.
          </p>
        </div>




        <div>
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">Why Choose a Blogging Website as Your Project?</h2>
          <p className="bg-white border-l-4 border-blue-200 text-[1.05rem] leading-relaxed text-gray-800 font-[500] max-w-3xl mx-auto mb-12 px-6 py-5 rounded-md shadow-sm">
            Building a blogging website is a great way to learn full-stack development because it involves every major part of a real application. Through BlogBank, I learned how to manage local and global state in React, fetch and display dynamic data from an API, design clean and responsive user interfaces, and work with authentication systems using JWT. It also helped me understand routing, user flows, and how to structure a project using the MVC pattern. As a developer, creating a blogging platform teaches essential skills that you’ll use in nearly every web project going forward — making it an ideal hands-on learning experience.
          </p>
        </div>

      </div>




      {/* Tech Stack Section */}
      <section className="px-6 py-20 bg-gray-50" id="techstack">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-800">Built With Modern Tech</h2>

        {/* Frontend Section */}
        <div className="max-w-5xl mx-auto mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">⚛️ Frontend Tech Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">React 19 + TypeScript</h4>
              <p className="text-gray-700">Modern component-based UI with type safety, hooks, and concurrency features.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Vite + Tailwind CSS</h4>
              <p className="text-gray-700">Lightning-fast dev server and utility-first styling for responsive design.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Axios</h4>
              <p className="text-gray-700">Simplified HTTP client for handling API requests with ease and flexibility.</p>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="max-w-5xl mx-auto mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">🚀 Backend Tech Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Hono (Cloudflare framework)</h4>
              <p className="text-gray-700">Tiny, fast, edge-first web framework for building performant APIs.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Prisma ORM</h4>
              <p className="text-gray-700">Type-safe database access layer with support for relations and migrations.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">JWT Authentication</h4>
              <p className="text-gray-700">Secure and stateless token-based authentication system.</p>
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">📦 Deployment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Frontend: Vercel</h4>
              <p className="text-gray-700">Deployed on Vercel for seamless CI/CD and frontend performance optimization.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Backend: Cloudflare Workers</h4>
              <p className="text-gray-700">Ultra-fast serverless backend running at the edge for minimal latency.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}