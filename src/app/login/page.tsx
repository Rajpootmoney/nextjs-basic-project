// login/page.tsx

import Layout from '../login/layout';

export default function LoginPage() {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium">Email:</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 outline-none" required />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium">Password:</label>
              <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 outline-none" required />
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
