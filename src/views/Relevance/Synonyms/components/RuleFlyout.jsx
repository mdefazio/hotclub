import React, { useState, useCallback } from "react";
import {
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiBadge,
  EuiComboBox,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFlexGroup,
  EuiFormRow,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiHealth,
  EuiFlexItem,
} from "@elastic/eui";

import { TermsList } from "./TermsList";

export const RuleFlyout = ({ closeFlyout, id }) => {
  const [options, setOptions] = useState([]);
  const [isInvalid, setInvalid] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [termExists, setTermExists] = useState(false);

  const isValid = (value) => {
    // Search for existing term
    const exists = options.find((opt) => opt === value);
    // Only allow letters. No spaces, numbers, or special characters.
    // return value.match(/^[a-zA-Z]/) !== null && exists === undefined;
    if (exists !== undefined) {
      setTermExists(true);
      return;
    } else {
      setTermExists(false);
      return value.match(/^[a-zA-Z]/) !== null;
    }
  };
  const onCreateOption = (searchValue) => {
    if (!isValid(searchValue)) {
      // Return false to explicitly reject the user's input.
      return false;
    }
    setIsSaved(false);
    const newOption = searchValue.toLowerCase();

    // Select the option.
    setOptions([...options, newOption]);
  };

  const onSearchChange = (searchValue) => {
    if (!searchValue) {
      setInvalid(false);
      return;
    }
    setInvalid(!isValid(searchValue));
  };

  const onChange = (options) => {
    setOptions(options);
    setInvalid(false);
  };

  const sortOptions = () => {
    const newArray = options.toSorted();
    setOptions(newArray);
  };

  const removeItem = (term) => {
    const index = options.findIndex((opt) => opt === term);
    if (index !== -1) {
      const newArray = options.filter((item) => item !== term);
      setOptions(newArray);
      setIsSaved(false);
    }
  };

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(function() {
      setIsSaved(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <EuiFlyout onClose={() => closeFlyout(options)}>
      <EuiFlyoutHeader hasBorder>
        <EuiTitle size="m">
          <h2>Synonym rule</h2>
        </EuiTitle>
        <EuiSpacer size="m" />
        <EuiFlexGroup gutterSize="s" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiText size="s" color="subdued">
              <p>
                Rule ID: <strong>rule_27cjk2-2kM</strong>
              </p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonIcon display="empty" iconType="copy" color="text" />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlyoutHeader>
      <EuiFlyoutBody>
        <EuiPanel paddingSize="none" color="plain" hasShadow={false}>
          <EuiFlexGroup
            gutterSize="s"
            alignItems="center"
            justifyContent="spaceBetween"
          >
            <EuiFlexItem>
              <EuiFormRow
                label="Add terms to list"
                helpText={
                  termExists
                    ? "Term already present in rule"
                    : "This is the help text"
                }
              >
                <EuiComboBox
                  noSuggestions
                  placeholder="New term"
                  //   options={[]}
                  onCreateOption={onCreateOption}
                  onChange={onChange}
                  onSearchChange={onSearchChange}
                  //   customOptionText="Add {searchValue} as a term"
                  isInvalid={isInvalid}
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFlexGroup alignItems="center">
                <EuiText size="s" color="subdued">
                  <p>
                    {options.length} term{options.length === 1 ? "" : "s"}
                  </p>
                </EuiText>

                <EuiButton size="s" color="text" onClick={sortOptions}>
                  Sort A-Z
                </EuiButton>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiSpacer size="m" />
          <EuiPanel color="subdued" paddingSize="m" style={{ height: "50%" }}>
            <TermsList items={options} removeItem={removeItem} />
          </EuiPanel>
          <EuiSpacer />
          <EuiFlexGroup
            gutterSize="l"
            alignItems="center"
            direction="rowReverse"
          >
            <EuiButton
              fill
              onClick={handleSave}
              disabled={isSaved}
              isLoading={isLoading}
            >
              Save
            </EuiButton>
            {!isSaved && (
              <EuiButtonEmpty iconSide="left" iconType="refresh">
                Reset changes
              </EuiButtonEmpty>
            )}

            <EuiHealth color={isSaved ? "subdued" : "primary"}>
              {isSaved ? "Synonym rule saved" : "Unsaved changes"}
            </EuiHealth>
          </EuiFlexGroup>
        </EuiPanel>
      </EuiFlyoutBody>
      {/* <EuiFlyoutFooter>
              <EuiFlexGroup justifyContent="spaceBetween">
                <EuiFlexItem>
                  <span>
                    <EuiButtonEmpty onClick={closeFlyout}>Close</EuiButtonEmpty>
                  </span>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <span>
                    <EuiButton onClick={closeFlyout}>Save</EuiButton>
                  </span>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlyoutFooter> */}
    </EuiFlyout>
  );
};
