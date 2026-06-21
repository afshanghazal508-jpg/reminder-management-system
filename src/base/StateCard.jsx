export default function StateCard({
    title,
    value,
    color = "blue",
    icon
}) {

    const colors = {
        blue: {
            bg: "from-blue-600/20 via-blue-500/5 to-transparent",
            border: "border-blue-400/20",
            iconBg: "bg-blue-500/15",
            iconColor: "text-blue-300",
            glow: "bg-blue-500/20"
        },
        green: {
            bg: "from-green-600/20 via-green-500/5 to-transparent",
            border: "border-green-400/20",
            iconBg: "bg-green-500/15",
            iconColor: "text-green-300",
            glow: "bg-green-500/20"
        },
        pink: {
            bg: "from-pink-600/20 via-pink-500/5 to-transparent",
            border: "border-pink-400/20",
            iconBg: "bg-pink-500/15",
            iconColor: "text-pink-300",
            glow: "bg-pink-500/20"
        },
        yellow: {
            bg: "from-yellow-600/20 via-yellow-500/5 to-transparent",
            border: "border-yellow-400/20",
            iconBg: "bg-yellow-500/15",
            iconColor: "text-yellow-300",
            glow: "bg-yellow-500/20"
        },
        purple: {
            bg: "from-purple-600/20 via-purple-500/5 to-transparent",
            border: "border-purple-400/20",
            iconBg: "bg-purple-500/15",
            iconColor: "text-purple-300",
            glow: "bg-purple-500/20"
        },
        orange: {
            bg: "from-orange-600/20 via-orange-500/5 to-transparent",
            border: "border-orange-400/20",
            iconBg: "bg-orange-500/15",
            iconColor: "text-orange-300",
            glow: "bg-orange-500/20"
        }
    };

    const c = colors[color];

    return (
        <div
            className={`
                relative
                overflow-hidden
                rounded-xl
                border
                ${c.border}
                bg-gradient-to-br
                ${c.bg}
                backdrop-blur-xl
                px-4
                py-3
                hover:-translate-y-1
                hover:border-white/20
                transition-all
                duration-300
                cursor-pointer
            `}
        >

            {/* Glow */}
            <div
                className={`
                    absolute
                    -top-8
                    -right-8
                    w-20
                    h-20
                    rounded-full
                    blur-3xl
                    ${c.glow}
                `}
            />

            <div className="relative z-10">

                <div className="flex items-center justify-between">

                    <div
                        className={`
                            w-9
                            h-9
                            rounded-lg
                            flex
                            items-center
                            justify-center
                            ${c.iconBg}
                            ${c.iconColor}
                            text-base
                        `}
                    >
                        {icon}
                    </div>

                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                        {title}
                    </span>

                </div>

                <div className="mt-3 flex items-end justify-between">

                    <h2 className="text-2xl font-bold text-white leading-none">
                        {value}
                    </h2>

                    <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <span className="text-[9px] text-gray-500">
                            Live
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}