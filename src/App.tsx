import { useEffect, useRef } from 'react'
import './App.css'

function App() {

    const containerRef = useRef<HTMLDivElement>(null)
    const speeds = useRef<number[]>([])
    const zPositions = useRef<number[]>([])
    const lastTime = useRef(0)

    const scrollVelocity = useRef(0)
    // const lastScrollY = useRef(0)

    const mouseX = useRef(0)
    const mouseY = useRef(0)
    const currentMouseX = useRef(0)
    const currentMouseY = useRef(0)

    useEffect(() => {
        const images = containerRef.current?.querySelectorAll('img')
        if (!images) return

        images.forEach((img, i) => {
            speeds.current[i] = 20 * 10
            zPositions.current[i] = Math.random() * -6999

            img.style.left = `${-50 + Math.random() * 250}%`;
            img.style.top = `${-90 + Math.random() * 350}%`;

        })

        const animate = (time: number) => {
            const dt = (time - lastTime.current) / 1000
            lastTime.current = time

            scrollVelocity.current *= 0.95

            
            currentMouseX.current += (mouseX.current - currentMouseX.current) * 0.03
            currentMouseY.current += (mouseY.current - currentMouseY.current) * 0.03

            images.forEach((img, i) => {
                const totalSpeed = speeds.current[i] + (scrollVelocity.current * 5)
                zPositions.current[i] += totalSpeed * dt
                
                // position z
                if (zPositions.current[i] > 1000) {
                    img.style.opacity = '0'
                    zPositions.current[i] = -7000; 
                    img.style.left = `${-50 + Math.random() * 250}%`;
                    img.style.top = `${-90 + Math.random() * 350}%`;
                }

                if (zPositions.current[i] < -7001) {
                    img.style.opacity = '0'
                    zPositions.current[i] = 995; 
                    img.style.left = `${-50 + Math.random() * 250}%`;
                    img.style.top = `${-90 + Math.random() * 350}%`;
                }

                // fondu opacité
                let opacity = 1;
                const z = zPositions.current[i];

                if (z < -5500) {
                    opacity = (z - (-7000)) / 1500;
                } 
                else if (z > 500) {
                    opacity = 1 - (z - 500) / 500;
                }

                opacity = Math.max(0, Math.min(1, opacity));

                

                //mouse parallax
                const intensity = 150
                const depthFactor = (zPositions.current[i] + 7000) / 8000
                const parallaxX = currentMouseX.current * intensity * depthFactor
                const parallaxY = currentMouseY.current * intensity * depthFactor


                img.style.opacity = opacity.toString();
                img.style.transform = `translate3d(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px), ${zPositions.current[i]}px)`
                img.style.zIndex = Math.round(zPositions.current[i] + 5000).toString()
            })

            requestAnimationFrame(animate)
        }

        const handleWheel = (e: WheelEvent) => {
            scrollVelocity.current += e.deltaY * 2
        }

        let lastTouchY = 0
        const handleTouchStart = (e: TouchEvent) => {
            lastTouchY = e.touches[0].clientY
        }
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY
            const diff = lastTouchY - touchY
            scrollVelocity.current += diff * 2
            lastTouchY = touchY
        }


        const handleMouseMove = (e: MouseEvent) => {
            mouseX.current = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
            mouseY.current = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
        }
        

        window.addEventListener("mousemove", handleMouseMove, { passive: true })
        window.addEventListener("wheel", handleWheel, { passive: true })
        window.addEventListener("touchstart", handleTouchStart, { passive: true })
        window.addEventListener("touchmove", handleTouchMove, { passive: true })
        const animId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("wheel", handleWheel)
            window.removeEventListener("touchstart", handleTouchStart)
            window.removeEventListener("touchmove", handleTouchMove)
            cancelAnimationFrame(animId)
        }

    }, [])

    return (
        <div className="img-container" ref={containerRef}>
            <img src="./img/1.jpg" alt="" />
            <img src="./img/2.jpg" alt="" />
            <img src="./img/3.jpg" alt="" />
            <img src="./img/4.jpg" alt="" />
            <img src="./img/5.jpg" alt="" />
            <img src="./img/6.jpg" alt="" />
            <img src="./img/7.jpg" alt="" />
            <img src="./img/8.jpg" alt="" />
            <img src="./img/9.jpg" alt="" />
            <img src="./img/1.jpg" alt="" />
            <img src="./img/2.jpg" alt="" />
            <img src="./img/3.jpg" alt="" />
            <img src="./img/4.jpg" alt="" />
            <img src="./img/5.jpg" alt="" />
            <img src="./img/6.jpg" alt="" />
            <img src="./img/7.jpg" alt="" />
            <img src="./img/8.jpg" alt="" />
            <img src="./img/9.jpg" alt="" />
            <img src="./img/1.jpg" alt="" />
            <img src="./img/2.jpg" alt="" />
            <img src="./img/3.jpg" alt="" />
            <img src="./img/4.jpg" alt="" />
            <img src="./img/5.jpg" alt="" />
            <img src="./img/6.jpg" alt="" />
            <img src="./img/7.jpg" alt="" />
            <img src="./img/8.jpg" alt="" />
            <img src="./img/9.jpg" alt="" />
            <img src="./img/1.jpg" alt="" />
            <img src="./img/2.jpg" alt="" />
            <img src="./img/3.jpg" alt="" />
            <img src="./img/4.jpg" alt="" />
            <img src="./img/5.jpg" alt="" />
            <img src="./img/6.jpg" alt="" />
            <img src="./img/7.jpg" alt="" />
            <img src="./img/8.jpg" alt="" />
            <img src="./img/9.jpg" alt="" />
            <img src="./img/1.jpg" alt="" />
            <img src="./img/2.jpg" alt="" />
            <img src="./img/3.jpg" alt="" />
            <img src="./img/4.jpg" alt="" />
            <img src="./img/5.jpg" alt="" />
            <img src="./img/6.jpg" alt="" />
            <img src="./img/7.jpg" alt="" />
            <img src="./img/8.jpg" alt="" />
            <img src="./img/9.jpg" alt="" />
            <img src="./img/1.jpg" alt="" />
            <img src="./img/2.jpg" alt="" />
            <img src="./img/3.jpg" alt="" />
            <img src="./img/4.jpg" alt="" />
            <img src="./img/5.jpg" alt="" />
            <img src="./img/6.jpg" alt="" />
            <img src="./img/7.jpg" alt="" />
            <img src="./img/8.jpg" alt="" />
            <img src="./img/9.jpg" alt="" />
            <img src="./img/1.jpg" alt="" />
            <img src="./img/2.jpg" alt="" />
            <img src="./img/3.jpg" alt="" />
            <img src="./img/4.jpg" alt="" />
            <img src="./img/5.jpg" alt="" />
            <img src="./img/6.jpg" alt="" />
            <img src="./img/7.jpg" alt="" />
            <img src="./img/8.jpg" alt="" />
            <img src="./img/9.jpg" alt="" />
            <img src="./img/1.jpg" alt="" />
            <img src="./img/2.jpg" alt="" />
            <img src="./img/3.jpg" alt="" />
            <img src="./img/4.jpg" alt="" />
            <img src="./img/5.jpg" alt="" />
            <img src="./img/6.jpg" alt="" />
            <img src="./img/7.jpg" alt="" />
            <img src="./img/8.jpg" alt="" />
            <img src="./img/9.jpg" alt="" />
        </div>
    )
}

export default App