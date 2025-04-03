import Image from "next/image";

export default function HHLogo() {
  return (
    <Image
      src="/handcraftedHaven.svg"
      alt="Handcrafted Have Logo"
      width={230}
      height={80}
      priority
    />
  );
}