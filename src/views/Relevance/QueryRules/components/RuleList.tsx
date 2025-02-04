import React, { useState } from 'react';
import {
	EuiDragDropContext,
	EuiDraggable,
	EuiDroppable,
	EuiFlexGroup,
	EuiFlexItem,
	EuiIcon,
	EuiPanel,
	EuiSpacer,
	EuiText,
	euiDragDropReorder,
} from '@elastic/eui';

import Rule from './Rule';
import { RuleType } from '../data/types';


export const RuleList = ({ ruleListArray, showFlyout }: { ruleListArray: Array<RuleType>, showFlyout: Function }) => {

	const [ruleListItems, setRuleListItems] = useState(ruleListArray)
	const onDragEnd = ({ source, destination }: any) => {
		if (source && destination) {
			const items = euiDragDropReorder(ruleListItems, source.index, destination.index);
			setRuleListItems(items);
		}
	};

	return (
		<EuiDragDropContext onDragEnd={onDragEnd}>
			<EuiPanel color='subdued' paddingSize="s" hasShadow={false} >
				<EuiDroppable droppableId='RULE_LIST' spacing='none'>
					{ruleListArray.map((rule, index) => (
						<EuiDraggable
							spacing="s"
							key={rule.ruleId}
							index={index}
							draggableId={rule.ruleId}
						>
							{(provided) => (
								<EuiPanel color="plain" hasBorder={false} hasShadow={false} paddingSize='s'>
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
											<Rule rule={rule} showFlyout={showFlyout} />
										</EuiFlexItem>
									</EuiFlexGroup>
								</EuiPanel>
							)}
						</EuiDraggable>
					))}
				</EuiDroppable>
			</EuiPanel>
		</EuiDragDropContext>
	)
}
