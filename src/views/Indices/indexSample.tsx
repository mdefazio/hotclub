import { Outlet, useParams, useSearchParams } from "react-router-dom";

export const IndexSample = () => {
  const { foo } = useParams();
  const [urlSearchParams] = useSearchParams();
  const filled = urlSearchParams.get("filled");

  console.log(foo);
  console.log(urlSearchParams.get("your-mom"));

  return (
    <div>
      Index Sample {foo} {filled === "true" ? "filled" : "not filled"}
      <Outlet />
    </div>
  );
};
