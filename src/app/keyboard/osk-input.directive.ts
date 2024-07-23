import {
    Directive,
    OnInit,
    ElementRef,
    Renderer2,
    HostListener,
    forwardRef
  } from "@angular/core";
  import { KeyboardService } from "./keyboard.service";
  import { Subscription } from "rxjs";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
  
  @Directive({
    selector: "[appOskInput]",
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => OskInputDirective),
        multi: true,
      },
    ],
  })
  export class OskInputDirective implements OnInit, ControlValueAccessor{
    private keySubscription: Subscription;
    private backspaceSubscription: Subscription;
    private enterSubscription: Subscription;
    private measure: HTMLElement;
    private onChange: (value: string) => void;
  private onTouched: () => void;
  
    constructor(private el: ElementRef, private keyboard: KeyboardService) {}

    writeValue(value: any): void {
      this.el.nativeElement.value = value;
    }
  
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
  
    ngOnInit() {
      // TODO I'm sure there's an "Angular way" of doing this
      let thisStyle = window.getComputedStyle(this.el.nativeElement);
      this.measure = document.createElement("span");
      this.measure.style.position = "absolute";
      this.measure.style.right = "100%";
      this.measure.style.font = thisStyle.font;
      document.body.appendChild(this.measure);
    }
  
    @HostListener("focus")
    private onFocus() {
      this.keyboard.fireKeyboardRequested(true);
      this.subscribeToKeyboardEvents();
    }
  
    @HostListener("blur")
    private onBlur() {
      if (this.onTouched) {
        this.onTouched();
      }
      this.keyboard.fireKeyboardRequested(false);
      this.unsubscribeFromKeyboardEvents();
    }
  
    private subscribeToKeyboardEvents() {
      this.keySubscription = this.keyboard.keyPressed.subscribe(key =>
        this.onKey(key)
      );
      this.backspaceSubscription = this.keyboard.backspacePressed.subscribe(_ =>
        this.onBackspace()
      );
      this.enterSubscription = this.keyboard.enterPressed.subscribe(_ =>
        this.onEnter()
      );
    }
  
    private unsubscribeFromKeyboardEvents() {
      this.keySubscription.unsubscribe();
      this.backspaceSubscription.unsubscribe();
      this.enterSubscription.unsubscribe();
    }
  
    private onKey(key: string) {
      // TODO Refactor this into a single method with the code in onBackspace
      let element = this.el.nativeElement,
        start = element.selectionStart,
        end = element.selectionEnd;
  
      this.measure.textContent = element.value.substr(0, start) + key;
      element.value =
        element.value.substr(0, start) + key + element.value.substr(end);
      element.focus();
      element.selectionStart = element.selectionEnd = start + 1;
      if (this.onChange) {
        this.onChange(element.value);
      }
  
      this.updateScrollPosition();
    }
  
    private onBackspace() {
      let element = this.el.nativeElement,
        start = element.selectionStart,
        end = element.selectionEnd;
  
      if (start == 0) {
        return;
      }
  
      if (start == end) {
        start--;
      }
  
      this.measure.textContent = element.value.substr(0, start);
      element.value = element.value.substr(0, start) + element.value.substr(end);
      element.focus();
      element.selectionStart = element.selectionEnd = start;
      if (this.onChange) {
        this.onChange(element.value);
      }
      this.updateScrollPosition();
    }
  
    private updateScrollPosition() {
      let element = this.el.nativeElement;
      element.scrollLeft = this.measure.offsetWidth - (element.clientWidth - 10);
    }
  
    private onEnter() {
      // TODO
      alert("Enter");
    }
  }
  