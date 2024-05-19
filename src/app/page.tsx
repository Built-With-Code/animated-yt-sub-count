import ChannelLink from "@/components/ChannelLink";

export default function Home() {
  return (
    <main className="min-w-0 max-w-2xl mx-auto">
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink />
        <ChannelLink />
      </div>
    </main>
  );
}
