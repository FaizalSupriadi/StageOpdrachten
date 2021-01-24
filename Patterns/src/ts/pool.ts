// The object that will go into the pool
class Particle{
    public lifetime: number = 3;
    public is_used() { 
        return this.lifetime > 0; 
    }

    public print(){
        console.log("Particle");
    }
}

// The object pool that can hold 10 objects.
// If the object doesn't exist yet, it makes one.
// If the object has no lifetime, it removes it from the external array
class ParticlePool{
    private poolSize: number = 10;
    private particlePool: Particle[] = [];

    public get_particle(): Particle {
        for (let particle of this.particlePool) {
            
            if(!particle.is_used()){
                return particle;
            }
            
        }
        if(this.particlePool.length < this.poolSize){
                
            let part = new Particle()
            this.particlePool.push(part);
            return part;
        }
        return;
    }
    public update(particles:Particle[]){
        for (let particle of particles) {
                
            if(!particle.is_used()){
                particle.lifetime = 3;
                this.remove(particles,particle);
            }else{
                particle.print();
                particle.lifetime -= 1;
            }
        }
        
    }

    public remove(particles:Particle[],particle:Particle){
        const particleIndex = particles.indexOf(particle);
        if (particleIndex != -1) {
            particles.splice(particleIndex,1);
        }
    }
}

// Testing the object pool by updating more than the lifetime of the object
export function test_pool(){
    console.log("");
    let particles: Particle[] = [];
    let particlePool = new ParticlePool();
    particles.push(particlePool.get_particle());
    particlePool.update(particles);
    particlePool.update(particles);
    particlePool.update(particles);
    particlePool.update(particles);
    particlePool.update(particles);



}