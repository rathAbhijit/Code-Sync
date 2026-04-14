export interface Project {
  name: string;
  creator: string;
  isPublic: boolean;
  allowDownload: boolean;
  allowAutoJoin: boolean;
  joinCode?: string;
  members: Array<{ userId: string; role: string; }>; // Array of members with their userIds and roles
  description?: string;
  createdAt: string; // ISO Date
  updatedAt: string; // ISO Date
}