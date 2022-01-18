//* Import react functions
import React, { Suspense } from "react"

//* Import Component
const Home = React.lazy(() => {
  return Promise.all([
    import("./Pages/Home"),
    new Promise((resolve) => setTimeout(resolve, 10))
  ]).then(([moduleExport]) => moduleExport)
})

export default function App() {
  return (
    <>
      <Suspense fallback={<>Login...</>}>
        <Home />
      </Suspense>
    </>
  )
}
