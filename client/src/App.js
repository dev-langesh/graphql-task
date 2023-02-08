import logo from "./logo.svg";
import "./App.css";
import GetTaskById from "./components/GetTaskById";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
  NetworkStatus,
  useLazyQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Home /> */}
      <GetTaskById />
    </ApolloProvider>
  );
}

function Home() {
  const GET_ALL_TASKS = gql`
    query GetTasks {
      tasks {
        task_name
        completed
      }

      # task(id: $task_id) {
      #   task_name
      #   _id
      #   completed
      # }
    }
  `;

  // const variables = {
  //   task_id: "63de23a7a325b784e0645e55",
  // };

  const { data, loading, error, networkStatus } = useQuery(GET_ALL_TASKS, {
    pollInterval: 300000,
    notifyOnNetworkStatusChange: true,
  });

  if (error) console.log(error.message);

  if (loading) return <h1>loading</h1>;

  if (networkStatus === NetworkStatus.refetch) {
    return <h1>Refetching</h1>;
  }

  return (
    <div>
      {data.tasks.map((task) => {
        return <h1>{task.task_name}</h1>;
      })}
    </div>
  );
}

export default App;
