const canvas = document.getElementById('explosionCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth * 0.99;
canvas.height = window.innerHeight * 0.98;

// Function to create an explosion
function createExplosion(x, y, colors) {
    const particles = [];
    const particleCount = 1000; // Number of particles in explosion

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x,
            y,
            xv: (Math.random() - 0.5) * 8, // Random X velocity
            yv: (Math.random() - 0.5) * 8, // Random Y velocity
            color: colors[Math.floor(Math.random() * colors.length)], // Random color from the provided list
            size: Math.random() * 15 // Random size for each particle
        });
    }

    // Update and draw particles
    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.x += particle.xv;
            particle.y += particle.yv;

            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(updateParticles);
    }

    updateParticles();
}

export function handleExplosion() {
    const colors = ['#ff0000', '#ff6600', '#ffff00'];
    createExplosion(window.innerWidth / 2, window.innerHeight / 2, colors);
}
