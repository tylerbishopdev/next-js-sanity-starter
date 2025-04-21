import Image from "next/image";

export default function AdminLogo()
{
	return (
		<div className="w-full align-middle items-middle">
			<Image src="/images/2.png" alt="Ezoic Logo" width={100} height={26} className=" flex  " />
		</div>
	);
}
