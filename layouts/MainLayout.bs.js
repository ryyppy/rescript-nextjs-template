

import * as Util from "../common/util.bs.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as React from "react";
import * as Link from "next/link";

function MainLayout$Navigation(Props) {
  return React.createElement("nav", {
              className: "p-2 h-12 flex border-b border-gray-200 justify-between items-center text-sm"
            }, React.createElement(Link.default, {
                  href: "/",
                  children: React.createElement("a", {
                        className: "flex items-center w-1/3"
                      }, React.createElement("img", {
                            className: "w-5",
                            src: "/static/zeit-black-triangle.svg"
                          }), React.createElement("span", {
                            className: "text-xl ml-2 align-middle font-semibold"
                          }, Util.ReactStuff[/* s */0]("Next"), React.createElement("span", {
                                className: "text-orange-800"
                              }, Util.ReactStuff[/* s */0]("RE"))))
                }), React.createElement("div", {
                  className: "flex w-2/3 justify-end"
                }, React.createElement(Link.default, {
                      href: "/",
                      children: React.createElement("a", {
                            className: "px-3"
                          }, Util.ReactStuff[/* s */0]("Bindings"))
                    }), React.createElement(Link.default, {
                      href: "/examples",
                      children: React.createElement("a", {
                            className: "px-3"
                          }, Util.ReactStuff[/* s */0]("Examples"))
                    }), React.createElement("a", {
                      className: "px-3",
                      href: "https://github.com/ryyppy/nextjs-default",
                      target: "_blank"
                    }, Util.ReactStuff[/* s */0]("Github"))));
}

var Navigation = /* module */Block.localModule(["make"], [MainLayout$Navigation]);

function MainLayout(Props) {
  var children = Props.children;
  var minWidth = {
    minWidth: "20rem"
  };
  return React.createElement("div", {
              className: "max-w-5xl text-gray-900 font-base",
              style: minWidth
            }, React.createElement(MainLayout$Navigation, { }), React.createElement("main", {
                  className: "mt-4 mx-4"
                }, children));
}

var Link$1 = 0;

var make = MainLayout;

export {
  Link$1 as Link,
  Navigation ,
  make ,
  
}
/* react Not a pure module */
