"use client";
import React, { useRef, useEffect } from 'react';

const BackgroundStars = ({ numStars }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function randomRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        class Star {
            constructor() {
                this.x = randomRange(0, canvas.width);
                this.y = randomRange(0, canvas.height);
                this.size = randomRange(1, 3);
                this.speed = randomRange(0.1, 1);
                this.color = `rgb(${Math.floor(randomRange(0, 255))},${Math.floor(randomRange(0, 255))},${Math.floor(randomRange(0, 255))})`;
                this.rotation = randomRange(0, 360);
            }

            update() {
                this.y += this.speed;

                if (this.y > canvas.height) {
                    this.x = randomRange(0, canvas.width);
                    this.y = 0;
                    this.size = randomRange(1, 3);
                    this.speed = randomRange(0.1, 1);
                    this.color = `rgb(${Math.floor(randomRange(0, 255))},${Math.floor(randomRange(0, 255))},${Math.floor(randomRange(0, 255))})`;
                    this.rotation = randomRange(0, 360);
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.fillStyle = this.color;
                ctx.beginPath();
                // Star shape
                for (let i = 0; i < 5; i++) {
                    ctx.lineTo(Math.cos((Math.PI * 2 * i) / 5) * this.size, Math.sin((Math.PI * 2 * i) / 5) * this.size);
                    ctx.lineTo(Math.cos((Math.PI * 2 * (i + 0.5)) / 5) * (this.size / 2), Math.sin((Math.PI * 2 * (i + 0.5)) / 5) * (this.size / 2));
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }

        const stars = [];

        function initStars(numStars) {
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });
        }

        initStars(numStars);
        animate();

        return () => {
            stars.length = 0;
        };
    }, [numStars]);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default BackgroundStars;
