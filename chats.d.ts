export type Chat = {
  time: string;
  message: string;
};

export type Chats = Chat[];

export const chats: Chats;

export function log(chats: Chats): void;
