open Util.ReactStuff;

type props = {
  msg: string,
  href: string,
};

let default = (props: props) =>
  <div>
    props.msg->s
    <a href={props.href} target="_blank"> "`pages/examples.re`"->s </a>
  </div>;

let getServerSideProps: Next.GetServerSideProps.t(props, {.}) =
  _ctx => {
    let props = {
      msg: "This page was rendered with getServerSideProps. You can find the source code here: ",
      href: "https://github.com/ryyppy/nextjs-default/tree/master/pages/examples.re",
    };
    Js.Promise.resolve({"props": props});
  };
