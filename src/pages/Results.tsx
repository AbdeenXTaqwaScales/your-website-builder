import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import muhsinThumbnail from "@/assets/thumbnails/muhsin.png";
import javedThumbnail from "@/assets/thumbnails/javed.png";
import rahmahThumbnail from "@/assets/thumbnails/rahmah.png";
import hafsahThumbnail from "@/assets/thumbnails/hafsah.png";
import amirahThumbnail from "@/assets/thumbnails/amirah.png";

// All videos combined - no categorization
const allVideos = [
  { title: "Muhsin", videoId: "4948b27c4bc24f22845c0109a2b66957", customThumbnail: muhsinThumbnail },
  { title: "Javed", videoId: "e16da8c0453541ce97ac297ec3cfb239", customThumbnail: javedThumbnail },
  { title: "Rahmah", videoId: "4fe4358489d84f3d910fdf44ce063e77", customThumbnail: rahmahThumbnail },
  { title: "Hafsah", videoId: "f3c6a2acfe15492fb7c9718c01f4c95f", customThumbnail: hafsahThumbnail },
  { title: "Amirah", videoId: "6045e1caf3b741d3ac9b63d39d94823f", customThumbnail: amirahThumbnail },
  { title: "Abdurrahman", videoId: "1585ce2993e1411bbfbc1db61ae39230" },
  { title: "Abdullah", videoId: "282a43ff02cc4cf7b23e2dbd638b4ca9" },
  { title: "Musa", videoId: "24115e41c17d40158e9c2aaa9b33ec28" },
];

const VideoCard = ({ title, videoId, customThumbnail }: { title: string; videoId: string; customThumbnail?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = customThumbnail || `https://cdn.loom.com/sessions/thumbnails/${videoId}-with-play.gif`;

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative bg-muted">
        {isPlaying ? (
          <iframe
            src={`https://www.loom.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-full h-full relative group cursor-pointer"
          >
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-colors">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
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
                <VideoCard key={index} title={video.title} videoId={video.videoId} customThumbnail={video.customThumbnail} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default Results;
