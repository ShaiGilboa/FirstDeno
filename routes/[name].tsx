/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>Hello kkkk {props.params.name}</div>;
}
