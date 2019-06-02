

import * as Util from "../common/util.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as MainLayout from "../layouts/MainLayout.bs.js";

import '../styles/main.css'
;

function Examples$default(Props) {
  var name = Props.name;
  return React.createElement(MainLayout.make, {
              children: Util.ReactStuff[/* s */0](name)
            });
}

function getInitialProps(_ctx) {
  return Promise.resolve({
              name: "M. Mustermann"
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
