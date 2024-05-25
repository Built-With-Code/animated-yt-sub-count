import ChannelLink from "@/components/ChannelLink";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen min-w-0 max-w-xl flex-col justify-center">
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4">
        <ChannelLink channelName="Built With Code" subscriberCount={100} />
        <ChannelLink channelName="Built With Code" subscriberCount={2000} />
      </div>
    </main>
  );
}
