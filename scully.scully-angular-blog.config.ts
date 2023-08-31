import {ScullyConfig} from "@scullyio/scully";

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-angular-blog",
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },

  }
}
