import { Link, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <h1 className="text-3xl font-semibold">Sorry, an unexpected error has occurred.</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"} className="underline hover:text-blue-400">
        Go to home page
      </Link>
    </div>
  );
}
