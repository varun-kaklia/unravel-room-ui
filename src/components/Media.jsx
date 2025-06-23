import React, { useEffect, useRef } from 'react';
import useInViewport from '../hooks/useInViewport';

export default function Media({ room }) {
    const [ref, inView] = useInViewport({ threshold: 0.25 });
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (inView) videoRef.current.play().catch(() => { });
            else videoRef.current.pause();
        }
    }, [inView]);

    const showVideo = !!room.video_url;
    const showImage = !showVideo && room.room_images?.length;

    return (
        <div ref={ref} className="aspect-video rounded-xl overflow-hidden bg-neutral">
            {showVideo && inView && (
                <video
                    ref={videoRef}
                    src={room.video_url}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="none"
                />
            )}

            {showImage && inView && (
                <img
                    src={room.room_images[1] || room.room_images[0]}
                    alt={room.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    srcSet={`
  ${room.room_images[2] || room.room_images[0]} 480w,
  ${room.room_images[1] || room.room_images[0]} 800w,
  ${room.room_images[0]} 1200w
`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            )}

            {!inView && (
                <div className="w-full h-full animate-pulse bg-gray-200 dark:bg-gray-700" />
            )}
        </div>
    );
}