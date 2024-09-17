import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function RelevanceView() {
    return (
        <div>
        <h1>Relevance overview page</h1>
        <Outlet />
        </div>
    );
  }
  