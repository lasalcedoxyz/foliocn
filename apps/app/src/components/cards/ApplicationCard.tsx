import type { JobPost } from '@foliocn/types'

interface Props {
    data: JobPost;
}

export function JobCard({ data }: Props){
    return (
        <article className="flex flex-col p-3 gap-3 border rounded-md">
            <h4>{data.title}</h4>
        </article>
    )
}