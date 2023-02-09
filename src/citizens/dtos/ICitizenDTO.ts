export default interface IUser {
  _id?: any;
  fullName: string;
  gender: string;
  address: string;
  phone: string;
  wardId: {
    _id?: any;
    name: string;
    lgaId: string;
  };
}
