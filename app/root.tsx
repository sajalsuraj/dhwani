import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import styles from "./tailwind.css";
import Header from "./components/common/header/header";
import Modal from "./components/common/modal/modal";
import { useState } from "react";
import Login from "./components/common/auth/login";
import Signup from "./components/common/auth/signup";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];
export function Layout({ children }: { children: React.ReactNode }) {
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
        <Header onLoginClick={handleModalBtnClick} />
        {children}
        {isModalOpen && (
          <Modal onClose={handleModalBtnClick}>
            {activeAuthPage === "login" && (
              <Login setActiveAuthPage={setActiveAuthPage} />
            )}
            {activeAuthPage === "signup" && (
              <Signup setActiveAuthPage={setActiveAuthPage} />
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
