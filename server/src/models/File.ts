export interface IFile {
  _id?: string;
  projectId: string;
  name: string;
  content: string;
  folderId?: string | null;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFolder {
  _id?: string;
  projectId: string;
  name: string;
  parentId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}