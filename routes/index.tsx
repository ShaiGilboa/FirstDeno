/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`.sdfsssss  edit in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={30} />
    </div>
  );
}
