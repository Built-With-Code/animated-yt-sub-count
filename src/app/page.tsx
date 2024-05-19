import ChannelLink from "@/components/ChannelLink";

export default function Home() {
  return (
    <main className="mx-auto min-w-0 max-w-2xl">
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink channelName="Built With Code" subscriberCount={100} />
        <ChannelLink channelName="Built With Code" subscriberCount={2000} />
      </div>
    </main>
  );
}
