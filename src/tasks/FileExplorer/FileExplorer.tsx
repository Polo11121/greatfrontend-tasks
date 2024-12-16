import { useState } from "react";

type File = {
  id: number;
  name: string;
  children?: File[];
};

export default function FileExplorer({ data }: { data: File[] }) {
  const [message] = useState("Hello world");

  return (
    <div>
      <h1>{message}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
