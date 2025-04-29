import { Check } from 'lucide-react';

const AboutPlant = () => {
  const benefits = [
    "Очищает воздух от вредных веществ, включая формальдегид и бензол",
    "Повышает влажность воздуха, что полезно для дыхательной системы",
    "Компактный размер, идеален для небольших помещений",
    "Цветет красивыми белыми соцветиями несколько раз в год",
    "Неприхотлив и подходит для начинающих цветоводов"
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1593482892290-f54927ae1bb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Цветущий спатифиллум" 
              className="rounded-lg object-cover w-full aspect-square md:aspect-[4/3]"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">О растении</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Спатифиллум (Spathiphyllum) — вечнозеленое травянистое растение семейства Ароидные, родом из тропических 
                лесов Америки и Юго-Восточной Азии. Известен своими элегантными белыми соцветиями и глянцевыми темно-зелеными листьями.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Преимущества спатифиллума:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-foreground/80 italic">
              Также известен как "женское счастье" или "цветок мира" благодаря своей символике и белоснежным соцветиям.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlant;
