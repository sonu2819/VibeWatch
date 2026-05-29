import { Helmet } from "react-helmet-async";

export default function Features() {
  return (
    <>
      <Helmet>
        <title>ShreeWave Features | Real-Time Watch Together</title>

        <meta
          name="description"
          content="Explore ShreeWave features including real-time video sync, live chat, easy room sharing, online presence, and mobile-friendly watch together experience."
        />

        <meta
          name="keywords"
          content="ShreeWave features, watch together app, realtime sync, live chat, online watch party"
        />

        <meta name="author" content="ShreeWave" />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="ShreeWave Features | Watch Together Platform"
        />

        <meta
          property="og:description"
          content="Discover ShreeWave features like synced video playback, live chat, online status, and instant room sharing."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://shreewave.vercel.app/features"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="ShreeWave Features"
        />

        <meta
          name="twitter:description"
          content="Explore the features of the ShreeWave watch together platform."
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://shreewave.vercel.app/features"
        />
      </Helmet>

      <div className="page">
        <h1>Features</h1>

        <div className="features-grid">

          <div className="feature-card">
            <h3>⚡ Real-time Sync</h3>
            <p>
              Watch videos together with perfectly synced playback.
            </p>
          </div>

          <div className="feature-card">
            <h3>💬 Live Chat</h3>
            <p>
              Chat with friends while watching videos.
            </p>
          </div>

          <div className="feature-card">
            <h3>🟢 Online Status</h3>
            <p>
              See who is online or offline instantly in your room.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔗 Easy Sharing</h3>
            <p>
              Share room links instantly with anyone.
            </p>
          </div>

          <div className="feature-card">
            <h3>📱 Mobile Friendly</h3>
            <p>
              Works smoothly on desktop and mobile devices.
            </p>
          </div>

          <div className="feature-card">
            <h3>🎬 YouTube Support</h3>
            <p>
              Paste YouTube links instantly and start watching together.
            </p>
          </div>

          <div className="feature-card">
            <h3>🚀 Fast Rooms</h3>
            <p>
              Create or join watch rooms instantly with no signup required.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔒 Private Rooms</h3>
            <p>
              Watch securely with friends using unique room links.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}