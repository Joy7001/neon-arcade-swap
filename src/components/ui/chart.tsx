
import * as React from "react"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { cn } from "@/lib/utils"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: any = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'white'
      }
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    y: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


interface Props {
  className?: string
}

const someCondition = true;
const otherCondition = false;
const anotherCondition = true;

export function Chart({
  className,
  ...props
}: Props) {
  return (
    <div className={cn(
      className
    )}>
      <Bar options={options} data={data} />
      <div className="mt-2 text-sm text-muted-foreground">
        {/* Example of className usage with cn */}
        <div className={cn("flex items-center")}>
          <span className={cn("mr-2")}>Legend:</span>
          <div className={cn("flex items-center")}>
            <span className={cn("h-2.5 w-2.5 rounded-full bg-red-500 mr-1")}></span>
            <span>Dataset 1</span>
          </div>
          <div className={cn("flex items-center ml-4")}>
            <span className={cn("h-2.5 w-2.5 rounded-full bg-blue-500 mr-1")}></span>
            <span>Dataset 2</span>
          </div>
          {/* Demonstrating conditional className */}
          <div
            className={cn(
              "h-2.5 w-2.5",
              someCondition ? "w-1" : "",
              otherCondition ? "w-0 border-[1.5px] border-dashed bg-transparent" : "",
              anotherCondition ? "my-0.5" : ""
            )}
          ></div>
        </div>
      </div>
    </div>
  )
}
