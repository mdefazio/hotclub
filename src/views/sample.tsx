type SampleProps = {
  title: string;
};
export const SampleView: React.FC<SampleProps> = ({ title }) => {
  return <h1>{title}</h1>;
};
