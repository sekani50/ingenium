import { apiRequest } from "../ofetch";

export default {
  async postJob(payload) {
    return await apiRequest("/hiring/jobadvert", {
      method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    });
  },
  async allJobs() {
    return await apiRequest("/hiring/all_jobadvert", {
      method: "GET",
      headers: { Accept: "application/json" },
    });
  },
  async getSingleJob(id) {
    return await apiRequest(`/hiring/jobadvert/${id}`, {
        method: "GET",
        headers: { Accept: "application/json" },
    });
  },
  async applyforJob(payload) {
    return await apiRequest(`/hiring/applicant_apply`, {
        method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    })
  },
  async jobApplicants() {
    return await apiRequest("/hiring/jobapplicant", {
        method: "GET",
        headers: { Accept: "application/json" },
    })
  }
};
