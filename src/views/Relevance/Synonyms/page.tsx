import { useNavigate } from "react-router-dom";
import {
  EuiBasicTableColumn,
  EuiLink,
  EuiPageHeader,
  EuiButtonEmpty,
  EuiSpacer,
  EuiSearchBar,
  EuiBasicTable
} from '@elastic/eui';

import { Synonym, SYNONYMS_LIST } from "./data/data";

export default function Synonyms() {
  const navigate = useNavigate()

  const handleClick = () => (
    navigate('./detail')
  )


  const columns: Array<EuiBasicTableColumn<Synonym>> = [
    {
      field: 'id',
      name: 'Synonym set',
      'data-test-subj': 'idCell',
      render: ((id: Synonym["id"]) => (
        <EuiLink onClick={() => navigate('./detail')}>{id}</EuiLink>
      ))
    },
    {
      name: '',
      actions: [
        {
          name: <>Edit</>,
          description: 'Edit this synonym set',
          icon: 'pencil',
          type: 'icon',
          onClick: handleClick,
          'data-test-subj': 'action-clone',
        },
        {
          name: <>Delete</>,
          description: "Delete this synonym set",
          icon: 'trash',
          color: 'danger',
          type: 'icon',
          isPrimary: true,
          onClick: handleClick,
          'data-test-subj': ({ id }) => `action-delete-${id}`,
        }
      ]

    }
  ]

  const items = SYNONYMS_LIST;

  return (
    <>
      <EuiPageHeader
        pageTitle='Synonyms'
        description='Create and manage your synonym sets'
        rightSideItems={[
          <EuiButtonEmpty
            iconSide='left'
            iconType='help'
          >
            Documentation
          </EuiButtonEmpty>
        ]}
        bottomBorder
      />

      <EuiSpacer />
      <EuiSearchBar />
      <EuiSpacer />

      <EuiBasicTable
        columns={columns}
        items={items}
      />
    </>
  )
}


