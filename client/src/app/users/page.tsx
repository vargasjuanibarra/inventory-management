"use client"

import { useGetUsersQuery } from "@/state/api";
import React from "react";
import Header from "../(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type Props = {};

const columns: GridColDef[] = [
  { field: "userId", headerName: "Id", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 300 },
];

const Users = (props: Props) => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  if (isLoading) {
    return <div className="py-4">Loading.....</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-2 !text-gray-700"
      ></DataGrid>
    </div>
  );
};

export default Users;
