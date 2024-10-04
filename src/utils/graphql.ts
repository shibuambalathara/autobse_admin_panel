import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export enum ContactUsStatusType {
  Created = 'created',
  Solved = 'solved'
}

export type CreateEnquiryInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
  state: StateNames;
  status?: InputMaybe<ContactUsStatusType>;
};

export type CreateEventInput = {
  bidLock?: InputMaybe<EventBidLockType>;
  downloadableFile_filename?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  eventCategory: EventCategory;
  extraTime?: InputMaybe<Scalars['Float']['input']>;
  extraTimeTrigerIn?: InputMaybe<Scalars['Float']['input']>;
  firstVehicleEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  gapInBetweenVehicles?: InputMaybe<Scalars['Float']['input']>;
  noOfBids: Scalars['Float']['input'];
  pauseDate?: InputMaybe<Scalars['DateTime']['input']>;
  pausedTotalTime?: InputMaybe<Scalars['Float']['input']>;
  startDate: Scalars['DateTime']['input'];
  status?: InputMaybe<EventStatusType>;
  termsAndConditions: Scalars['String']['input'];
  vehicleLiveTimeIn?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateExceluploadInput = {
  file_filename: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateLocationInput = {
  name: Scalars['String']['input'];
  state: StateNames;
};

export type CreatePaymentInput = {
  amount: Scalars['Float']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  paymentFor: PaymentType;
  status?: InputMaybe<PaymentStatusType>;
};

export type CreateRecentsoldInput = {
  image: Scalars['String']['input'];
  location: Scalars['String']['input'];
  soldDate: Scalars['DateTime']['input'];
  vehicleName: Scalars['String']['input'];
};

export type CreateSellerInput = {
  GSTNumber?: InputMaybe<Scalars['String']['input']>;
  billingContactPerson?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nationalHead?: InputMaybe<Scalars['String']['input']>;
};

export type CreateStatusInput = {
  comment: Scalars['String']['input'];
  status: PaymentStatusTypes;
};

export type CreateUserInput = {
  BalanceEMDAmount?: InputMaybe<Scalars['Float']['input']>;
  aadharcard_back_image?: InputMaybe<Scalars['String']['input']>;
  aadharcard_front_image?: InputMaybe<Scalars['String']['input']>;
  accessToken?: InputMaybe<Scalars['String']['input']>;
  businessName?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  driving_license_back_image?: InputMaybe<Scalars['String']['input']>;
  driving_license_front_image?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  idProofNo?: InputMaybe<Scalars['String']['input']>;
  idProofType?: InputMaybe<UserIdProofTypeType>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  pancardNo?: InputMaybe<Scalars['String']['input']>;
  pancard_image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRoleType>;
  state?: InputMaybe<StateNames>;
  status?: InputMaybe<UserStatusType>;
  tempToken?: InputMaybe<Scalars['Float']['input']>;
  userCategory?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVehiclecategoryInput = {
  name: Scalars['String']['input'];
};

export type Enquiry = {
  __typename?: 'Enquiry';
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  message: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  state: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type EnquiryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Event = {
  __typename?: 'Event';
  bidLock?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById: Scalars['String']['output'];
  downloadableFile_filename?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['DateTime']['output'];
  eventCategory: Scalars['String']['output'];
  eventNo: Scalars['Float']['output'];
  extraTime?: Maybe<Scalars['Float']['output']>;
  extraTimeTrigerIn?: Maybe<Scalars['Float']['output']>;
  firstVehicleEndDate: Scalars['DateTime']['output'];
  gapInBetweenVehicles?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  locationId: Scalars['String']['output'];
  noOfBids: Scalars['Float']['output'];
  pauseDate?: Maybe<Scalars['DateTime']['output']>;
  pausedTotalTime?: Maybe<Scalars['Float']['output']>;
  sellerId: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  status?: Maybe<Scalars['String']['output']>;
  termsAndConditions: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicleCategoryId: Scalars['String']['output'];
  vehicleLiveTimeIn?: Maybe<Scalars['Float']['output']>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ExcelWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Excelupload = {
  __typename?: 'Excelupload';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  file_filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Location = {
  __typename?: 'Location';
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  state: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  DeleteUserHardDelete: User;
  createEnquiry: Enquiry;
  createEvent: Event;
  createExcelupload: Excelupload;
  createLocation: Location;
  createPayment: Payment;
  createRecentsold: Recentsold;
  createSeller: Seller;
  createStatus: Status;
  createUser: User;
  createVehiclecategory: VehicleCategory;
  deleteEnquiry: Enquiry;
  deleteEvent: Event;
  deleteExcelupload: Excelupload;
  deleteLocation: Location;
  deletePayment: Payment;
  deleteRecentsold: Recentsold;
  deleteSeller: Seller;
  deleteSellerHardDelete: Seller;
  deleteStatus: Status;
  deleteUser: User;
  deleteVehiclecategory: VehicleCategory;
  login: LoginResponse;
  restoreEnquiry: Enquiry;
  restoreEvent: Event;
  restoreExcelUpload: Excelupload;
  restoreLocation: Location;
  restorePayment: Payment;
  restoreSeller: Seller;
  restoreStatus: Status;
  restoreUser: User;
  restoreVehicleCategory: VehicleCategory;
  sendOtp: SendOtpResponse;
  updateEnquiry: Enquiry;
  updateEvent: Event;
  updateLocation: Location;
  updatePayment: Payment;
  updateRecentsold: Recentsold;
  updateSeller: Seller;
  updateStatus: Status;
  updateUser: User;
  updateVehicleCategory: VehicleCategory;
  verifyOtp: VerifyOtpResponse;
};


export type MutationDeleteUserHardDeleteArgs = {
  where: UserWhereUniqueInput;
};


export type MutationCreateEnquiryArgs = {
  createEnquiryInput: CreateEnquiryInput;
};


export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput;
  locationId: Scalars['String']['input'];
  sellerId: Scalars['String']['input'];
  vehicleCategoryId: Scalars['String']['input'];
};


export type MutationCreateExceluploadArgs = {
  createExceluploadInput: CreateExceluploadInput;
  eventId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCreateLocationArgs = {
  createLocationInput: CreateLocationInput;
};


export type MutationCreatePaymentArgs = {
  createPaymentInput: CreatePaymentInput;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateRecentsoldArgs = {
  createRecentsoldInput: CreateRecentsoldInput;
};


export type MutationCreateSellerArgs = {
  createSellerInput: CreateSellerInput;
};


export type MutationCreateStatusArgs = {
  createStatusInput: CreateStatusInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationCreateVehiclecategoryArgs = {
  createVehiclecategoryInput: CreateVehiclecategoryInput;
};


export type MutationDeleteEnquiryArgs = {
  where: EnquiryWhereUniqueInput;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteExceluploadArgs = {
  where: ExcelWhereUniqueInput;
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationDeletePaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type MutationDeleteRecentsoldArgs = {
  where: RecentsoldWhereUniqueInput;
};


export type MutationDeleteSellerArgs = {
  where: SellerWhereUniqueInput;
};


export type MutationDeleteSellerHardDeleteArgs = {
  where: SellerWhereUniqueInput;
};


export type MutationDeleteStatusArgs = {
  where: StatusWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteVehiclecategoryArgs = {
  where: VehicleCategoryWhereUniqueInput;
};


export type MutationLoginArgs = {
  loginInput: LoginUserInput;
};


export type MutationRestoreEnquiryArgs = {
  where: EnquiryWhereUniqueInput;
};


export type MutationRestoreEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationRestoreExcelUploadArgs = {
  where: ExcelWhereUniqueInput;
};


export type MutationRestoreLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationRestorePaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type MutationRestoreSellerArgs = {
  where: SellerWhereUniqueInput;
};


export type MutationRestoreStatusArgs = {
  where: StatusWhereUniqueInput;
};


export type MutationRestoreUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationRestoreVehicleCategoryArgs = {
  where: VehicleCategoryWhereUniqueInput;
};


export type MutationSendOtpArgs = {
  sendOtpDto: SendOtpDto;
};


export type MutationUpdateEnquiryArgs = {
  updateEnquiryInput: UpdateEnquiryInput;
  where: EnquiryWhereUniqueInput;
};


export type MutationUpdateEventArgs = {
  updateEventInput: UpdateEventInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateLocationArgs = {
  updateLocationInput: UpdateLocationInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpdatePaymentArgs = {
  updatePaymentInput: UpdatePaymentInput;
  where: PaymentWhereUniqueInput;
};


export type MutationUpdateRecentsoldArgs = {
  updateRecentsoldInput: UpdateRecentsoldInput;
  where: RecentsoldWhereUniqueInput;
};


export type MutationUpdateSellerArgs = {
  updateSellerInput: UpdateSellerInput;
  where: SellerWhereUniqueInput;
};


export type MutationUpdateStatusArgs = {
  updateStatusInput: UpdateStatusInput;
  where: StatusWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateVehicleCategoryArgs = {
  updateVehiclecategoryInput: UpdateVehiclecategoryInput;
  where: VehicleCategoryWhereUniqueInput;
};


export type MutationVerifyOtpArgs = {
  verfiyOtpDto: VerfiyOtpDto;
};

export type OtpMessageDataDto = {
  __typename?: 'OtpMessageDataDto';
  messageid: Scalars['String']['output'];
  totalcredit: Scalars['String']['output'];
  totnumber: Scalars['String']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  paymentFor?: Maybe<Scalars['String']['output']>;
  refNo?: Maybe<Scalars['Float']['output']>;
  registrationExpire?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export enum PaymentStatusType {
  Approved = 'Approved',
  Pending = 'Pending',
  Rejected = 'Rejected'
}

export enum PaymentStatusTypes {
  Approved = 'approved',
  Pending = 'pending',
  Rejected = 'rejected'
}

export enum PaymentType {
  Emd = 'Emd',
  OpenBids = 'OpenBids',
  Registrations = 'Registrations'
}

export type PaymentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  Enquiries: Array<Enquiry>;
  Enquiry: Enquiry;
  deletedEnquiries: Array<Enquiry>;
  deletedEvent: Event;
  deletedEvents: Array<Event>;
  deletedLocation: Location;
  deletedLocations: Array<Location>;
  deletedPayment: Payment;
  deletedPayments: Array<Payment>;
  deletedSeller: Seller;
  deletedSellers: Array<Seller>;
  deletedStatus: Status;
  deletedStatuses: Array<Status>;
  deletedUser?: Maybe<User>;
  deletedUsers: Array<Maybe<User>>;
  deletedVehicleCategories: Array<VehicleCategory>;
  deletedVehicleCategory: VehicleCategory;
  event: Event;
  events: Array<Event>;
  excelUpload: Excelupload;
  excelUploads: Array<Excelupload>;
  location: Location;
  locations: Array<Location>;
  payment: Payment;
  payments: Array<Payment>;
  recentSolds: Array<Recentsold>;
  seller: Seller;
  sellers: Array<Seller>;
  status: Status;
  statuses: Array<Status>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  vehicleCategories: Array<VehicleCategory>;
  vehicleCategory: VehicleCategory;
};


export type QueryEnquiryArgs = {
  where: EnquiryWhereUniqueInput;
};


export type QueryDeletedEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryDeletedLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryDeletedPaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type QueryDeletedSellerArgs = {
  where: SellerWhereUniqueInput;
};


export type QueryDeletedStatusArgs = {
  where: StatusWhereUniqueInput;
};


export type QueryDeletedUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryDeletedVehicleCategoryArgs = {
  where: VehicleCategoryWhereUniqueInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryExcelUploadArgs = {
  where: ExcelWhereUniqueInput;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryPaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type QuerySellerArgs = {
  where: SellerWhereUniqueInput;
};


export type QueryStatusArgs = {
  where: StatusWhereUniqueInput;
};


export type QueryUserArgs = {
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  where: UserWhereUniqueInput;
};


export type QueryVehicleCategoryArgs = {
  where: VehicleCategoryWhereUniqueInput;
};

export type Recentsold = {
  __typename?: 'Recentsold';
  image: Scalars['String']['output'];
  location: Scalars['String']['output'];
  soldDate: Scalars['DateTime']['output'];
  vehicleName: Scalars['String']['output'];
};

export type RecentsoldWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Seller = {
  __typename?: 'Seller';
  GSTNumber: Scalars['String']['output'];
  billingContactPerson: Scalars['String']['output'];
  contactPerson?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nationalHead: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SellerWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SendOtpDto = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
  pancardNo?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<StateNames>;
};

export type SendOtpResponse = {
  __typename?: 'SendOtpResponse';
  code: Scalars['String']['output'];
  data?: Maybe<OtpMessageDataDto>;
  description: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export enum StateNames {
  AndhraPradesh = 'Andhra_Pradesh',
  ArunachalPradesh = 'Arunachal_Pradesh',
  Assam = 'Assam',
  Bihar = 'Bihar',
  Chhattisgarh = 'Chhattisgarh',
  Delhi = 'Delhi',
  Goa = 'Goa',
  Gujarat = 'Gujarat',
  Haryana = 'Haryana',
  HimachalPradesh = 'Himachal_Pradesh',
  JammuAndKashmir = 'Jammu_and_Kashmir',
  Jharkhand = 'Jharkhand',
  Karnataka = 'Karnataka',
  Kerala = 'Kerala',
  MadhyaPradesh = 'Madhya_Pradesh',
  Maharashtra = 'Maharashtra',
  Manipur = 'Manipur',
  Meghalaya = 'Meghalaya',
  Mizoram = 'Mizoram',
  Nagaland = 'Nagaland',
  Odisha = 'Odisha',
  Punjab = 'Punjab',
  Rajasthan = 'Rajasthan',
  Sikkim = 'Sikkim',
  TamilNadu = 'TamilNadu',
  Telangana = 'Telangana',
  Tripura = 'Tripura',
  UttarPradesh = 'Uttar_Pradesh',
  Uttarakhand = 'Uttarakhand',
  WestBengal = 'West_Bengal'
}

export type Status = {
  __typename?: 'Status';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type StatusWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEnquiryInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<StateNames>;
  status?: InputMaybe<ContactUsStatusType>;
};

export type UpdateEventInput = {
  bidLock: EventBidLockType;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  downloadableFile_filename?: InputMaybe<Scalars['String']['input']>;
  downloadableFile_filesize?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventCategory: EventCategory;
  extraTime?: InputMaybe<Scalars['Float']['input']>;
  extraTimeTrigerIn?: InputMaybe<Scalars['Float']['input']>;
  firstVehicleEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  gapInBetweenVehicles?: InputMaybe<Scalars['Float']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  noOfBids?: InputMaybe<Scalars['Float']['input']>;
  pauseDate?: InputMaybe<Scalars['DateTime']['input']>;
  pausedTotalTime?: InputMaybe<Scalars['Float']['input']>;
  sellerId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status: EventStatusType;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vehicleCategoryId?: InputMaybe<Scalars['String']['input']>;
  vehicleLiveTimeIn?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateLocationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<StateNames>;
};

export type UpdatePaymentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  paymentFor: PaymentType;
  registrationExpire?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PaymentStatusType>;
};

export type UpdateRecentsoldInput = {
  image: Scalars['String']['input'];
  location: Scalars['String']['input'];
  soldDate: Scalars['DateTime']['input'];
  vehicleName: Scalars['String']['input'];
};

export type UpdateSellerInput = {
  GSTNumber?: InputMaybe<Scalars['String']['input']>;
  billingContactPerson?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nationalHead?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStatusInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  status: PaymentStatusTypes;
};

export type UpdateUserInput = {
  BalanceEMDAmount?: InputMaybe<Scalars['Float']['input']>;
  businessName?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  idProofNo?: InputMaybe<Scalars['String']['input']>;
  idProofType?: InputMaybe<UserIdProofTypeType>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  pancardNo?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role: UserRoleType;
  state?: InputMaybe<StateNames>;
  status?: InputMaybe<UserStatusType>;
  tempToken?: InputMaybe<Scalars['Float']['input']>;
  userCategory?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVehiclecategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  BalanceEMDAmount?: Maybe<Scalars['Float']['output']>;
  aadharcard_back_image?: Maybe<Scalars['String']['output']>;
  aadharcard_front_image?: Maybe<Scalars['String']['output']>;
  businessName: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  driving_license_back_image?: Maybe<Scalars['String']['output']>;
  driving_license_front_image?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  idNo: Scalars['Float']['output'];
  idProofNo: Scalars['String']['output'];
  idProofType: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  pancardNo: Scalars['String']['output'];
  pancard_image?: Maybe<Scalars['String']['output']>;
  payments?: Maybe<Array<Payment>>;
  role: Scalars['String']['output'];
  state: Scalars['String']['output'];
  status: Scalars['String']['output'];
  tempToken?: Maybe<Scalars['Float']['output']>;
  userCategory: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export enum UserIdProofTypeType {
  Aadhar = 'Aadhar',
  DrivingLicense = 'DrivingLicense',
  Passport = 'Passport'
}

export enum UserRoleType {
  Admin = 'admin',
  Dealer = 'dealer',
  Seller = 'seller',
  Staff = 'staff'
}

export enum UserStatusType {
  Active = 'active',
  Blocked = 'blocked',
  Inactive = 'inactive',
  Pending = 'pending'
}

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  idNo?: InputMaybe<Scalars['Float']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  tempToken?: InputMaybe<Scalars['Float']['input']>;
};

export type VehicleCategory = {
  __typename?: 'VehicleCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type VerfiyOtpDto = {
  mobile: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type VerifyOtpResponse = {
  __typename?: 'VerifyOtpResponse';
  access_token: Scalars['String']['output'];
  user: User;
};

export enum EventBidLockType {
  Locked = 'Locked',
  Unlocked = 'Unlocked'
}

export enum EventCategory {
  Online = 'Online',
  Open = 'Open'
}

export enum EventStatusType {
  Active = 'Active',
  Blocked = 'Blocked',
  Inactive = 'Inactive',
  Pause = 'Pause',
  Pending = 'Pending',
  Stop = 'Stop'
}

export type CreateSellerMutationVariables = Exact<{
  createSellerInput: CreateSellerInput;
}>;


export type CreateSellerMutation = { __typename?: 'Mutation', createSeller: { __typename?: 'Seller', name: string, contactPerson?: string | null, GSTNumber: string, billingContactPerson: string, mobile: string, nationalHead: string, logo: string } };

export type AddUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, email: string, username: string, role: string, firstName: string, lastName: string, mobile: string, status: string, city: string, pancardNo: string, BalanceEMDAmount?: number | null } };

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', id: string, name: string, state: string, createdAt?: any | null, updatedAt?: any | null, country?: string | null, createdById?: string | null }> };

export type LoginMutationVariables = Exact<{
  loginInput: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', id: string, email: string, role: string, firstName: string } } };

export type CreateEventMutationVariables = Exact<{
  vehicleCategoryId: Scalars['String']['input'];
  locationId: Scalars['String']['input'];
  createEventInput: CreateEventInput;
  sellerId: Scalars['String']['input'];
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', bidLock?: string | null, createdAt?: any | null, createdById: string, downloadableFile_filename?: string | null, endDate: any, eventCategory: string, eventNo: number, extraTime?: number | null, extraTimeTrigerIn?: number | null, gapInBetweenVehicles?: number | null, id: string, locationId: string, noOfBids: number, pausedTotalTime?: number | null, pauseDate?: any | null, sellerId: string, startDate: any, status?: string | null, termsAndConditions: string, updatedAt?: any | null, vehicleCategoryId: string, vehicleLiveTimeIn?: number | null } };

export type UpdateEventMutationVariables = Exact<{
  where: EventWhereUniqueInput;
  updateEventInput: UpdateEventInput;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', id: string, eventNo: number, eventCategory: string, startDate: any, endDate: any, pauseDate?: any | null, pausedTotalTime?: number | null, sellerId: string, vehicleCategoryId: string, locationId: string, noOfBids: number, downloadableFile_filename?: string | null, termsAndConditions: string, createdAt?: any | null, updatedAt?: any | null, createdById: string, extraTimeTrigerIn?: number | null, extraTime?: number | null, vehicleLiveTimeIn?: number | null, gapInBetweenVehicles?: number | null, status?: string | null, bidLock?: string | null } };

export type CreateLocationMutationVariables = Exact<{
  createLocationInput: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: { __typename?: 'Location', id: string, name: string, state: string, createdAt?: any | null, updatedAt?: any | null, country?: string | null, createdById?: string | null } };

export type UpdateLocationMutationVariables = Exact<{
  where: LocationWhereUniqueInput;
  updateLocationInput: UpdateLocationInput;
}>;


export type UpdateLocationMutation = { __typename?: 'Mutation', updateLocation: { __typename?: 'Location', id: string, name: string, state: string, createdAt?: any | null, updatedAt?: any | null, country?: string | null, createdById?: string | null } };

export type PaymentQueryVariables = Exact<{
  where: PaymentWhereUniqueInput;
}>;


export type PaymentQuery = { __typename?: 'Query', payment: { __typename?: 'Payment', id: string, refNo?: number | null, amount?: number | null, description?: string | null, status?: string | null, userId?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null, createdById?: string | null, registrationExpire?: any | null, paymentFor?: string | null } };

export type UpdatePaymentMutationVariables = Exact<{
  where: PaymentWhereUniqueInput;
  updatePaymentInput: UpdatePaymentInput;
}>;


export type UpdatePaymentMutation = { __typename?: 'Mutation', updatePayment: { __typename?: 'Payment', id: string, refNo?: number | null, amount?: number | null, description?: string | null, status?: string | null, userId?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null, createdById?: string | null, registrationExpire?: any | null, paymentFor?: string | null } };

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', email: string, username: string, role: string, firstName: string, lastName: string, businessName: string, mobile: string, BalanceEMDAmount?: number | null, pancardNo: string, idProofNo: string, country: string, city: string, userCategory: string, tempToken?: number | null, status: string, state: string, id: string } };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', bidLock?: string | null, id: string, eventNo: number, eventCategory: string, startDate: any, endDate: any, pauseDate?: any | null, pausedTotalTime?: number | null, sellerId: string, vehicleCategoryId: string, locationId: string, noOfBids: number, downloadableFile_filename?: string | null, termsAndConditions: string, createdAt?: any | null, updatedAt?: any | null, createdById: string, extraTimeTrigerIn?: number | null, extraTime?: number | null, vehicleLiveTimeIn?: number | null, gapInBetweenVehicles?: number | null, status?: string | null }> };

export type EventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type EventQuery = { __typename?: 'Query', event: { __typename?: 'Event', id: string, eventNo: number, eventCategory: string, startDate: any, endDate: any, pauseDate?: any | null, pausedTotalTime?: number | null, sellerId: string, vehicleCategoryId: string, locationId: string, noOfBids: number, downloadableFile_filename?: string | null, termsAndConditions: string, createdAt?: any | null, updatedAt?: any | null, createdById: string, extraTimeTrigerIn?: number | null, extraTime?: number | null, vehicleLiveTimeIn?: number | null, gapInBetweenVehicles?: number | null, status?: string | null, bidLock?: string | null } };

export type CreateExceluploadMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  createExceluploadInput: CreateExceluploadInput;
}>;


export type CreateExceluploadMutation = { __typename?: 'Mutation', createExcelupload: { __typename?: 'Excelupload', id: string, name?: string | null, file_filename: string, createdAt?: any | null, updatedAt?: any | null, createdById?: string | null } };

export type SellerQueryVariables = Exact<{
  where: SellerWhereUniqueInput;
}>;


export type SellerQuery = { __typename?: 'Query', seller: { __typename?: 'Seller', name: string, contactPerson?: string | null, GSTNumber: string, billingContactPerson: string, mobile: string, nationalHead: string, logo: string, updatedAt: any, createdAt: any, createdById: string, id: string } };

export type UpdateSellerMutationVariables = Exact<{
  where: SellerWhereUniqueInput;
  updateSellerInput: UpdateSellerInput;
}>;


export type UpdateSellerMutation = { __typename?: 'Mutation', updateSeller: { __typename?: 'Seller', name: string, contactPerson?: string | null, GSTNumber: string, billingContactPerson: string, mobile: string, nationalHead: string, logo: string, createdAt: any, updatedAt: any, createdById: string, id: string } };

export type LocationQueryVariables = Exact<{
  where: LocationWhereUniqueInput;
}>;


export type LocationQuery = { __typename?: 'Query', location: { __typename?: 'Location', id: string, name: string, state: string, createdAt?: any | null, updatedAt?: any | null, country?: string | null, createdById?: string | null } };

export type SendOtpMutationVariables = Exact<{
  sendOtpDto: SendOtpDto;
}>;


export type SendOtpMutation = { __typename?: 'Mutation', sendOtp: { __typename?: 'SendOtpResponse', code: string, status: string, description: string, data?: { __typename?: 'OtpMessageDataDto', messageid: string, totnumber: string, totalcredit: string } | null } };

export type VerifyOtpMutationVariables = Exact<{
  verfiyOtpDto: VerfiyOtpDto;
}>;


export type VerifyOtpMutation = { __typename?: 'Mutation', verifyOtp: { __typename?: 'VerifyOtpResponse', access_token: string, user: { __typename?: 'User', id: string, email: string, role: string, firstName: string } } };

export type PaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymentsQuery = { __typename?: 'Query', payments: Array<{ __typename?: 'Payment', id: string, refNo?: number | null, amount?: number | null, description?: string | null, status?: string | null, userId?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null, createdById?: string | null, registrationExpire?: any | null, paymentFor?: string | null }> };

export type CreatePaymentMutationVariables = Exact<{
  createPaymentInput: CreatePaymentInput;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'Payment', id: string, refNo?: number | null, amount?: number | null, description?: string | null, status?: string | null, userId?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null, createdById?: string | null, registrationExpire?: any | null, paymentFor?: string | null } };

export type UserPaymentsQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserPaymentsQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, payments?: Array<{ __typename?: 'Payment', refNo?: number | null, amount?: number | null, description?: string | null, id: string, status?: string | null, userId?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null, createdById?: string | null, registrationExpire?: any | null, paymentFor?: string | null }> | null } | null };

export type SellersQueryVariables = Exact<{ [key: string]: never; }>;


export type SellersQuery = { __typename?: 'Query', sellers: Array<{ __typename?: 'Seller', id: string, name: string, contactPerson?: string | null, GSTNumber: string, billingContactPerson: string, mobile: string, nationalHead: string, logo: string, createdAt: any, updatedAt: any, createdById: string }> };

export type ViewUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type ViewUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, username: string, role: string, firstName: string, lastName: string, businessName: string, mobile: string, BalanceEMDAmount?: number | null, pancardNo: string, idProofNo: string, country: string, city: string, userCategory: string, status: string, state: string, tempToken?: number | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, role: string, firstName: string, BalanceEMDAmount?: number | null, country: string, city: string, userCategory: string, status: string } | null> };

export type CreateVehiclecategoryMutationVariables = Exact<{
  createVehiclecategoryInput: CreateVehiclecategoryInput;
}>;


export type CreateVehiclecategoryMutation = { __typename?: 'Mutation', createVehiclecategory: { __typename?: 'VehicleCategory', createdAt?: any | null, createdById?: string | null, id: string, name: string, updatedAt?: any | null } };

export type VehicleCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type VehicleCategoriesQuery = { __typename?: 'Query', vehicleCategories: Array<{ __typename?: 'VehicleCategory', createdAt?: any | null, createdById?: string | null, id: string, name: string, updatedAt?: any | null }> };

export type VehicleCategoryQueryVariables = Exact<{
  where: VehicleCategoryWhereUniqueInput;
}>;


export type VehicleCategoryQuery = { __typename?: 'Query', vehicleCategory: { __typename?: 'VehicleCategory', createdAt?: any | null, createdById?: string | null, id: string, name: string, updatedAt?: any | null } };

export type UpdateVehicleCategoryMutationVariables = Exact<{
  where: VehicleCategoryWhereUniqueInput;
  updateVehiclecategoryInput: UpdateVehiclecategoryInput;
}>;


export type UpdateVehicleCategoryMutation = { __typename?: 'Mutation', updateVehicleCategory: { __typename?: 'VehicleCategory', createdAt?: any | null, createdById?: string | null, id: string, name: string, updatedAt?: any | null } };


export const CreateSellerDocument = gql`
    mutation CreateSeller($createSellerInput: CreateSellerInput!) {
  createSeller(createSellerInput: $createSellerInput) {
    name
    contactPerson
    GSTNumber
    billingContactPerson
    mobile
    nationalHead
    logo
  }
}
    `;
export type CreateSellerMutationFn = Apollo.MutationFunction<CreateSellerMutation, CreateSellerMutationVariables>;

/**
 * __useCreateSellerMutation__
 *
 * To run a mutation, you first call `useCreateSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSellerMutation, { data, loading, error }] = useCreateSellerMutation({
 *   variables: {
 *      createSellerInput: // value for 'createSellerInput'
 *   },
 * });
 */
export function useCreateSellerMutation(baseOptions?: Apollo.MutationHookOptions<CreateSellerMutation, CreateSellerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSellerMutation, CreateSellerMutationVariables>(CreateSellerDocument, options);
      }
export type CreateSellerMutationHookResult = ReturnType<typeof useCreateSellerMutation>;
export type CreateSellerMutationResult = Apollo.MutationResult<CreateSellerMutation>;
export type CreateSellerMutationOptions = Apollo.BaseMutationOptions<CreateSellerMutation, CreateSellerMutationVariables>;
export const AddUserDocument = gql`
    mutation AddUser($data: CreateUserInput!) {
  createUser(data: $data) {
    id
    email
    username
    role
    firstName
    lastName
    mobile
    status
    city
    pancardNo
    BalanceEMDAmount
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const LocationsDocument = gql`
    query Locations {
  locations {
    id
    name
    state
    createdAt
    updatedAt
    country
    createdById
  }
}
    `;

/**
 * __useLocationsQuery__
 *
 * To run a query within a React component, call `useLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocationsQuery(baseOptions?: Apollo.QueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, options);
      }
export function useLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, options);
        }
export function useLocationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, options);
        }
export type LocationsQueryHookResult = ReturnType<typeof useLocationsQuery>;
export type LocationsLazyQueryHookResult = ReturnType<typeof useLocationsLazyQuery>;
export type LocationsSuspenseQueryHookResult = ReturnType<typeof useLocationsSuspenseQuery>;
export type LocationsQueryResult = Apollo.QueryResult<LocationsQuery, LocationsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginUserInput!) {
  login(loginInput: $loginInput) {
    user {
      id
      email
      role
      firstName
    }
    access_token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateEventDocument = gql`
    mutation CreateEvent($vehicleCategoryId: String!, $locationId: String!, $createEventInput: CreateEventInput!, $sellerId: String!) {
  createEvent(
    vehicleCategoryId: $vehicleCategoryId
    locationId: $locationId
    createEventInput: $createEventInput
    sellerId: $sellerId
  ) {
    bidLock
    createdAt
    createdById
    downloadableFile_filename
    endDate
    eventCategory
    eventNo
    extraTime
    extraTimeTrigerIn
    gapInBetweenVehicles
    id
    locationId
    noOfBids
    pausedTotalTime
    pauseDate
    sellerId
    startDate
    status
    termsAndConditions
    updatedAt
    vehicleCategoryId
    vehicleLiveTimeIn
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      vehicleCategoryId: // value for 'vehicleCategoryId'
 *      locationId: // value for 'locationId'
 *      createEventInput: // value for 'createEventInput'
 *      sellerId: // value for 'sellerId'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($where: EventWhereUniqueInput!, $updateEventInput: UpdateEventInput!) {
  updateEvent(where: $where, updateEventInput: $updateEventInput) {
    id
    eventNo
    eventCategory
    startDate
    endDate
    pauseDate
    pausedTotalTime
    sellerId
    vehicleCategoryId
    locationId
    noOfBids
    downloadableFile_filename
    termsAndConditions
    createdAt
    updatedAt
    createdById
    extraTimeTrigerIn
    extraTime
    vehicleLiveTimeIn
    gapInBetweenVehicles
    status
    bidLock
  }
}
    `;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      where: // value for 'where'
 *      updateEventInput: // value for 'updateEventInput'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const CreateLocationDocument = gql`
    mutation CreateLocation($createLocationInput: CreateLocationInput!) {
  createLocation(createLocationInput: $createLocationInput) {
    id
    name
    state
    createdAt
    updatedAt
    country
    createdById
  }
}
    `;
export type CreateLocationMutationFn = Apollo.MutationFunction<CreateLocationMutation, CreateLocationMutationVariables>;

/**
 * __useCreateLocationMutation__
 *
 * To run a mutation, you first call `useCreateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLocationMutation, { data, loading, error }] = useCreateLocationMutation({
 *   variables: {
 *      createLocationInput: // value for 'createLocationInput'
 *   },
 * });
 */
export function useCreateLocationMutation(baseOptions?: Apollo.MutationHookOptions<CreateLocationMutation, CreateLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLocationMutation, CreateLocationMutationVariables>(CreateLocationDocument, options);
      }
export type CreateLocationMutationHookResult = ReturnType<typeof useCreateLocationMutation>;
export type CreateLocationMutationResult = Apollo.MutationResult<CreateLocationMutation>;
export type CreateLocationMutationOptions = Apollo.BaseMutationOptions<CreateLocationMutation, CreateLocationMutationVariables>;
export const UpdateLocationDocument = gql`
    mutation UpdateLocation($where: LocationWhereUniqueInput!, $updateLocationInput: UpdateLocationInput!) {
  updateLocation(where: $where, updateLocationInput: $updateLocationInput) {
    id
    name
    state
    createdAt
    updatedAt
    country
    createdById
  }
}
    `;
export type UpdateLocationMutationFn = Apollo.MutationFunction<UpdateLocationMutation, UpdateLocationMutationVariables>;

/**
 * __useUpdateLocationMutation__
 *
 * To run a mutation, you first call `useUpdateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocationMutation, { data, loading, error }] = useUpdateLocationMutation({
 *   variables: {
 *      where: // value for 'where'
 *      updateLocationInput: // value for 'updateLocationInput'
 *   },
 * });
 */
export function useUpdateLocationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLocationMutation, UpdateLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLocationMutation, UpdateLocationMutationVariables>(UpdateLocationDocument, options);
      }
export type UpdateLocationMutationHookResult = ReturnType<typeof useUpdateLocationMutation>;
export type UpdateLocationMutationResult = Apollo.MutationResult<UpdateLocationMutation>;
export type UpdateLocationMutationOptions = Apollo.BaseMutationOptions<UpdateLocationMutation, UpdateLocationMutationVariables>;
export const PaymentDocument = gql`
    query Payment($where: PaymentWhereUniqueInput!) {
  payment(where: $where) {
    id
    refNo
    amount
    description
    status
    userId
    image
    createdAt
    updatedAt
    createdById
    registrationExpire
    paymentFor
  }
}
    `;

/**
 * __usePaymentQuery__
 *
 * To run a query within a React component, call `usePaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePaymentQuery(baseOptions: Apollo.QueryHookOptions<PaymentQuery, PaymentQueryVariables> & ({ variables: PaymentQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentQuery, PaymentQueryVariables>(PaymentDocument, options);
      }
export function usePaymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentQuery, PaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentQuery, PaymentQueryVariables>(PaymentDocument, options);
        }
export function usePaymentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PaymentQuery, PaymentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PaymentQuery, PaymentQueryVariables>(PaymentDocument, options);
        }
export type PaymentQueryHookResult = ReturnType<typeof usePaymentQuery>;
export type PaymentLazyQueryHookResult = ReturnType<typeof usePaymentLazyQuery>;
export type PaymentSuspenseQueryHookResult = ReturnType<typeof usePaymentSuspenseQuery>;
export type PaymentQueryResult = Apollo.QueryResult<PaymentQuery, PaymentQueryVariables>;
export const UpdatePaymentDocument = gql`
    mutation UpdatePayment($where: PaymentWhereUniqueInput!, $updatePaymentInput: UpdatePaymentInput!) {
  updatePayment(where: $where, updatePaymentInput: $updatePaymentInput) {
    id
    refNo
    amount
    description
    status
    userId
    image
    createdAt
    updatedAt
    createdById
    registrationExpire
    paymentFor
  }
}
    `;
export type UpdatePaymentMutationFn = Apollo.MutationFunction<UpdatePaymentMutation, UpdatePaymentMutationVariables>;

/**
 * __useUpdatePaymentMutation__
 *
 * To run a mutation, you first call `useUpdatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePaymentMutation, { data, loading, error }] = useUpdatePaymentMutation({
 *   variables: {
 *      where: // value for 'where'
 *      updatePaymentInput: // value for 'updatePaymentInput'
 *   },
 * });
 */
export function useUpdatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePaymentMutation, UpdatePaymentMutationVariables>(UpdatePaymentDocument, options);
      }
export type UpdatePaymentMutationHookResult = ReturnType<typeof useUpdatePaymentMutation>;
export type UpdatePaymentMutationResult = Apollo.MutationResult<UpdatePaymentMutation>;
export type UpdatePaymentMutationOptions = Apollo.BaseMutationOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UpdateUserInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    email
    username
    role
    firstName
    lastName
    businessName
    mobile
    BalanceEMDAmount
    pancardNo
    idProofNo
    country
    city
    userCategory
    tempToken
    status
    state
    id
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const EventsDocument = gql`
    query Events {
  events {
    bidLock
    id
    eventNo
    eventCategory
    startDate
    endDate
    pauseDate
    pausedTotalTime
    sellerId
    vehicleCategoryId
    locationId
    noOfBids
    downloadableFile_filename
    termsAndConditions
    createdAt
    updatedAt
    createdById
    extraTimeTrigerIn
    extraTime
    vehicleLiveTimeIn
    gapInBetweenVehicles
    status
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export function useEventsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsSuspenseQueryHookResult = ReturnType<typeof useEventsSuspenseQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const EventDocument = gql`
    query Event($where: EventWhereUniqueInput!) {
  event(where: $where) {
    id
    eventNo
    eventCategory
    startDate
    endDate
    pauseDate
    pausedTotalTime
    sellerId
    vehicleCategoryId
    locationId
    noOfBids
    downloadableFile_filename
    termsAndConditions
    createdAt
    updatedAt
    createdById
    extraTimeTrigerIn
    extraTime
    vehicleLiveTimeIn
    gapInBetweenVehicles
    status
    bidLock
  }
}
    `;

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEventQuery(baseOptions: Apollo.QueryHookOptions<EventQuery, EventQueryVariables> & ({ variables: EventQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options);
      }
export function useEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options);
        }
export function useEventSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EventQuery, EventQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EventQuery, EventQueryVariables>(EventDocument, options);
        }
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventSuspenseQueryHookResult = ReturnType<typeof useEventSuspenseQuery>;
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>;
export const CreateExceluploadDocument = gql`
    mutation CreateExcelupload($userId: String!, $eventId: String!, $createExceluploadInput: CreateExceluploadInput!) {
  createExcelupload(
    userId: $userId
    eventId: $eventId
    createExceluploadInput: $createExceluploadInput
  ) {
    id
    name
    file_filename
    createdAt
    updatedAt
    createdById
  }
}
    `;
export type CreateExceluploadMutationFn = Apollo.MutationFunction<CreateExceluploadMutation, CreateExceluploadMutationVariables>;

/**
 * __useCreateExceluploadMutation__
 *
 * To run a mutation, you first call `useCreateExceluploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExceluploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExceluploadMutation, { data, loading, error }] = useCreateExceluploadMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      eventId: // value for 'eventId'
 *      createExceluploadInput: // value for 'createExceluploadInput'
 *   },
 * });
 */
export function useCreateExceluploadMutation(baseOptions?: Apollo.MutationHookOptions<CreateExceluploadMutation, CreateExceluploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExceluploadMutation, CreateExceluploadMutationVariables>(CreateExceluploadDocument, options);
      }
export type CreateExceluploadMutationHookResult = ReturnType<typeof useCreateExceluploadMutation>;
export type CreateExceluploadMutationResult = Apollo.MutationResult<CreateExceluploadMutation>;
export type CreateExceluploadMutationOptions = Apollo.BaseMutationOptions<CreateExceluploadMutation, CreateExceluploadMutationVariables>;
export const SellerDocument = gql`
    query Seller($where: SellerWhereUniqueInput!) {
  seller(where: $where) {
    name
    contactPerson
    GSTNumber
    billingContactPerson
    mobile
    nationalHead
    logo
    updatedAt
    createdAt
    createdById
    id
  }
}
    `;

/**
 * __useSellerQuery__
 *
 * To run a query within a React component, call `useSellerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellerQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSellerQuery(baseOptions: Apollo.QueryHookOptions<SellerQuery, SellerQueryVariables> & ({ variables: SellerQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SellerQuery, SellerQueryVariables>(SellerDocument, options);
      }
export function useSellerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SellerQuery, SellerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SellerQuery, SellerQueryVariables>(SellerDocument, options);
        }
export function useSellerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SellerQuery, SellerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SellerQuery, SellerQueryVariables>(SellerDocument, options);
        }
export type SellerQueryHookResult = ReturnType<typeof useSellerQuery>;
export type SellerLazyQueryHookResult = ReturnType<typeof useSellerLazyQuery>;
export type SellerSuspenseQueryHookResult = ReturnType<typeof useSellerSuspenseQuery>;
export type SellerQueryResult = Apollo.QueryResult<SellerQuery, SellerQueryVariables>;
export const UpdateSellerDocument = gql`
    mutation UpdateSeller($where: SellerWhereUniqueInput!, $updateSellerInput: UpdateSellerInput!) {
  updateSeller(where: $where, updateSellerInput: $updateSellerInput) {
    name
    contactPerson
    GSTNumber
    billingContactPerson
    mobile
    nationalHead
    logo
    createdAt
    updatedAt
    createdById
    id
  }
}
    `;
export type UpdateSellerMutationFn = Apollo.MutationFunction<UpdateSellerMutation, UpdateSellerMutationVariables>;

/**
 * __useUpdateSellerMutation__
 *
 * To run a mutation, you first call `useUpdateSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSellerMutation, { data, loading, error }] = useUpdateSellerMutation({
 *   variables: {
 *      where: // value for 'where'
 *      updateSellerInput: // value for 'updateSellerInput'
 *   },
 * });
 */
export function useUpdateSellerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSellerMutation, UpdateSellerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSellerMutation, UpdateSellerMutationVariables>(UpdateSellerDocument, options);
      }
export type UpdateSellerMutationHookResult = ReturnType<typeof useUpdateSellerMutation>;
export type UpdateSellerMutationResult = Apollo.MutationResult<UpdateSellerMutation>;
export type UpdateSellerMutationOptions = Apollo.BaseMutationOptions<UpdateSellerMutation, UpdateSellerMutationVariables>;
export const LocationDocument = gql`
    query Location($where: LocationWhereUniqueInput!) {
  location(where: $where) {
    id
    name
    state
    createdAt
    updatedAt
    country
    createdById
  }
}
    `;

/**
 * __useLocationQuery__
 *
 * To run a query within a React component, call `useLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useLocationQuery(baseOptions: Apollo.QueryHookOptions<LocationQuery, LocationQueryVariables> & ({ variables: LocationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationQuery, LocationQueryVariables>(LocationDocument, options);
      }
export function useLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationQuery, LocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationQuery, LocationQueryVariables>(LocationDocument, options);
        }
export function useLocationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LocationQuery, LocationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LocationQuery, LocationQueryVariables>(LocationDocument, options);
        }
export type LocationQueryHookResult = ReturnType<typeof useLocationQuery>;
export type LocationLazyQueryHookResult = ReturnType<typeof useLocationLazyQuery>;
export type LocationSuspenseQueryHookResult = ReturnType<typeof useLocationSuspenseQuery>;
export type LocationQueryResult = Apollo.QueryResult<LocationQuery, LocationQueryVariables>;
export const SendOtpDocument = gql`
    mutation SendOtp($sendOtpDto: SendOtpDto!) {
  sendOtp(sendOtpDto: $sendOtpDto) {
    code
    status
    description
    data {
      messageid
      totnumber
      totalcredit
    }
  }
}
    `;
export type SendOtpMutationFn = Apollo.MutationFunction<SendOtpMutation, SendOtpMutationVariables>;

/**
 * __useSendOtpMutation__
 *
 * To run a mutation, you first call `useSendOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendOtpMutation, { data, loading, error }] = useSendOtpMutation({
 *   variables: {
 *      sendOtpDto: // value for 'sendOtpDto'
 *   },
 * });
 */
export function useSendOtpMutation(baseOptions?: Apollo.MutationHookOptions<SendOtpMutation, SendOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendOtpMutation, SendOtpMutationVariables>(SendOtpDocument, options);
      }
export type SendOtpMutationHookResult = ReturnType<typeof useSendOtpMutation>;
export type SendOtpMutationResult = Apollo.MutationResult<SendOtpMutation>;
export type SendOtpMutationOptions = Apollo.BaseMutationOptions<SendOtpMutation, SendOtpMutationVariables>;
export const VerifyOtpDocument = gql`
    mutation VerifyOtp($verfiyOtpDto: VerfiyOtpDto!) {
  verifyOtp(verfiyOtpDto: $verfiyOtpDto) {
    access_token
    user {
      id
      email
      role
      firstName
    }
  }
}
    `;
export type VerifyOtpMutationFn = Apollo.MutationFunction<VerifyOtpMutation, VerifyOtpMutationVariables>;

/**
 * __useVerifyOtpMutation__
 *
 * To run a mutation, you first call `useVerifyOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyOtpMutation, { data, loading, error }] = useVerifyOtpMutation({
 *   variables: {
 *      verfiyOtpDto: // value for 'verfiyOtpDto'
 *   },
 * });
 */
export function useVerifyOtpMutation(baseOptions?: Apollo.MutationHookOptions<VerifyOtpMutation, VerifyOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyOtpMutation, VerifyOtpMutationVariables>(VerifyOtpDocument, options);
      }
export type VerifyOtpMutationHookResult = ReturnType<typeof useVerifyOtpMutation>;
export type VerifyOtpMutationResult = Apollo.MutationResult<VerifyOtpMutation>;
export type VerifyOtpMutationOptions = Apollo.BaseMutationOptions<VerifyOtpMutation, VerifyOtpMutationVariables>;
export const PaymentsDocument = gql`
    query Payments {
  payments {
    id
    refNo
    amount
    description
    status
    userId
    image
    createdAt
    updatedAt
    createdById
    registrationExpire
    paymentFor
  }
}
    `;

/**
 * __usePaymentsQuery__
 *
 * To run a query within a React component, call `usePaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentsQuery(baseOptions?: Apollo.QueryHookOptions<PaymentsQuery, PaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentsQuery, PaymentsQueryVariables>(PaymentsDocument, options);
      }
export function usePaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentsQuery, PaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentsQuery, PaymentsQueryVariables>(PaymentsDocument, options);
        }
export function usePaymentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PaymentsQuery, PaymentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PaymentsQuery, PaymentsQueryVariables>(PaymentsDocument, options);
        }
export type PaymentsQueryHookResult = ReturnType<typeof usePaymentsQuery>;
export type PaymentsLazyQueryHookResult = ReturnType<typeof usePaymentsLazyQuery>;
export type PaymentsSuspenseQueryHookResult = ReturnType<typeof usePaymentsSuspenseQuery>;
export type PaymentsQueryResult = Apollo.QueryResult<PaymentsQuery, PaymentsQueryVariables>;
export const CreatePaymentDocument = gql`
    mutation CreatePayment($createPaymentInput: CreatePaymentInput!, $userId: String) {
  createPayment(createPaymentInput: $createPaymentInput, userId: $userId) {
    id
    refNo
    amount
    description
    status
    userId
    image
    createdAt
    updatedAt
    createdById
    registrationExpire
    paymentFor
  }
}
    `;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      createPaymentInput: // value for 'createPaymentInput'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, options);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const UserPaymentsDocument = gql`
    query UserPayments($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    payments {
      refNo
      amount
      description
      id
      status
      userId
      image
      createdAt
      updatedAt
      createdById
      registrationExpire
      paymentFor
    }
  }
}
    `;

/**
 * __useUserPaymentsQuery__
 *
 * To run a query within a React component, call `useUserPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPaymentsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserPaymentsQuery(baseOptions: Apollo.QueryHookOptions<UserPaymentsQuery, UserPaymentsQueryVariables> & ({ variables: UserPaymentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPaymentsQuery, UserPaymentsQueryVariables>(UserPaymentsDocument, options);
      }
export function useUserPaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPaymentsQuery, UserPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPaymentsQuery, UserPaymentsQueryVariables>(UserPaymentsDocument, options);
        }
export function useUserPaymentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserPaymentsQuery, UserPaymentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserPaymentsQuery, UserPaymentsQueryVariables>(UserPaymentsDocument, options);
        }
export type UserPaymentsQueryHookResult = ReturnType<typeof useUserPaymentsQuery>;
export type UserPaymentsLazyQueryHookResult = ReturnType<typeof useUserPaymentsLazyQuery>;
export type UserPaymentsSuspenseQueryHookResult = ReturnType<typeof useUserPaymentsSuspenseQuery>;
export type UserPaymentsQueryResult = Apollo.QueryResult<UserPaymentsQuery, UserPaymentsQueryVariables>;
export const SellersDocument = gql`
    query Sellers {
  sellers {
    id
    name
    contactPerson
    GSTNumber
    billingContactPerson
    mobile
    nationalHead
    logo
    createdAt
    updatedAt
    createdById
  }
}
    `;

/**
 * __useSellersQuery__
 *
 * To run a query within a React component, call `useSellersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSellersQuery(baseOptions?: Apollo.QueryHookOptions<SellersQuery, SellersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SellersQuery, SellersQueryVariables>(SellersDocument, options);
      }
export function useSellersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SellersQuery, SellersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SellersQuery, SellersQueryVariables>(SellersDocument, options);
        }
export function useSellersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SellersQuery, SellersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SellersQuery, SellersQueryVariables>(SellersDocument, options);
        }
export type SellersQueryHookResult = ReturnType<typeof useSellersQuery>;
export type SellersLazyQueryHookResult = ReturnType<typeof useSellersLazyQuery>;
export type SellersSuspenseQueryHookResult = ReturnType<typeof useSellersSuspenseQuery>;
export type SellersQueryResult = Apollo.QueryResult<SellersQuery, SellersQueryVariables>;
export const ViewUserDocument = gql`
    query viewUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    email
    username
    role
    firstName
    lastName
    businessName
    mobile
    BalanceEMDAmount
    pancardNo
    idProofNo
    country
    city
    userCategory
    status
    state
    tempToken
  }
}
    `;

/**
 * __useViewUserQuery__
 *
 * To run a query within a React component, call `useViewUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useViewUserQuery(baseOptions: Apollo.QueryHookOptions<ViewUserQuery, ViewUserQueryVariables> & ({ variables: ViewUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewUserQuery, ViewUserQueryVariables>(ViewUserDocument, options);
      }
export function useViewUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewUserQuery, ViewUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewUserQuery, ViewUserQueryVariables>(ViewUserDocument, options);
        }
export function useViewUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ViewUserQuery, ViewUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ViewUserQuery, ViewUserQueryVariables>(ViewUserDocument, options);
        }
export type ViewUserQueryHookResult = ReturnType<typeof useViewUserQuery>;
export type ViewUserLazyQueryHookResult = ReturnType<typeof useViewUserLazyQuery>;
export type ViewUserSuspenseQueryHookResult = ReturnType<typeof useViewUserSuspenseQuery>;
export type ViewUserQueryResult = Apollo.QueryResult<ViewUserQuery, ViewUserQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    email
    role
    firstName
    BalanceEMDAmount
    country
    city
    userCategory
    status
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export function useUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CreateVehiclecategoryDocument = gql`
    mutation CreateVehiclecategory($createVehiclecategoryInput: CreateVehiclecategoryInput!) {
  createVehiclecategory(createVehiclecategoryInput: $createVehiclecategoryInput) {
    createdAt
    createdById
    id
    name
    updatedAt
  }
}
    `;
export type CreateVehiclecategoryMutationFn = Apollo.MutationFunction<CreateVehiclecategoryMutation, CreateVehiclecategoryMutationVariables>;

/**
 * __useCreateVehiclecategoryMutation__
 *
 * To run a mutation, you first call `useCreateVehiclecategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVehiclecategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVehiclecategoryMutation, { data, loading, error }] = useCreateVehiclecategoryMutation({
 *   variables: {
 *      createVehiclecategoryInput: // value for 'createVehiclecategoryInput'
 *   },
 * });
 */
export function useCreateVehiclecategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateVehiclecategoryMutation, CreateVehiclecategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVehiclecategoryMutation, CreateVehiclecategoryMutationVariables>(CreateVehiclecategoryDocument, options);
      }
export type CreateVehiclecategoryMutationHookResult = ReturnType<typeof useCreateVehiclecategoryMutation>;
export type CreateVehiclecategoryMutationResult = Apollo.MutationResult<CreateVehiclecategoryMutation>;
export type CreateVehiclecategoryMutationOptions = Apollo.BaseMutationOptions<CreateVehiclecategoryMutation, CreateVehiclecategoryMutationVariables>;
export const VehicleCategoriesDocument = gql`
    query VehicleCategories {
  vehicleCategories {
    createdAt
    createdById
    id
    name
    updatedAt
  }
}
    `;

/**
 * __useVehicleCategoriesQuery__
 *
 * To run a query within a React component, call `useVehicleCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useVehicleCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<VehicleCategoriesQuery, VehicleCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehicleCategoriesQuery, VehicleCategoriesQueryVariables>(VehicleCategoriesDocument, options);
      }
export function useVehicleCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehicleCategoriesQuery, VehicleCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehicleCategoriesQuery, VehicleCategoriesQueryVariables>(VehicleCategoriesDocument, options);
        }
export function useVehicleCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehicleCategoriesQuery, VehicleCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VehicleCategoriesQuery, VehicleCategoriesQueryVariables>(VehicleCategoriesDocument, options);
        }
export type VehicleCategoriesQueryHookResult = ReturnType<typeof useVehicleCategoriesQuery>;
export type VehicleCategoriesLazyQueryHookResult = ReturnType<typeof useVehicleCategoriesLazyQuery>;
export type VehicleCategoriesSuspenseQueryHookResult = ReturnType<typeof useVehicleCategoriesSuspenseQuery>;
export type VehicleCategoriesQueryResult = Apollo.QueryResult<VehicleCategoriesQuery, VehicleCategoriesQueryVariables>;
export const VehicleCategoryDocument = gql`
    query VehicleCategory($where: VehicleCategoryWhereUniqueInput!) {
  vehicleCategory(where: $where) {
    createdAt
    createdById
    id
    name
    updatedAt
  }
}
    `;

/**
 * __useVehicleCategoryQuery__
 *
 * To run a query within a React component, call `useVehicleCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVehicleCategoryQuery(baseOptions: Apollo.QueryHookOptions<VehicleCategoryQuery, VehicleCategoryQueryVariables> & ({ variables: VehicleCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehicleCategoryQuery, VehicleCategoryQueryVariables>(VehicleCategoryDocument, options);
      }
export function useVehicleCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehicleCategoryQuery, VehicleCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehicleCategoryQuery, VehicleCategoryQueryVariables>(VehicleCategoryDocument, options);
        }
export function useVehicleCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehicleCategoryQuery, VehicleCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VehicleCategoryQuery, VehicleCategoryQueryVariables>(VehicleCategoryDocument, options);
        }
export type VehicleCategoryQueryHookResult = ReturnType<typeof useVehicleCategoryQuery>;
export type VehicleCategoryLazyQueryHookResult = ReturnType<typeof useVehicleCategoryLazyQuery>;
export type VehicleCategorySuspenseQueryHookResult = ReturnType<typeof useVehicleCategorySuspenseQuery>;
export type VehicleCategoryQueryResult = Apollo.QueryResult<VehicleCategoryQuery, VehicleCategoryQueryVariables>;
export const UpdateVehicleCategoryDocument = gql`
    mutation UpdateVehicleCategory($where: VehicleCategoryWhereUniqueInput!, $updateVehiclecategoryInput: UpdateVehiclecategoryInput!) {
  updateVehicleCategory(
    where: $where
    updateVehiclecategoryInput: $updateVehiclecategoryInput
  ) {
    createdAt
    createdById
    id
    name
    updatedAt
  }
}
    `;
export type UpdateVehicleCategoryMutationFn = Apollo.MutationFunction<UpdateVehicleCategoryMutation, UpdateVehicleCategoryMutationVariables>;

/**
 * __useUpdateVehicleCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateVehicleCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVehicleCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVehicleCategoryMutation, { data, loading, error }] = useUpdateVehicleCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *      updateVehiclecategoryInput: // value for 'updateVehiclecategoryInput'
 *   },
 * });
 */
export function useUpdateVehicleCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVehicleCategoryMutation, UpdateVehicleCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVehicleCategoryMutation, UpdateVehicleCategoryMutationVariables>(UpdateVehicleCategoryDocument, options);
      }
export type UpdateVehicleCategoryMutationHookResult = ReturnType<typeof useUpdateVehicleCategoryMutation>;
export type UpdateVehicleCategoryMutationResult = Apollo.MutationResult<UpdateVehicleCategoryMutation>;
export type UpdateVehicleCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateVehicleCategoryMutation, UpdateVehicleCategoryMutationVariables>;