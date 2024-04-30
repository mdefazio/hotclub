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
        <EuiFlexItem>
          <EuiTitle size="s">
            <h3>Ingest your content</h3>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexGroup>
          <EuiFlexItem>
            <GetStartedPanel
              heading="API"
              description="Add documents programmatically by connecting with the API using your preferred language client."
              slug="./content/api-index/overview"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <GetStartedPanel
              heading="Connectors"
              description="Extract, transform, index and sync data from a third-party data source."
              slug="./content/connectors/overview"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <GetStartedPanel
              heading="Web Crawlers"
              description="Discover, extract, and index searchable content from websites and knowledge bases."
              slug="./content/crawlers/overview"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGroup>
    </>
  );
};
