%raw
"import '../styles/main.css'";

open Util.ReactStuff;

[@react.component]
let default = (~name: string) => <MainLayout> name->s </MainLayout>;

let getInitialProps = _ctx => Js.Promise.resolve({"name": "M. Mustermann"});

let inject: (React.component(Js.t('a)), Next.getInitialPropsFn('a)) => unit = [%bs.raw
  {| (cls, fn) => cls.getInitialProps = fn |}
];

inject(default, getInitialProps);
