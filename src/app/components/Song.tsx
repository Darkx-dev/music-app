/* eslint-disable @next/next/no-img-element */
import song1 from "@/assets/images/song1.png";
import Image from "next/image";
export default function Song({ title, artist, cover }: any) {
  const trimString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };
  return (
    <div className="song__card flex flex-nowrap items-center">
      <div className="song__image w-24 overflow-hidden rounded-2xl">
        <img
          src={
            cover
              ? cover
              : "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGs2bmFrNnJhNjdpZjJkeGNqeXdtdmY1czQzY3Rnbm9raWdoZTBjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5SzrnYJissgypId4W9/giphy.gif"
          }
          alt="Song Preview"
          className="object-center object-cover w-full h-full"
        />
      </div>
      <div className="song__info px-5 font-light flex flex-col justify-evenly py-3 h-full">
        <h1 className="song__title text-base font-normal">{title?trimString(title, 20):'Nigga Pro Max'}</h1>
        <p className="song__artist text-xs text-[#DEDEDE]">{artist?trimString(artist, 20):'Nigga died'}</p>
        <p className="song__views text-xs text[#DEDEDE]">
          <span className="song__views__cound">114k</span>/ streams
        </p>
      </div>
    </div>
  );
}
