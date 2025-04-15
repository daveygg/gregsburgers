export default function ErrorScreen({ error }: { error: Error }) {
    return (
      <div className='rounded-md bg-red-200 w-full p-2'>{error.message ?? "no error"}</div>
    );
  }
  