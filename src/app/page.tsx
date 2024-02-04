import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
      <div className="max-w-screen-lg">
        <h1 className="text-4xl font-bold pb-5">Pixelix Privacy Policy</h1>
        <p className="pb-5">
          Pixelix does not collect any usage data or personal information from
          its users.
        </p>
        <p className="pb-5">
          Data from connected accounts is only stored locally on the device when
          it is required for functionality and performance of Pixelix. This data
          is strictly confidental and cannot be accessed by other apps (on
          non-rooted devices). It can be deleted by clearing Pixelix&apos;s local
          storage or uninstalling the app.
        </p>
        <p className="pb-5">
          Keep in mind that the Pixelfed instance(s) you use Pixelix with have
          their own privacy policies. You can usually find them linked somewhere
          on the homepage of the instance.
        </p>
      </div>
    </main>
  );
}
