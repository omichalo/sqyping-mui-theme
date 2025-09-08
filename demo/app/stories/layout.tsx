import { StoryLayout } from "../../components/StoryLayout";

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoryLayout>{children}</StoryLayout>;
}
