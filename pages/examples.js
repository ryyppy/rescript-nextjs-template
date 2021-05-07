import ExamplesRes from "src/Examples.mjs";

// This can be re-exported as is (no Fast-Refresh issues)
export { getServerSideProps } from "src/Examples.mjs";

// Note:
// We need to wrap the make call with
// a Fast-Refresh conform function name,
// (in this case, uppercased first letter)
//
// If you don't do this, your Fast-Refresh will
// not work!
export default function Examples(props) {
  return <ExamplesRes {...props}/>;
}
