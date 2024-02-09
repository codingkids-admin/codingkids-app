"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return <main></main>;
}
