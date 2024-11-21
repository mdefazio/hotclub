import { Outlet, useParams, useSearchParams } from "react-router-dom";

export const IndexSample = () => {
  const { foo } = useParams();
  const [urlSearchParams] = useSearchParams();
  const filled = urlSearchParams.get("filled");

  console.log(foo);
  const mom = urlSearchParams.get("your-mom");

  return (
    <div>
      <h2>Start</h2>
      <Outlet />
      <h3>End</h3>
    </div>
  );
};
