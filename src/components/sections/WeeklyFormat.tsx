interface ScheduleItem {
  day: string;
  activity: string;
}

interface WeeklyFormatProps {
  title?: string;
  schedule: ScheduleItem[];
}

export const WeeklyFormat = ({
  title = "Weekly Format",
  schedule,
}: WeeklyFormatProps) => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border text-center"
              >
                <div className="h-12 w-12 rounded-full gradient-sky flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.day}</h3>
                <p className="text-sm text-muted-foreground">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
