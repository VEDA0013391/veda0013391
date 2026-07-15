import Image, { type ImageProps } from "next/image";
import basePath from "@/app/lib/basePath";

type MyImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export default function MyImage({
  src,
  ...props
}: MyImageProps) {
  const imageSrc = src.startsWith("/")
    ? `${basePath}${src}`
    : src;

  return <Image {...props} src={imageSrc} />;
}