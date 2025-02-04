import { EuiFlyout } from '@elastic/eui';
import React, { useState } from 'react';

interface RuleFlyoutProps {
  closeFlyout: any,
}
export const RuleFlyout = ({ closeFlyout }: RuleFlyoutProps) => {
  return (
    <EuiFlyout
      onClose={closeFlyout}
    >
      This is the flyout
    </EuiFlyout>
  )
}
