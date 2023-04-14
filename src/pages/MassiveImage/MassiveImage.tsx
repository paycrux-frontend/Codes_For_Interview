import React from "react";
import useGetTodos from "../../hooks/useGetTodos";

import { LandingContainer, TableContainer } from "./_styled";

import { TableEachRows } from "./components";

export default function MassiveImage() {
  const { data } = useGetTodos();

  return (
    <LandingContainer>
      <TableContainer>
        {data
          ? data.map((i, idx) => (
              <TableEachRows data={data[idx]} key={i.title} />
            ))
          : ""}
      </TableContainer>
    </LandingContainer>
  );
}
