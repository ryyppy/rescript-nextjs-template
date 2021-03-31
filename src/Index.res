module P = {
  @react.component
  let make = (~children) => <p className="mb-2"> children </p>
}

let default = () =>
  <div>
    <h1 className="text-3xl font-semibold"> {"What is this about?"->React.string} </h1>
    <P>
      {React.string(` This is a simple template for a Next
      project using ReScript & TailwindCSS.`)}
    </P>
    <h2 className="text-2xl font-semibold mt-5"> {React.string("Quick Start")} </h2>
    <pre>
      {React.string(`git clone https://github.com/rescript-nextjs-template.git my-project
cd my-project
rm -rf .git`)} //github.com/ryyppy/nextjs-default.git my-project
    </pre>
  </div>
