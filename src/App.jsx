import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

// <>
//  {/* Navbar */}
//  <Navbar />
//  {/* Hero */}
//  <Hero />
//  {/* HomeCards */}
//  <HomeCards />
//  {/* Job listings */}
//  <JobListings />
//  {/* View all jobs button */}
//  <ViewAllJobs />
// </>
