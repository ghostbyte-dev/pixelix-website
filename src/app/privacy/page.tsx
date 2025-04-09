export default function Privacy() {
  return (
    <>
      <div className="relative bg-linear-to-br from-lime-300 via-lime-400 to-lime-500 text-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMzAgMzBoMzBWMEgzMHYzMHpNMCA2MGgzMFYzMEgwdjMweiIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-50" />

        <section className="max-w-4xl w-4/5 mx-auto flex flex-col items-center py-[30vh]">
          <h1 className="text-3xl md:text-5xl font-bold pb-5">
            Privacy Policy
          </h1>
          <div>
            <p>
              <strong>Last updated: </strong> 26.01.2025
            </p>
            <p className="pb-5">
              At Pixelix, we prioritize your privacy and are committed to being
              transparent about how we handle your data. This Privacy Policy
              explains how Pixelix collects, uses, and protects your information
              while you use our application.
            </p>

            <h2 className="font-bold text-2xl mt-3">About Pixelix</h2>
            <p className="pb-5">
              Pixelix is a third-party client for the Pixelfed social media
              platform. It allows users to interact with their Pixelfed accounts
              in an intuitive and user-friendly manner. Pixelix also retrieves
              publicly available data from FediDB to enhance the user
              experience. We do not collect, store, or share any of your
              personal data.
            </p>
            <p className="pb-5">
              Keep in mind that the Pixelfed instance(s) you use Pixelix with
              have their own privacy policies. You can usually find them linked
              somewhere on the homepage of the instance.
            </p>

            <h2 className="font-bold text-2xl mt-3">
              How We Protect Your Data
            </h2>
            <p>Pixelix is designed to handle your data securely:</p>

            <ul className="list-disc list-inside">
              <li>
                All communications with Pixelfed servers occur over encrypted
                HTTPS connections.
              </li>
              <li>
                No user data is transmitted to Pixelix servers (we do not
                operate any servers).
              </li>
              <li>Pixelix does not log or retain any personal data.</li>
            </ul>

            <h2 className="font-bold text-2xl mt-3">Third-Party Services</h2>
            <p>Pixelix interacts with:</p>

            <ol className="list-inside list-decimal">
              <li>
                <span>Pixelfed</span>
                <ul className="list-disc list-inside pl-6">
                  <li className="">
                    As a third-party client, Pixelix connects directly to
                    Pixelfed servers to allow you to access your account and
                    interact with the platform. Pixelfed handles data such as
                    posts, followers, and metadata as per its privacy policy.
                  </li>
                </ul>
              </li>

              <li>
                <span>FediDB</span>
                <ul className="list-disc list-inside pl-6">
                  <li>
                    Pixelix retrieves publicly available data from FediDB to
                    support server discovery and other app features.
                  </li>
                </ul>
              </li>
            </ol>

            <p>
              Neither Pixelfed nor FediDB shares your personal data with Pixelix
              beyond what is necessary for app functionality.
            </p>

            <h2 className="font-bold text-2xl mt-3">Your Privacy Choices</h2>

            <p>You have control over your data while using Pixelix:</p>

            <ul className="list-disc list-inside">
              <li>
                You can log out of your Pixelfed account at any time to stop the
                app from retrieving account-related data.
              </li>

              <li>
                You can uninstall the app to remove all locally stored data from
                your device.
              </li>
            </ul>

            <h2 className="font-bold text-2xl mt-3">Child Safety Standards</h2>

            <p className="mb-2">
              Our app, Pixelix, is committed to adhering to the highest safety
              standards to protect children from sexual abuse and exploitation.
              As a third-party client for the social network Pixelfed, the
              following measures are in place:
            </p>

            <ol className="list-disc list-inside">
              <li className="mb-2">
                <strong>Content Moderation:</strong> Pixelfed implements content
                moderation mechanisms to identify and remove inappropriate or
                illegal content. Our app solely accesses and displays content
                from Pixelfed and does not host or manage any content
                independently.
              </li>

              <li className="mb-2">
                <strong>Reporting Mechanisms:</strong>
                Users can report content that violates Pixelfed’s community
                guidelines directly within the Pixelfed platform.
              </li>

              <li>
                <strong>No Hosting of Content:</strong>
                Our app does not store or host any user-generated content. All
                content is retrieved directly from the servers within the
                Pixelfed network.
              </li>
            </ol>

            <h2 className="font-bold text-2xl mt-3">
              Changes to This Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for other operational, legal, or regulatory
              reasons. We encourage you to review this policy regularly.
            </p>

            <h2 className="font-bold text-2xl mt-3">Contact us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              how Pixelix handles your data, please contact us at:
            </p>

            <p>Email: hiebeler.daniel@gmail.com</p>
          </div>
        </section>
      </div>
    </>
  );
}
