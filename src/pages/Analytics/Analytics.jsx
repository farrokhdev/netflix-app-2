import { ChartBox } from "components";
import { PageSec } from "ConstComponents";
import { chartData } from "FakeData/ChartData";

export const Analytics = () => {
  return (
    <PageSec>
      <ChartBox chartData={chartData} title="user Analytics" />
    </PageSec>
  );
};
