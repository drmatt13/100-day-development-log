import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // AWS Practice
  {
    menu: "AWS Practice",
    content: [
      {
        subMenu: "Comments",
        items: [{ text: ["text1"] }],
      },
    ],
  },
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
          { text: ["text1"] },
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
    description: "Description",
    content: [
      {
        subMenu: "x. Problem" as "Objective",
        items: [
          {
            text: ["text1", "text2"],
            language: "typescript",
            code: ``,
          },
        ],
      },
    ],
  },
  // Portfolio Work
  {
    menu: "Portfolio Work",
    content: [
      {
        subMenu: "Comments",
        items: [{ text: ["text1"] }],
      },
    ],
  },
];

const Day = () => {
  return <DayLayout data={data} />;
};

export default Day;
