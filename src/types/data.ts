type Data = Array<{
  title:
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
    contentTitle:
      | "Comments"
      | "Objective"
      | "Requirement"
      | "Notes"
      | "Knowledge Learned"
      | "Concepts Explored"
      | "Code"
      | "Images";
    text?: string[];
    code?: {
      description?: string[];
      language:
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
      text: string;
    }[];
    images?: string[];
  }>;
}>;

export default Data;
