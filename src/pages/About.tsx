import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  { year: "2019", event: "Abdeens Academy founded with a vision to make quality Qur'anic education accessible globally" },
  { year: "2020", event: "Launched online platform, reaching students in 15+ countries" },
  { year: "2021", event: "Expanded team with qualified teachers from leading Islamic institutions" },
  { year: "2022", event: "Introduced the Full Package program for comprehensive learning" },
  { year: "2023", event: "Celebrated 100+ students completing their Hifdh journey" },
  { year: "2024", event: "Launched enhanced Arabic program with immersive methodology" },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Us"
        description="Learn about our mission to make Qur'an education accessible to everyone"
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  To make authentic, structured Qur'anic education accessible to every Muslim worldwide. 
                  We believe that learning the Qur'an—whether through memorization, understanding its language, 
                  or studying its meanings—should be available to everyone, regardless of location or background.
                </p>
                <p className="text-muted-foreground">
                  Our goal is to make thousands of Muslims Huffadh of the Qur'an, 
                  building a thriving global community united by their love for the Qur'an and commitment to learning.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  A world where every Muslim has a deep, meaningful connection with the Qur'an. 
                  We envision communities of students who don't just recite the words, but understand, 
                  live, and embody the guidance of Allah's Book in their daily lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card>
                      <CardContent className="p-4">
                        <span className="text-sm font-bold text-primary">{milestone.year}</span>
                        <p className="text-muted-foreground mt-1">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
