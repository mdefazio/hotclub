import { useRouteError } from "react-router-dom";

import {
  EuiText,
  EuiPanel,
  EuiTitle,
} from '@elastic/eui';


export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <EuiPanel>
      <EuiTitle>
        <h1>Oops!</h1>
      </EuiTitle>
      <EuiText>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </EuiText>
    </EuiPanel>
  );
}
