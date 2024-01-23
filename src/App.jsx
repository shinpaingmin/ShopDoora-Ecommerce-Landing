import { lazy, Suspense } from "react"
import Spinner from "./components/Spinner";

function App() {

  const Header = lazy(() => import("./components/Header"));
  const Hero = lazy(() => import("./components/Hero"));
  const BestDeals = lazy(() => import("./components/BestDeals"));
  const NewReleased = lazy(() => import("./components/NewReleased"));
  const Footer = lazy(() => import("./components/Footer"));

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Hero />
        <BestDeals />
        <NewReleased />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
