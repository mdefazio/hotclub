import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useNavigate } from "react-router-dom";

const GetStartedPanel = ({
  heading,
  description,
  slug,
}: {
  heading: string;
  description: string;
  slug: string;
}) => {
  const navigate = useNavigate();
  return (
    <EuiPanel hasBorder>
      <EuiTitle size="s">
        <h4>{heading}</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s" color="subdued">
        {description}
      </EuiText>
      <EuiSpacer size="m" />
      <EuiButton style={{ width: "100%" }} onClick={() => navigate(`${slug}`)}>
        Start
      </EuiButton>
    </EuiPanel>
  );
};

export const HomeView = () => {
  console.log("HomeView");
  return (
    <>
      <EuiFlexGroup direction="column">
        <EuiTitle size="l">
          <EuiText>Welcome to Elasticsearch</EuiText>
        </EuiTitle>
      </EuiFlexGroup>
    </>
  );
};
