const guestProfile = {
    name: "Guest",
    kind: "guest",
    uuid: crypto.randomUUID(),
};
const hcprofiles = [
    {
        name: "Mike",
        kind: "normal",
        uuid: crypto.randomUUID(),
    },
    {
        name: "Jhon",
        kind: "normal",
        uuid: crypto.randomUUID(),
    },
    {
        name: "Ryan",
        kind: "normal",
        uuid: crypto.randomUUID(),
    },
    {
        name: "Jane",
        kind: "normal",
        uuid: crypto.randomUUID(),
    },
    {
        name: "Billy",
        kind: "kids",
        uuid: crypto.randomUUID(),
    },
]

export { hcprofiles, guestProfile }