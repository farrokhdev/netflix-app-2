import { useEffect } from "react";
import { HomeSec } from "./HomeStyle";
import { ChartBox, InfoBoxs, Swidget } from "components";
import { useHomeContext, useUserContext } from "contexts";
import { UserApi } from "contexts/UserContext/apiCall";

export const Home = () => {
  const { userMonthly, userDaily, userYearly } = useHomeContext();
  const { users, dispatch } = useUserContext();

  useEffect(() => {
    UserApi(dispatch);
  }, [dispatch]);

  return (
    <HomeSec>
      <InfoBoxs
        userMonthly={userMonthly}
        userDaily={userDaily}
        userYearly={userYearly}
      />
      <ChartBox data={userMonthly} title="user per month" />
      <Swidget newUsers={users} />
    </HomeSec>
  );
};
