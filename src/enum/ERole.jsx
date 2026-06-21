// const ERoleGetName = (id) => {
//     switch (id) {
//         case 101: { return "Administrator" }
//         case 102: { return "Creater" }
//     }
// }

// const ERoleGetAll = [
//     { id: 101, name: "Administrator" },
//     { id: 102, name: "Creater" },
// ]

// const ERoleBg = (id) => {
//     switch (id) {
//         case 101: return "bg-purple-100"
//         case 102: return "bg-green-100"
//     }
// }
// const ERoleText = (id) => {
//     switch (id) {
//         case 101: return "text-purple-400"
//         case 102: return "text-green-400"
//     }
// }
// export { ERoleGetName, ERoleGetAll, ERoleBg,ERoleText } 

const ERoleGetName = (id) => {
    switch (id) {
        case 101: return "Administrator"
        case 102: return "Creator"
        default: return "-"
    }
}

const ERoleGetAll = [
    { id: 101, name: "Administrator" },
    { id: 102, name: "Creator" },
]

const ERoleBg = (id) => {
    switch (id) {
        case 101:
            return "bg-gradient-to-r from-purple-700/80 to-violet-500/80 border border-purple-400/30"

        case 102:
            return "bg-gradient-to-r from-emerald-700/80 to-green-500/80 border border-green-400/30"

        default:
            return "bg-slate-700"
    }
}

const ERoleText = (id) => {
    switch (id) {
        case 101:
            return "text-white font-semibold"

        case 102:
            return "text-white font-semibold"

        default:
            return "text-white"
    }
}

export { ERoleGetName, ERoleGetAll, ERoleBg, ERoleText }
