/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const uuid = crypto.randomUUID();
    const { name } = ctx.params
    const prom = new Promise((resolve) => setTimeout(() => { resolve(1) }, 1000))
    await prom
    const resp = await ctx.render({ name, uuid })
    // return new Response(JSON.stringify(uuid), {
    //   headers: { "Content-Type": "application/json" },
    // });
    return resp
  },
};

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <p>Greetings to you, {name}!</p>
      <pre>
        {JSON.stringify({ props }, null, 2)}
      </pre>
    </main>
  );
}