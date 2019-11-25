module Link = {
  [@bs.module "next/link"] [@react.component]
  external make:
    (
      ~href: string=?,
      ~_as: string=?,
      ~prefetch: bool=?,
      ~replace: option(bool)=?,
      ~shallow: option(bool)=?,
      ~passHref: option(bool)=?,
      ~children: React.element
    ) =>
    React.element =
    "default";
};

module Router = {
  type router = {
    .
    "route": string,
    "asPath": string,
  };

  [@bs.module "next/router"] external useRouter: unit => router = "useRouter";
};

module Head = {
  [@bs.module "next/head"] [@react.component]
  external make: (~children: React.element) => React.element = "default";
};

module Error = {
  [@bs.module "next/head"] [@react.component]
  external make: (~statusCode: int, ~children: React.element) => React.element =
    "default";
};

module InitialPropsPage = {
  type req = Js.t({.}); /* Request Obj */
  type res = Js.t({.}); /* Response Obj */
  type err = Js.t({.}); /* Err Obj */

  type context = {
    .
    "query": Js.Dict.t(string),
    "req": req,
  };

  type getInitialPropsFn('a) = context => Js.Promise.t(Js.t('a));

  type injectFn('jsProps) =
    (React.component(Js.t('jsProps)), getInitialPropsFn('jsProps)) => unit;

  /* Experimental Functor Interface (practically working) */
  module Make =
         (
           Page: {
             type props;
             type context;

             let getInitialProps: context => Js.Promise.t(props);

             let make: React.component(props);
           },
         ) => {
    open! Page;
    let inject:
      (React.component(props), context => Js.Promise.t(props)) => unit = [%bs.raw
      {| (cls, fn) => cls.getInitialProps = fn |}
    ];

    inject(make, getInitialProps);

    let default = make;
  };
};
