export default function login() {
  return(
      <main className="flex h-screen" >
      <div className="flex flex-col items-center justify-center p-8 w-full">
          <img src="/assets/skillcapital.webp" alt="Skill Capital" className="w-63 mb-6"/>
          <form className="w-full lg:w-9/12 border border-gray-300 p-8 pb-8 lg:p-16 lg:pb-12 rounded-lg shadow-lg">
              <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 font-bold mb-2">User Name</label>
                  <input type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"/>
              </div>
              <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                  <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"/>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">Login</button>
              <div className="flex items-center mt-4">
                  <input type="checkbox" id="remember" name="remember" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                  <label htmlFor="remember" className="ml-2 block text-gray-900">Remember Me</label>
              </div>
              <div className="text-center mt-16">
                  <label htmlFor="remember" className=" block text-gray-900 text-sm">©2024, All rights reserved</label>
              </div>
          </form>
      </div>
      <div className="hidden lg:flex flex-col items-center justify-center p-8 pt-16 pb-0 pr-0 bg-white w-full">
          <h1 className="text-3xl font-bold text-gray-700 text-center p-4 pt-0 pb-0">Seamlessly manage all learner data in a unified platform.</h1>
          <p className="text-gray-600 text-center mb-6 max-w-md text-lg">Centralize customer data effortlessly. Streamline communication, sales, and support for seamless growth.</p>
          <img src="/assets/1 Skill Capital - Login Page Image.png" alt="Info Graphic" className="mt-8 h-full"/>
      </div>
      </main >

  );
}