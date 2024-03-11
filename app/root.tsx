import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LinksFunction,
  LoaderFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  json,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import styles from "./tailwind.css";
import Header from "./components/common/header/header";
import Modal from "./components/common/modal/modal";
import { useState } from "react";
import Login from "./components/common/auth/login";
import Signup from "./components/common/auth/signup";
import { userPrefs } from "./utils/cookie.server";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];
export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userPrefs.parse(cookieHeader)) || {};
  const uId = cookie.uId || null;
  return json({ uId: cookie.uId });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { uId } = useLoaderData<typeof loader>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAuthPage, setActiveAuthPage] = useState("login");

  const handleModalBtnClick = (modalState: boolean) => {
    setIsModalOpen(modalState);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
        <Header
          isUserLoggedIn={uId !== null}
          onLoginClick={handleModalBtnClick}
        />
        {children}
        {isModalOpen && (
          <Modal onClose={handleModalBtnClick}>
            {activeAuthPage === "login" && (
              <Login
                onModalClose={handleModalBtnClick}
                setActiveAuthPage={setActiveAuthPage}
              />
            )}
            {activeAuthPage === "signup" && (
              <Signup
                onModalClose={handleModalBtnClick}
                setActiveAuthPage={setActiveAuthPage}
              />
            )}
          </Modal>
        )}
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  }

  return (
    <>
      <h1>Error!</h1>
      <p>{"Unknown error"}</p>
    </>
  );
}
