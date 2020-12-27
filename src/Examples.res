type props = {
  msg: string,
  href: string,
}

let default = (props: props) =>
  <div>
    {React.string(props.msg)}
    <a href=props.href target="_blank"> {React.string("`src/Examples.res`")} </a>
  </div>

let getServerSideProps = _ctx => {
  let props = {
    msg: "This page was rendered with getServerSideProps. You can find the source code here: ",
    href: "https://github.com/ryyppy/nextjs-default/tree/master/src/Examples.res",
  }
  Js.Promise.resolve({"props": props})
}
