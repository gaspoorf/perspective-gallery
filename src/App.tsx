import { useEffect, useRef } from 'react'
import './App.css'

function App() {

    const containerRef = useRef<HTMLDivElement>(null)
    const speeds = useRef<number[]>([])
    const zPositions = useRef<number[]>([])
    const lastTime = useRef(0)

    const scrollVelocity = useRef(0)
    // const lastScrollY = useRef(0)

    useEffect(() => {
        const images = containerRef.current?.querySelectorAll('img')
        if (!images) return

        images.forEach((img, i) => {
            speeds.current[i] = 20 * 10
            zPositions.current[i] = Math.random() * -4999

            img.style.left = `${-20 + Math.random() * 150}%`;
            img.style.top = `${-20 + Math.random() * 150}%`;

        })

        const animate = (time: number) => {
            const dt = (time - lastTime.current) / 1000
            lastTime.current = time

            scrollVelocity.current *= 0.95

            images.forEach((img, i) => {
                const totalSpeed = speeds.current[i] + (scrollVelocity.current * 5)
                zPositions.current[i] += totalSpeed * dt
                
                // position z
                if (zPositions.current[i] > 1000) {
                    img.style.opacity = '0'
                    zPositions.current[i] = -5000; 
                    img.style.left = `${-20 + Math.random() * 150}%`;
                    img.style.top = `${-20 + Math.random() * 150}%`;
                }

                if (zPositions.current[i] < -5001) {
                    img.style.opacity = '0'
                    zPositions.current[i] = 995; 
                    img.style.left = `${-20 + Math.random() * 150}%`;
                    img.style.top = `${-20 + Math.random() * 150}%`;
                }

                // fondu opacité
                let opacity = 1;
                const z = zPositions.current[i];

                if (z < -4000) {
                    opacity = (z - (-5000)) / 1000;
                } 
                else if (z > 500) {
                    opacity = 1 - (z - 500) / 500;
                }

                opacity = Math.max(0, Math.min(1, opacity));


                img.style.opacity = opacity.toString();
                img.style.transform = `translate3d(0,0,${zPositions.current[i]}px)`
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
        

        window.addEventListener("wheel", handleWheel, { passive: true })
        window.addEventListener("touchstart", handleTouchStart, { passive: true })
        window.addEventListener("touchmove", handleTouchMove, { passive: true })
        const animId = requestAnimationFrame(animate)

        return () => {
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