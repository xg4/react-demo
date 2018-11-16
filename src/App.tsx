import * as React from 'react'

const { useState, useEffect, Suspense, lazy } = React

const Other = lazy(() => import('./OtherComponent'))

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Hello Hooks ${count}`
    return () => {
      console.log(`over ${count}`)
    }
  })

  return (
    <div>
      app{count}
      <Suspense fallback={<div>Loading...</div>}>
        <Other />
      </Suspense>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        add
      </button>
    </div>
  )
}
