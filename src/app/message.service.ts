import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }

  messages: string[] = [];

  // 添加信息
  add(message: string): void {
    this.messages.push(message);
  }

  // 清空信息
  clear(): void {
    this.messages = [];
  }
}
