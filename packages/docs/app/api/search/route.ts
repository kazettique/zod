import { source } from "@/loaders/source";
import { createFromSource } from "fumadocs-core/search/server";

export const { GET } = createFromSource(source, undefined, {
  // Map zh-tw to english since Orama doesn't support Chinese
  localeMap: {
    "zh-tw": "english",
  },
});
