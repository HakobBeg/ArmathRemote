import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {AuthService} from '../../services/auth/auth.service';
import {ChatService} from '../../services/chat/chat.service';
import {Message} from '../../Models/messageModel';
import {showAnimation} from '../../Animations/simpleAnimations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [showAnimation]
})
export class ChatComponent implements OnInit {

  chatForm: FormGroup;
  messages: Message[] = [];

  constructor(public authSv: AuthService, public chatSv: ChatService) {
  }

  onSubmit() {
    this.chatSv.submitMessageToChat({
      messageContent: this.chatForm.get('message').value,
      sender: this.authSv.user.displayName,
      date: Date.now()
    }).then(() => {
      this.chatForm.controls.message.setValue('');
    });
  }

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      message: new FormControl(''),
    });

    this.chatSv.getChatMessagesByName().valueChanges().subscribe((docs) => {

      this.messages = docs;
      this.messages.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;


      });


    });
  }

}
