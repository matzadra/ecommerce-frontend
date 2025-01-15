import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const createApolloClient = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/graphql",
    credentials: "same-origin", // Inclui cookies automaticamente, se necessário
  });

  const authLink = setContext((_, { headers }) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined", // Habilita o modo SSR
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
