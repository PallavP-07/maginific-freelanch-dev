"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = (props) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      position="bottom-right" // Default position
      duration={4000} // Default toast duration
      closeButton
      toastOptions={{
        classNames: {
          toast: `
            group toast
            group-[.toaster]:bg-background 
            group-[.toaster]:text-foreground 
            group-[.toaster]:border-border 
            group-[.toaster]:shadow-lg 
            rounded-lg 
            transition-all
            data-[state=open]:animate-slideInRight
            data-[state=closed]:animate-slideOutRight
          `,
          description: "group-[.toast]:text-muted-foreground text-sm",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground rounded-md px-3 py-1 hover:opacity-90 transition",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground rounded-md px-3 py-1 hover:opacity-90 transition",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
