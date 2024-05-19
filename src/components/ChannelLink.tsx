"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import ArrowIcon from "@/../public/arrow.svg";
import { animate } from "framer-motion";

const ChannelLink = ({ subscriberCount }: { subscriberCount: number }) => {
  const [displaySubs, setDisplaySubs] = useState(0);

  useEffect(() => {
    const controls = animate(0, subscriberCount, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (value) => {
        setDisplaySubs(Math.round(value));
      },
    });

    return () => {
      controls.stop();
    };
  }, []);

  return (
    <div className="group flex w-full">
      <a
        href={"#"}
        target="_blank"
        className="flex w-full items-center justify-between rounded border  border-neutral-700 bg-neutral-800 px-3 py-4"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={"YouTube Profile picture"}
              src={"/profile.png"}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-700"
              priority
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-700 bg-white p-1">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-100">{"Built With Code"}</p>
            <p className="text-neutral-400">{displaySubs} subscribers</p>
          </div>
        </div>
        <div className="transform text-neutral-300 transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
};

export default ChannelLink;
