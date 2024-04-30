import { PageWrapper } from "./pageWrapper";

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <PageWrapper>{children}</PageWrapper>;
};
