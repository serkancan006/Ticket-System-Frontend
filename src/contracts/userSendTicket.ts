export interface UserSendTicket {
  subject: string;
  description: string;

  //files: File[] | null; // Dosyaların başlangıçta null olabileceğini belirtin
}

export const initialUserSendTicket: UserSendTicket = {
  subject: '',
  description: '',

  // files: null,
};
