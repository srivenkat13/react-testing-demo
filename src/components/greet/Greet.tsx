type GreetProps = {
  name?: string;
};

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};
