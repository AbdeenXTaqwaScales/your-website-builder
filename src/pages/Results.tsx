import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

// All videos combined - no categorization
const allVideos = [
  { title: "Muhsin", videoId: "4948b27c4bc24f22845c0109a2b66957" },
  { title: "Javed", videoId: "e16da8c0453541ce97ac297ec3cfb239" },
  { title: "Rahmah", videoId: "4fe4358489d84f3d910fdf44ce063e77" },
  { title: "Hafsah", videoId: "f3c6a2acfe15492fb7c9718c01f4c95f" },
  { title: "Amirah", videoId: "6045e1caf3b741d3ac9b63d39d94823f" },
  { title: "Abdurrahman", videoId: "1585ce2993e1411bbfbc1db61ae39230" },
  { title: "Abdullah", videoId: "282a43ff02cc4cf7b23e2dbd638b4ca9" },
  { title: "Musa", videoId: "24115e41c17d40158e9c2aaa9b33ec28" },
];

const VideoCard = ({ title, videoId }: { title: string; videoId: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://cdn.loom.com/sessions/thumbnails/${videoId}-with-play.gif`;

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative bg-muted">
        {isPlaying ? (
          <iframe
            src={`https://www.loom.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="absolute top-0 left-0 w-full h-full z-10 animate-fade-in"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            aria-label={`Play video: ${title}`}
          >
            {/* Thumbnail image */}
            <img
              src={thumbnailUrl}
              alt={`${title}'s video thumbnail`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            {/* Play button overlay */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300 z-10">
              <Play className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
            {/* Title overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="text-sm font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                {title}'s Story
              </span>
            </div>
          </button>
        )}
      </div>
      <CardContent className="p-4">
        <h4 className="font-medium text-foreground">{title}</h4>
      </CardContent>
    </Card>
  );
};

const Results = () => {
  return (
    <Layout>
      <PageHero
        title="Student Results"
        description="Watch real stories from our students who transformed their Qur'anic journey"
      />

      {/* Videos Section - All Together */}
      <section className="py-8 sm:py-12 md:py-16 bg-secondary/20">
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
                <VideoCard key={index} title={video.title} videoId={video.videoId} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default Results;
