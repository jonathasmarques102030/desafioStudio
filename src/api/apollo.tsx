import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

export const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
  cache: new InMemoryCache(),
});

type Props = {
  children: ReactElement
}

const ABApolloClient = ({children} : Props) => {
  return (<ApolloProvider client={client}>
      {children}
      </ApolloProvider>)

}

export default ABApolloClient
