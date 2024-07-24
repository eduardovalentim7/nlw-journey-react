import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";


const router = createBrowserRouter([
  //dois emelentos obrigatórios
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripsId",
    element: <TripDetailsPage/>,
  },
]);

export function App() {
return <RouterProvider router={router} />

}
