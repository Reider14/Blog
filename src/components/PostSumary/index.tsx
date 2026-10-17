import { formatDatetime } from "@/utils/formated-datetime";
import PostHeading from "../postHeading";
import { formatDistance, formatDistanceToNow } from "date-fns";
import { PostDate } from "../PostDate";

type PostSumaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export default function PostSumary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSumaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate dateTime={createdAt} />
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      {excerpt}
    </div>
  );
}
