// const EStatusGetName = (id) => {
//     switch (id) {
//         case 0: { return "Active" }
//         case 1: { return "Inactive" }
//     }
// }

// const EStatusGetAll = [
//     { id: 0, name: "Active" },
//     { id: 1, name: "Inactive" },
// ]

// const EStatusBg = (id) => {
//     switch (id) {
//         case 1: return "bg-green-100"
//         case 0: return "bg-red-100"

//     }
// }

// const EStatusText = (id) => {
//     switch (id) {
//         case 1: return "text-green-400"
//         case 0: return "text-red-400"

//     }
// }
// export { EStatusGetName, EStatusGetAll, EStatusBg, EStatusText }

const EStatusGetName = (id) => {
    switch (id) {
        case 0: return "Active"
        case 1: return "Inactive"
        default: return "-"
    }
}

const EStatusGetAll = [
    { id: 0, name: "Active" },
    { id: 1, name: "Inactive" },
]

const EStatusBg = (id) => {
    switch (id) {

        case 0:
            return "bg-gradient-to-r from-green-900/80 to-green-600/80 border border-green-400/30"

        case 1:
            return "bg-gradient-to-r from-red-900/80 to-red-600/80 border border-red-400/30"

        default:
            return "bg-slate-700"
    }
}

const EStatusText = (id) => {
    switch (id) {

        case 0:
            return "text-white font-semibold"

        case 1:
            return "text-white font-semibold"

        default:
            return "text-white"
    }
}

export { EStatusGetName, EStatusGetAll, EStatusBg, EStatusText }
