import React from "react";
import { GetTodosType } from "../../../hooks/useGetTodos";

import { RenderImage, TableRow } from "../_styled";

export default function TableEachRows({ data }: { data: GetTodosType }) {
  return (
    <TableRow>
      <RenderImage src={data.url} />
    </TableRow>
  );
}
