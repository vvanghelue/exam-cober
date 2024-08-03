import type { Express } from "express";
import { getJobList } from "../services/jobijoba-client";

export default function (app: Express) {
  // #####################
  // ## LIST JOB OFFERS ##
  // #####################
  app.get("/api/job-offers-list", async (req, res) => {
    const what = req.query.what?.toString() || "";
    const where = req.query.where?.toString() || "";
    const limit = 10;
    const page = 1;
    const jobListResponse = await getJobList(what, where, limit, page);
    res.json({
      total: jobListResponse.data.total,
      ads: jobListResponse.data.ads,
    });
  });
}
