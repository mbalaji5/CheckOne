export class userDetails{
 login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string ;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: boolean;
  name: string;
  company: string;
  blog: string ;
  location: string;
  email: string ;
  hireable: string;
  bio: string;
  twitterUsername: string;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  createdAt: string;
  updatedAt: string 
}

export interface userList{
  total_count : number;
  incomplete_results:boolean;
  items :userDetails[]
}