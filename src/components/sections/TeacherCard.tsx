import { Card, CardContent } from "@/components/ui/card";

interface TeacherCardProps {
  name: string;
  bio: string;
  specialization: string;
  imageUrl?: string;
}

export const TeacherCard = ({ name, bio, specialization, imageUrl }: TeacherCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square relative overflow-hidden bg-secondary">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <span className="text-5xl font-bold text-primary/30">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{bio}</p>
        <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
          {specialization}
        </span>
      </CardContent>
    </Card>
  );
};
