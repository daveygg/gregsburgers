import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locations')({
  component: Locations,
})

function Locations() {
  return <div>Hello "/locations"!</div>
}
