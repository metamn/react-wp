/**
 * @flow
 * @relayHash 4608103a20771668e6c055f7b78dc664
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SiteTitleQueryVariables = {||};
export type SiteTitleQueryResponse = {|
  +generalSettings: ?{|
    +title: ?string
  |}
|};
export type SiteTitleQuery = {|
  variables: SiteTitleQueryVariables,
  response: SiteTitleQueryResponse,
|};
*/


/*
query SiteTitleQuery {
  generalSettings {
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "generalSettings",
    "storageKey": null,
    "args": null,
    "concreteType": "GeneralSettings",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SiteTitleQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SiteTitleQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "SiteTitleQuery",
    "id": null,
    "text": "query SiteTitleQuery {\n  generalSettings {\n    title\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '63dfcb3e5253d4f66e6c9f9589420ca6';
module.exports = node;
