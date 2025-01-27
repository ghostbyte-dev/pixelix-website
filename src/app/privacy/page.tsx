import Link from "next/link";

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24 text-[#101318] bg-fixed bg-gradient-to-tr from-[#D4DD46] to-[#7FB246]">
      <div className="max-w-screen-lg">

        <span>
          <Link href="/" className="mb-5 inline-block hover:underline">
        Home
        </Link>
        <span className="pl-1 text-gray-800">/ Privacy Policy</span>
        
        </span>
        

        <h1 className="text-3xl md:text-5xl font-bold pb-5">Privacy Policy for Pixelix</h1>
        <p>
          <strong>Last updated: </strong> 26.01.2025
        </p>
        <p className="pb-5">
          At Pixelix, we prioritize your privacy and are committed to being
          transparent about how we handle your data. This Privacy Policy
          explains how Pixelix collects, uses, and protects your information
          while you use our application.
        </p>

        <h2 className="text-2xl md:text-4xl font-bold pt-5">About Pixelix</h2>
        <p className="pb-5">
          Pixelix is a third-party client for the Pixelfed social media
          platform. It allows users to interact with their Pixelfed accounts in
          an intuitive and user-friendly manner. Pixelix also retrieves publicly
          available data from FediDB to enhance the user experience. We do not
          collect, store, or share any of your personal data.
        </p>
        <p className="pb-5">
          Keep in mind that the Pixelfed instance(s) you use Pixelix with have
          their own privacy policies. You can usually find them linked somewhere
          on the homepage of the instance.
        </p>

        <h2 className="text-2xl md:text-4xl font-bold pt-5">How We Protect Your Data</h2>
        <p>Pixelix is designed to handle your data securely:</p>

        <ul className="list-disc list-inside">
          <li>
            All communications with Pixelfed servers occur over encrypted HTTPS
            connections.
          </li>
          <li>
            No user data is transmitted to Pixelix servers (we do not operate
            any servers).
          </li>
          <li>Pixelix does not log or retain any personal data.</li>
        </ul>

        <h2 className="text-2xl md:text-4xl font-bold pt-5">Third-Party Services</h2>
        <p>Pixelix interacts with:</p>

        <ol className="list-inside list-decimal">
          <li>
            <span>Pixelfed</span>
            <ul className="list-disc list-inside pl-6">
              <li className="">
                As a third-party client, Pixelix connects directly to Pixelfed
                servers to allow you to access your account and interact with
                the platform. Pixelfed handles data such as posts, followers,
                and metadata as per its privacy policy.
              </li>
            </ul>
          </li>

          <li>
            <span>FediDB</span>
            <ul className="list-disc list-inside pl-6">
              <li>
                Pixelix retrieves publicly available data from FediDB to support
                server discovery and other app features.
              </li>
            </ul>
          </li>
        </ol>

        <p>Neither Pixelfed nor FediDB shares your personal data with Pixelix beyond what is necessary for app functionality.</p>

        <h2 className="text-2xl md:text-4xl font-bold pt-5">Your Privacy Choices</h2>

        <p>You have control over your data while using Pixelix:</p>

        <ul className="list-disc list-inside">
          <li>
            You can log out of your Pixelfed account at any time to stop the app
            from retrieving account-related data.
          </li>

          <li>
            You can uninstall the app to remove all locally stored data from
            your device.
          </li>
        </ul>

        <h2 className="text-2xl md:text-4xl font-bold pt-5">
          Changes to This Privacy Policy
        </h2>

        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our practices or for other operational, legal, or regulatory reasons.
          We encourage you to review this policy regularly.
        </p>

        <h2 className="text-2xl md:text-4xl font-bold pt-5">Contact us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how
          Pixelix handles your data, please contact us at:
        </p>

        <p>Email: hiebeler.daniel@gmail.com</p>
      </div>
    </main>
  );
}
