

export default function Example() {
    return (
      <div>

        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

          </div>
          <input
            type="text"
            name="movie"
            
            id="movie"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="search..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center">

            <select
              id="currency"
              name="currency"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>Movie</option>
              <option>tv show</option>

            </select>
          </div>
        </div>
      </div>
    )
  }