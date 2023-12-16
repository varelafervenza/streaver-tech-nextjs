"use client"
 
export default function GlobalError({
  error,
  reset
}: {
  error: Error, 
  reset: () => void
}) {
  return (
    <div className="bg-slate-300 p-4 my-2">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button className="bg-blue-600 p-4 rounded-md" onClick={() => reset()}>Try again!</button>
    </div>
  )
}

