
import { serviceDictionary } from "akanjs/dictionary";

import type { XzvczEndpoint } from "./xzvcz.signal";

export const dictionary = serviceDictionary(["en", "ko"])
  .endpoint<XzvczEndpoint>((fn) => ({}))
  .translate({});
