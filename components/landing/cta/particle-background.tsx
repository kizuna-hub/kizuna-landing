"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        let animationId: number;
        let isAssembled = false;
        let implodeTarget: { x: number, y: number } | null = null;

        let mouse = {
            x: null as number | null,
            y: null as number | null,
            radius: 120 // Bán kính đẩy hạt khi rê chuột
        };

        // Lắng nghe sự kiện "Hố Đen" từ nút bấm
        const handleImplode = (e: Event) => {
            const customEvent = e as CustomEvent;
            const rect = canvas.getBoundingClientRect();
            implodeTarget = {
                x: customEvent.detail.x - rect.left,
                y: customEvent.detail.y - rect.top,
            };
        };
        window.addEventListener("TRIGGER_IMPLODE", handleImplode);

        // Theo dõi chuột & cảm ứng
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);

        class Particle {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            size: number;
            density: number;
            color: string;
            randomX: number;
            randomY: number;

            constructor(x: number, y: number) {
                this.baseX = x;
                this.baseY = y;
                // Khởi tạo hạt bay tán loạn ngoài màn hình hoặc ngẫu nhiên
                this.randomX = Math.random() * canvas.width * 1.5 - canvas.width * 0.25;
                this.randomY = Math.random() * canvas.height * 1.5 - canvas.height * 0.25;
                this.x = this.randomX;
                this.y = this.randomY;

                this.size = Math.random() * 1.5 + 1; // Hạt to nhỏ tự nhiên
                this.density = (Math.random() * 20) + 5;

                // Màu xanh Kizuna
                const colors = ["#102c1e", "#18402b", "#21593c"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // TRẠNG THÁI C: BỊ HÚT VÀO HỐ ĐEN (KHI CLICK NÚT)
                if (implodeTarget) {
                    const dx = implodeTarget.x - this.x;
                    const dy = implodeTarget.y - this.y;
                    this.x += dx * 0.08; // Tốc độ bị hút
                    this.y += dy * 0.08;
                    this.size *= 0.95; // Teo nhỏ dần
                    return;
                }

                // TRẠNG THÁI B: LẮP RÁP (KHI CUỘN TỚI) & TƯƠNG TÁC CHUỘT
                if (isAssembled) {
                    if (mouse.x != null && mouse.y != null) {
                        let dx = mouse.x - this.x;
                        let dy = mouse.y - this.y;
                        let distance = Math.sqrt(dx * dx + dy * dy);

                        // Đẩy hạt ra xa khi chuột lại gần
                        if (distance < mouse.radius) {
                            let forceDirectionX = dx / distance;
                            let forceDirectionY = dy / distance;
                            let maxDistance = mouse.radius;
                            let force = (maxDistance - distance) / maxDistance;
                            let directionX = forceDirectionX * force * this.density;
                            let directionY = forceDirectionY * force * this.density;

                            this.x -= directionX;
                            this.y -= directionY;
                        } else {
                            if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10;
                            if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10;
                        }
                    } else {
                        if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10;
                        if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10;
                    }
                } else {
                    // TRẠNG THÁI A: BAY LƠ LỬNG TRƯỚC KHI LẮP RÁP
                    this.x += (Math.random() - 0.5) * 2;
                    this.y += (Math.random() - 0.5) * 2;
                }
            }
        }

        function init() {
            particlesArray = [];
            ctx!.fillStyle = "white";
            ctx!.textAlign = "center";
            ctx!.textBaseline = "middle";

            if (canvas!.width < 768) {
                const fontSize = canvas!.width / 3.5;
                ctx!.font = `900 ${fontSize}px 'Geist', sans-serif`;
                ctx!.fillText("KIZUNA", canvas!.width / 2, canvas!.height / 2 - fontSize * 0.45);
                ctx!.fillText("HUB", canvas!.width / 2, canvas!.height / 2 + fontSize * 0.45);
            } else {
                const fontSize = Math.min(canvas!.width / 6, 160);
                ctx!.font = `900 ${fontSize}px 'Geist', sans-serif`;
                ctx!.fillText("KIZUNA HUB", canvas!.width / 2, canvas!.height / 2);
            }

            const textCoordinates = ctx!.getImageData(0, 0, canvas!.width, canvas!.height);
            ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

            // Tăng mật độ hạt lên (step = 7) để form chữ đặc, rõ nét và ngầu hơn
            for (let y = 0; y < textCoordinates.height; y += 7) {
                for (let x = 0; x < textCoordinates.width; x += 7) {
                    const index = (y * textCoordinates.width + x) * 4;
                    if (textCoordinates.data[index + 3] > 128) {
                        particlesArray.push(new Particle(x, y));
                    }
                }
            }
        }

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
                init();
            }
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Observer để kích hoạt hiệu ứng Lắp ráp khi cuộn tới Section này
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => { isAssembled = true; }, 300); // Trễ 0.3s cho mượt
            }
        }, { threshold: 0.3 });
        observer.observe(canvas);

        function animate() {
            ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].draw();
                particlesArray[i].update();
            }
            // Đã xóa toàn bộ logic vẽ line (chòm sao) ở đây

            animationId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            observer.disconnect();
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
            window.removeEventListener("TRIGGER_IMPLODE", handleImplode);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 w-full h-full"
        />
    );
}