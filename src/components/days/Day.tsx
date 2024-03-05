import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // LeetCode
  {
    title: "LeetCode",
    description: "Problem NAME",
    content: [
      {
        contentTitle: "Code",
        code: [
          {
            language: "typescript",
            text: `function twoSum(nums: number[], target: number): number[] {}`,
          },
        ],
      },
    ],
  },
  // AWS Practice
  {
    title: "AWS Practice",
    content: [
      {
        contentTitle: "Comments",
        text: [`Comment`],
      },
    ],
  },
  // Learning Assignment
  {
    title: "Learning Assignment",
    description: "Description",
    content: [
      {
        contentTitle: "Objective",
        text: ["Objective"],
      },
      {
        contentTitle: "Requirement",
        text: ["Requirement"],
      },
      {
        contentTitle: "Knowledge learned",
        text: ["Knowledge learned"],
        code: [
          {
            language: "c",
            description: [""],
            text: `
            
            `,
          },
        ],
      },
    ],
  },
  // Portfolio Work
  {
    title: "Portfolio Work",
    content: [
      {
        contentTitle: "Comments",
        text: ["Comment"],
      },
    ],
  },
];

const Day = () => {
  return <DayLayout data={data} />;
};

export default Day;
