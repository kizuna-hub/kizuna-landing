export default function SignupPage() {
    return (
        <div className="min-h-screen bg-[#102c1e] text-white flex flex-col items-center justify-center p-8">
            <div className="max-w-md w-full text-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter text-white">Join Kizuna</h1>
                <p className="text-[#a5b4ac]">Sign up to get early access to the ultimate productivity hub.</p>
                <div className="p-8 border border-white/10 rounded-2xl bg-[#0a1c13]">
                    <p className="text-sm text-[#a5b4ac]">Sign up form coming soon...</p>
                </div>
                <a href="/" className="inline-block mt-4 text-sm text-[#00f0ff] hover:underline">
                    &larr; Back to Home
                </a>
            </div>
        </div>
    );
}
