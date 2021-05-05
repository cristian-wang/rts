interface ChildProps {
  color: string;
  onClick: () => void; // function that doesn't have args and returns nothing
}

// #1 Method: Most straightforward way
// export const Child = (props: ChildProps) => {
//     return <div>Hi there!</div>;
// }

// Desctructuring way
export const ChildDestruct = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// ...but with this method we're not telling TypeScript this is a React Component!

// #2 Method
// tells TypeScript this is a React Component so we can have better autocomplete function
// e.g. ChildAsFC.displayName works
// and we can by default expect a children prop whereas on the #1 Method we should have defined children inside of the Interface
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// 100% identical to the one above
// export const ChildAsFunctionComponent: React.FunctionComponent<ChildProps> = ({ color }) => {
//     return <div>{color}</div>
// }
