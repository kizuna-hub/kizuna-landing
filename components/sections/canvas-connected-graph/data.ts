import { FileText, Scale, Sparkles, TrendingUp, Users, Folder, Image as ImageIcon, type LucideIcon } from "lucide-react";

// GIỮ NGUYÊN cụm cũ và CHỈ THÊM "media" | "folder" ở cuối để các file khác không bị gãy type
export type GraphNodeType = "workspace" | "transcript" | "legal" | "note" | "mentor" | "ledger" | "media" | "folder";

export interface GraphTransform {
    x: string;
    y: string;
    rotate: number;
    scale: number;
}

export interface GraphNode {
    id: string;
    type: GraphNodeType;
    eyebrow: string;
    title: string;
    body: string;
    meta: string;
    accentClassName: string;
    anchor: {
        x: number;
        y: number;
    };
    positionClassName: string;
    sizeClassName: string;
    scatterTransform: GraphTransform;
    targetTransform: GraphTransform;
    imageUrl?: string;
}

// GIỮ NGUYÊN cấu trúc curve: number cũ của mày
export interface GraphEdge {
    id: string;
    from: string;
    to: string;
    curve: number;
}

export const graphNodes: readonly GraphNode[] = [
    // ================= 6 NODE GỐC (GIỮ NGUYÊN 100% TỌA ĐỘ VÀ FIELD) =================
    {
        id: "founder-workspace",
        type: "workspace",
        eyebrow: "Workspace",
        title: "Founder Workspace",
        body: "Tasks, docs, sprint notes and investor updates converge into one operating context.",
        meta: "Live execution hub",
        accentClassName: "text-emerald-600 bg-emerald-50 border-emerald-100",
        anchor: { x: 500, y: 300 },
        positionClassName: "left-[50%] top-[48%]",
        sizeClassName: "w-[18rem] sm:w-[24rem] lg:w-[27rem]",
        scatterTransform: { x: "-54vw", y: "-34vh", rotate: -15, scale: 1.08 },
        targetTransform: { x: "0vw", y: "0vh", rotate: 0, scale: 1 },
        imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    },
    {
        id: "meeting-transcript",
        type: "transcript",
        eyebrow: "Transcript",
        title: "Meeting Transcript",
        body: "The latest founder call is parsed into decisions, blockers, open questions and proof points for diligence.",
        meta: "36 min synced",
        accentClassName: "text-sky-600 bg-sky-50 border-sky-100",
        anchor: { x: 215, y: 178 },
        positionClassName: "left-[21.5%] top-[28.7%]",
        sizeClassName: "w-[15rem] sm:w-[19rem]",
        scatterTransform: { x: "-42vw", y: "22vh", rotate: 14, scale: 0.94 },
        targetTransform: { x: "0vw", y: "0vh", rotate: 0, scale: 1 },
    },
    {
        id: "cap-table",
        type: "legal",
        eyebrow: "Legal",
        title: "Cap Table / Legal Doc",
        body: "Equity structure, vesting terms and compliance status are normalized before the next round.",
        meta: "Policy ready",
        accentClassName: "text-amber-700 bg-amber-50 border-amber-100",
        anchor: { x: 785, y: 175 },
        positionClassName: "left-[78.5%] top-[28.2%]",
        sizeClassName: "w-[14rem] sm:w-[18rem]",
        scatterTransform: { x: "39vw", y: "-25vh", rotate: -11, scale: 1.04 },
        targetTransform: { x: "0vw", y: "0vh", rotate: 0, scale: 1 },
    },
    {
        id: "investor-note",
        type: "note",
        eyebrow: "Investor",
        title: "Investor Note",
        body: "Partner feedback is attached to traction signals instead of floating in a forgotten thread.",
        meta: "Seed signal",
        accentClassName: "text-violet-600 bg-violet-50 border-violet-100",
        anchor: { x: 835, y: 438 },
        positionClassName: "left-[83.5%] top-[70.6%]",
        sizeClassName: "w-[12.5rem] sm:w-[15rem]",
        scatterTransform: { x: "46vw", y: "26vh", rotate: 12, scale: 0.9 },
        targetTransform: { x: "0vw", y: "0vh", rotate: 0, scale: 1 },
    },
    {
        id: "mentor-match",
        type: "mentor",
        eyebrow: "Network",
        title: "Mentor Match",
        body: "Kizuna ranks mentor fit by skill, stage, domain context and the work already completed.",
        meta: "92% fit",
        accentClassName: "text-teal-700 bg-teal-50 border-teal-100",
        anchor: { x: 292, y: 455 },
        positionClassName: "left-[29.2%] top-[73.4%]",
        sizeClassName: "w-[13rem] sm:w-[16rem]",
        scatterTransform: { x: "-36vw", y: "31vh", rotate: -8, scale: 1.12 },
        targetTransform: { x: "0vw", y: "0vh", rotate: 0, scale: 1 },
    },
    {
        id: "execution-ledger",
        type: "ledger",
        eyebrow: "Ledger",
        title: "Execution Ledger",
        body: "Every shipped milestone becomes timestamped evidence investors can inspect in real time.",
        meta: "18 proofs",
        accentClassName: "text-rose-600 bg-rose-50 border-rose-100",
        anchor: { x: 505, y: 95 },
        positionClassName: "left-[50.5%] top-[15.3%]",
        sizeClassName: "w-[13rem] sm:w-[17rem]",
        scatterTransform: { x: "14vw", y: "-35vh", rotate: 9, scale: 0.92 },
        targetTransform: { x: "0vw", y: "0vh", rotate: 0, scale: 1 },
    },

    // ================= 2 NODE MỚI (CHÈN VÀO KHÔNG GIAN TRỐNG, KHÔNG ĐÈ NHAU) =================
    {
        id: "product-media",
        type: "media", // Dùng riêng cho GraphMediaCard
        eyebrow: "Prototype",
        title: "Kizuna UI Mockup",
        body: "Figma design system and high-fidelity prototype flows mapped into codebase structure.",
        meta: "Updated 2h ago",
        accentClassName: "text-orange-600 bg-orange-50 border-orange-100",
        anchor: { x: 120, y: 340 },
        positionClassName: "left-[12%] top-[52%]", // Nằm vùng trống biên trái, dưới hố xám transcript
        sizeClassName: "w-[13rem] sm:w-[16rem]",
        scatterTransform: { x: "-45vw", y: "5vh", rotate: -10, scale: 0.95 },
        targetTransform: { x: "0vw", y: "0vh", rotate: 0, scale: 1 },
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "legal-folder",
        type: "folder", // Dùng riêng cho GraphFolderCard
        eyebrow: "Assets",
        title: "Legal & IP Vault",
        body: "Incorporation paperwork, seed term sheets, and smart advisor agreements secured.",
        meta: "4 files locked",
        accentClassName: "text-pink-600 bg-pink-50 border-pink-100",
        anchor: { x: 660, y: 500 },
        positionClassName: "left-[66%] top-[78%]", // Nằm vùng trống bên dưới workspace, chếch sang phải
        sizeClassName: "w-[13rem] sm:w-[16rem]",
        scatterTransform: { x: "25vw", y: "35vh", rotate: 8, scale: 1.05 },
        targetTransform: { x: "0vw", y: "0vh", rotate: 0, scale: 1 },
    }
] as const;

export const graphEdges: readonly GraphEdge[] = [
    // 6 Tuyến cáp gốc của mày (Giữ nguyên curve: number)
    { id: "transcript-to-workspace", from: "meeting-transcript", to: "founder-workspace", curve: 0.18 },
    { id: "legal-to-workspace", from: "cap-table", to: "founder-workspace", curve: -0.15 },
    { id: "ledger-to-workspace", from: "execution-ledger", to: "founder-workspace", curve: 0.02 },
    { id: "workspace-to-note", from: "founder-workspace", to: "investor-note", curve: 0.16 },
    { id: "workspace-to-mentor", from: "founder-workspace", to: "mentor-match", curve: -0.14 },
    { id: "mentor-to-transcript", from: "mentor-match", to: "meeting-transcript", curve: 0.08 },

    // 2 Tuyến cáp mới bổ sung để liên kết khối Media và Folder vào lõi trung tâm
    { id: "media-to-workspace", from: "product-media", to: "founder-workspace", curve: -0.12 },
    { id: "folder-to-workspace", from: "legal-folder", to: "founder-workspace", curve: 0.15 }
] as const;

// Thêm icon tương ứng cho 2 type mới
export const nodeIcon: Record<GraphNodeType, LucideIcon> = {
    workspace: Sparkles,
    transcript: FileText,
    legal: Scale,
    note: TrendingUp,
    mentor: Users,
    ledger: FileText,
    media: ImageIcon,
    folder: Folder,
};

export const getNodeById = (nodes: readonly GraphNode[], id: string): GraphNode => {
    const node = nodes.find((item) => item.id === id);
    if (!node) {
        throw new Error(`Missing graph node: ${id}`);
    }
    return node;
};

export const buildEdgePath = (from: GraphNode, to: GraphNode, curve: number): string => {
    const midX = (from.anchor.x + to.anchor.x) / 2;
    const midY = (from.anchor.y + to.anchor.y) / 2;
    const deltaX = to.anchor.x - from.anchor.x;
    const deltaY = to.anchor.y - from.anchor.y;
    const controlX = midX - deltaY * curve;
    const controlY = midY + deltaX * curve;

    return `M ${from.anchor.x} ${from.anchor.y} Q ${controlX} ${controlY} ${to.anchor.x} ${to.anchor.y}`;
};