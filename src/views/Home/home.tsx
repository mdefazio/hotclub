import { useState } from "react";
import {
  EuiButton,
  EuiButtonEmpty,
  EuiCard,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiListGroup,
  EuiListGroupItem,
  EuiPanel,
  EuiPopover,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { MOCK_MORE_TO_DO } from "./data/moreToDo.mock";
import { MetricHeader } from "./components";
import { IndexList } from "./components/indexList";

export const HomeView = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePopoverItemClick = (item: string) => {
    console.log(`Clicked on ${item}`);
  };

  return (
    <EuiFlexGroup
      direction="column"
      alignItems="flexStart"
      style={{ width: "100%" }}
    >
      <EuiFlexGroup justifyContent="spaceBetween" style={{ width: "100%" }}>
        <EuiFlexItem>
          <EuiTitle size="l">
            <EuiText>Welcome to Search</EuiText>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <div>
            <EuiPopover
              ownFocus
              isOpen={isPopoverOpen}
              closePopover={() => setIsPopoverOpen(false)}
              button={
                <EuiButton
                  fill
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  iconType="arrowDown"
                  iconSide="right"
                >
                  Create
                </EuiButton>
              }
            >
              <EuiListGroup flush size="s">
                <EuiListGroupItem
                  onClick={() => handlePopoverItemClick("Index")}
                  iconType="database"
                  label="Create an index"
                />
                <EuiListGroupItem
                  onClick={() => handlePopoverItemClick("Connector")}
                  iconType="logstashInput"
                  label="Create a connector"
                />
                <EuiListGroupItem
                  onClick={() => handlePopoverItemClick("Web Crawler")}
                  iconType="globe"
                  label="Create a web crawler"
                />
              </EuiListGroup>
            </EuiPopover>
          </div>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexItem style={{ width: "100%" }}>
        <MetricHeader />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiButtonEmpty iconType="console" color="primary">
          Quickly get started in Console
        </EuiButtonEmpty>
      </EuiFlexItem>
      <EuiFlexItem style={{ width: "100%" }}>
        <EuiFlexGroup direction="row">
          <EuiFlexItem grow={1}>
            <IndexList />
          </EuiFlexItem>
          <EuiFlexItem grow={2}>
            <EuiPanel hasBorder>
              <EuiTitle size="xs">
                <EuiText>Do more with Search</EuiText>
              </EuiTitle>
              <EuiSpacer size="l" />
              <EuiFlexGrid columns={2} gutterSize="l">
                {MOCK_MORE_TO_DO.map((item, index) => (
                  <EuiFlexItem>
                    <EuiCard
                      display="subdued"
                      layout="horizontal"
                      icon={
                        <EuiIcon color="subdued" size="l" type={item.icon} />
                      }
                      title={item.title}
                      titleSize="xs"
                      description={item.description}
                      onClick={() => alert(item._instructions)}
                    />
                  </EuiFlexItem>
                ))}
              </EuiFlexGrid>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
