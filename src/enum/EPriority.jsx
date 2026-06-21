const EPriorityGetName = (id) => {
    switch (id) {
        case 1:
            return "High Priority";   // improved naming
        case 2:
            return "Normal Priority"; // improved naming
        default:
            return "Unknown";
    }
};

const EPriorityGetAll = [
    { id: 1, name: "High Priority" },
    { id: 2, name: "Normal Priority" },
];

const EPriorityGetBg = (id) => {
    switch (id) {
        case 1:
            return "bg-pink-500/10";   // aesthetic pink theme
        case 2:
            return "bg-sky-500/10";    // soft cool contrast
        default:
            return "bg-gray-500/10";
    }
};

const EPriorityGetText = (id) => {
    switch (id) {
        case 1:
            return "text-pink-300";
        case 2:
            return "text-sky-300";
        default:
            return "text-gray-400";
    }
};

export {
    EPriorityGetName,
    EPriorityGetAll,
    EPriorityGetBg,
    EPriorityGetText
};