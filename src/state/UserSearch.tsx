import { useState, useRef, useEffect } from "react";

const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 20 },
    { name: "Michael", age: 20 },
]

const UserSearch: React.FC = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState("");
    const [user, setUser] = useState<{ name: string; age: number } | undefined>();


    useEffect(() => {

        // inputRef.current might be null, we need to check before accessing it
        // otherwise TypeScript will throw an error
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();

    }, []);

    const onClick = () => {

        const foundUser = users.find(user => {
            return user.name === name;
        });

        setUser(foundUser);

    };

    return (
        <div>
            UserSearch
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>
            <div>
                {/* user might be undefined so we need to check its value before accessing it */}
                {/* if user is undefined then don't print out anything */}
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )

}

export default UserSearch;