import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext<(message: string) => void>(() => {});

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toastMessage && <div className="custom-toast">{toastMessage}</div>}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
