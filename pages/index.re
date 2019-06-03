%raw
"require('../styles/main.css')";

open Util.ReactStuff;

module P = {
  [@react.component]
  let make = (~children) => <p className="mb-2"> children </p>;
};

[@react.component]
let make = () =>
  <MainLayout>
    <h1 className="text-3xl font-semibold">
      "What is this about?"->ReasonReact.string
    </h1>
    <P>
      {j| This is a simple template for a Next
      project using Reason & TailwindCSS.|j}
      ->s
    </P>
    <h2 className="text-2xl font-semibold mt-5"> "Quick Start"->s </h2>
    <P>
      <pre>
        {j|git clone https://github.com/ryyppy/nextjs-default.git my-project
cd my-project
rm -rf .git|j}
        ->s
      </pre>
    </P>
  </MainLayout>;

let default = make;
