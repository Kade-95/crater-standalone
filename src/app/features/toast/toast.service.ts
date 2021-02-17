import { Injectable } from "@angular/core";
import { Toast } from "@app/features/toast/toast.model";
import { AppState } from "@app/store";
import { AddToast } from "@app/features/toast/store/toast.action";
import { Store } from "@ngrx/store";

@Injectable()
export class ToastService {
    constructor(
        private store: Store<AppState>
    ) { }

    showMessage(message: Toast) {
        message.timeStamp = message.timeStamp ? message.timeStamp : 5;
        this.store.dispatch(new AddToast(message));
    }
}