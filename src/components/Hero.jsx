export default function Hero({ className }) {
  return (
    <div
      className={`${className} gradient-tricolor rounded-xl pb-28 text-white sm:pt-4`}
    >
      <div className="px-6 py-4 text-lg lg:px-10 ">
        <div className="text-3xl tracking-tight text-white sm:text-7xl">
          <p className="mb-3">Hi...</p>
          <p className="mb-3">
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
