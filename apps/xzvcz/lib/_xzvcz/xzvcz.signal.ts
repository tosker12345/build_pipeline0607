
import { endpoint, internal } from "akanjs/signal";

import * as srv from "../srv";

export class XzvczInternal extends internal(srv.xzvcz, () => ({})) {}

export class XzvczEndpoint extends endpoint(srv.xzvcz, () => ({})) {}
  