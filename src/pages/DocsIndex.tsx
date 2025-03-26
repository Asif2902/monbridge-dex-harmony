
import { Outlet } from "react-router-dom";
import { DocsLayout } from "@/components/docs/DocsLayout";

const DocsIndex = () => {
  return (
    <DocsLayout>
      <Outlet />
    </DocsLayout>
  );
};

export default DocsIndex;
