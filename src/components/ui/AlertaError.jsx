export const AlertaError = ({ message }) => {
    return (
      <div role="alert" class="rounded w-full border-s-4 border-red-500 bg-red-50 p-4">
        <p class="mt-2 md:text-lg font-bold text-red-700">
          {message}
        </p>
      </div>
    )
  }
  