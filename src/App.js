import './App.css';
import MyData from "./components/MyData";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


function App() {
  const  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <MyData/>
    </QueryClientProvider>
  );
}

export default App;
