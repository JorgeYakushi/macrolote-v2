import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { regexEmail, regexNames, regexNumbers } from '@shared/constants/regex';
import { Router } from '@angular/router';
import { CustomerService } from '@core/services/customer/customer.service';
import { dropdown, inputControls } from '../../shared/constants/form-data';
import { LoadingService } from '@core/services/loading/loading.service';
import { SharedService } from '@core/services/shared/shared.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  @Output() showLoading = new EventEmitter<boolean>();
  @Output() hideLoading = new EventEmitter<boolean>();
  selectOptions: any;
  @Input() formHome: boolean;
  @Input() formContact: boolean;
  @Input() formContactUs: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private loadingService: LoadingService,
    private sharedService: SharedService
  ) {}
  loading: boolean = false;
  isSubmitted: boolean = false;
  inputControls = inputControls;
  ngOnInit(): void {
    this.initialForm();
    this.getTerrains();
  }
  initialForm(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(regexNames),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(regexNames),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(regexEmail),
      ]),
      mobilePhone: new FormControl('', [
        Validators.required,
        Validators.pattern(regexNumbers),
      ]),
      landOfInterestId: new FormControl(0, [Validators.required]),
      message: new FormControl(''),
      acceptedTOS: new FormControl(false, [Validators.requiredTrue]),
      acceptedPP: new FormControl(false, [Validators.requiredTrue]),
    });
  }
  getTerrains(): void {
    this.customerService.get().subscribe(
      (res) => {
        this.selectOptions = res;
      },
      (error) => {}
    );
  }
  submitForm(): void {
    this.isSubmitted = true;
    let body = this.formGroup.getRawValue();
    if (this.formGroup.status === 'VALID' && body.landOfInterestId !== 0) {
      body.landOfInterestName = this.selectOptions.find(
        (x) => x.id === body.landOfInterestId
      ).name;
      this.sendLead(body);
    }
  }
  sendLead(body: any): void {
    this.loadingService.showLoading();
    let utmParams = this.sharedService.getUtmParams();
    body = {
      ...body,
      ...utmParams,
    };
    this.customerService.post(body).subscribe(
      (res) => {
        console.log(body);
        this.loadingService.hideLoading();
        window.location.href = 'gracias';
      },
      (error) => {
        this.loadingService.hideLoading();
      }
    );
  }
  get f() {
    return this.formGroup.controls;
  }
  onKeyPressNumber(e): boolean {
    let reg = regexNumbers;
    let pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!reg.test(pressedKey)) {
      e.preventDefault();
      return false;
    }
  }
}
