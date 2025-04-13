import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2 flex flex-col h-full items-center bg-background">
      <h3 className='font-serif text-2xl py-4 leading-relaxed'>Welcome To Greg's Burgers the best burger in <town>  </town></h3>
      <h2 className='font-serif text-lg  py-4 leading-relaxed'>If you like burgers you have come to the right place!</h2>
    </div>
  )
}