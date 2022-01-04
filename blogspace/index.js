/**
 * Challenge:
 *
 * Send a request to the JSON Placeholder API using `fetch`
 * URL:
 *
 * Documentation: https://jsonplaceholder.typicode.com/
 *
 * Log the response data to the console
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

/**
Challenge: 

Fetch a list of todos from the JSON Placeholder API:

BaseURL: https://apis.scrimba.com/jsonplaceholder/
Endpoint: /todos

This time however, explicitly set the request method to "GET"
*/

fetch("https://apis.scrimba.com/jsonplaceholder/todos", { method: "GET" })
  .then((response) => response.json())
  .then((data) => console.log(data));
