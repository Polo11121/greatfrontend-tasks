import { useState } from "react";

type File = {
  id: number;
  name: string;
  children?: File[];
};

const File = ({ data }: { data: File }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!data.children) {
    return (
      <li
        style={{
          fontWeight: "normal",
        }}
      >
        {data.name}
      </li>
    );
  }

  const toggle = () => setIsOpen((prevState) => !prevState);

  const sortedData = data.children.sort((a) => (a.children ? -1 : 1));

  return (
    <li>
      <span style={{ cursor: "pointer" }} onClick={toggle}>
        {data.name} [{isOpen ? "-" : "+"}]
      </span>
      {isOpen && (
        <ul>
          {sortedData.map((child) => (
            <File key={child.id} data={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const FileExplorer2 = ({ data }: { data: File[] }) => {
  const [message] = useState("Hello world");

  const sortedData = data.sort((a) => (a.children ? -1 : 1));

  return (
    <div>
      <h1>{message}</h1>
      <ul>
        {sortedData.map((file) => (
          <File key={file.id} data={file} />
        ))}
      </ul>
    </div>
  );
};
