import { ChildDestruct, ChildAsFC } from "./Child";

const Parent = () => {
    return
    // <ChildDestruct
    //     color="red"
    //     onClick={() => console.log("Clicked")}
    // />;

    <ChildAsFC color="blue" onClick={() => console.log("Clicked")}>
        I'm a child
    </ChildAsFC>

};

export default Parent;