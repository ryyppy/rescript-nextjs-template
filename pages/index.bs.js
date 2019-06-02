

import * as Util from "../common/util.bs.js";
import * as React from "react";
import * as MainLayout from "../layouts/MainLayout.bs.js";

require('../styles/main.css')
;

function Index(Props) {
  return React.createElement(MainLayout.make, {
              children: React.createElement("h1", undefined, Util.ReactStuff[/* s */0]("next-default"))
            });
}

var Link = 0;

var make = Index;

var $$default = Index;

export {
  Link ,
  make ,
  $$default ,
  $$default as default,
  
}
/*  Not a pure module */
