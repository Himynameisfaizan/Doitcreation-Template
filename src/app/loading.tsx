import { url } from "inspector";

export default function Loading() {
  return (
    <div className="screen-loader">
      <div className="spinner" />
      <div className="" style={{backgroundImage: "url(/assets/img/ajax-loader.gif)"}}></div>
    </div>
  );
}
