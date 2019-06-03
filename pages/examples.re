%raw
"import '../styles/main.css'";

open Util.ReactStuff;
open Next.InitialPropsPage;

[@react.component]
let default = (~msg: string, ~href: string) =>
  <MainLayout> msg->s <a href target="_blank"> "`pages/examples.re`"->s </a> </MainLayout>;

let getInitialProps = _ctx =>
  Js.Promise.resolve({
    "msg": "This page was rendered with getInitialProps. You can find the source code here: ",
    "href": "https://github.com/ryyppy/nextjs-default/tree/master/pages/examples.re",
  });

let inject: injectFn('jsProps) = [%bs.raw
  {| (cls, fn) => cls.getInitialProps = fn |}
];

inject(default, getInitialProps);
