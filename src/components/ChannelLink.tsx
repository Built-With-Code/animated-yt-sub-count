"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

import ArrowIcon from "@/../public/arrow.svg";
import YTIcon from "@/../public/yt.svg";

const ChannelLink = ({
  channelName,
  profileImg,
  subscriberCount,
  subscriberUnits = "",
}: {
  channelName: string;
  profileImg: string;
  subscriberCount: number;
  subscriberUnits?: string;
}) => {
  const [displaySubs, setDisplaySubs] = useState(0);

  // Animating sub count from 0 to subscriberCount prop
  const springSubCount = useSpring(0, {
    bounce: 0,
    duration: 1000,
  });

  springSubCount.on("change", (value) => {
    setDisplaySubs(Math.round(value));
  });

  useEffect(() => {
    springSubCount.set(subscriberCount);
  }, []);

  return (
    <div className="group rounded bg-neutral-800">
      <motion.a
        href="#"
        className="flex items-center justify-between p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              alt={channelName}
              src={profileImg}
              height={64}
              width={64}
              className="h-16 w-16 rounded-full border border-neutral-700 object-cover"
            />
            <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-700 bg-white p-1">
              <YTIcon />
            </div>
          </div>
          <div>
            <p className="font-medium text-neutral-200">{channelName}</p>
            <p className="text-sm text-neutral-400">
              {displaySubs}
              {subscriberUnits} Subscribers
            </p>
          </div>
        </div>
        <ArrowIcon className="fill-neutral-300 transition-all duration-300 group-hover:-rotate-[15deg] group-hover:fill-neutral-400" />
      </motion.a>
    </div>
  );
};

export default ChannelLink;
