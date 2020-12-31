import type firebase from "firebase";

export type Timestamp = firebase.firestore.Timestamp;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type FirebaseType<T extends { createdAt: number }> = Omit<T, "createdAt"> & { createdAt: Timestamp };
