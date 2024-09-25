import React, { useState } from 'react';
import {
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalHeader,
  EuiModalBody,
  EuiModalHeaderTitle,
  EuiModalFooter,
  EuiButton,
  EuiSpacer,
  useGeneratedHtmlId,
  EuiFieldText
} from '@elastic/eui';
import { useNavigate } from 'react-router-dom';

export const CreateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();
  const closeModal = () => (navigate('/relevance/query-rule-detail'));
  const showModal = () => setIsModalVisible(true);

  const modalTitleId = useGeneratedHtmlId();

  const LABEL = 'Create query rule';

  return (
    <>
      <EuiButton
        iconSide='left'
        iconType='plusInCircle'
        fill
        onClick={showModal}
      >
        {LABEL}
      </EuiButton>
      {isModalVisible &&
        <EuiModal aria-labelledby={modalTitleId} onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle id={modalTitleId}>
              {LABEL}
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiForm>
              <EuiFormRow label="Name">
                <EuiFieldText value="My new query rule" />
              </EuiFormRow>
            </EuiForm>
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButton onClick={closeModal} fill>
              Save
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      }
    </>
  )
}
