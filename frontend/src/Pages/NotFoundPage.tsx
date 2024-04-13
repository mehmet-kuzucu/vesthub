import vesthublogo from '../vesthublogo.png';

function NotFoundPage() {
  return (
      <main className="min-h-screen bg-backColor px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <img src={vesthublogo} alt="VestHub Logo" className="mx-auto h-60 cursor-pointer animate-pulse" onClick={() => window.location.href = '/'} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">404 - Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-button-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-button-primaryHover" onClick={() => window.location.href = '/'}>Go back home</button>
            {/*<button className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></button>*/}
          </div>
        </div>
      </main>
    
  );
}

export default NotFoundPage;