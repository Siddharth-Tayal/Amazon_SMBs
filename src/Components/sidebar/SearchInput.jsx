
const SearchInput = () => {
  return (
    <form  className="flex items-center gap-2">
      <input type="text" placeholder="Search.." className="input input-bordered rounded-full" />
      <button className="btn btn-circle bg-sky-500 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 19l-6-6m-2 0l-6 6m6-6V3" />
        </svg>
      </button>
    </form>
  )
}

export default SearchInput
