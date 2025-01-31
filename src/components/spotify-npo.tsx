export function SpotifyNPO() {
  return (
    <div className="flex items-center overflow-hidden h-[90px] rounded-xl">
      <div className="flex-grow -mx-3 overflow-hidden rounded-xl h-[115px] flex items-stretch justify-center">
        <iframe
          className="flex-grow"
          src={`https://spotify-now-playing-overlay.vercel.app/spotify?id=${encodeURIComponent(
            'mikeycabana@gmail.com',
          )}&size=sm`}
        ></iframe>
      </div>
    </div>
  )
}
