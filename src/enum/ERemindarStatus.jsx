

// const ERemindarStatusGetName = (id) => {
//     switch (id) {
//         case 1: return "Pending"
//         case 2: return "Completed"
//         case 3: return "Cancelled"
//         default: return "-"
//     }
// }

// const ERemindarStatusGetAll = [
//     { id: 0, name: "Active" },
//     { id: 1, name: "Completed" },
//     { id: 3, name: "Cancelled" },

// ]

// const ERemindarStatusBg = (id) => {
//     switch (id) {

//         case 1:
//             return "bg-gradient-to-r from-green-900/80 to-green-600/80 border border-green-400/30"

//         case 2:
//             return "bg-gradient-to-r from-red-900/80 to-red-600/80 border border-red-400/30"

//         case 3:
//             return "bg-gradient-to-r from-red-900/80 to-red-600/80 border border-red-400/30"

//         default:
//             return "bg-slate-700"
//     }
// }

// const ERemindarStatusText = (id) => {
//     switch (id) {

//         case 1:
//             return "text-white font-semibold"

//         case 2:
//             return "text-white font-semibold"

//         case 3:
//             return "text-white font-semibold"

//         default:
//             return "text-white"
//     }
// }

// export { ERemindarStatusGetName, ERemindarStatusGetAll, ERemindarStatusBg, ERemindarStatusText }

const ERemindarStatusGetName = (id) => {
    switch (id) {
        case 1: return "Pending";
        case 2: return "Completed";
        case 3: return "Cancelled";
        default: return "-";
    }
};

const ERemindarStatusGetAll = [
    { id: 1, name: "Pending" },
    { id: 2, name: "Completed" },
    { id: 3, name: "Cancelled" },
];

const ERemindarStatusBg = (id) => {
    switch (id) {

        case 1: // Pending
            return "bg-gradient-to-r from-amber-900/80 to-yellow-500/80 border border-yellow-400/30";

        case 2: // Completed
            return "bg-gradient-to-r from-green-900/80 to-emerald-600/80 border border-emerald-400/30";

        case 3: // Cancelled
            return "bg-gradient-to-r from-red-900/80 to-rose-600/80 border border-red-400/30";

        default:
            return "bg-slate-700 border border-slate-500";
    }
};

const ERemindarStatusText = (id) => {
    switch (id) {

        case 1:
            return "text-yellow-100 font-semibold";

        case 2:
            return "text-emerald-100 font-semibold";

        case 3:
            return "text-red-100 font-semibold";

        default:
            return "text-white";
    }
};

export {
    ERemindarStatusGetName,
    ERemindarStatusGetAll,
    ERemindarStatusBg,
    ERemindarStatusText
};