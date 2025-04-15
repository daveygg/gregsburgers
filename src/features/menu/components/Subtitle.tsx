interface SubtitleProps {
    text: string;
  }
  
  export default function Subtitle({ text }: SubtitleProps) {
    return (
      <div className="w-full flex justify-center mt-4 mb-2">
        <div className="flex flex-col flex-1/3 mx-4">
          <div className="border-2 flex-1/2 outline-0 border-transparent border-b-black" />
          <div className="border-2 flex-1/2 outline-0 border-transparent" />
        </div>
        <h2 className="text-3xl items-center justify-center text-center align-middle font-organical">{text}</h2>
        <div className="flex flex-col flex-1/3 mx-4">
          <div className="border-2 flex-1/2 outline-0 border-transparent border-b-black" />
          <div className="border-2 flex-1/2 outline-0 border-transparent" />
        </div>
      </div>
    );
  }