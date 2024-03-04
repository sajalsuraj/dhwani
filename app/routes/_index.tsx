import type { MetaFunction } from "@remix-run/node";
import Home from "~/components/modules/home/home";

export const meta: MetaFunction = () => {
  return [
    { title: "Dhwani - Home" },
    { name: "description", content: "Dhwani" },
  ];
};

export default function Index() {
  return (
    <main>
      <Home />
    </main>
  );
}
