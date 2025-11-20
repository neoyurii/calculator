import { Line } from "react-chartjs-2";
import { ResultData, ResultResponse } from "../Calculator/Interfaces";

export default function ResultChart() {
  return (
    <Line
      datasetIdKey="id"
      data={{
        labels: ["Jun", "Jul", "Aug"],
        datasets: [
          {
            id: 1,
            label: "",
            data: [5, 6, 7],
          },
          {
            id: 2,
            label: "",
            data: [3, 2, 1],
          },
        ],
      }}
    />
  );
}
