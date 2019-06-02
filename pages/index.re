%raw
"require('../styles/main.css')";

open Util.ReactStuff;
module Link = Next.Link;

[@react.component]
let make = () => <MainLayout> <h1> "next-default"->s </h1> </MainLayout>;

let default = make;
