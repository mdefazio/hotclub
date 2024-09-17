import { useState } from 'react';
import {
  EuiButton,
  EuiFacetGroup,
  EuiFacetButton,
  EuiIcon,
  EuiSpacer,
  EuiText,
  EuiTitle
} from '@elastic/eui';

interface Rule {
  id: string,
  label: string,
  quantity: number,
}

export const QueryRuleLeftNav = () => {
  const [selectedOptionId, setSelectedOptionId] = useState("facet0");

  const facetClicked = (id: string) => {
    setSelectedOptionId(id);
  };

  const list: Array<Rule> = [
    {
      id: 'facet0',
      label: 'rule_id_28102840',
      quantity: 0,
    },
  ];

  const facets = () => {
    return (
      <>
        {list.map((facet) => {
          let iconNode;
          iconNode = <EuiIcon type="dot" color="text" />;

          return (
            <EuiFacetButton
              key={facet.id}
              id={`${facet.id}`}
              quantity={facet.quantity}
              icon={iconNode}
              isSelected={selectedOptionId === facet.id}
            >
              {facet.label}
            </EuiFacetButton>
          );
        })}
      </>
    );
  };

  return (
    <>
      <EuiTitle size="xs"><h3>Rules</h3></EuiTitle>
      <EuiText size="s" color="subdued"><p>Rule priority is based on order</p></EuiText>
      <EuiSpacer size="m" />
      <span>

        <EuiButton
          size='s'
          color='text'
          iconSide='left'
          iconType="plusInCircle"
          onClick={() => { }}
        >Add rule</EuiButton>
      </span>
      <EuiSpacer size="s" />
      <EuiFacetGroup>
        {facets()}
      </EuiFacetGroup>
    </>

  )
}
