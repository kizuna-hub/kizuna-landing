import { EcosystemInteractiveGraph } from "./ecosystem-interactive-graph";
import { Button } from "@/components/ui/button"; // Assuming a default button component exists
import { cn } from "@/lib/utils";

export function EcosystemHero() {
    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden bg-background text-foreground flex items-center pt-24 pb-16">
            {/* Background Ambience Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px]" />

                {/* Subtle grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle at center, var(--color-foreground) 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}
                />
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* L: Typography & CTA */}
                    <div className="flex flex-col items-start gap-8 max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-border/50 bg-surface-subtle px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse" />
                            Living Symbiotic Network
                        </div>

                        <h1 className="font-serif text-heading-md sm:text-heading-lg lg:text-heading-xl text-balance">
                            Sức mạnh của <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-brand-accent to-chart-3">
                                sự Cộng sinh
                            </span>
                        </h1>

                        <p className="font-sans text-body-lg text-muted-foreground max-w-xl text-balance">
                            Không chỉ là một công cụ quản lý. Kizuna Hub là một hệ sinh thái sống, nơi các Founders, Mentors và Investors luân chuyển giá trị, tri thức và nguồn vốn để cùng nhau đạt đỉnh cao mới.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow rounded-xl font-medium px-8 h-12">
                                Gia nhập Mạng lưới
                            </Button>
                            <Button size="lg" variant="outline" className="border-border/50 hover:bg-surface-subtle rounded-xl font-medium px-8 h-12 backdrop-blur-sm text-foreground">
                                Tìm hiểu thêm
                            </Button>
                        </div>
                    </div>

                    {/* R: Interactive Graph Animation */}
                    <div className="relative w-full aspect-square flex items-center justify-center lg:justify-end">
                        <EcosystemInteractiveGraph />
                    </div>

                </div>
            </div>
        </section>
    );
}
