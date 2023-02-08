import logo from "./logo.svg";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

function Home() {
  const GET_ALL_TASKS = gql`
    query GetTasks($task_id: String) {
      tasks {
        task_name
        completed
      }

      task(id: $task_id) {
        task_name
        _id
        completed
      }
    }
  `;

  const variables = {
    task_id: "63de23a7a325b784e0645e55",
  };

  const { data, loading, error } = useQuery(GET_ALL_TASKS, {
    variables,
    pollInterval: 10000,
  });

  console.log(data);

  if (error) console.log(error.message);

  return <div>home</div>;
}

export default App;
