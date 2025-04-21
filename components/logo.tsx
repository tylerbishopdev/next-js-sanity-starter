import Image from "next/image";

export default function Logo()
{
	return (
		<div className="w-[100px] h-[26px] relative">
			<Image src="/images/humixlogo.png" alt="humix Logo" width={100} height={26} className=" fixed object-contain dark:invert-0 invert  dark:grayscale-0 grayscale opacity-80" />

		</div>
	);
}
