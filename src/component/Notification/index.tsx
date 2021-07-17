import React from "react";
import { ReactNode } from "react";
import ReactNotification, { store } from "react-notifications-component";

import "./index.scss";

export default function Notification() {
  return <ReactNotification />;
}

interface INotificationProps {
  title: ReactNode;
  message: ReactNode;
  type?: "success" | "danger" | "warning" | "info";
}

export const addNotification = ({
  title,
  message,
  type = "success",
}: INotificationProps) => {
  store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    dismiss: {
      duration: 10000,
      onScreen: true,
    },
  });
};
