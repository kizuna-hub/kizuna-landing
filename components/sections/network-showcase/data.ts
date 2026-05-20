export type NetworkSide = "left" | "right";
export type NetworkRole = "mentor" | "investor";
export type BadgeTone = "emerald" | "orange";
export type ParallaxTrack = "slow" | "medium" | "fast" | "express";

export interface NetworkPerson {
    id: string;
    name: string;
    title: string;
    affiliation: string;
    role: NetworkRole;
    side: NetworkSide;
    badgeTone: BadgeTone;
    avatarUrl: string;
    track: ParallaxTrack;
    positionClassName: string;
    floatDuration: number;
    floatDelay: number;
}

export const roleLabel: Record<NetworkRole, string> = {
    mentor: "Mentor",
    investor: "Investor",
};

export const badgeToneClassName: Record<BadgeTone, string> = {
    emerald: "border-emerald-300/25 bg-emerald-400/10 text-emerald-200",
    orange: "border-orange-300/25 bg-orange-400/10 text-orange-200",
};

export const networkPeople: readonly NetworkPerson[] = [
    // --- CỘT TRÁI (MENTORS) ---
    {
        id: "mentor-linh-tran",
        name: "Linh Trần",
        title: "Product Mentor",
        affiliation: "Ex-Google PM",
        role: "mentor",
        side: "left",
        badgeTone: "emerald",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
        track: "medium", // Đi chậm (Xa)
        positionClassName: "left-[16%] xl:left-[18%] top-[20%]", // Cạnh ngoài, trên cùng
        floatDuration: 4.2,
        floatDelay: 0,
    },
    {
        id: "mentor-minh-pham",
        name: "Minh Phạm",
        title: "AI Strategy",
        affiliation: "BK Alumni",
        role: "mentor",
        side: "left",
        badgeTone: "emerald",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
        track: "express", // Đi nhanh (Gần)
        positionClassName: "left-[2%] xl:left-[3%] top-[40%]", // Cạnh trong, lùi xuống
        floatDuration: 5,
        floatDelay: 0.45,
    },
    {
        id: "mentor-an-nguyen",
        name: "An Nguyễn",
        title: "Growth Advisor",
        affiliation: "SaaS Founder",
        role: "mentor",
        side: "left",
        badgeTone: "emerald",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
        track: "slow", // Đi rất chậm (Rất xa)
        positionClassName: "left-[1%] xl:left-[3%] top-[54%]", // Cạnh ngoài, nửa dưới
        floatDuration: 4.6,
        floatDelay: 0.9,
    },
    {
        id: "mentor-quang-do",
        name: "Quang Đỗ",
        title: "Technical Coach",
        affiliation: "CTO Circle",
        role: "mentor",
        side: "left",
        badgeTone: "emerald",
        avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
        track: "fast", // Đi vừa phải
        positionClassName: "left-[14%] xl:left-[18%] top-[76%]", // Cạnh trong, dưới cùng
        floatDuration: 5.4,
        floatDelay: 0.2,
    },

    // --- CỘT PHẢI (INVESTORS) ---
    {
        id: "investor-hana-lee",
        name: "Hana Lee",
        title: "Seed Investor",
        affiliation: "Lotus Ventures",
        role: "investor",
        side: "right",
        badgeTone: "orange",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
        track: "slow", // Đi chậm (Xa)
        positionClassName: "right-[3%] xl:right-[5%] top-[14%]", // Cạnh ngoài, lệch nhẹ so với bên trái
        floatDuration: 4.8,
        floatDelay: 0.3,
    },
    {
        id: "investor-david-vo",
        name: "David Võ",
        title: "VC Partner",
        affiliation: "Mekong Capital",
        role: "investor",
        side: "right",
        badgeTone: "orange",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
        track: "fast", // Đi nhanh (Gần)
        positionClassName: "right-[18%] xl:right-[22%] top-[40%]", // Cạnh trong
        floatDuration: 5.2,
        floatDelay: 0.75,
    },
    {
        id: "investor-mai-dang",
        name: "Mai Đặng",
        title: "Angel Investor",
        affiliation: "Founder Network",
        role: "investor",
        side: "right",
        badgeTone: "orange",
        avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
        track: "medium", // Đi vừa phải
        positionClassName: "right-[2%] xl:right-[4%] top-[68%]", // Cạnh ngoài
        floatDuration: 4.4,
        floatDelay: 1.05,
    },
    {
        id: "investor-khoa-le",
        name: "Khoa Lê",
        title: "Fund Principal",
        affiliation: "Frontier VC",
        role: "investor",
        side: "right",
        badgeTone: "orange",
        avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80",
        track: "express", // Đi rất nhanh
        positionClassName: "right-[15%] xl:right-[19%] top-[90%]", // Cạnh trong, dưới cùng
        floatDuration: 5.6,
        floatDelay: 0.15,
    },
];