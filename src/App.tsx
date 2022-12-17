import { useEffect, useState } from "react";

export const App = () => {
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        getFakeUsers().then(res => setUsers(res));
    }, []);

    return (
        <ol>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ol>
    );
};

export const getFakeUsers = () => {
    return new Promise<string[]>((res) => {
        setTimeout(() => res(["test1", "test2"]), 1000);
    });
}
