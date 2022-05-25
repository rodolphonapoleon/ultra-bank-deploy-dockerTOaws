#!/usr/bin/env node
import "source-map-support/register";
import cdk = require("@aws-cdk/core");
import { TestBackend } from "../lib/awsec3_express_docker-stack";

const app = new cdk.App();
const envUSA = { account: "350776635962", region: "us-east-1" };

new TestBackend(app, "TestBackend", { env: envUSA });
app.synth();
