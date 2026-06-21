// const ERemindarCategoryGetName = (id) => {
//     switch (id) {
//         case 1: return "Work"
//         case 2: return "Personal"
//         case 3: return "Study"
//         case 4: return "Health"
//         case 5: return "Shopping"
//         case 6: return "Meeting"
//         default: return "-"
//     }
// }

// const ERemindarCategoryGetAll = [
//     { id: 1, name: "Work" },
//     { id: 2, name: "Personal" },
//     { id: 3, name: "Study" },
//     { id: 4, name: "Health" },
//     { id: 5, name: "Shopping" },
//     { id: 6, name: "Meeting" },

// ]
// const ERemindarCategoryBg = (id) => {
//     switch (id) {

//         case 1:
//             return "bg-gradient-to-r from-green-900/80 to-green-600/80 border border-green-400/30"

//         case 2:
//             return "bg-gradient-to-r from-red-900/80 to-red-600/80 border border-red-400/30"

//         case 3:
//             return "bg-gradient-to-r from-red-900/80 to-red-600/80 border border-red-400/30"

//         case 4:
//             return "bg-gradient-to-r from-red-900/80 to-red-600/80 border border-red-400/30"

//         case 5:
//             return "bg-gradient-to-r from-red-900/80 to-red-600/80 border border-red-400/30"

//         case 6:
//             return "bg-gradient-to-r from-red-900/80 to-red-600/80 border border-red-400/30"

//         default:
//             return "bg-slate-700"
//     }
// }

// const ERemindarCategoryText = (id) => {
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

// export { ERemindarCategoryGetName, ERemindarCategoryGetAll, ERemindarCategoryBg, ERemindarCategoryText } 

const ERemindarCategoryGetName = (id) => {
    switch (id) {
        case 1: return "Work";
        case 2: return "Personal";
        case 3: return "Study";
        case 4: return "Health";
        case 5: return "Shopping";
        case 6: return "Meeting";
        default: return "-";
    }
};

const ERemindarCategoryGetAll = [
    { id: 1, name: "Work" },
    { id: 2, name: "Personal" },
    { id: 3, name: "Study" },
    { id: 4, name: "Health" },
    { id: 5, name: "Shopping" },
    { id: 6, name: "Meeting" },
];

const ERemindarCategoryBg = (id) => {
    switch (id) {

        case 1: // Work
            return "bg-gradient-to-r from-blue-500/50 to-cyan-300/50 border border-cyan-200/10";

        case 2: // Personal
            return "bg-gradient-to-r from-pink-900/80 to-rose-600/80 border border-pink-400/30";

        case 3: // Study
            return "bg-gradient-to-r from-purple-900/80 to-violet-600/80 border border-violet-400/30";

        case 4: // Health
            return "bg-gradient-to-r from-green-900/80 to-emerald-600/80 border border-emerald-400/30";

        case 5: // Shopping
            return "bg-gradient-to-r from-amber-900/80 to-yellow-500/80 border border-yellow-400/30";

        case 6: // Meeting
            return "bg-gradient-to-r from-indigo-900/80 to-blue-600/80 border border-blue-400/30";

        default:
            return "bg-slate-700 border border-slate-500";
    }
};

const ERemindarCategoryText = (id) => {
    switch (id) {

        case 1:
            return "text-cyan-100 font-semibold";

        case 2:
            return "text-pink-100 font-semibold";

        case 3:
            return "text-violet-100 font-semibold";

        case 4:
            return "text-emerald-100 font-semibold";

        case 5:
            return "text-yellow-100 font-semibold";

        case 6:
            return "text-blue-100 font-semibold";

        default:
            return "text-white";
    }
};

export {
    ERemindarCategoryGetName,
    ERemindarCategoryGetAll,
    ERemindarCategoryBg,
    ERemindarCategoryText
};
