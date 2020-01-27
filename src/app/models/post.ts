export class Post {
  public id: number;
  public userId: number;
  public title: string;
  public body: string;

  constructor(
    private cId: number,
    private cUserId: number,
    private cTitle: string,
    private cBody: string
  ) {
    this.id = this.cId;
    this.userId = this.cUserId;
    this.title = this.cTitle;
    this.body = this.cBody;
  }
}
