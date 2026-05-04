export default function SignupPage() {
    return (
        <div className="min-h-screen bg-[#102c1e] text-white flex flex-col items-center justify-center p-8">
            <div className="max-w-md w-full text-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter text-white">Tham gia Kizuna</h1>
                <p className="text-[#a5b4ac]">Đăng ký để nhận quyền truy cập sớm vào trung tâm năng suất tối thượng.</p>
                <div className="p-8 border border-white/10 rounded-2xl bg-[#0a1c13]">
                    <p className="text-sm text-[#a5b4ac]">Biểu mẫu đăng ký sắp ra mắt...</p>
                </div>
                <a href="/" className="inline-block mt-4 text-sm text-[#00f0ff] hover:underline">
                    &larr; Trở về Trang chủ
                </a>
            </div>
        </div>
    );
}
