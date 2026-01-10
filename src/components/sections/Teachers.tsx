import { TeacherCard } from "./TeacherCard";

interface Teacher {
  name: string;
  bio: string;
  specialization: string;
  imageUrl?: string;
}

interface TeachersProps {
  title?: string;
  teachers: Teacher[];
}

export const Teachers = ({ title = "Our Teachers", teachers }: TeachersProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} {...teacher} />
          ))}
        </div>
      </div>
    </section>
  );
};
