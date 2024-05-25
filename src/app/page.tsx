import ChannelLink from "@/components/ChannelLink";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen min-w-0 max-w-xl flex-col justify-center">
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4">
        <ChannelLink
          channelName="Built With Code"
          subscriberCount={2.5}
          subscriberUnits="k"
        />
        <ChannelLink
          channelName="Olivier Larose"
          subscriberCount={17}
          subscriberUnits="k"
        />
        <ChannelLink
          channelName="Lee Robinson"
          subscriberCount={55}
          subscriberUnits="k"
        />
        <ChannelLink
          channelName="Theo - t3.gg"
          subscriberCount={285}
          subscriberUnits="k"
        />
        <ChannelLink
          channelName="Marques Brownlee"
          subscriberCount={19}
          subscriberUnits="M"
        />
      </div>
    </main>
  );
}
