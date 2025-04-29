import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Спатифиллум — изящество и чистота
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Узнайте все о выращивании и уходе за популярным комнатным растением, 
                которое очищает воздух и радует белоснежными цветами.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="font-medium">
                Начать знакомство
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                Советы по уходу
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:aspect-square">
            <img
              alt="Спатифиллум"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
