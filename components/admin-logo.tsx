import Image from "next/image";

export default function AdminLogo()
{
  return (
    <div className="w-[25px] h-[25px] relative">
		<Image src="/images/marketlogo.png" alt="Ezoic Logo" width={100} height={26} className=" flex object-contain " />
    </div>
  );
}
