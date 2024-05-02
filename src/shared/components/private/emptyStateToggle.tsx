import { useContext, useEffect } from "react";
import { EuiButtonIcon } from "@elastic/eui";

import { HotClubContext } from "../../../utils/hotclubProvider";

type EmptyStateToggleProps = {
  isEmpty: boolean;
  onClick: () => void;
};

export const EmptyStateToggle: React.FC<EmptyStateToggleProps> = ({
  isEmpty,
  onClick,
}) => {
  const { rootShouldRenderEmptyState } = useContext(HotClubContext);

  useEffect(() => {
    rootShouldRenderEmptyState && onClick();
  }, [rootShouldRenderEmptyState]);

  if (rootShouldRenderEmptyState) return null;

  return (
    <EuiButtonIcon
      onClick={onClick}
      style={{
        background:
          "linear-gradient(120.29deg, #FFF6DF -44.23%, #FFF6FF 51.51%, #D3C7FF 147.24%)",
        borderRadius: 24,
        position: "absolute",
        top: -12,
        right: -12,
        color: "#6E42B5",
        textShadow: "0 -1 0 0 #FFF",
        border: "2px solid #6E42B5",
      }}
      display="fill"
      size="m"
      iconType={isEmpty ? "eye" : "eyeClosed"}
    />
  );
};
