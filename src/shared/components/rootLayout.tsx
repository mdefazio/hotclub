import { PageWrapper } from "./pageWrapper";

type RootLayoutProps = {
  children: React.ReactNode;
  mode: "stack" | "serverless";
};
export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  mode = "serverless",
}) => {
  return <PageWrapper mode={mode}>{children}</PageWrapper>;
};
