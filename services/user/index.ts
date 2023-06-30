import { apiRequest } from "../ofetch";

export default {
  async updateAccount(payload: any) {
    return await apiRequest("users/me", { method: "PATCH", body: payload });
  },

  async getTimeline(username: any) {
    return await apiRequest(`users/timeline?username=${username}`, {
      method: "GET",
    });
  },

  async uploadMedia(payload: any) {
    let formData = new FormData();
    formData.append("profile_pic", payload);

    return await apiRequest("users/media", {
      method: "POST",
      body: formData,
      headers: {
        // "Content-Type": "multipart/form-data"
      },
    });
  },

  async getMe() {
    return await apiRequest("users/me", { method: "GET" ,
    headers: { Accept: "application/json" },
}
    
    );
  },
  async getUser(username: any) {
    //console.log(username);
    return await apiRequest(`users/${username}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
  },

  async getUserConnects(username: any) {
    return await apiRequest(`users/${username}/connects`, { method: "GET",
    headers: { Accept: "application/json" },
});
  },

  async getUserFollowings(username: any) {
    return await apiRequest(`users/${username}/followings`, { method: "GET",
    headers: { Accept: "application/json" },
});
  },

  async getUserFollowers(username: any) {
    return await apiRequest(`users/${username}/followers`, { method: "GET",
    headers: { Accept: "application/json" },
});
  },

  async deleteExperience(id: number) {
    return await apiRequest(`users/me/experiences/${id}`, { method: "DELETE",

    headers: { Accept: "application/json" },
});
  },
  async deleteCertificate(id: number) {
    return await apiRequest(`users/me/certifications/${id}`, {
      method: "DELETE",
    });
  },
  async deleteInterest(id: number) {
    return await apiRequest(`users/me/interests/${id}`, { method: "DELETE",
    headers: { Accept: "application/json" },
});
  },
};
