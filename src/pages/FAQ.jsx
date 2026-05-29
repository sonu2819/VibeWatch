import { Helmet } from "react-helmet-async";

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ | ShreeWave Watch Together</title>

        <meta
          name="description"
          content="Frequently asked questions about ShreeWave watch together platform, synced video playback, live chat, private rooms, and more."
        />

        <meta
          name="keywords"
          content="ShreeWave FAQ, watch together questions, synced video help, online watch party"
        />

        <meta name="author" content="ShreeWave" />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="ShreeWave FAQ | Watch Together Platform"
        />

        <meta
          property="og:description"
          content="Answers to common questions about ShreeWave and synced video watching."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://shreewave.vercel.app/faq"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="ShreeWave FAQ"
        />

        <meta
          name="twitter:description"
          content="Frequently asked questions about the ShreeWave platform."
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://shreewave.vercel.app/faq"
        />
      </Helmet>

      <div className="page">

        <h1>Frequently Asked Questions</h1>

        <div className="faq-section">

          <div className="faq-item">
            <h3>🎬 What is ShreeWave?</h3>

            <p>
              ShreeWave is a real-time watch together
              platform that lets users sync YouTube
              videos and watch with friends online.
            </p>
          </div>

          <div className="faq-item">
            <h3>💬 Does ShreeWave include live chat?</h3>

            <p>
              Yes, users can chat together while
              watching videos in synced rooms.
            </p>
          </div>

          <div className="faq-item">
            <h3>📱 Does it work on mobile?</h3>

            <p>
              Yes, ShreeWave works smoothly on both
              desktop and mobile devices.
            </p>
          </div>

          <div className="faq-item">
            <h3>🔒 Are rooms private?</h3>

            <p>
              Rooms are accessible only through
              the shared room link or room code.
            </p>
          </div>

          <div className="faq-item">
            <h3>⚡ Is signup required?</h3>

            <p>
              No signup is required. Users can
              create and join rooms instantly.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}