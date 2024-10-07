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
import { Form, useNavigate } from 'react-router-dom';

export const CreateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();
  const closeModal = () => (navigate('/relevance/query-rules/query-rule-detail'));
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
            <Form method='post'>
              <EuiForm>
                <EuiFormRow label="Name">
                  <EuiFieldText
                    value="My new query rule"
                    name="id"
                  />
                </EuiFormRow>
                <EuiButton type="submit" fill>
                  Save
                </EuiButton>
              </EuiForm>
            </Form>
          </EuiModalBody>

        </EuiModal>
      }
    </>
  )
}
