import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({
  children,
  ...props
}: ContainerProps): JSX.Element => {
  return (
    <main
      className="
        flex flex-col
        w-full h-full
        
      "
      {...props}
    >
      {children}
    </main>
  );
};
