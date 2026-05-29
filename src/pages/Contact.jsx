import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact ShreeWave | Watch Together Support</title>

        <meta
          name="description"
          content="Contact ShreeWave for support, feedback, bug reports, feature requests, or business inquiries."
        />

        <meta
          name="keywords"
          content="ShreeWave contact, watch together support, online watch party help, ShreeWave support"
        />

        <meta name="author" content="ShreeWave" />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact ShreeWave | Watch Together Platform"
        />

        <meta
          property="og:description"
          content="Get in touch with ShreeWave for support, feedback, and inquiries."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://shreewave.vercel.app/contact"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Contact ShreeWave"
        />

        <meta
          name="twitter:description"
          content="Contact the ShreeWave team for support and feedback."
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://shreewave.vercel.app/contact"
        />
      </Helmet>

      <div className="page">
        <h1>Contact ShreeWave</h1>

        <p className="page-text">
          Have questions, feedback, bug reports, or suggestions
          for ShreeWave? Feel free to contact us anytime.
          <br />
          <br />
          📧 Email: <strong>merestro106@email.com</strong>
        </p>
      </div>
    </>
  );
}