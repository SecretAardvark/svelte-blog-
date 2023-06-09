import { writable } from "svelte/store";


export interface Post { 
  id: number;
  title: string;
  body: string;
}
  

export const Posts = writable<Post[]>([]);

let dummyPost = {
  id: 0,
  title: "Bitcoin white paper",
  body: "The bitcoin whitepaper, written by Satoshi Nakamoto in 2008, describes a peer-to-peer electronic payment system that is decentralized and enables financial transfers without a bank. It is regarded as the start of the cryptocurrency movement and is included as a sample document for an application called Virtual Scanner II,' which is either hidden or not installed on MacOS."
}
let dummyPost2 = {
  id: 1,
  title: "lorem ipsum",
  body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
}
Posts.update((Posts) => [...Posts, dummyPost, dummyPost2])

export default Posts