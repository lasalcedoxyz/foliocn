import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import ApplicationsIndex from "./pages/applications/ApplicationsIndex";
import ProfileIndex from "./pages/profile/ProfileIndex";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'applications',
        Component: ApplicationsIndex,
      },
      {
        path: 'profile',
        Component: ProfileIndex,
      }
    ]
  }
]) 
