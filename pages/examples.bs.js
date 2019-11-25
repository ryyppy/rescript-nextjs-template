

import * as Util from "../common/util.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as MainLayout from "../layouts/MainLayout.bs.js";

import '../styles/main.css'
;

function Examples$default(Props) {
  var msg = Props.msg;
  var href = Props.href;
  return React.createElement(MainLayout.make, {
              children: null
            }, Util.ReactStuff.s(msg), React.createElement("a", {
                  href: href,
                  target: "_blank"
                }, Util.ReactStuff.s("`pages/examples.re`")));
}

function getInitialProps(_ctx) {
  return Promise.resolve({
              msg: "This page was rendered with getInitialProps. You can find the source code here: ",
              href: "https://github.com/ryyppy/nextjs-default/tree/master/pages/examples.re"
            });
}

var inject = ( (cls, fn) => cls.getInitialProps = fn );

Curry._2(inject, Examples$default, getInitialProps);

var $$default = Examples$default;

export {
  $$default ,
  $$default as default,
  getInitialProps ,
  inject ,
  
}
/*  Not a pure module */
