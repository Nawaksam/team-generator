function Header() {
  return (
    <div className="bg-zinc-800 text-emerald-500 flex sm:flex-row flex-col sm:justify-between items-center py-1 px-6 font-major text-4xl">
      <h1 className="sm:py-0 py-2">CodeBakery</h1>
      <h2 className=" text-center sm:py-0 py-3 sm:border-none border-y-2 border-emerald-900">
        Victim picker & Team generator
      </h2>
      <img
        src="/baked.png"
        alt="Baked with love"
        className="h-36 sm:py-0 py-2 "
      />
    </div>
  )
}

export default Header
