import type { JobPost } from "@foliocn/types";

interface Props {
  data: JobPost;
}

export function JobPostCard({ data }: Props) {
  return (
    <div className="w-full max-w-2xs flex flex-col p-5 bg-card border rounded-md">
      <h4 className="text-sm">{data.title}</h4>
      <p className="text-xs">{data.company.name}</p>
    </div>
  )
}
