import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PruductList } from "./pruduct/PruductList";
import { PruductCreate } from "./pruduct/PruductCreate";
import { PruductEdit } from "./pruduct/PruductEdit";
import { PruductShow } from "./pruduct/PruductShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={
          "123456789012345678901234עםוכםfgiyfiyfiyfiyfiyfiyfiyfiעכןטעםעםעםעםועםועוםעעעע5678901234567890124567890000000"
        }
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Pruduct"
          list={PruductList}
          edit={PruductEdit}
          create={PruductCreate}
          show={PruductShow}
        />
      </Admin>
    </div>
  );
};

export default App;
