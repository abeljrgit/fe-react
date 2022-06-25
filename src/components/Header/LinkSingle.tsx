function LinkSingle(props: any) {
  return (
    <a href="#" className={`linkSingle ${props.className}`}>
      {props.linkTitle}
    </a>
  );
}

export default LinkSingle;
