import {
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiPageBody,
  EuiPageHeader,
  EuiSpacer,
  EuiDragDropContext,
  EuiDroppable,
  EuiDraggable,
  euiDragDropReorder,
} from '@elastic/eui';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Rule from './components/Rule';

interface RuleObjectProps {
  ruleId: string | number,
  criteria: any
}

let ruleListArray = [
  {
    "ruleId": "first_rule",
    "criteria": ["match", "fuzzy"]
  },
  {
    "ruleId": "second_rule",
    "criteria": [],
  },
  {
    "ruleId": "third_rule",
    "criteria": ["match"],

  }
]

export default function QueryRuleDetail() {
  const [hasChanges, setHasChanges] = useState(true);
  const [savingChanges, setSavingChanges] = useState(false);
  const [ruleList, setRuleList] = useState(ruleListArray)
  const navigate = useNavigate();

  const makeChanges = () => setHasChanges(true);

  const addRule = () => {
    let id = Math.random().toString(36).substring(2, 9);
    let newRule = {
      ruleId: id,
      criteria: []
    };
    setRuleList([...ruleList, newRule]);
  }

  const onDragEnd = ({ source, destination }: any) => {
    if (source && destination) {
      const items = euiDragDropReorder(ruleList, source.index, destination.index);

      setRuleList(items);
    }
  };

  const handleDelete = () => {
  }

  const saveChanges = () => {
    setSavingChanges(true);
    console.log("start");
    setTimeout(() => {
      console.log("stop");
      setSavingChanges(false);
      setHasChanges(false);
    }, 1000)
  }

  return (
    <>
      <EuiPageHeader
        pageTitle='My new query rule'
        description='Create and manage your query rules'
        restrictWidth
        rightSideGroupProps={{
          gutterSize: "s"
        }}
        rightSideItems={[
          <EuiButtonIcon
            display='base'
            iconType="boxesHorizontal"
            color='text'
            size='m'
          />,
          <EuiButton
            isLoading={savingChanges}
            color={hasChanges ? 'success' : 'text'}
            fill={hasChanges}
            iconType={hasChanges ? '' : 'check'}
            iconSide="left"
            onClick={hasChanges ? saveChanges : makeChanges}
          >
            {hasChanges ? 'Save changes' : 'Rule saved'}
          </EuiButton>,
          <EuiButton color='text'>
            Open in Playground
          </EuiButton>,
        ]}
        breadcrumbs={[
          {
            text: (
              <>
                <EuiIcon size="s" type="arrowLeft" />{` `}View all
              </>
            ),
            color: 'primary',
            'aria-current': false,
            onClick: () => (navigate('/relevance/query-rules')),
          },
        ]}
        bottomBorder
      />
      <EuiPageBody paddingSize="none" restrictWidth>
        <EuiSpacer />
        <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
          <EuiFlexItem grow={false}>
            <span>
              <EuiButton
                iconSide='left'
                iconType="plusInCircle"
                onClick={addRule}
              >Add rule</EuiButton>
            </span>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFieldSearch />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
        <EuiFlexGroup direction='column' gutterSize='s'>

          <EuiDragDropContext onDragEnd={onDragEnd}>
            <EuiPanel color='subdued' paddingSize="s">
              <EuiDroppable droppableId='RULE_LIST' spacing='none'>
                {ruleList.map((rule, index) => (
                  <EuiDraggable
                    spacing="s"
                    key={rule.ruleId}
                    index={index}
                    draggableId={rule.ruleId}
                  // customDragHandle={true}
                  // hasInteractiveChildren={true}
                  >
                    {(provided) => (
                      <EuiPanel color="plain" hasBorder={false} hasShadow={false} paddingSize='xs'>
                        <EuiFlexGroup gutterSize='s' alignItems='center'>
                          <EuiFlexItem grow={false}>
                            <EuiPanel
                              color="transparent"
                              paddingSize="m"
                              {...provided.dragHandleProps}
                              aria-label="Drag Handle"
                            >
                              <EuiIcon type="grab" />
                            </EuiPanel>
                          </EuiFlexItem>
                          <EuiFlexItem>
                            <Rule data={rule} />
                          </EuiFlexItem>

                          {/*   </EuiFlexGroup> */}
                          {/* </EuiPanel> */}
                          <EuiFlexItem grow={false}>
                            <EuiButtonIcon
                              size='m'
                              display="empty"
                              color="danger"
                              iconType='trash'
                              onClick={handleDelete}
                            />
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiPanel>
                    )}
                  </EuiDraggable>
                ))}
              </EuiDroppable>
            </EuiPanel>
          </EuiDragDropContext>
        </EuiFlexGroup>
      </EuiPageBody>
    </>
  )

}

