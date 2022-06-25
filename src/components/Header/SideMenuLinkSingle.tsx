function SideMenuLinkSingle(props: any) {
  return (
    <a href={props.linkUrl} className="smLinkSingle">
      {props.linkTitle}
    </a>
  );
}
export default SideMenuLinkSingle;
