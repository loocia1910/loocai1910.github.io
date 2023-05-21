import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './page/Landing';
import Hello from './page/Hello';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: 'hello',
    element: <Hello />,
  }
])


export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
