import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // Learning Assignment
  {
    menu: "Learning Assignment",
    description: "Description",
    content: [
      {
        subMenu: "Objective",
        items: [{ text: ["Objective"] }],
      },
      {
        subMenu: "Requirement",
        items: [{ text: ["Requirement"] }],
      },
      {
        subMenu: "Knowledge Learned",
        items: [
          { text: ["text1", "text2"] },
          {
            language: "c",
            code: `
            
            `,
          },
        ],
      },
    ],
  },
  // LeetCode
  {
    menu: "LeetCode",
    description: "Problem NAME",
    content: [
      {
        subMenu: "Code",
        items: [
          {
            language: "typescript",
            code: `function twoSum(nums: number[], target: number): number[] {}`,
          },
        ],
      },
    ],
  },
  // AWS Practice
  {
    menu: "AWS Practice",
    description: "AWS SAM",
    content: [
      {
        subMenu: "Comments",
        items: [{ text: ["text1", "text2"] }],
      },
    ],
  },
  // Portfolio Work
  {
    menu: "Portfolio Work",
    content: [
      {
        subMenu: "Comments",
        items: [{ text: ["text1", "text2"] }],
      },
    ],
  },
];

const Day = () => {
  return <DayLayout data={data} />;
};

export default Day;
