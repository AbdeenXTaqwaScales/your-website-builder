import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";

// All videos combined - no categorization
const allVideos = [
  { title: "Muhsin", embedUrl: "https://www.loom.com/embed/4948b27c4bc24f22845c0109a2b66957" },
  { title: "Javed", embedUrl: "https://www.loom.com/embed/e16da8c0453541ce97ac297ec3cfb239" },
  { title: "Rahmah", embedUrl: "https://www.loom.com/embed/4fe4358489d84f3d910fdf44ce063e77" },
  { title: "Hafsah", embedUrl: "https://www.loom.com/embed/f3c6a2acfe15492fb7c9718c01f4c95f" },
  { title: "Amirah", embedUrl: "https://www.loom.com/embed/6045e1caf3b741d3ac9b63d39d94823f" },
  { title: "Abdurrahman", embedUrl: "https://www.loom.com/embed/1585ce2993e1411bbfbc1db61ae39230" },
  { title: "Abdullah", embedUrl: "https://www.loom.com/embed/282a43ff02cc4cf7b23e2dbd638b4ca9" },
  { title: "Musa", embedUrl: "https://www.loom.com/embed/24115e41c17d40158e9c2aaa9b33ec28" },
];

const Results = () => {
  return (
    <Layout>
      <PageHero
        title="Student Results"
        description="Watch real stories from our students who transformed their Qur'anic journey"
      />

      {/* Videos Section - All Together */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Student Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our students about their learning experiences.
            </p>
          </div>

          {allVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative bg-muted">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-foreground">{video.title}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default Results;
