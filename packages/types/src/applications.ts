import { JobPost } from "./job";

export type Application = {
  id: string;
  job: JobPost;
  applicationDate: string;
}
