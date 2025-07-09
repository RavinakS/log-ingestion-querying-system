import React from "react";

import DataTables from "views/admin/tables";
import SignIn from "views/auth/SignIn";

import { MdFormatListBulleted, MdFormatListBulletedAdd } from "react-icons/md";

const routes = [
  {
    name: "All Logs",
    layout: "/admin",
    icon: <MdFormatListBulleted className="h-6 w-6" />,
    path: "list",
    component: <DataTables />,
  },
  {
    name: "Add Log",
    layout: "/admin",
    path: "add-log",
    icon: <MdFormatListBulletedAdd className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
