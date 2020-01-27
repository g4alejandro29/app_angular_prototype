export class Comment {
  public id: number;
  public postId: number;
  public name: string;
  public email: string;
  public body: string;

  constructor(
    private cId: number,
    private cPostId: number,
    private cName: string,
    private cEmail: string,
    private cBody: string
  ) {
    this.id = this.cId;
    this.postId = this.cPostId;
    this.name = this.cName;
    this.email = this.cEmail;
    this.body = this.cBody;
  }
}
