type Data = Array<{
  menu:
    | "Learning Assignment"
    | "LeetCode"
    | "AWS Study"
    | "AWS Practice"
    | "Linux"
    | "Kubernetes"
    | "Portfolio Work"
    | "Arbitrary Practice"
    | "Arbitrary Study";
  description?: string;
  content: Array<{
    subMenu:
      | "Comments"
      | "Objective"
      | "Requirement"
      | "Notes"
      | "Knowledge Learned"
      | "Concepts Explored"
      | "Concepts Review"
      | "Code"
      | "Images"
      | "Resources"
      | "Commands"
      | "Configuration"
      | "Practice"
      | "Conclusion"
      | "Summary"
      | "The Idea"
      | "Context"
      | "Video";
    items: {
      text?: string[];
      language?:
        | "javascript"
        | "typescript"
        | "python"
        | "c"
        | "c++"
        | "java"
        | "rust"
        | "go"
        | "bash"
        | "powershell"
        | "plaintext"
        | "json"
        | "yaml"
        | "html"
        | "css"
        | "graphql"
        | "sql"
        | "dockerfile";
      code?: string;
      images?: string[];
      video?: string;
    }[];
  }>;
}>;

export default Data;
