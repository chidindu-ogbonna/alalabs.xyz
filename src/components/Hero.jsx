export default function Hero({ className }) {
  return (
    <div
      className={`${className} rounded-xl bg-gray-800 bg-gradient-to-br from-black via-indigo-900 to-purple-400 text-white sm:py-20`}
    >
      <div className="px-6 py-4 text-lg lg:px-10 ">
        <div className="text-2xl tracking-tight text-white sm:text-6xl lg:text-4xl">
          <p className="mb-2">Hi...</p>
          <p className="mb-2">
            This is a home for professional and experimental projects.
          </p>
          <p>
            Managed by{' '}
            <a
              href="https://twitter.com/6ones_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-200 "
            >
              @6ones_
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
