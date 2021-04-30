import { useState } from "react";

const GuestList: React.FC = () => {

    const [name, setName] = useState("");
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        // setName(""); // works also if we empty the name first because state values updates are async
        setGuests([...guests, name]);
        setName("");
    }

    return (
        <div>
            <h3>Guest List</h3>

            <ul>
                {guests.map(guest =>
                    <li key={guest}>{guest}</li>
                )}
            </ul>

            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>

        </div>
    );
}

export default GuestList;