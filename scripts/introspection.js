#!/usr/bin/env node

// This file is copied from graphql_ppx and adapted to comply to Prismic's GraphQL access
// (namely switching from 'post' to 'get' and adding the 'Prismic-ref' header correctly

var request = require("request");
var fs = require("fs");
var introspectionQuery = `
query IntrospectionQuery {
    __schema {
      queryType { name }
      mutationType { name }
      subscriptionType { name }
      types {
        ...FullType
      }
      directives {
        name
        description
        locations
        args {
          ...InputValue
        }
      }
    }
  }
  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  fragment InputValue on __InputValue {
    name
    description
    type { ...TypeRef }
    defaultValue
  }
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }`;

const api = "https://leiwand-kochen.prismic.io/api";
const endpoint = "https://leiwand-kochen.prismic.io/graphql";

request.get(api, function(err, res, body) {
  const prismicRef = JSON.parse(body).refs.find((r) => r.isMasterRef === true).ref;

  const requestOptions = {
    //json: true,
    qs: { query: introspectionQuery},
    headers: { "user-agent": "node.js", 'Prismic-ref': prismicRef}
  };
  request.get(endpoint, requestOptions, function(error, response, body) {
    if (error) {
      console.error("Could not send introspection query: ", error);
      process.exit(1);
    }

    if (response.statusCode !== 200) {
      console.error("Non-ok status code from API: ", response.statusCode, response.statusMessage);
      process.exit(1);
    }

    var jsonBody = JSON.parse(body);

    var result = JSON.stringify(jsonBody, null, 4);

    fs.writeFileSync("graphql_schema.json", result, { encoding: "utf-8" });
  });
});
