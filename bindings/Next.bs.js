

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";

var Link = /* module */Block.localModule([], []);

var Router = /* module */Block.localModule([], []);

var Head = /* module */Block.localModule([], []);

var $$Error = /* module */Block.localModule([], []);

function Make(Page) {
  var inject = ( (cls, fn) => cls.getInitialProps = fn );
  Curry._2(inject, Page[/* make */1], Page[/* getInitialProps */0]);
  var $$default = Page[/* make */1];
  return /* module */Block.localModule([
            "inject",
            "default"
          ], [
            inject,
            $$default
          ]);
}

var InitialPropsPage = /* module */Block.localModule(["Make"], [Make]);

export {
  Link ,
  Router ,
  Head ,
  $$Error ,
  InitialPropsPage ,
  
}
/* No side effect */
