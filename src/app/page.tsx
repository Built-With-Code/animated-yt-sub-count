import ChannelLink from "@/components/ChannelLink";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen min-w-0 max-w-xl flex-col justify-center">
      <div className="flex w-full flex-col gap-4">
        <ChannelLink
          channelName="Built With Code"
          profileImg="/bwc.png"
          subscriberCount={2.5}
          subscriberUnits="k"
        />
        <ChannelLink
          channelName="Olivier Larose"
          profileImg="/olivier.jpg"
          subscriberCount={17}
          subscriberUnits="k"
        />
        <ChannelLink
          channelName="Lee Robinson"
          profileImg="/leerob.jpg"
          subscriberCount={55}
          subscriberUnits="k"
        />
        <ChannelLink
          channelName="Theo - t3.gg"
          profileImg="/theo.jpg"
          subscriberCount={285}
          subscriberUnits="k"
        />
        <ChannelLink
          channelName="Marques Brownlee"
          profileImg="/mkbhd.jpg"
          subscriberCount={19}
          subscriberUnits="M"
        />
      </div>
    </main>
  );
}
