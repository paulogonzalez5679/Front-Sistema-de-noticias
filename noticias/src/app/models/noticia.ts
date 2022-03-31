export class noticia{
  _id?:String;
  created_at: String;
  title?: String;
  url?: String;
  author?: String;
  points?: String;
  story_text?: String;
  comment_text?: String;
  num_comments?: String;
  story_id?: number;
  story_title?: String;
  story_url?: String;
  parent_id?: Number;
  created_at_i?: Number;

  constructor(created_at: String, title?: String, url?: String, autor?:string, points?: String,
    story_text?: String, comment_text?: String, num_comments?: String, story_id?: number,
    story_title?: String, story_url?: String, parent_id?: Number, created_at_i?: Number, _id?:String)
  {
    this.created_at= created_at;
    this.title= title;
    this.url= url;
    this.author= autor;
    this.points= points;
    this.story_text= story_text;
    this.comment_text= comment_text;
    this.num_comments= num_comments;
    this.story_id= story_id;
    this.story_title= story_title;
    this.story_url= story_url;
    this.parent_id= parent_id;
    this.created_at_i= created_at_i;
    this._id= _id;
  }
}
