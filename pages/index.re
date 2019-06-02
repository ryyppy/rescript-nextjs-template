%raw
"require('../styles/main.css')";

module Link = Next.Link;

[@react.component]
let make = () => <MainLayout> <h1> "next-default"->ReasonReact.string </h1> </MainLayout>;

let default = make;
