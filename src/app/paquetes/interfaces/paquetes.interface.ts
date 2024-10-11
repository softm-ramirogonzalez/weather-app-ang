export interface Paquetes {
  total:   number;
  results: Result[];
}

export interface Result {
  package:     Package;
  score:       Score;
  searchScore: number;
  flags?:      Flags;
}

export interface Flags {
  unstable: boolean;
}

export interface Package {
  name:        string;
  scope:       Scope;
  version:     string;
  description: string;
  keywords?:   string[];
  date:        Date;
  links:       Links;
  author?:     Author;
  publisher:   Publisher;
  maintainers: Publisher[];
}

export interface Author {
  name: string;
}

export interface Links {
  npm:         string;
  homepage?:   string;
  repository?: string;
  bugs?:       string;
}

export interface Publisher {
  username: Scope;
  email:    Email;
}

export enum Email {
  AngularCoreNpmGoogleCOM = "angular-core+npm@google.com",
  AngularfireMaintainersGoogleCOM = "angularfire-maintainers@google.com",
  DevopsNpmAngularIo = "devops+npm@angular.io",
  NodeTeamNpmWombotGoogleCOM = "node-team-npm+wombot@google.com",
}

export enum Scope {
  Angular = "angular",
  Angularfire2 = "angularfire2",
  GoogleWombot = "google-wombot",
}

export interface Score {
  final:  number;
  detail: Detail;
}

export interface Detail {
  quality:     number;
  popularity:  number;
  maintenance: number;
}
