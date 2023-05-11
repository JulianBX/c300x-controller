"use strict";

const Api = require('./lib/api')
const MulticastListener = require("./lib/multicast-listener");
const udpProxy = require('./lib/udp-proxy')
const EndpointRegistry = require('./lib/endpoint-registry')

const registry = EndpointRegistry.create()
Api.create(registry)
udpProxy.create()
MulticastListener.create(registry)
