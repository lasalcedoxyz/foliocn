import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import ApplicationsIndex from "./pages/applications/ApplicationsIndex";
import AssetsIndex from "./pages/assets/AssetsIndex";
import DataIndex from "./pages/data/DataIndex";

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
        path: 'assets',
        Component: AssetsIndex,
      },
      {
        path: 'data',
        Component: DataIndex,
      },
    ]
  }
]) 
